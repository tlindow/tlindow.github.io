# Clickable LinkedIn Experience Cards & Clean GMV Banner

**Date:** 2026-08-25  
**Tags:** #ui #interaction #linkedin #cards #skills-marketplace #minimalism #staff-pm

## Context

1. Converted all experience cards on `page.tsx` into interactive clickable anchor links that drive directly to Tyler's LinkedIn profile experience section (`https://www.linkedin.com/in/tlindow/details/experience/`).
2. Removed the `GMV Attribution` label tag from the top of each card's hero banner, leaving the banner header clean with just the audience scale chip (`card.users`).
3. Added an `ExternalLink` icon to the `Previous Employer` footer mark with smooth hover physics.

## Reflections

- Making each card a direct portal to Tyler's verified LinkedIn profile creates an immediate path for recruiters, engineering leaders, and founders to explore detailed recommendations and employment verifications.
- Removing the repetitive `GMV Attribution` tag declutters the top of each card so the large GMV figure and audience badge (`500+ Students`, `150+ Product Engineers`, `Amazon & Flagship Co-Brands`, etc.) stand out prominently.

## Decisions

1. **Card Interactivity:** Rendered each card as an `<a>` tag with `target="_blank"`, `rel="noopener noreferrer"`, `cursor-pointer`, and spring hover scaling.
2. **Hero Banner Simplification:** Removed `GMV Attribution` badge, aligning the audience/user metric badge cleanly to the top-right corner.
3. **Previous Employer Link Indicator:** Added `ExternalLink` next to `Previous Employer` in the footer.

## Next

- Monitor outbound analytics tracking for card clicks.
