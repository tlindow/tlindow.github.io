# Remove GMV from Museum Cards and Developer Paved Paths

**Date:** 2026-08-25  
**Tags:** #ui #data-integrity #employer-wallet #metrics #affirm #museums

## Context

Refined the Employer Wallet in `TractionTimeline.tsx` to remove GMV numbers from non-transactional museum experience cards (Computer History Museum and The Tech Interactive) as well as the Developer Paved Paths initiative at Affirm.

## Reflections

- Educational workshop delivery, museum exhibits, and developer productivity tooling focus on scale of engagement, student reach, and onboarding velocity rather than direct GMV attribution.
- Reserving GMV metrics for enterprise partner portfolio scale ($1B+ Amazon), merchant reliability ($100M+ SLA telemetry), SMB partner triage ($10M+), mobile performance (+$500K), and Hack Reactor tuition ($400K) sharpens revenue narrative precision while keeping developer enablement focused on reach.

## Decisions

1. **Computer History Museum & The Tech Interactive:** Removed `$1M GMV` (CHM) and `$8M / $5M GMV` (The Tech Interactive) metrics.
2. **Affirm Developer Paved Paths:** Removed `$50M GMV` attribution from the Developer Paved Paths line item.
3. **Total Attributed GMV:** Updated the aggregated wallet footer metric to `$1.11B+ GMV` reflecting the adjusted transactional total ($1.1109B).
4. **Conditional Metric Render:** Rendered line item right-hand labels conditionally so items without GMV/stage tags render cleanly without empty elements.

## Next

- Verified build and deployed to production.
