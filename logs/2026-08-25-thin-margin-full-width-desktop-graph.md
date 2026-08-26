# Thin-Margin Full-Width Desktop Graph

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #full-bleed #thin-margin #responsive #staff-pm

## Context

Expanded the Traction section layout so the desktop graph stretches edge-to-edge across the screen with very thin margins (`max-w-[98vw] / 96vw / 94vw` with `px-1 sm:px-2 md:px-3`).

## Reflections

- Allowing the scale curve to span the full viewport width makes the exponential climb to $1B+ Amazon and the $1T horizon immediately immersive and panoramic.
- Retaining centered `max-w-4xl` containers for the header and footer preserves typographic reading comfort while giving the data visualization maximum visual real estate.

## Decisions

1. **Full-Width Section Layout:** Set Traction container to `w-full max-w-[98vw] sm:max-w-[96vw] lg:max-w-[94vw] mx-auto`.
2. **Minimal SVG Padding:** Reduced SVG edge padding (`paddingX = 24`, `paddingRight = 70`) so the curve fills the width.
3. **Smart Tooltip Offsets:** Ensured edge popovers stay inside the viewport with adaptive alignment.

## Next

- Ready for user inspection.
