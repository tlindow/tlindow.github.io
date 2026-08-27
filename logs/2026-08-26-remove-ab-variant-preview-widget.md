# Remove A/B Variant Preview Widget from Site

**Date:** 2026-08-26  
**Tags:** #firebase #remote-config #ab-testing #ui-cleanup #analytics #dashboard

## Context

Removed the floating client-side A/B testing preview widget (`ExperimentPreviewBar.tsx`) from the site so that A/B experiments and parameter variants are managed and controlled directly from Google's Firebase Console dashboard.

## Reflections

- Having client-side interactive preview widgets is helpful during initial scaffolding, but on a production marketing site, variant assignments should be governed purely by remote server configurations and Google Firebase Console experiments.
- Removing the floating widget cleans up the viewport and avoids visual clutter above the persistent checkout drawer.

## Decisions

1. **Deleted `ExperimentPreviewBar.tsx`:** Removed the floating toolbar component and its references.
2. **Cleaned up `page.tsx`:** Removed the import and invocation of `ExperimentPreviewBar`.
3. **Preserved Remote Config & Analytics:** Maintained the full Google Firebase Remote Config dynamic fetching and Google Analytics telemetry engine. URL parameter testing (`?variant=...`) remains available for manual checks.
4. **Updated Documentation:** Refreshed `site/docs/FIREBASE_AB_TESTING_SETUP.md`.
5. **Suppressed Next.js Dev Indicator Widget:** Added `devIndicators: false` in `next.config.ts` to hide the development badge/overlay during local development.

## Next

- Manage live A/B testing experiments and parameter rollouts directly via Google Firebase Console.
