#!/usr/bin/env node

/**
 * Auto-Sync Resume with Google Drive PDF
 *
 * Renders the production-ready resume into a high-fidelity PDF matching the
 * site's print styling, Space Mono fonts, and Tinker rainbow accents, then
 * synchronizes it directly to a Google Drive PDF file via the Google Drive API.
 *
 * Usage:
 *   node scripts/sync-resume-gdrive.mjs [options]
 *
 * Options:
 *   --pdf-only        Only generate the local PDF file without uploading to Google Drive
 *   --dry-run         Validate credentials and permissions without uploading
 *   --out <path>      Custom local output path for the PDF (default: public/Tyler_Lindow_Resume.pdf)
 *   --file-id <id>    Target Google Drive File ID to overwrite in-place
 *   --folder-id <id>  Target Google Drive Folder ID if creating a new file
 *   --url <url>       Custom URL to render (default: static site preview / http://localhost:3000)
 */

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { google } from "googleapis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(projectRoot, "..");

// Load environment variables from .env.local, .env, or parent directory
dotenv.config({ path: path.join(projectRoot, ".env.local") });
dotenv.config({ path: path.join(projectRoot, ".env") });
dotenv.config({ path: path.join(repoRoot, ".env") });

/**
 * Parses CLI arguments into an options object.
 */
function parseCliArgs() {
  const args = process.argv.slice(2);
  const options = {
    pdfOnly: false,
    dryRun: false,
    outPath: path.join(projectRoot, "public", "Tyler_Lindow_Resume.pdf"),
    fileId: process.env.GDRIVE_FILE_ID || "",
    folderId: process.env.GDRIVE_FOLDER_ID || "",
    targetUrl: process.env.RESUME_URL || "",
    pdfFileName: process.env.RESUME_PDF_NAME || "Tyler_Lindow_Resume.pdf",
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--pdf-only") {
      options.pdfOnly = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--out" && args[i + 1]) {
      options.outPath = path.resolve(process.cwd(), args[++i]);
    } else if (arg === "--file-id" && args[i + 1]) {
      options.fileId = args[++i];
    } else if (arg === "--folder-id" && args[i + 1]) {
      options.folderId = args[++i];
    } else if (arg === "--url" && args[i + 1]) {
      options.targetUrl = args[++i];
    }
  }

  return options;
}

/**
 * Starts a minimal static HTTP file server for site/out if no live URL is provided.
 */
function startStaticServer(outDir) {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
    ".txt": "text/plain",
  };

  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        let reqPath = decodeURI(req.url.split("?")[0]);
        if (reqPath === "/" || reqPath === "") {
          reqPath = "/index.html";
        }

        let filePath = path.join(outDir, reqPath);

        // Check if directory or file exists
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        } else if (!fs.existsSync(filePath) && fs.existsSync(`${filePath}.html`)) {
          filePath = `${filePath}.html`;
        }

        if (!fs.existsSync(filePath)) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not found");
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": contentType });
        fs.createReadStream(filePath).pipe(res);
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Server Error: ${err.message}`);
      }
    });

    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      resolve({
        server,
        url: `http://127.0.0.1:${port}`,
        close: () => new Promise((cb) => server.close(cb)),
      });
    });

    server.on("error", reject);
  });
}

/**
 * Generates a high-fidelity PDF from the resume web page using Puppeteer.
 */
export async function generateResumePDF(options = {}) {
  const outPath = options.outPath || path.join(projectRoot, "public", "Tyler_Lindow_Resume.pdf");
  let targetUrl = options.targetUrl;
  let staticServer = null;

  console.log("📄 Step 1: Initializing PDF generator...");

  // If no URL is provided, try to serve static out directory
  if (!targetUrl) {
    const outDir = path.join(projectRoot, "out");
    if (fs.existsSync(outDir) && fs.existsSync(path.join(outDir, "resume.html"))) {
      console.log(`📦 Serving static build from ${outDir}...`);
      staticServer = await startStaticServer(outDir);
      targetUrl = `${staticServer.url}/resume.html`;
    } else {
      targetUrl = "http://localhost:3000/resume";
      console.log(`ℹ️  Using default URL: ${targetUrl}`);
    }
  }

  console.log(`🌐 Navigating to ${targetUrl} with headless Chromium...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--font-render-hinting=none",
    ],
  });

  try {
    const page = await browser.newPage();

    // Set viewport to standard desktop print width
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    // Navigate to resume page
    await page.goto(targetUrl, {
      waitUntil: ["networkidle0", "domcontentloaded"],
      timeout: 45000,
    });

    // Ensure all fonts are completely loaded
    await page.evaluateHandle("document.fonts.ready");

    // Give subtle animations / client hydration 350ms to settle
    await new Promise((r) => setTimeout(r, 350));

    // Emulate print media for exact CSS styling
    await page.emulateMediaType("print");

    // Generate print-accurate PDF
    const pdfBuffer = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: {
        top: "0.6in",
        bottom: "0.6in",
        left: "0.6in",
        right: "0.6in",
      },
      preferCSSPageSize: true,
    });

    // Ensure output directory exists and write file
    const dir = path.dirname(outPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outPath, pdfBuffer);

    console.log(`✅ Resume PDF successfully generated: ${outPath} (${(pdfBuffer.length / 1024).toFixed(1)} KB)`);

    return {
      pdfBuffer,
      outPath,
      sizeBytes: pdfBuffer.length,
    };
  } finally {
    await browser.close();
    if (staticServer) {
      await staticServer.close();
    }
  }
}

/**
 * Initializes and returns an authenticated Google Drive v3 client.
 */
export async function getGoogleDriveClient() {
  const serviceAccountKeyRaw = process.env.GDRIVE_SERVICE_ACCOUNT_KEY;
  const credentialsFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const clientId = process.env.GDRIVE_CLIENT_ID;
  const clientSecret = process.env.GDRIVE_CLIENT_SECRET;
  const refreshToken = process.env.GDRIVE_REFRESH_TOKEN;

  // 1. Check Service Account Key (JSON string or base64 string)
  if (serviceAccountKeyRaw) {
    let creds;
    try {
      if (serviceAccountKeyRaw.trim().startsWith("{")) {
        creds = JSON.parse(serviceAccountKeyRaw);
      } else {
        const decoded = Buffer.from(serviceAccountKeyRaw, "base64").toString("utf-8");
        creds = JSON.parse(decoded);
      }
    } catch (e) {
      throw new Error(`Failed to parse GDRIVE_SERVICE_ACCOUNT_KEY JSON: ${e.message}`);
    }

    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"],
    });

    return google.drive({ version: "v3", auth });
  }

  // 2. Check Service Account credentials file path
  if (credentialsFilePath && fs.existsSync(credentialsFilePath)) {
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsFilePath,
      scopes: ["https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"],
    });

    return google.drive({ version: "v3", auth });
  }

  // 3. Check OAuth2 user credentials fallback
  if (clientId && clientSecret && refreshToken) {
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    return google.drive({ version: "v3", auth: oauth2Client });
  }

  throw new Error(
    "Missing Google Drive credentials.\n" +
      "Please provide GDRIVE_SERVICE_ACCOUNT_KEY (Service Account JSON),\n" +
      "or GOOGLE_APPLICATION_CREDENTIALS (file path),\n" +
      "or GDRIVE_CLIENT_ID + GDRIVE_CLIENT_SECRET + GDRIVE_REFRESH_TOKEN.\n" +
      "See site/docs/GOOGLE_DRIVE_SYNC_SETUP.md for complete configuration instructions."
  );
}

/**
 * Synchronizes the generated PDF buffer with Google Drive.
 */
export async function syncPDFToGoogleDrive(pdfBuffer, options = {}) {
  const fileId = options.fileId || process.env.GDRIVE_FILE_ID;
  const folderId = options.folderId || process.env.GDRIVE_FOLDER_ID;
  const pdfFileName = options.pdfFileName || process.env.RESUME_PDF_NAME || "Tyler_Lindow_Resume.pdf";
  const dryRun = !!options.dryRun;

  console.log("☁️  Step 2: Connecting to Google Drive API...");
  const drive = await getGoogleDriveClient();

  if (dryRun) {
    console.log("🔍 Dry run enabled: Verifying credentials and target access...");
    const about = await drive.about.get({ fields: "user" });
    console.log(`✅ Authenticated successfully as: ${about.data.user?.displayName || "Service Account"}`);
    if (fileId) {
      const existing = await drive.files.get({ fileId, fields: "id, name, mimeType, webViewLink" });
      console.log(`✅ Target file verified: "${existing.data.name}" (${existing.data.id})`);
    }
    console.log("✨ Dry run completed successfully. No remote files modified.");
    return { dryRun: true };
  }

  // If a specific File ID is provided, update in-place
  if (fileId) {
    console.log(`🔄 Updating existing Google Drive file in-place (ID: ${fileId})...`);

    const res = await drive.files.update({
      fileId,
      media: {
        mimeType: "application/pdf",
        body: Readable.from(pdfBuffer),
      },
      fields: "id, name, webViewLink, modifiedTime",
    });

    console.log("🎉 Successfully synchronized resume PDF with Google Drive!");
    console.log(`📁 File Name: ${res.data.name}`);
    console.log(`🆔 File ID:   ${res.data.id}`);
    console.log(`🔗 Web Link:  ${res.data.webViewLink}`);
    console.log(`⏱️  Updated:   ${res.data.modifiedTime}`);

    return res.data;
  }

  // Otherwise, search if a file with the target name already exists in the folder
  console.log(`🔍 No File ID specified. Searching for existing "${pdfFileName}" in Google Drive...`);
  let query = `name = '${pdfFileName}' and trashed = false and mimeType = 'application/pdf'`;
  if (folderId) {
    query += ` and '${folderId}' in parents`;
  }

  const listRes = await drive.files.list({
    q: query,
    fields: "files(id, name, webViewLink)",
    pageSize: 1,
  });

  const existingFile = listRes.data.files && listRes.data.files[0];

  if (existingFile) {
    console.log(`🔄 Found existing file "${existingFile.name}" (ID: ${existingFile.id}). Updating in-place...`);

    const res = await drive.files.update({
      fileId: existingFile.id,
      media: {
        mimeType: "application/pdf",
        body: Readable.from(pdfBuffer),
      },
      fields: "id, name, webViewLink, modifiedTime",
    });

    console.log("🎉 Successfully synchronized resume PDF with Google Drive!");
    console.log(`📁 File Name: ${res.data.name}`);
    console.log(`🆔 File ID:   ${res.data.id}`);
    console.log(`🔗 Web Link:  ${res.data.webViewLink}`);
    return res.data;
  }

  // Create new file
  console.log(`📤 Creating new file "${pdfFileName}" in Google Drive...`);
  const createRes = await drive.files.create({
    requestBody: {
      name: pdfFileName,
      mimeType: "application/pdf",
      parents: folderId ? [folderId] : undefined,
    },
    media: {
      mimeType: "application/pdf",
      body: Readable.from(pdfBuffer),
    },
    fields: "id, name, webViewLink, modifiedTime",
  });

  console.log("🎉 Successfully created and uploaded resume PDF to Google Drive!");
  console.log(`📁 File Name: ${createRes.data.name}`);
  console.log(`🆔 File ID:   ${createRes.data.id}`);
  console.log(`🔗 Web Link:  ${createRes.data.webViewLink}`);
  console.log("💡 Tip: Save this File ID into your GDRIVE_FILE_ID secret for instant in-place updates in the future.");

  return createRes.data;
}

/**
 * Main orchestration function
 */
export async function syncResumeToGoogleDrive(options = {}) {
  const opts = { ...parseCliArgs(), ...options };

  // 1. Generate PDF
  const { pdfBuffer, outPath } = await generateResumePDF(opts);

  // 2. If PDF-only, exit here
  if (opts.pdfOnly) {
    console.log("🏁 --pdf-only flag provided. Skipping Google Drive upload.");
    return { outPath, uploaded: false };
  }

  // 3. Sync to Google Drive
  try {
    const driveResult = await syncPDFToGoogleDrive(pdfBuffer, opts);
    return { outPath, uploaded: true, driveResult };
  } catch (err) {
    if (process.env.GITHUB_ACTIONS && !process.env.GDRIVE_SERVICE_ACCOUNT_KEY) {
      console.warn("⚠️  GDRIVE_SERVICE_ACCOUNT_KEY secret is not set in GitHub repository settings.");
      console.warn("⚠️  Skipping Google Drive upload without failing the CI deployment.");
      console.warn("📖 See site/docs/GOOGLE_DRIVE_SYNC_SETUP.md for setup instructions.");
      return { outPath, uploaded: false, skipped: true };
    }
    throw err;
  }
}

// Run CLI directly if executed from command line
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncResumeToGoogleDrive()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("\n❌ Resume Sync Error:", err.message);
      process.exit(1);
    });
}
