import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseLabeledMarkdown, renderLabeledParagraphs, LABELS } from "../src/lib/frontMatter.mjs";

// over-index-on-intuition stays unlabeled until Tyler decides what happens to that post.
const UNLABELED_ALLOWED = ["over-index-on-intuition"];

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../content/blog");
const postsPath = path.join(here, "../src/data/blogPosts.ts");
const files = readdirSync(dir).filter((name) => name.endsWith(".md")).sort();
const failures = [];
const postSlugs = [...readFileSync(postsPath, "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map(
  (match) => match[1]
);

for (const slug of postSlugs) {
  const hasLabeledFile = existsSync(path.join(dir, `${slug}.md`));
  if (!hasLabeledFile && !UNLABELED_ALLOWED.includes(slug)) {
    failures.push(
      `${slug}: no labeled file in site/content/blog and not on the unlabeled allow list`
    );
  }
}

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
console.log(`Unlabeled allow list: ${UNLABELED_ALLOWED.join(", ")}`);
for (const name of files) {
  const slug = name.slice(0, -3);
  const { paragraphs } = parseLabeledMarkdown(readFileSync(path.join(dir, name), "utf8"));
  const rendered = renderLabeledParagraphs(paragraphs);
  console.log(`${slug}: ${paragraphs.length} source paragraphs, ${rendered.length} rendered`);
}
