import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsPath = path.resolve(__dirname, 'fonts.json');
const fonts = JSON.parse(fs.readFileSync(fontsPath, 'utf-8'));

const slides = [
  {
    id: 1,
    number: "01/04",
    quote: "When I was managing engineering teams at Affirm, the most revealing question I could ask a developer was simply: \"What would you build?\""
  },
  {
    id: 2,
    number: "02/04",
    quote: "Sometimes, the response was, \"Just tell me what to build.\""
  },
  {
    id: 3,
    number: "03/04",
    quote: "The most valuable asset we have left from, software to science education, is our creative energy."
  },
  {
    id: 4,
    number: "04/04",
    quote: "If we want to stay relevant, we have to over-index on our intuition."
  }
];

function generateSlideHtml(slide) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @font-face {
      font-family: 'Space Mono';
      font-style: normal;
      font-weight: 400;
      src: url('data:font/woff2;base64,${fonts.regular}') format('woff2');
    }
    @font-face {
      font-family: 'Space Mono';
      font-style: normal;
      font-weight: 700;
      src: url('data:font/woff2;base64,${fonts.bold}') format('woff2');
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 1200px;
      background-color: #FFFDF7;
      font-family: 'Space Mono', monospace;
      color: #1F1D1A;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px;
    }
    .card {
      width: 1040px;
      height: 1040px;
      background: #FFFFFF;
      border: 2px solid #E6E2D8;
      border-radius: 32px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px;
      position: relative;
      overflow: hidden;
    }
    .rainbow-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, #C4B5FD 0%, #A5B4FC 25%, #7DD3FC 50%, #6EE7B7 75%, #FDBA74 100%);
    }
    .top-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .badge {
      color: #4F46E5;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .quote-container {
      margin: auto 0;
      padding: 20px 0;
    }
    .quote {
      font-size: 46px;
      font-weight: 700;
      line-height: 1.45;
      letter-spacing: -0.02em;
      color: #1F1D1A;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="rainbow-bar"></div>
    <div class="top-row">
      <div class="badge">${slide.number}</div>
    </div>
    <div class="quote-container">
      <div class="quote">${slide.quote}</div>
    </div>
  </div>
</body>
</html>`;
}

async function main() {
  const outputDir = path.resolve(__dirname, '../public/slides');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Rendering slides without name and website footer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });

  for (const slide of slides) {
    const html = generateSlideHtml(slide);
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    const outputPath = path.join(outputDir, `slide-${slide.id}.png`);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false
    });
    console.log(`✓ Rendered slide ${slide.id} to ${outputPath}`);
  }

  await browser.close();
  console.log('All slides rendered successfully without name/website footer!');
}

main().catch(err => {
  console.error('Error generating slides:', err);
  process.exit(1);
});
