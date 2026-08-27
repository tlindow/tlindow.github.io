#!/usr/bin/env node

/**
 * Export & Sync Resume as Google Doc
 *
 * Converts the single-source-of-truth Markdown resume (`content/resume.md`) into
 * an elegant, semantic Google Docs-ready document and synchronizes it directly
 * with Google Drive as a native editable Google Doc (`application/vnd.google-apps.document`).
 *
 * Usage:
 *   node scripts/export-resume-gdoc.mjs [options]
 *
 * Options:
 *   --local-only      Only generate local Google Doc-ready HTML/MD files in public/
 *   --dry-run         Validate credentials and target permissions without modifying files
 *   --file-id <id>    Target Google Doc File ID to overwrite in-place (preserves share URLs)
 *   --folder-id <id>  Target Google Drive Folder ID if creating a new file
 *   --name <name>     Custom name for Google Doc (default: "Tyler Lindow - Resume")
 */

import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { google } from "googleapis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(projectRoot, "..");

// Load environment variables
dotenv.config({ path: path.join(projectRoot, ".env.local") });
dotenv.config({ path: path.join(projectRoot, ".env") });
dotenv.config({ path: path.join(repoRoot, ".env") });

/**
 * Parses CLI arguments into an options object.
 */
function parseCliArgs() {
  const args = process.argv.slice(2);
  const options = {
    localOnly: false,
    dryRun: false,
    docName: process.env.GDRIVE_DOC_NAME || "Tyler Lindow - Resume",
    fileId: process.env.GDRIVE_DOC_ID || process.env.GDRIVE_FILE_ID || "",
    folderId: process.env.GDRIVE_FOLDER_ID || "",
    outHtml: path.join(projectRoot, "public", "Tyler_Lindow_Resume_GoogleDoc.html"),
    outMd: path.join(projectRoot, "public", "Tyler_Lindow_Resume.md"),
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--local-only") {
      options.localOnly = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--file-id" && args[i + 1]) {
      options.fileId = args[++i];
    } else if (arg === "--folder-id" && args[i + 1]) {
      options.folderId = args[++i];
    } else if (arg === "--name" && args[i + 1]) {
      options.docName = args[++i];
    }
  }

  return options;
}

/**
 * Loads the source resume markdown file.
 */
function loadResumeMarkdown() {
  const searchPaths = [
    path.join(repoRoot, "content", "resume.md"),
    path.join(projectRoot, "content", "resume.md"),
    path.join(repoRoot, "resume.md"),
  ];

  for (const p of searchPaths) {
    if (fs.existsSync(p)) {
      return fs.readFileSync(p, "utf-8");
    }
  }

  throw new Error("Could not find resume.md source file in content/ or repository root.");
}

/**
 * Converts Markdown content into clean, Google Docs optimized HTML.
 */
function convertToGoogleDocHtml(markdown) {
  const lines = markdown.split("\n");
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Tyler Lindow - Resume</title>
<style>
  @page {
    size: letter portrait;
    margin: 0.6in;
  }
  body {
    font-family: 'Space Mono', 'Courier New', Courier, monospace;
    font-size: 10pt;
    line-height: 1.45;
    color: #1F1D1A;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 24pt;
    font-weight: 700;
    margin: 0 0 4pt 0;
    color: #1F1D1A;
    letter-spacing: -0.5px;
  }
  .title {
    font-size: 11.5pt;
    font-weight: 700;
    color: #4F46E5;
    margin: 0 0 6pt 0;
  }
  .contact-bar {
    font-size: 9pt;
    color: #736E67;
    margin: 0 0 4pt 0;
    line-height: 1.5;
  }
  .contact-bar a {
    color: #4F46E5;
    text-decoration: underline;
  }
  .rainbow-bar {
    width: 100%;
    height: 3px;
    margin: 10pt 0 12pt 0;
    display: block;
  }
  h2 {
    font-size: 13pt;
    font-weight: 700;
    color: #1F1D1A;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 12pt 0 6pt 0;
  }
  h3 {
    font-size: 11pt;
    font-weight: 700;
    color: #1F1D1A;
    margin: 10pt 0 2pt 0;
  }
  .role-highlight {
    color: #4F46E5;
    font-weight: 700;
  }
  .meta-subtext {
    font-size: 9pt;
    font-style: italic;
    color: #736E67;
    margin: 0 0 4pt 0;
  }
  p {
    margin: 0 0 6pt 0;
  }
  ul {
    margin: 3pt 0 10pt 0;
    padding-left: 18pt;
  }
  li {
    margin-bottom: 4pt;
    font-size: 9.5pt;
    line-height: 1.4;
  }
  strong {
    font-weight: 700;
    color: #1F1D1A;
  }
  .bullet-dot {
    color: #4F46E5;
    font-weight: 700;
  }
</style>
</head>
<body>
`;

  const rainbowSvgDataUri =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDgwMCA0Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InJhaW5ib3ciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNEY0NkU1Ii8+PHN0b3Agb2Zmc2V0PSIyNSUiIHN0b3AtY29sb3I9IiNBNUI0RkMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzdERDNGRyIvPjxzdG9wIG9mZnNldD0iNzUlIiBzdG9wLWNvbG9yPSIjNkVFN0I3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkRCQTc0Ii8+PC9saW5lYXJHYXJkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0IiByeD0iMiIgZmlsbD0idXJsKCNyYWluYm93KSIvPjwvc3ZnPg==";

  let inList = false;
  let isHeader = true;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      if (inList) {
        html += `</ul>\n`;
        inList = false;
      }
      continue;
    }

    if (line.startsWith("# ")) {
      const name = line.replace(/^#\s+/, "").trim();
      html += `<h1>${name}</h1>\n`;
    } else if (line.startsWith("**") && line.endsWith("**") && isHeader) {
      const title = line.replace(/^\*\*|\*\*$/g, "").trim();
      html += `<div class="title">${title}</div>\n`;
    } else if (isHeader && (line.includes("@") || line.includes("linkedin.com") || line.includes("San Diego"))) {
      const formattedLine = line
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/\s\|\s/g, ' &nbsp;|&nbsp; ');
      html += `<div class="contact-bar">${formattedLine}</div>\n`;
    } else if (line.startsWith("---")) {
      isHeader = false;
      if (inList) {
        html += `</ul>\n`;
        inList = false;
      }
      html += `<div><img class="rainbow-bar" src="${rainbowSvgDataUri}" alt="divider" style="width: 100%; height: 3px; display: block; margin: 10pt 0;" /></div>\n`;
    } else if (line.startsWith("## ")) {
      isHeader = false;
      if (inList) {
        html += `</ul>\n`;
        inList = false;
      }
      const sectionTitle = line.replace(/^##\s+/, "").trim();
      html += `<h2>${sectionTitle}</h2>\n`;
    } else if (line.startsWith("### ")) {
      if (inList) {
        html += `</ul>\n`;
        inList = false;
      }
      const jobTitle = line.replace(/^###\s+/, "").trim();
      const parts = jobTitle.split("|").map((p) => p.trim());
      if (parts.length > 1) {
        html += `<h3>${parts[0]} <span style="color: #736E67; font-weight: normal;">|</span> <span class="role-highlight">${parts[1]}</span></h3>\n`;
      } else {
        html += `<h3>${jobTitle}</h3>\n`;
      }
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("* **")) {
      // Subtext / date / location
      const subtext = line.replace(/^\*|\*$/g, "").trim();
      html += `<div class="meta-subtext">${subtext}</div>\n`;
    } else if (line.startsWith("* ") || line.startsWith("- ")) {
      if (!inList) {
        html += `<ul>\n`;
        inList = true;
      }
      let itemContent = line.replace(/^[\*\-]\s+/, "").trim();
      itemContent = itemContent
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      html += `  <li>${itemContent}</li>\n`;
    } else {
      if (inList) {
        html += `</ul>\n`;
        inList = false;
      }
      let paragraph = line
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      html += `<p>${paragraph}</p>\n`;
    }
  }

  if (inList) {
    html += `</ul>\n`;
  }

  html += `</body>\n</html>\n`;
  return html;
}

/**
 * Initializes Google Drive v3 client.
 */
async function getGoogleDriveClient() {
  const serviceAccountKeyRaw = process.env.GDRIVE_SERVICE_ACCOUNT_KEY;
  const credentialsFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const clientId = process.env.GDRIVE_CLIENT_ID;
  const clientSecret = process.env.GDRIVE_CLIENT_SECRET;
  const refreshToken = process.env.GDRIVE_REFRESH_TOKEN;

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
      throw new Error(`Failed to parse GDRIVE_SERVICE_ACCOUNT_KEY: ${e.message}`);
    }

    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents",
      ],
    });

    return google.drive({ version: "v3", auth });
  }

  if (credentialsFilePath && fs.existsSync(credentialsFilePath)) {
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsFilePath,
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents",
      ],
    });

    return google.drive({ version: "v3", auth });
  }

  if (clientId && clientSecret && refreshToken) {
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    return google.drive({ version: "v3", auth: oauth2Client });
  }

  throw new Error(
    "Missing Google Drive credentials.\n" +
      "Set GDRIVE_SERVICE_ACCOUNT_KEY or GOOGLE_APPLICATION_CREDENTIALS in site/.env.local.\n" +
      "See site/docs/GOOGLE_DRIVE_SYNC_SETUP.md for setup instructions."
  );
}

/**
 * Uploads/syncs the document to Google Drive, converting it into a native Google Doc.
 */
async function syncToGoogleDoc(htmlContent, options = {}) {
  const drive = await getGoogleDriveClient();
  const fileId = options.fileId;
  const folderId = options.folderId;
  const docName = options.docName || "Tyler Lindow - Resume";

  if (options.dryRun) {
    console.log("🔍 Dry run enabled: Verifying Google Drive access...");
    const about = await drive.about.get({ fields: "user" });
    console.log(`✅ Authenticated successfully as: ${about.data.user?.displayName || "Service Account"}`);
    if (fileId) {
      const existing = await drive.files.get({ fileId, fields: "id, name, mimeType, webViewLink" });
      console.log(`✅ Target file verified: "${existing.data.name}" (${existing.data.id})`);
    }
    console.log("✨ Dry run completed successfully. No remote files modified.");
    return { dryRun: true };
  }

  // Update in-place if File ID exists
  if (fileId) {
    console.log(`🔄 Updating existing Google Doc in-place (ID: ${fileId})...`);
    const res = await drive.files.update({
      fileId,
      media: {
        mimeType: "text/html",
        body: Readable.from(Buffer.from(htmlContent, "utf-8")),
      },
      fields: "id, name, webViewLink, modifiedTime",
    });

    const docLink = `https://docs.google.com/document/d/${res.data.id}/edit`;
    console.log("\n🎉 Successfully updated Google Doc!");
    console.log(`📄 Name:     ${res.data.name}`);
    console.log(`🆔 Doc ID:   ${res.data.id}`);
    console.log(`🔗 Edit URL: ${docLink}`);
    return { ...res.data, docLink };
  }

  // Create new native Google Doc by specifying mimeType in requestBody
  console.log(`📤 Creating new native Google Doc "${docName}" in Google Drive...`);
  const createRes = await drive.files.create({
    requestBody: {
      name: docName,
      mimeType: "application/vnd.google-apps.document", // Converts uploaded HTML into native Google Doc
      parents: folderId ? [folderId] : undefined,
    },
    media: {
      mimeType: "text/html",
      body: Readable.from(Buffer.from(htmlContent, "utf-8")),
    },
    fields: "id, name, webViewLink, modifiedTime",
  });

  const docLink = `https://docs.google.com/document/d/${createRes.data.id}/edit`;
  console.log("\n🎉 Successfully created native Google Doc!");
  console.log(`📄 Name:     ${createRes.data.name}`);
  console.log(`🆔 Doc ID:   ${createRes.data.id}`);
  console.log(`🔗 Edit URL: ${docLink}`);
  console.log("\n💡 Tip: Save GDRIVE_DOC_ID=\"" + createRes.data.id + "\" in site/.env.local for future instant in-place updates.");

  return { ...createRes.data, docLink };
}

/**
 * Main execution
 */
async function main() {
  const options = parseCliArgs();
  console.log("📄 Step 1: Loading resume markdown source...");
  const markdown = loadResumeMarkdown();

  console.log("🔄 Step 2: Generating Google Doc-ready HTML and Markdown...");
  const htmlContent = convertToGoogleDocHtml(markdown);

  // Write local export files
  const publicDir = path.join(projectRoot, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(options.outHtml, htmlContent, "utf-8");
  fs.writeFileSync(options.outMd, markdown, "utf-8");

  console.log(`✅ Generated HTML Google Doc format: ${options.outHtml}`);
  console.log(`✅ Generated Clean Markdown format:   ${options.outMd}`);

  if (options.localOnly) {
    console.log("🏁 --local-only flag set. Skipping Google Drive upload.");
    console.log("👉 You can directly upload or drag Tyler_Lindow_Resume_GoogleDoc.html into Google Drive to open as a Google Doc!");
    return;
  }

  console.log("\n☁️  Step 3: Synchronizing with Google Drive as Native Google Doc...");
  try {
    await syncToGoogleDoc(htmlContent, options);
  } catch (err) {
    if (!process.env.GDRIVE_SERVICE_ACCOUNT_KEY && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.warn("\n⚠️  No Google Drive API credentials configured yet.");
      console.log("👉 Local Google Doc-ready files were successfully created in `site/public/`.");
      console.log("👉 To upload manually: Open https://drive.google.com/ and drag & drop `public/Tyler_Lindow_Resume_GoogleDoc.html`.");
      console.log("📖 To automate Google Drive sync: see `site/docs/GOOGLE_DRIVE_SYNC_SETUP.md`.");
      return;
    }
    throw err;
  }
}

main().catch((err) => {
  console.error("\n❌ Google Doc Export Error:", err.message);
  process.exit(1);
});
