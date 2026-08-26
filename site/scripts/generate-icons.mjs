import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const svgPath = path.resolve("./src/app/icon.svg");
const svgContent = fs.readFileSync(svgPath, "utf-8");

// Helper to create ICO binary buffer with PNG payloads
function createIco(images) {
  // images is array of { width, height, buffer }
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  const imageBuffers = [];

  for (const img of images) {
    const dirEntry = Buffer.alloc(dirEntrySize);
    dirEntry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // Width
    dirEntry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // Height
    dirEntry.writeUInt8(0, 2); // Colors in palette
    dirEntry.writeUInt8(0, 3); // Reserved
    dirEntry.writeUInt16LE(1, 4); // Color planes
    dirEntry.writeUInt16LE(32, 6); // Bits per pixel
    dirEntry.writeUInt32LE(img.buffer.length, 8); // Image data size
    dirEntry.writeUInt32LE(offset, 12); // Image data offset

    offset += img.buffer.length;
    dirEntries.push(dirEntry);
    imageBuffers.push(img.buffer);
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body, html { width: 100%; height: 100%; overflow: hidden; background: transparent; }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `);

  async function renderPng(size) {
    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    return await page.screenshot({
      type: "png",
      omitBackground: true,
      clip: { x: 0, y: 0, width: size, height: size },
    });
  }

  console.log("Generating raster icon sizes...");
  const png16 = await renderPng(16);
  const png32 = await renderPng(32);
  const png48 = await renderPng(48);
  const png180 = await renderPng(180);
  const png512 = await renderPng(512);

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  // Write outputs
  fs.writeFileSync("./src/app/favicon.ico", icoBuffer);
  fs.writeFileSync("./public/favicon.ico", icoBuffer);
  fs.writeFileSync("./src/app/apple-icon.png", png180);
  fs.writeFileSync("./public/apple-touch-icon.png", png180);
  fs.writeFileSync("./public/brand/lindow-labs-icon-512.png", png512);
  fs.writeFileSync("./public/brand/lindow-labs-icon.svg", svgContent);

  console.log("Favicons and icons successfully generated!");
  await browser.close();
}

run().catch((err) => {
  console.error("Error generating icons:", err);
  process.exit(1);
});
