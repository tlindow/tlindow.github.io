# Developer Relationship Count Metrics & Bottom Drawer Subtotal

**Date:** 2026-08-25  
**Tags:** #ui #launch-wallet #checkout-drawer #developer-relationships #metrics #staff-pm #subtotal #enter-in-view

## Context

1. Attributed specific **Developer Relationship Counts** to non-GMV line items in the Launch Wallet experience ledger (`TractionTimeline.tsx`), maintaining pure GMV numbers on transactional items and authentic reach numbers on enablement/community initiatives.
2. Rendered non-GMV counts in bold monospace text matching the line items using the `X DEVs` format (without parentheses).
3. Updated exact developer metrics:
   - **The Tech Interactive (Exhibit):** `3 DEVs`
   - **The Tech Interactive (Google Curriculum):** `100 DEVs`
   - **Galvanize Inc (`Developer Onboarding`):** `20 DEVs` (with `$400K GMV`)
   - **Galvanize Inc (`Multi-Repo Grading & Empathetic Code Reviews`):** `20 DEVs`
   - **Affirm (Paved Paths):** `7 DEVs`
   - **Beginner (PWA):** `20 DEVs`
   - **Beginner (Community):** `27 DEVs`
4. Redesigned the sticky bottom `CheckoutDrawer.tsx` into a receipt-style subtotal summary, featuring dynamically accumulating total of **Dev Relationships** in signature **Beginner green** (`#2d5a3d`) alongside **Attributed GMV** amounts aligned with the primary "Recruit Tyler" CTA button.
5. Configured enter-in-view scroll tracking so totals increment right when each card enters the viewport.

## Decisions

1. **Exact Developer Metrics per Non-GMV Line Item:**
   - **CHM:** `500+ DEVs`
   - **The Tech Interactive:** `3 DEVs` / `100 DEVs`
   - **Galvanize Inc:** `20 DEVs` (alongside `$400K GMV`) / `20 DEVs`
   - **Affirm (Paved Paths):** `7 DEVs`
   - **Beginner:** `20 DEVs` / `27 DEVs`
2. **Bottom Drawer Subtotal Ledger:**
   - **Total Devs in Beginner Green:** Dynamically tracks enter-in-view progress:
     - `500+ DEVs` (CHM)
     - `603+ DEVs` (The Tech Interactive)
     - `623+ DEVs` (Galvanize Inc)
     - `630+ DEVs` (Affirm)
     - `677+ DEVs` (Beginner)
   - **Attributed GMV:** Dynamically accumulates (`$400K GMV` &rarr; `$10.4M+ GMV` &rarr; `$110.4M+ GMV` &rarr; `$1.11B+ GMV`).

## Next

- Verified Next.js production build (`npm run build`) and ESLint (`npm run lint`) pass with 0 errors and 0 warnings.
