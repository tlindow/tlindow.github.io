import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const patterns = [
  { kind: "U+2014", re: /\u2014/g },
  { kind: "&mdash;", re: /&mdash;/gi },
  { kind: "&#8212;", re: /&#8212;/gi },
  { kind: "&#x2014;", re: /&#x2014;/gi },
];

function walk(dir, files) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (name.endsWith(".html")) files.push(full);
  }
}

if (!statSync(outDir, { throwIfNoEntry: false })?.isDirectory()) {
  console.error("check-em-dashes: site/out is missing. Run next build first.");
  process.exit(1);
}

const files = [];
walk(outDir, files);
const hits = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\n/);
  lines.forEach((line, index) => {
    for (const pattern of patterns) {
      pattern.re.lastIndex = 0;
      let match = pattern.re.exec(line);
      while (match) {
        hits.push({
          file: path.relative(path.resolve(outDir, "..", ".."), file),
          line: index + 1,
          column: match.index + 1,
          kind: pattern.kind,
        });
        match = pattern.re.exec(line);
      }
    }
  });
}

if (hits.length === 0) {
  console.log("em dash hits: 0");
  process.exit(0);
}

console.log(`em dash hits: ${hits.length}`);
for (const hit of hits) {
  console.log(`${hit.file}:${hit.line}:${hit.column} ${hit.kind}`);
}
process.exit(1);
