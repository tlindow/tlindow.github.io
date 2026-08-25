# Retro Clock Foldover Animation on Main Header

**Date:** 2026-08-25  
**Tags:** #ui #animation #retro-clock #split-flap #framer-motion #header #typography

## Context

Created a mechanical split-flap retro clock foldover animation component (`RetroClockFoldover.tsx`) and integrated it into the primary header of `site/src/app/page.tsx`.

## Reflections

- The retro split-flap mechanical flip clock aesthetic pairs seamlessly with the Space Mono font, botanical terminal styling, and high-impact Staff PM narrative.
- Each word/token is rendered as a physical flip-card module with side mounting notches, center horizontal split seams, top sheen / bottom shadow gradient depth, and realistic spring-based 3D flip physics (`rotateX` 3D perspective).

## Decisions

1. **Component Created:** `site/src/components/animations/RetroClockFoldover.tsx`
   - Split-flap word tiles with 3D folding flaps.
   - Side mechanical notch cuts and center hairline divider groove.
   - Cycles through key Staff PM assertions (`Staff B2B Product Manager`, `Engineering Manager → PM`, `SMB Developer Platform Lead`) with spring physics and staggered word foldovers.
2. **Header Integration:**
   - Replaced static `h1` in `page.tsx` with `<RetroClockFoldover />`.

## Next

- Verify responsive line wraps and smooth frame rates across mobile devices.
