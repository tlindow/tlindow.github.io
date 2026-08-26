# Developer Relationship Count Metrics & Bottom Drawer Subtotal

**Date:** 2026-08-25  
**Tags:** #ui #launch-wallet #checkout-drawer #developer-relationships #metrics #beginner-green #staff-pm #subtotal #enter-in-view

## Context

1. Attributed specific **Developer Relationship Counts** to non-GMV line items in the Launch Wallet experience ledger (`TractionTimeline.tsx`), maintaining pure GMV numbers on transactional items and authentic reach numbers on enablement/community initiatives.
2. Rendered non-GMV counts in bold monospace text matching the line items using the `X DEVs` format (without parentheses).
3. Redesigned the sticky bottom `CheckoutDrawer.tsx` into a receipt-style subtotal summary, featuring dynamically accumulating total of **Dev Relationships** in signature **Beginner green** (`#2d5a3d`) alongside **Attributed GMV** amounts aligned with the primary "Recruit Tyler" CTA button.
4. Upgraded scroll tracking in `CheckoutDrawer.tsx` to increment metrics **right when each card enters into view** (top edge crossing the bottom 85% of the viewport).

## Decisions

1. **Enter-in-View Card Detection:**
   - Evaluated `isInView(el, 0.85)` using `r.top <= windowHeight * 0.85`.
   - **`500+ DEVs`**: In view at start (Computer History Museum).
   - **`1,500+ DEVs`**: Increments instantly right when The Tech Interactive card enters into view.
   - **`$400K GMV`**: Unlocked right when Galvanize Inc enters into view.
   - **`2,500+ DEVs` & GMV Scale**: Increments right when Affirm enters into view, accumulating `$10.4M+` &rarr; `$110.4M+` &rarr; `$1.11B+ GMV`.
   - **`2,750+ DEVs`**: Increments right when Beginner enters into view.
2. **Bottom Drawer Subtotal Ledger:**
   - **Total Devs in Beginner Green:** Dynamically tracks enter-in-view progress (`500+ DEVs` &rarr; `1,500+ DEVs` &rarr; `2,500+ DEVs` &rarr; `2,750+ DEVs`) in `#2d5a3d` Beginner green.
   - **Attributed GMV:** Dynamically accumulates (`$400K GMV` &rarr; `$10.4M+ GMV` &rarr; `$110.4M+ GMV` &rarr; `$1.11B+ GMV`).
   - Responsive multi-metric flex container cleanly wrapped for mobile and desktop.

## Next

- Verified Next.js production build (`npm run build`) and ESLint (`npm run lint`) pass with 0 errors and 0 warnings.
