import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const defaultDir = path.join(here, "../../content/blog");

function unquote(raw) {
  const value = raw.trim();
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  if (value.length >= 2 && value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  return value;
}

export function parseFrontMatter(markdown) {
  const result = { redirectFrom: [] };
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return result;

  let mode = null;
  let tile = null;

  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && mode === "steps") {
      const step = unquote(item[1]);
      if (step) result.steps.push(step);
      continue;
    }
    if (item && mode === "redirect") {
      const from = unquote(item[1]);
      if (from) result.redirectFrom.push(from);
      continue;
    }
    if (item && mode === "impact") {
      const number = item[1].match(/^number:\s*(.*)$/);
      if (number) {
        tile = { number: unquote(number[1]), label: "" };
        result.impact.push(tile);
      }
      continue;
    }

    const label = line.match(/^\s+label:\s*(.*)$/);
    if (label && tile && mode === "impact") {
      tile.label = unquote(label[1]);
      continue;
    }

    const field = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!field) continue;

    const key = field[1];
    const rest = field[2].trim();
    tile = null;

    if (key === "impact") {
      mode = "impact";
      result.impact = [];
      continue;
    }
    if (key === "steps") {
      mode = "steps";
      result.steps = [];
      continue;
    }
    if (key === "redirect_from") {
      mode = "redirect";
      continue;
    }

    mode = null;
    if (key === "call") result.call = unquote(rest);
    if (key === "belief") result.belief = unquote(rest);
  }

  return result;
}

export function loadAllPostFrontMatter(dir = defaultDir) {
  if (!existsSync(dir)) return {};
  const posts = {};
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".md")) continue;
    const slug = name.slice(0, -3);
    posts[slug] = parseFrontMatter(readFileSync(path.join(dir, name), "utf8"));
  }
  return posts;
}

export function loadPostFrontMatter(slug, dir = defaultDir) {
  return loadAllPostFrontMatter(dir)[slug] ?? { redirectFrom: [] };
}

function slugFromRedirect(value) {
  const trimmed = value.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  if (trimmed.startsWith("blog/")) return trimmed.slice("blog/".length);
  return trimmed;
}

export function findRedirectTarget(slug, dir = defaultDir) {
  const posts = loadAllPostFrontMatter(dir);
  for (const [destination, frontMatter] of Object.entries(posts)) {
    for (const from of frontMatter.redirectFrom) {
      if (slugFromRedirect(from) === slug) return destination;
    }
  }
  return null;
}
