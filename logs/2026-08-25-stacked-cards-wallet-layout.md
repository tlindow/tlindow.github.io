# Stacked Cards Wallet Layout

**Date:** 2026-08-25  
**Tags:** #ui #wallet #stacked-cards #apple-wallet #3d-flip #staff-pm

## Context

Arranged the company cards into a physical/Apple Wallet-style **vertical stacked deck** in `TractionTimeline.tsx`.

## Reflections

- Stacking the cards vertically with overlapping negative margins (`mt-[-140px]`) and layered z-indexes creates an authentic wallet deck experience.
- Hovering any card elevates it smoothly (`-translate-y-6`, `scale-[1.01]`), and clicking any card elevates it to `z-50` with a 3D flip revealing its GMV line items.

## Decisions

1. **Vertical Stacked Deck:** Positioned the 5 cards overlapping in a single column (`max-w-xl mx-auto`).
2. **Dynamic Hover & Focus States:** Elevated hover and flip z-indexes so the active card is always unobstructed.
3. **Preserved Beginner `bcard` Design & 3D Flip:** Full authenticity with Fraunces typography, sheen reflection, and back-side GMV ledger.

## Next

- Ready for user inspection.
