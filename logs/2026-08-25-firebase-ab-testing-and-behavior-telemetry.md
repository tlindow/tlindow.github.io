# Firebase A/B Testing & User Behavior Telemetry

**Date:** 2026-08-25  
**Tags:** #firebase #analytics #ab-testing #remote-config #telemetry #conversion-rate-optimization #recruit-me #nextjs

## Context

Implemented Google Firebase Analytics and Firebase Remote Config client-side infrastructure to measure user behavior and run live A/B testing experiments on `tlindow.github.io`, specifically targeting conversion optimization for the primary **"Recruit Me"** CTA button connecting to Tyler's LinkedIn profile.

## Reflections

- A high-craft personal product page benefits from empirical measurement of visitor intent, scroll depth, and interaction patterns.
- By integrating Firebase Remote Config alongside Firebase Analytics, copy experiments (e.g., `"Recruit Me"` vs. `"Deploy Tyler"` vs. `"Connect on LinkedIn"`) and visual styling tests (solid forest vs. pulsing accent) can be activated directly from the Firebase Console without requiring code redeployments.
- Ensuring zero layout shift and flawless graceful fallback when running in local development (or when ad-blockers intercept third-party analytics) maintains the craft and performance of the static Next.js site.

## Decisions

1. **Firebase Architecture (`site/src/lib/firebase/`):**
   - **Configuration (`config.ts`):** Environment-driven initialization with safety guards against SSR and unconfigured environments.
   - **Analytics & Telemetry (`analytics.ts`):** Strongly typed event tracking for `recruit_me_click` (with location attribution for `navbar`, `hero`, `floating_trigger`, and `footer`), `resume_view`, `skills_marketplace_interaction`, `scroll_depth`, `outbound_click`, and `resume_copy_markdown`. Includes console debugging in local development mode.
   - **Remote Config & A/B Variants (`remoteConfig.ts`):** Dynamic parameter fetching with sensible defaults (`recruit_cta_label`, `recruit_cta_style`, `hero_headline_variant`, `hero_subtitle_variant`).
2. **Unified React Context Provider (`AnalyticsProvider.tsx`):**
   - Wrapped Next.js App Router root layout to initialize Firebase, monitor route changes for page views, track passive scroll-depth milestones (25%, 50%, 75%, 100%), and expose convenient `useAnalytics()` and `useExperiment()` hooks.
3. **Component Instrumentation:**
   - **`Navbar.tsx`:** Instrumented persistent CTA button with dynamic copy/style and click tracking, plus outbound link telemetry.
   - **`page.tsx`:** Instrumented Hero H1/subtitle, primary CTA, Skills Marketplace carousel navigation (`scroll_left`/`scroll_right`), sort by GMV toggle, footer links, and the bottom-right floating trigger.
   - **`SpaceMonoResume.tsx`:** Added telemetry for PDF download/print, clipboard markdown copy, and outbound connections.
4. **Documentation & Runbook:**
   - Created `site/.env.example` and `site/docs/FIREBASE_AB_TESTING_SETUP.md` detailing step-by-step setup in Firebase Console.

## Next

- Provide Firebase credentials in `.env.local` and configure repository secrets in GitHub Actions.
- Launch the first Remote Config A/B testing experiment in Firebase Console to evaluate `"Deploy Tyler"` vs. `"Recruit Me"` CTA conversion rates.
