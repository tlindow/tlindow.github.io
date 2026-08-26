# Move Final GMV Attribution Next to Recruit Me Button on Desktop

**Date:** 2026-08-25  
**Tags:** #ui #layout #launch-wallet #gmv-attribution #cta #desktop-design

## Context

Adjusted the bottom footer summary container of the Launch Wallet section (`TractionTimeline.tsx`) so that the final attributed GMV figure is positioned directly adjacent to the "Recruit me" CTA button on desktop screen sizes.

## Reflections

- Previously, the summary bar used `justify-between`, pushing the `Attributed GMV: $1.11B+ GMV` metric to the extreme left and the "Recruit me" button to the far right.
- Grouping the metric immediately next to the primary action button (`sm:justify-end gap-6`) provides strong contextual reinforcement for recruiters and hiring managers right at the moment of conversion.
- On mobile devices, the elements stay cleanly stacked and centered (`flex-col items-center gap-4`).

## Decisions

1. **Desktop Layout:** Changed bottom wrapper to `flex flex-col sm:flex-row items-center sm:justify-end gap-4 sm:gap-6 pt-6 border-t border-border/60`.
2. **Telemetry Alignment:** Updated the click handler on the wallet footer's "Recruit me" button to use `logRecruitClick` with `location: "launch_wallet"`.

## Next

- Verified build and lint checks pass.
- Pushed changes to `main` branch to trigger GitHub Actions deployment.
