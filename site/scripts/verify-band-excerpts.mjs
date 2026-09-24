import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllPostFrontMatter } from "../src/lib/frontMatter.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, "..");

const componentPath = path.join(siteRoot, "src/components/blog/DecisionBands.tsx");
const pagePath = path.join(siteRoot, "src/app/blog/[slug]/page.tsx");
const layoutPath = path.join(siteRoot, "src/app/layout.tsx");
const postsPath = path.join(siteRoot, "src/data/blogPosts.ts");

const BANDS = [
  { field: "call", label: "The call" },
  { field: "impact", label: "Impact" },
  { field: "steps", label: "How I led it" },
  { field: "belief", label: "What I believe" },
];

function norm(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function sentencesFor(post) {
  const found = [];
  if (norm(post.call)) found.push({ band: "The call", sentence: norm(post.call) });
  if (norm(post.belief)) found.push({ band: "What I believe", sentence: norm(post.belief) });
  for (const step of post.steps ?? []) {
    if (norm(step)) found.push({ band: "How I led it", sentence: norm(step) });
  }
  for (const tile of post.impact ?? []) {
    if (norm(tile.label)) found.push({ band: "Impact", sentence: norm(tile.label) });
  }
  return found;
}

function loadBodies(file) {
  const text = readFileSync(file, "utf8");
  const ids = [...text.matchAll(/id:\s*"([^"]+)"/g)].map((match) => ({
    id: match[1],
    index: match.index,
  }));
  const bodies = {};
  for (let i = 0; i < ids.length; i += 1) {
    const slice = text.slice(ids[i].index, ids[i + 1]?.index ?? text.length);
    const content = slice.match(/content:\s*\[([\s\S]*?)\n\s*\],/);
    if (!content) continue;
    const paragraphs = [...content[1].matchAll(/`([^`]*)`/g)].map((match) => match[1]);
    bodies[ids[i].id] = norm(paragraphs.join(" "));
  }
  return bodies;
}

const failures = [];
const posts = loadAllPostFrontMatter();
const slugs = Object.keys(posts).sort();

if (slugs.length === 0) {
  failures.push("no post front matter files found");
}

for (const slug of slugs) {
  const post = posts[slug];
  if (!norm(post.call)) failures.push(`${slug}: The call is missing its field`);
  if (!norm(post.belief)) failures.push(`${slug}: What I believe is missing its field`);
  if (Array.isArray(post.impact)) {
    post.impact.forEach((tile, index) => {
      if (!norm(tile.number) || !norm(tile.label)) {
        failures.push(`${slug}: Impact tile ${index + 1} is missing its number or label`);
      }
    });
  }
  if (Array.isArray(post.steps)) {
    post.steps.forEach((step, index) => {
      if (!norm(step)) failures.push(`${slug}: How I led it step ${index + 1} is missing its field`);
    });
  }
}

const page = readFileSync(pagePath, "utf8");
const component = readFileSync(componentPath, "utf8");
const layout = readFileSync(layoutPath, "utf8");

if (!page.includes("loadPostFrontMatter")) {
  failures.push("blog post page does not load band fields from front matter");
}
for (const { field, label } of BANDS) {
  const binding = `${field}={bands.${field}}`;
  if (!page.includes(binding)) {
    failures.push(`blog post page does not render ${label} from bands.${field}`);
  }
}

const renderedFrom = [
  ["The call", "{callText}"],
  ["Impact", "{tile.number.trim()}"],
  ["Impact", "{tile.label.trim()}"],
  ["How I led it", "{step}"],
  ["What I believe", "{beliefText}"],
];
for (const [label, expression] of renderedFrom) {
  if (!component.includes(expression)) {
    failures.push(`DecisionBands does not render ${label} from its field (${expression})`);
  }
}

const layoutFiles = [
  ["site/src/components/blog/DecisionBands.tsx", component],
  ["site/src/app/blog/[slug]/page.tsx", page],
  ["site/src/app/layout.tsx", layout],
];
for (const slug of slugs) {
  for (const { band, sentence } of sentencesFor(posts[slug])) {
    for (const [file, source] of layoutFiles) {
      if (norm(source).includes(sentence)) {
        failures.push(`hardcoded band copy in ${file}: ${slug} / ${band} / ${sentence}`);
      }
    }
  }
}

const bodies = loadBodies(postsPath);
const warnings = [];
for (const slug of slugs) {
  const body = bodies[slug];
  if (body == null) {
    failures.push(`${slug}: rendered body was not found in blogPosts.ts`);
    continue;
  }
  for (const { band, sentence } of sentencesFor(posts[slug])) {
    if (body.includes(sentence)) {
      warnings.push(`WARNING ${slug} | ${band} | ${sentence}`);
    }
  }
}

if (failures.length) {
  console.log("rule 1: fail");
  for (const failure of failures) console.log(failure);
} else {
  console.log("rule 1: pass");
  console.log("Every band renders from front matter fields (call, impact, steps, belief).");
  console.log("No hardcoded band copy in DecisionBands, the post page, or the site layout.");
  console.log("A band with an empty or absent field is not rendered. That is how Teams omits Impact and How I led it.");
}

console.log(warnings.length ? "rule 2: warnings" : "rule 2: no warnings");
for (const warning of warnings) console.log(warning);

if (failures.length) process.exit(1);
