# Pixelated Engineering Manager Typography

**Date:** 2026-08-25  
**Tags:** #ui #animation #typography #pixel #retro-clock #silkscreen #staff-pm

## Context

Styled the initial grayed-out state **"Software Engineering Manager"** with an authentic 8-bit pixel font (`Silkscreen` / `--font-pixel`) that dynamically folds over into the modern bold Space Mono display font for **"Staff B2B Product Manager"**.

## Reflections

- The transition from a nostalgic, grayed-out 8-bit pixelated engineering font into high-contrast, modern architectural Staff PM typography creates an immediate, visual story of career evolution in a single 3D foldover action.

## Decisions

1. **Pixel Font Integration:**
   - Loaded Google font `Silkscreen` in `layout.tsx` via `next/font/google` (`--font-pixel`).
   - Exposed `--font-pixel` in `globals.css` `@theme inline`.
2. **Animation Styling:**
   - Initial state (`isGrayed`): `font-pixel text-muted/50 font-bold tracking-tight`.
   - Post-flip destination: `font-mono text-foreground font-black tracking-tighter`.

## Next

- Ensure high legibility across small mobile viewport breakpoints.
