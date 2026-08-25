# Retro Clock Pure Letters & Role Transition

**Date:** 2026-08-25  
**Tags:** #ui #animation #retro-clock #header #typography #staff-pm

## Context

Updated the main header retro clock foldover animation:
1. Removed all black background boxes/plates so only the pure typography flips with 3D mechanical foldover physics.
2. Configured the foldover sequence specifically from **"Software Engineering Manager"** to **"Staff B2B Product Manager"**.
3. Removed the redundant `Software Engineering Manager → PM` subtitle.

## Reflections

- Displaying the letters directly on the warm background keeps the header typographic scale massive and clean (`text-5xl sm:text-7xl md:text-8xl lg:text-9xl`) while delivering the mechanical foldover transition from engineering manager to staff product manager.

## Decisions

- **Pure Typography 3D Foldover:** Each word rotates smoothly via Framer Motion spring physics with perspective.
- **Header Structure:** `<RetroClockFoldover titles={["Software Engineering Manager", "Staff B2B Product Manager"]} />` + subtitle `B2B at B2C scale`.

## Next

- Ensure seamless responsive rendering on small mobile viewports.
