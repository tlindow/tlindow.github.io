# Update Subtitle Tagline to "B2B SaaS on Safe, GenAI Rails"

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #b2b #saas #safety #genai #rails

## Context
Updated the primary subtitle tagline from `"B2B SaaS on GenAI Rails"` to **`"B2B SaaS on Safe, GenAI Rails"`** across page subtitles, resume contact info, metadata, and Firebase A/B testing presets.

## Reflections
- `"B2B SaaS on Safe, GenAI Rails"` reinforces high enterprise trust, guardrails, and reliability while maintaining an aggressive innovation posture on generative AI and modern developer rails.

## Decisions
1. **Resume Contact Subtitle:** Updated `resumeContact.subtitle` in `resumeData.ts` to `"B2B SaaS on Safe, GenAI Rails"`.
2. **Hero Subtitle & Remote Config:** Updated `page.tsx` default subtitle and `remoteConfig.ts` baseline preset to `"B2B SaaS on Safe, GenAI Rails · $0 – $10B+ GMV enterprises"`.
3. **Metadata & OpenGraph:** Updated `layout.tsx` and `resume/page.tsx` descriptions to reference `"B2B SaaS on Safe, GenAI Rails"`.
4. **Sanitization:** Added sanitization guards against legacy `"B2B SaaS on GenAI Rails"` values in `remoteConfig.ts` and `page.tsx`.
