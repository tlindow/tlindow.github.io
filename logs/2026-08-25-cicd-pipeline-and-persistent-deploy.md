# CI/CD Pipeline Structure & Persistent Deploy Button

**Date:** 2026-08-25  
**Tags:** #ui #cicd-pipeline #deploy #linkedin #navbar #product-management #staff-pm #engineering

## Context

Restructured the website into an explicit developer-first **CI/CD Pipeline narrative** (`stage: 01_build` → `stage: 02_test` → `stage: 03_telemetry` → `stage: 04_specs` → `stage: 05_artifacts` → `stage: 06_deploy`), removed all navigation tabs from the top navbar, and introduced a persistent **Deploy** button linking directly to Tyler's LinkedIn profile.

## Reflections

- A CI/CD pipeline narrative is the ideal mental model for communicating a Staff Developer Product Manager's impact to engineering leadership, founders, and executive hiring teams.
- Removing traditional nav tabs simplifies the top shell, placing immediate focus on Tyler's identity, role title, and the persistent green-pulsing **Deploy** trigger.
- Anchoring the 4 core metrics into `stage: 02_test` as 4 passed assertion test cases provides a technical framing for commercial and operational milestones ($1B+ portfolio scale, Amazon SLA backbone, +$500K GMV lift, and the Affirm/Stripe acquisition thesis).

## Decisions

1. **Top Navbar Simplification & Persistent Deploy Button:**
   - Deleted all previous navigation tabs (`Overview`, `Capabilities`, etc.).
   - Added persistent `Deploy` button in the navbar with an active green pulsing status indicator linking to `https://www.linkedin.com/in/tlindow`.
   - Added floating bottom-right persistent `Deploy` button across all scroll positions.
2. **CI/CD Pipeline Architecture (`page.tsx`):**
   - **Pipeline Header:** `pipeline: staff-developer-pm.yml` · `status: passed` · `target: Seattle / Remote` · Display H1: **Staff Developer Product Manager**.
   - **Stage 01 (`build`):** Foundations & Cognitive Modeling (Deep Atlas AI Residency, Northwestern Learning Sciences, UCSD NanoEngineering).
   - **Stage 02 (`test`):** Integration & Stress Testing with 4 test assertions (300+ integration resolutions, Amazon SLA backbone, merchant referral moat, Affirm/Stripe thesis).
   - **Stage 03 (`telemetry`):** Production benchmarks ($1B+ scale, +$500K GMV lift, 1→6 team scaling, 300+ integrations) and platform unlocks.
   - **Stage 04 (`specs`):** Runtime specifications & toolkits (AI & Agentic, Full-Stack, Cloud/SRE, GTM Leadership).
   - **Stage 05 (`artifacts`):** Reverse-chronological deployment logs (Beginner, Affirm L7, Affirm L6->L7, Affirm L4->L5, Galvanize, Tech Interactive, CHM).
   - **Stage 06 (`deploy`):** Production deployment trigger linking to LinkedIn with secondary PDF runbook export.
3. **Print & PDF Preservation:**
   - Strict 2-page print sheet architecture in `ResumePage` for `@media print` and PDF downloads.

## Next

- Monitor telemetry and ecosystem developments as new milestones emerge.

## Typography Alignment: Strict Space Mono Font Enforcement

- Replaced all remaining instances of `font-sans` with `font-mono` across the header, navigation, CI/CD pipeline stages, timeline test assertions, telemetry benchmarks, deployment logs, and print sheets.
- Ensured total visual harmony and brand continuity in authentic Space Mono monospace typography.
