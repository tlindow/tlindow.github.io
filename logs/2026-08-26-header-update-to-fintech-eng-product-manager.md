# Update Header to "Fintech Eng Product Manager"

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #header #fintech #product-management #eng-pm

## Context
Updated the primary hero header, top navigation identity subline, metadata, resume data, and A/B test defaults from previous Staff B2B / Developer PM designations to **`"Fintech Eng Product Manager"`**.

## Reflections
- `"Fintech Eng Product Manager"` bridges technical engineering leadership and commercial fintech product ownership clearly and directly.

## Decisions
1. **Hero Headline & Remote Config Presets:** Updated `VARIANT_PRESETS.baseline.hero_headline_variant` and `VARIANT_PRESETS.low_friction.hero_headline_variant` in `remoteConfig.ts` to `"Fintech Eng Product Manager"`.
2. **Top Navigation Identity:** Updated `Navbar.tsx` identity subtitle to `"Fintech Eng Product Manager"`.
3. **Resume & Contact Data:** Updated `resumeData.ts` and `SpaceMonoResume.tsx` to `"Fintech Eng Product Manager"`.
4. **Metadata & OpenGraph:** Updated `layout.tsx` title, OpenGraph title, and JSON-LD schema `jobTitle` to `"Fintech Eng Product Manager"`.
5. **AI Profile & Markdown:** Updated `llms.txt`, `llms-full.txt`, `context.json`, and `README.md`.

## Next
- Continue monitoring engagement and conversion telemetry with the Fintech Eng Product Manager framing.
