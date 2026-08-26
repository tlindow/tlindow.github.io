# 2026-08-25: Employer Wallet Flat Layout & Total GMV Footer

## Context
Transitioned Employer Wallet from a click-to-expand card model to a flat inline layout showing all company cards alongside their respective GMV line items directly on the page, with a combined total GMV metric displayed at the bottom.

## Decisions
1. **Flat Display over Click-to-Expand**: Removed all selection and modal/solo card state. All cards are rendered inline with cards left-aligned on desktop and GMV ledgers positioned directly on the right.
2. **Total GMV Metric**: Added aggregated volume `$1,174,900,000+ GMV` to the bottom bar, positioned to the left of the primary "Recruit me" LinkedIn trigger.
3. **Minimalist Header**: Removed `(X deliverables)` count text from the company ledger headers for a cleaner, minimalist layout.

## Reflections
Displaying all card profiles and their GMV attributions simultaneously provides immediate transparency across all 5 career milestones without requiring sequential clicking.

## Next
- Monitor performance and layout parity across various device viewports.
