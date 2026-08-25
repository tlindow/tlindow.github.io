# Tinker Globe Favicon & Multi-Resolution App Icon Update

**Date:** 2026-08-25  
**Tags:** #ui #design-system #tinker #favicon #icons #nextjs #branding #editorial

## Context

Updated the personal marketing and resume website favicon and browser application icons to the signature **Tinker Globe logo** (`#F5F3EF` base with the 7-color Tinker pastel rainbow spectrum: lilac, rose, peach, amber, sprout, sky, and mint).

## Reflections

- The previous generic/stacked mark favicon has been replaced with the signature Tinker Globe Mark (`TinkerGlobeMark`), aligning browser tabs and home screen bookmarks with the site's editorial header mark and quiet web aesthetic.
- Modern browsers benefit from vector `icon.svg` for infinite scaling and crisp rendering across light/dark browser chrome, while legacy clients and static direct requests rely on standard multi-resolution `.ico` and `apple-icon.png`.

## Decisions

1. **Vector & Raster Icon Generation (`site/scripts/generate-icons.mjs`):**
   - Generated vector SVG assets: `site/src/app/icon.svg` and `site/public/icon.svg`.
   - Rendered pixel-perfect multi-resolution raster files: `16x16`, `32x32`, `48x48` bundled in `favicon.ico`, `180x180` Apple touch icons, and `512x512` brand assets.
2. **Next.js App Router Metadata Integration (`site/src/app/layout.tsx`):**
   - Explicitly configured `metadata.icons` with vector SVG, ICO fallback, and Apple touch icon mappings.
3. **Static Export Synchronization:**
   - Placed identical assets in `site/public/` (`favicon.ico`, `icon.svg`, `apple-touch-icon.png`) ensuring static export builds deploy cleanly to GitHub Pages without missing icon routes.

## Next

- Continue ensuring visual consistency across all shared social cards and brand touchpoints.
