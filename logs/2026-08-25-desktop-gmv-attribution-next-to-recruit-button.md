# Move Final GMV Attribution Next to Recruit Me Button on Desktop

**Date:** 2026-08-25  
**Tags:** #ui #layout #launch-wallet #gmv-attribution #cta #desktop-design

## Context

Adjusted the bottom footer summary container of the Launch Wallet section (`TractionTimeline.tsx`) so that the final attributed GMV figure is positioned directly adjacent to the "Recruit me" CTA button on desktop screen sizes.

## Reflections

- Previously, the summary bar used `justify-between` on desktop and stacked vertically on mobile.
- Grouping the metric immediately next to the primary action button (`justify-end gap-3 sm:gap-6`) across both mobile and desktop provides strong, consistent contextual reinforcement for recruiters and hiring managers right at the moment of conversion on all viewport widths.
- Proportional text scaling (`text-[11px] sm:text-xs` and `text-sm sm:text-lg`) ensures the pair fits neatly on mobile viewports while retaining visual punch.

## Decisions

1. **Unified Responsive Layout:** Changed bottom wrapper to `flex flex-row flex-wrap items-center justify-end gap-3 sm:gap-6 pt-6 border-t border-border/60`.
2. **Telemetry Alignment:** Kept `logRecruitClick` with `location: "launch_wallet"`.

## Next

- Verified build and lint checks pass.
- Pushed changes to `main` branch to trigger GitHub Actions deployment.
