import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadAllPostFrontMatter } from "../src/lib/frontMatter.mjs";

const posts = loadAllPostFrontMatter();
const missing = [];

function requireBands(slug, keys) {
  const post = posts[slug];
  if (!post) {
    missing.push(`missing ${slug} front matter`);
    return;
  }
  for (const key of keys) {
    const value = post[key];
    const empty = value == null || (Array.isArray(value) && value.length === 0);
    if (empty) missing.push(`${slug} should include ${key}`);
  }
}

function forbidBands(slug, keys) {
  const post = posts[slug];
  if (!post) return;
  for (const key of keys) {
    const value = post[key];
    const present = Array.isArray(value) ? value.length > 0 : Boolean(value);
    if (present) missing.push(`${slug} should omit ${key}`);
  }
}

requireBands("building-product-as-system-architecture", ["call", "impact", "steps", "belief"]);
requireBands("securing-500k-gmv-win", ["call", "impact", "steps", "belief"]);
requireBands("velocity-labs", ["call", "impact", "steps", "belief"]);
requireBands("building-teams-as-raising-funds", ["call", "belief"]);
forbidBands("building-teams-as-raising-funds", ["impact", "steps"]);

const architecture = posts["building-product-as-system-architecture"];
const targetTile = architecture?.impact?.find((tile) => tile.number === "99.99%");
if (targetTile?.label !== "availability target this work lays groundwork for (a target, not achieved)") {
  missing.push("architecture 99.99% tile lost Clay's target wording");
}

const velocity = posts["velocity-labs"];
if (!velocity?.redirectFrom?.includes("/blog/velocity-labs-system-sculpting")) {
  missing.push("velocity-labs should redirect the old slug");
}

const dir = path.resolve(process.cwd(), "content/blog");
for (const name of readdirSync(dir)) {
  if (!name.endsWith(".md")) continue;
  const text = readFileSync(path.join(dir, name), "utf8");
  if (text.includes("NEEDS TYLER") || text.includes("Facts check") || text.includes("PREVIEW ONLY")) {
    missing.push(`${name} still has notes that must not render`);
  }
}

if (posts["velocity-labs-system-sculpting"]) {
  missing.push("old velocity front matter file should be gone");
}

if (missing.length) {
  console.error("verify-band-excerpts failed");
  for (const item of missing) console.error(item);
  process.exit(1);
}

console.log("verify-band-excerpts: Clay bands match the recut, teams omits impact and steps");
