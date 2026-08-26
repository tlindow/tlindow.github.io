# Company Debit Card Wallet with 3D Flip GMV Ledger

**Date:** 2026-08-25  
**Tags:** #ui #fintech #wallet #debit-cards #3d-flip #gmv-ledger #staff-pm

## Context

Transitioned from marketplace cards to a physical-inspired Fintech **Company Debit Card Wallet**. Each company experience is embodied as a realistic debit card (Affirm, Beginner, Galvanize, The Tech Interactive, Computer History Museum) that flips in 3D on click to reveal detailed GMV line items and career milestones.

## Reflections

- Transforming career experiences into company-branded debit cards (complete with EMV gold chips, contactless payment waves, masked numbers, and magnetic stripes) creates an unforgettable, thematic connection to Tyler's B2B fintech and developer platform background.
- Flipping the card in 3D to reveal the authenticated GMV line item ledger makes exploring each company's impact intuitive, tactile, and rewarding.

## Decisions

1. **Company Debit Card Metaphor:** Styled 5 distinctive company cards (CHM violet, The Tech emerald, Galvanize amber, Affirm deep indigo, Beginner rose).
2. **Realistic Front Face:** EMV metallic chip, contactless wave icon, cardholder name (`TYLER LINDOW`), masked card number, and expiration date.
3. **3D Interactive Flip (`preserve-3d`):** Smooth CSS 3D rotation (`rotateY(180deg)`) on click.
4. **Back Face GMV Ledger:** Magnetic stripe, CVV security hologram, total volume summary, detailed milestone line items, and direct LinkedIn verification link.

## Next

- Ready for user inspection.
