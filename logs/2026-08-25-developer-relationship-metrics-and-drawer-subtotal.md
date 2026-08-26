# Developer Relationship Count Metrics & Bottom Drawer Subtotal

**Date:** 2026-08-25  
**Tags:** #ui #launch-wallet #checkout-drawer #developer-relationships #metrics #staff-pm #subtotal #responsive-stack #cta-proximity

## Context

1. Attributed specific **Developer Relationship Counts** to non-GMV line items in the Launch Wallet experience ledger (`TractionTimeline.tsx`), maintaining pure GMV numbers on transactional items and authentic reach numbers on enablement/community initiatives.
2. Rendered non-GMV counts in bold monospace text matching the line items using the `X DEVs` format (without parentheses).
3. Redesigned the sticky bottom `CheckoutDrawer.tsx` into a receipt-style subtotal summary, featuring dynamically accumulating total of **Dev Relationships** in signature **Beginner green** (`#2d5a3d`) alongside **Attributed GMV** amounts.
4. Positioned the stacked subtotal ledger **directly beside the Recruit CTA button** (`justify-end gap-3 sm:gap-6` and `items-end sm:items-center`), creating a cohesive, compact receipt block anchored in the right corner.

## Decisions

1. **Exact Developer Metrics per Non-GMV Line Item:**
   - **CHM:** `500+ DEVs`
   - **The Tech Interactive:** `3 DEVs` / `100 DEVs`
   - **Galvanize Inc:** `Developer Onboarding` (`$400K GMV`) / `20 DEVs`
   - **Affirm (Paved Paths):** `7 DEVs`
   - **Beginner:** `20 DEVs` / `27 DEVs`
2. **Close-Proximity Subtotal Alignment:**
   - **Desktop (`sm:`):** Side-by-side single row separated by a vertical border (`sm:divide-x sm:divide-border/60`), spaced neatly by `gap-6` beside the CTA button.
   - **Mobile / Narrow:** Stacks vertically into two tight lines aligned to the end (`items-end`), nestled right beside the CTA button (`gap-3`) with no wide empty gap.

## Next

- Verified Next.js production build (`npm run build`) and ESLint (`npm run lint`) pass with 0 errors and 0 warnings.
