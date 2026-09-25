import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseLabeledMarkdown, renderLabeledParagraphs, LABELS } from "../src/lib/frontMatter.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../content/blog");
const files = readdirSync(dir).filter((name) => name.endsWith(".md")).sort();
const failures = [];

if (files.length === 0) {
  failures.push("no post bodies found in site/content/blog");
}

for (const name of files) {
  const slug = name.slice(0, -3);
  const markdown = readFileSync(path.join(dir, name), "utf8");
  const { paragraphs, errors } = parseLabeledMarkdown(markdown);
  for (const error of errors) failures.push(`${slug}: ${error}`);
  for (const paragraph of renderLabeledParagraphs(paragraphs)) {
    if (!paragraph.label) failures.push(`${slug}: rendered paragraph has no label`);
    else if (!LABELS.includes(paragraph.label)) {
      failures.push(`${slug}: rendered label is not allowed: ${paragraph.label}`);
    }
    if (!paragraph.text.trim()) failures.push(`${slug}: rendered paragraph is empty`);
  }
}

if (failures.length) {
  console.log("label check: fail");
  for (const failure of failures) console.log(failure);
  process.exit(1);
}

console.log("label check: pass");
console.log(`Allowed labels: ${LABELS.join(", ")}`);
for (const name of files) {
  const slug = name.slice(0, -3);
  const { paragraphs } = parseLabeledMarkdown(readFileSync(path.join(dir, name), "utf8"));
  const rendered = renderLabeledParagraphs(paragraphs);
  console.log(`${slug}: ${paragraphs.length} source paragraphs, ${rendered.length} rendered`);
}
