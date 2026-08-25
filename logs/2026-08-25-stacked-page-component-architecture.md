# Stacked Page Component Architecture for Web Page Breaks

**Date:** 2026-08-25  
**Tags:** #ui #resume #stacking #pages #css-sticky #print-css #web-ux #beginner #space-mono

## Context

Refactored the web resume page break from an inline dashed divider banner into a modular `ResumePage` component architecture where Page 2 visually stacks on top of Page 1 only after the user scrolls all the way to the bottom of the in-view page, preserving strict 2-page print and PDF generation fidelity.

## Reflections

- When pages contain dense professional experience, fixing a sticky element at the top of the viewport (`top: 1.5rem`) prematurely pins tall content and clips the lower half of the page before the next section appears.
- By dynamically tracking element height via `ResizeObserver` and setting `top: min(1.5rem, calc(100dvh - var(--page-height) - 1.5rem))`, the browser allows the reader to scroll completely through all entries on Page 1 (Header, Vision, Beginner, Affirm L7, Affirm L6→L7) down to the bottom margin.
- The instant the bottom of Page 1 reaches the viewport bottom, Page 1 sticks in place and Page 2 pulls up smoothly from below, sliding over Page 1 with a rich elevated drop shadow (`shadow-[0_-16px_48px_rgba(0,0,0,0.12)]`).
- Isolating page components makes print CSS `@media print` clean and predictable: each `.resume-page-wrapper` maps directly to an uncompromised physical page with strict page break boundaries.

## Decisions

1. **Modular `ResumePage` Component (`site/src/components/ResumePage.tsx`):**
   - Encapsulates warm paper surface styling (`bg-surface`, `border-border`, rounded-3xl corners).
   - Dynamic `ResizeObserver` measuring element height into `--page-height`.
   - Adaptive sticky formula: `top: min(1.5rem, calc(100dvh - var(--page-height, 100vh) - 1.5rem))` for complete bottom scroll-through.
   - Dynamic z-index layering (`zIndex={10}` for Page 1, `zIndex={20}` for Page 2).
   - Web view page badges and animated scroll navigation indicators with `no-print` classes.
2. **Document Segmentation in `page.tsx` & `SpaceMonoResume.tsx`:**
   - **Page 1:** Contact Header, Vision Statement, and first 3 Experience entries (Beginner, Affirm SWE Mgr L7, Affirm DSE Mgr L6→L7).
   - **Page 2:** Experience Continuation (Affirm DSE L4→L5, Galvanize, The Tech Interactive, Computer History Museum) and Education Section.
3. **Print & PDF Compatibility (`site/src/app/globals.css`):**
   - Strict overrides for `.resume-page-wrapper` and `.resume-page-sheet` under `@media print`: sets `position: static !important`, removes web shadows/borders/margins, and enforces explicit page break rules.
   - Validated automated Puppeteer PDF generation (`npm run export:pdf`) producing a flawless 2-page Letter PDF.

## Next

- Explore subtle parallax or spring dynamics on the trailing page edges for interactive deck modes.
