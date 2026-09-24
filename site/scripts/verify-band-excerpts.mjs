import { readFileSync } from "node:fs";
import path from "node:path";
import { loadAllPostFrontMatter } from "../src/lib/frontMatter.mjs";

const source = readFileSync(
  path.resolve(process.cwd(), "src/data/blogPosts.ts"),
  "utf8"
);
const posts = loadAllPostFrontMatter();
const missing = [];

function expectInSource(slug, value) {
  if (!value) return;
  if (!source.includes(value)) missing.push(`${slug}: ${value}`);
}

for (const [slug, frontMatter] of Object.entries(posts)) {
  expectInSource(slug, frontMatter.call);
  expectInSource(slug, frontMatter.belief);
  for (const step of frontMatter.steps ?? []) expectInSource(slug, step);
  for (const tile of frontMatter.impact ?? []) {
    expectInSource(slug, tile.number);
    expectInSource(slug, tile.label);
  }
}

const teams = posts["building-teams-as-raising-funds"];
if (!teams) missing.push("missing building-teams-as-raising-funds front matter");
else if (teams.impact) missing.push("building-teams-as-raising-funds should omit impact");

if (posts["over-index-on-intuition"]) {
  missing.push("over-index-on-intuition should not have band front matter");
}

if (missing.length) {
  console.error("verify-band-excerpts failed");
  for (const item of missing) console.error(item);
  process.exit(1);
}

console.log(`verify-band-excerpts: ${Object.keys(posts).length} posts, excerpts match source`);
