# Lindow Labs Design System Rollout & Stacked L Favicon Migration

**Date:** 2026-08-25  
**Tags:** #ui #design-system #lindow-labs #branding #favicon #icons #nextjs #tailwind

## Context

Transitioned the site's primary and accent color theme to the **Lindow Labs design system** and migrated browser favicon/application icons to the **Lindow Labs Stacked L brand mark**.

## Reflections

- The site previously featured the botanical forest green theme from *beginner* and the pastel rainbow spectrum from *tinker*.
- Aligning the site with the **Lindow Labs design system** establishes brand coherence across Tyler Lindow's engineering leadership, developer platforms, and venture portfolio.
- The **Stacked L** logo (`#C4B5FD` / `#A5B4FC` / `#7DD3FC` gradient back L with `#1F1D1A` ink foreground) communicates iteration, systems craft, and high-leverage product engineering.
- Grounding the cool Indigo/Violet/Sky palette against warm paper cream surfaces (`#FFFDF7`, `#F5F3EF`) and rich ink (`#1F1D1A` / `#2D2A26`) maintains an intellectual, editorial, and tactile feel.

## Decisions

1. **Favicon & Brand Icon Assets (`icon.svg`, `favicon.ico`, `apple-icon.png`):**
   - Updated vector SVG (`src/app/icon.svg` and `public/icon.svg`) to render the Lindow Labs Stacked L mark with a crisp warm cream squircle base.
   - Re-generated multi-resolution raster files (`16x16`, `32x32`, `48x48` in `favicon.ico`, `180x180` in `apple-icon.png` / `apple-touch-icon.png`, and `512x512` in `public/brand/lindow-labs-icon-512.png`).
2. **Design Tokens & Tailwind Utilities (`globals.css`):**
   - Configured Lindow Labs brand tokens (`--color-labs-primary`, `--color-labs-cool-*`, `--color-violet`, `--color-indigo`, `--color-sky`, `--color-mint`).
   - Defined `.labs-rainbow-gradient` and `.labs-rainbow-bar` cool spectrum gradients.
   - Updated text selection styling to Indigo/Violet tint (`#C4B5FD45` with `#1E1B4B` text).
3. **Component Theme Alignment:**
   - Synced `Navbar.tsx`, `Hero.tsx`, `page.tsx`, `ResumePage.tsx`, `ResumeExperience.tsx`, `ResumeSummary.tsx`, `ResumeToolkit.tsx`, `ResumeEducation.tsx`, `ResumeVentures.tsx`, `SpaceMonoResume.tsx`, and `Footer.tsx` with Lindow Labs primary and cool accent classes.

## Next

- Continue evaluating social sharing Open Graph cards for Lindow Labs brand asset alignment.
