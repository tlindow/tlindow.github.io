# Traditional Blog Architecture & Minimalist LinkedIn Slide Deck

**Date:** 2026-08-26  
**Tags:** #ui #blog #writing #linkedin-carousel #minimalism #lindow-labs #space-mono #content

## Context

Added a dedicated **Blog** area to the personal site in a traditional publication format where `/blog` serves as the chronological essay archive, linking out to standalone article pages (`/blog/[slug]`). Generated a 4-slide minimalist LinkedIn carousel deck capturing reflections from managing engineering teams at Affirm and why developer creative energy and intuition are our most critical assets.

## Reflections

- Keeping `/blog` as a separate, traditional archive preserves the clean, high-conversion focus of the product landing page (`/`) while providing an expansive home for deep technical essays and leadership reflections.
- Updating the top navigation to feature **Blog** (and removing Resume from the navbar to keep the header minimal) creates a clear hierarchy: Identity → Blog → Build with me.
- Rendering the LinkedIn slides as minimalist cards within the Lindow Labs design system (warm paper `#FFFDF7` background, Space Mono typography, subtle rainbow accent hairline, and pure text focus) yields a much cleaner, higher-impact graphic for LinkedIn carousels than cluttered badge layouts.

## Decisions

1. **Top Navigation:** Added `Blog` link to `Navbar.tsx` and removed the `Resume` link from the header.
2. **Traditional Blog Archive (`/blog`):** Reverse-chronological feed with tags, read times, summaries, and direct links to individual article pages.
3. **Individual Article Page (`/blog/[slug]`):** Full essay reading experience featuring typography optimized for readability, author metadata, and the embedded interactive minimalist slide deck viewer.
4. **Minimalist Slide Deck & Exporter:**
   - Interactive client-side carousel viewer (`SlideDeckViewer.tsx`) with 1-click high-res PNG downloads (individual and batch "Download All 4").
   - Headless Puppeteer script (`scripts/generate-slides.mjs`) embedding base64 Space Mono webfonts to pre-render static 1200×1200px images into `/public/slides/slide-1.png` through `slide-4.png`.
5. **Initial Post:** *"What Would You Build? Over-Indexing on Intuition in the Age of AI"* based on Affirm leadership lessons and creative conviction.

## Next

- Author future field notes and essays on fintech architecture, developer experience, and agentic workflows.
