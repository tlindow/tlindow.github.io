# Uncontained Desktop Traction Graph & Minimal UI

**Date:** 2026-08-25  
**Tags:** #ui #graph #minimalism #uncontained #no-instructions #traction #staff-pm

## Context

Updated the desktop graph in `TractionTimeline.tsx`:
1. Removed the outer card wrapper, borders, and shadows around the desktop graph canvas, allowing it to sit directly and seamlessly on the page.
2. Removed all instructional and explanatory copy ("Chronological Scale Trajectory", "Pan horizontally or drag canvas...", etc.).
3. Kept minimal, unobtrusive floating pan controls (`<` and `>`) at the top right of the section.

## Reflections

- Eliminating the card container and explanatory text brings a clean, confident aesthetic to the visualization.
- The SVG curve, milestone nodes, and horizontal card row naturally invite exploration without clutter.

## Next

- Keep monitoring visual hierarchy and pan responsiveness.
