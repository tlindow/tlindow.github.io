# Split Hero Subtitle and GMV Scale into Two Lines

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #typography #layout

## Context
Removed the dot delimiter (`·`) and separated the primary tagline and GMV scale descriptor into two distinct, dedicated lines in the hero header and OpenGraph cards.

## Header Hierarchy
1. **Title:** `"Fintech Product-Eng Manager"`
2. **Line 1 (Tagline):** `"B2B SaaS on curiosity-safe, GenAI Rails"`
3. **Line 2 (GMV Scale):** `"$0 – $10B+ GMV enterprises"`
4. **Line 3 (Role):** `"Software Engineering Manager <> PM"`

## Decisions
1. **Hero Header Layout (`page.tsx`):**
   - Rendered `{displaySubtitle}` (`"B2B SaaS on curiosity-safe, GenAI Rails"`) as the main subtitle line.
   - Added a dedicated second line: `<p className="text-sm sm:text-base md:text-lg font-mono text-muted">$0 – $10B+ GMV enterprises</p>`.
2. **OpenGraph Card (`opengraph-image.tsx`):**
   - Structured the hero card into two stacked rows: Title Line + GMV scale font-mono subtext.
3. **Remote Config & Sanitization:**
   - Baseline preset sets `hero_subtitle_variant: "B2B SaaS on curiosity-safe, GenAI Rails"`.
   - Sanitized any legacy cached values with `· $0 – $10B+ GMV enterprises` to cleanly isolate the main tagline.
