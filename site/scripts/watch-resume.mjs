import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { syncResumeMarkdownToTs } from "./sync-resume-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(projectRoot, "..");

const watchDir = path.join(repoRoot, "content");
const mdFile = path.join(watchDir, "resume.md");

// Initial sync
syncResumeMarkdownToTs();

console.log(`👀 Watching ${mdFile} for changes (real-time hot reloading enabled)...`);

let debounceTimer = null;

function onFileChange() {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    try {
      syncResumeMarkdownToTs();
    } catch (e) {
      console.error("Failed to sync resume markdown:", e.message);
    }
  }, 40);
}

if (fs.existsSync(watchDir)) {
  fs.watch(watchDir, (eventType, filename) => {
    if (!filename || filename === "resume.md") {
      onFileChange();
    }
  });
}

if (fs.existsSync(mdFile)) {
  fs.watch(mdFile, () => {
    onFileChange();
  });
}
