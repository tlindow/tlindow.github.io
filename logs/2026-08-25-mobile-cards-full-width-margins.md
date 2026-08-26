# Mobile Cards Full-Width Margins

**Date:** 2026-08-25  
**Tags:** #ui #layout #mobile #launch-wallet #cards #responsive

## Context

Updated the card container in `TractionTimeline.tsx` so that debit cards on mobile expand to `w-full`, matching the standard page and section margins (`px-4 sm:px-6 md:px-8`) rather than staying constrained to a fixed 320px (`w-80`) centered block.

## Reflections

- On mobile viewports, having the cards fill the full container width aligns the left and right edges with the section header ("Launch Wallet"), the transaction ledgers, and the bottom GMV summary row.
- The `aspect-[1.586/1]` ratio scales card height proportionately on all mobile screen sizes.
- On desktop viewports (`md:`), cards remain fixed at `w-80` (`shrink-0`) sitting cleanly alongside the transaction ledger.

## Decisions

1. **Card Container Layout:** Changed card wrapper from `flex justify-center md:justify-start shrink-0` with `w-80` to `w-full md:w-80 md:shrink-0` with `w-full aspect-[1.586/1]`.
2. **Maintained Desktop Behavior:** Kept `md:w-80 md:shrink-0` on larger viewports.

## Next

- Verified build and lint checks pass.
- Deployed to production via GitHub Actions.
