# Beginner bcard Design System Integration

**Date:** 2026-08-25  
**Tags:** #ui #design-system #beginner-bcard #fintech #staff-pm

## Context

Ported and applied the authentic **Beginner `bcard`** card design system from the `beginner` repository (`/Users/tylerlindow/repos/beginner/ui/public/wallet/` & `mosh/index.html`) to the Lindow Wallet cards in `TractionTimeline.tsx`.

## Reflections

- The Beginner `bcard` layout features:
  - Exact `1.586 / 1` credit card aspect ratio with `rounded-[20px]` and 22px padding.
  - Linear sheen highlight (`linear-gradient(120deg, transparent 38%, rgba(255,255,255,0.12) 50%, transparent 62%)`) with radial brand color washes.
  - Top row: Company brand mark + Fraunces display font wordmark on the left, cardholder name (`Tyler Lindow`) on the right.
  - Bottom row: Masked card number (`•••• 2024`, tabular nums) on the left, network kind (`debit`, `founder`, `resident`, etc.) and amount/volume summary on the right.
- Back face features a 3D interactive flip displaying individual GMV line items and a direct LinkedIn verification trigger.

## Decisions

1. **Integrated `bcard` Design:** Replaced generic debit card frames with authentic Beginner `bcard` markup, proportions, typography (Fraunces display), and sheen overlays.
2. **Company Brand Colorways:**
   - **Beginner:** Signature Forest Green (`#3a6b4b` &rarr; `#2d5a3d` &rarr; `#234731`) with seed mark.
   - **Affirm:** Royal Blue (`#0047ff` &rarr; `#0030a8` &rarr; `#001a5e`).
   - **The Tech Interactive:** Emerald Teal (`#0d9488` &rarr; `#0f766e` &rarr; `#042f2e`).
   - **Galvanize Inc:** Energetic Orange (`#ea580c` &rarr; `#c2410c` &rarr; `#7c2d12`).
   - **Computer History Museum:** Royal Plum / Violet (`#6b21a8` &rarr; `#4c1d95` &rarr; `#2e1065`).

## Next

- Ready for user inspection.
