# Remove GMV Placeholders from Beginner Wallet Section

**Date:** 2026-08-25  
**Tags:** #ui #data-integrity #beginner #launch-wallet #staff-pm

## Context

Removed GMV stage placeholders (`0 → 1 Launch` and `Community Hub`) and `cardKind: "GMV"` from the Beginner section in `TractionTimeline.tsx` so the line items display cleanly without placeholder volume tags.

## Decisions

1. **Removed Stage Placeholders:** Removed `stage: "0 → 1 Launch"` and `stage: "Community Hub"` from Beginner line items.
2. **Strict GMV Rendering:** Updated ledger rendering to only display the right-hand metric when `item.gmv` is explicitly present (preserving `$1B+ GMV`, `$100M+ GMV`, `$10M+ GMV`, `$500K GMV`, `$400K GMV`).
3. **Card Kind Badges:** Set `cardKind: ""` on non-transactional cards (Beginner, CHM, The Tech Interactive).

## Next

- Verified build and ready for deployment.
