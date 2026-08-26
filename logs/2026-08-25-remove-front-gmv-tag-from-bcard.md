# Remove Front GMV Tag from bcard

**Date:** 2026-08-25  
**Tags:** #ui #bcard #clean-front #gmv-on-back #staff-pm

## Context

Removed the GMV / volume tag and "flip for GMV" button from the front face of the Beginner `bcard` components in `TractionTimeline.tsx`, strictly aligning with the authentic clean card face in the `beginner` repo.

## Reflections

- The authentic Beginner `bcard` layout keeps the front face clean: brand mark + wordmark on top left, cardholder name on top right, masked card number on bottom left, and card kind (`debit`, `founder`, `resident`, etc.) with issuer wordmark on bottom right.
- Detailed GMV line items, deliverables, and total volume summaries live exclusively on the back face of the card when clicked/flipped.

## Decisions

1. **Front Face Purity:** Removed all GMV and flip tags from the front face.
2. **Back Face GMV Ledger:** Maintained the full 3D-flip GMV line items ledger with project details and LinkedIn verification.

## Next

- Ready for user inspection.
