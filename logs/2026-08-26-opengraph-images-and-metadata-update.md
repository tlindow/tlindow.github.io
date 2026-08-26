# Update OpenGraph Images & Text for New Site Header and Logos

**Date:** 2026-08-26  
**Tags:** #seo #opengraph #twitter-cards #branding #metadata #logos

## Context
Configured OpenGraph and Twitter card image generation and updated metadata descriptions across the application to reflect the new site header (`Fintech Product-Eng Manager — B2B SaaS on curiosity-safe, GenAI Rails · $0 – $10B+ GMV enterprises`) and employer/educational logos.

## Decisions
1. **Dynamic Image Generator (`opengraph-image.tsx` & `twitter-image.tsx`):**
   - Created high-res 1200x630 static OG cards with Next.js `ImageResponse`.
   - Rendered the typography: `"Tyler Lindow"`, `"Fintech Product-Eng Manager"`, `"Software Engineering Manager <> PM"`.
   - Rendered the tagline: `"B2B SaaS on curiosity-safe, GenAI Rails · $0 – $10B+ GMV enterprises"`.
   - Included previous employer and institution badges: Affirm, Beginner, Galvanize, The Tech Interactive, Computer History Museum, Northwestern University, UC San Diego.
2. **Metadata & OpenGraph Tags:**
   - Updated `metadataBase` to `https://tlindow.github.io` in `layout.tsx`.
   - Configured `openGraph` (`website`, `siteName`, `url`, rich description) and `twitter` (`summary_large_image`) across `layout.tsx`, `resume/page.tsx`, `blog/page.tsx`, and `modules/page.tsx`.
3. **Static Export Build Support:**
   - Set `export const dynamic = "force-static"` so Next.js static exports prerender the OG images at build time into `opengraph-image.png` and `twitter-image.png`.
