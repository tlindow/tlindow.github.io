# GitHub Special Profile Repository Transformation

**Date:** 2026-08-25  
**Tags:** #github #profile #branding #staff-pm #portfolio #technical-profile

## Context

When visitors navigated to `https://github.com/tlindow` while logged out, GitHub masked private organizational contributions (from Affirm and private startup repos) with "Private activity" placeholders and an empty repository overview.

## Reflections

- Technical recruiters and hiring managers who check GitHub profiles while unauthenticated or from mobile browsers often see an empty contribution graph if an engineer's primary output lives in private enterprise repositories.
- GitHub's Special Profile Repository feature (`username/username`) allows displaying a comprehensive Markdown showcase directly on the profile homepage (`github.com/tlindow`), ensuring every visitor immediately sees the engineer's technical narrative, quantified impact, and system stack regardless of auth state.

## Decisions

1. **Created Special Profile Repository (`tlindow/tlindow`):**
   - Created and published `https://github.com/tlindow/tlindow` as a public repository.
   - Pushed the comprehensive Staff Developer Product Manager `README.md` featuring:
     - Profile positioning and contact telemetry.
     - Product vision statement.
     - Quantified career milestones across Beginner and Affirm (L4 → L7).
     - Live interactive site quickstart and LLM/RAG endpoints.
2. **Profile Homepage Integration:**
   - With `tlindow/tlindow` active, `https://github.com/tlindow` immediately renders the complete technical resume at the top of the profile page for all logged-in and logged-out visitors.

## Next

- Optionally pin public showcase repositories (such as `tlindow.github.io` and AI/canvas prototypes) in GitHub's profile customization settings to populate the "Pinned" section below the README.
