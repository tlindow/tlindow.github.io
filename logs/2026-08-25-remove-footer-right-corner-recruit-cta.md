# Remove Footer and Anchor Recruit CTA in Final Right Corner

**Date:** 2026-08-25  
**Tags:** #ui #layout #minimalism #cta #launch-wallet #footer-removal

## Context

Removed the legacy bottom site footer component from `page.tsx` so the Launch Wallet's combined `Attributed GMV: $1.11B+ GMV` metric and `Recruit me` CTA button anchor the final bottom-right corner of the experience.

## Reflections

- Eliminating the redundant footer component simplifies the visual flow of the landing page, allowing the Launch Wallet section to serve as the definitive closing statement.
- The adjacent GMV badge and Recruit button in the bottom right corner provide an ultra-clean, action-oriented termination point without unnecessary duplicate links.

## Decisions

1. **Footer Removal:** Removed `<footer>` from `page.tsx` along with unused outbound telemetry imports on that route.
2. **Launch Wallet Termination:** The Launch Wallet section (`TractionTimeline.tsx`) now closes the page cleanly, with the bottom row aligned to the right (`justify-end`).

## Next

- Verified build and lint checks pass.
- Deployed to production via GitHub Actions.
