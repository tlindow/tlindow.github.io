# Update Enterprise & Partner Scale from $1B+ to $10B+

**Date:** 2026-08-25  
**Tags:** #metrics #gmv #branding #resume #scale #affirm

## Context
Across Tyler's marketing landing page, interactive resume, Firebase A/B testing presets, metadata, and public LLM context files, the flagship enterprise partner volume (notably the Amazon portfolio and strategic accounts at Affirm) was previously listed at `$1B+`. The target milestone and portfolio scope have now been updated to `$10B+` to accurately reflect enterprise scale.

## Reflections
- Elevating the partner portfolio and scale narrative from `$1B+` to `$10B+` reinforces senior engineering leadership and staff-level product authority.
- The cumulative transactional GMV in the wallet ledger and traction timeline smoothly advances to `$10.11B+ GMV`, maintaining precision across the composite milestones ($10B+ Amazon flagship + $100M+ enterprise SLAs + $10M+ SMB triage + $500K mobile perf + $400K tuition).

## Decisions
1. **Resume & Stat Cards:** Updated stat badges, business toolkits, Affirm DSE manager experience tags/bullets, and presentation module summaries from `$1B+` to `$10B+`.
2. **Timeline & Drawer Calculations:** Updated `TractionTimeline.tsx` line item badge, title, description, and total volume summary to `$10.11B+ GMV Handled`, and `CheckoutDrawer.tsx` scroll accumulator to `$10.11B+ GMV`.
3. **Hero & Metadata:** Updated default hero subtitle, page metadata, OpenGraph descriptions, and resume page metadata to `... $0 – $10B+ GMV enterprises` / `$10B+ partner portfolio scale`.
4. **Testing Presets & Docs:** Updated Firebase remote config variant presets, `ExperimentPreviewBar.tsx`, `FIREBASE_AB_TESTING_SETUP.md`, `README.md`, `context.json`, `llms.txt`, and `llms-full.txt`.

## Next
- Continue monitoring conversion telemetry on the hero presets with the updated scale positioning.
