# Update Subtitle Tagline to "B2B SaaS on Builder-safe GenAI Rails"

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #b2b #saas #builder-safe #genai #rails

## Context
Updated the primary subtitle tagline to **`"B2B SaaS on Builder-safe GenAI Rails"`** across page subtitles, resume contact info, metadata, and Firebase A/B testing presets.

## Reflections
- `"B2B SaaS on Builder-safe GenAI Rails"` captures developer empowerment, safety rails, and enterprise reliability while maintaining forward momentum on GenAI enablement.

## Decisions
1. **Resume Contact Subtitle:** Updated `resumeContact.subtitle` in `resumeData.ts` to `"B2B SaaS on Builder-safe GenAI Rails"`.
2. **Hero Subtitle & Remote Config:** Updated `page.tsx` default subtitle and `remoteConfig.ts` baseline preset to `"B2B SaaS on Builder-safe GenAI Rails · $0 – $10B+ GMV enterprises"`.
3. **Metadata & OpenGraph:** Updated `layout.tsx` and `resume/page.tsx` descriptions to reference `"B2B SaaS on Builder-safe GenAI Rails"`.
4. **Sanitization:** Added sanitization guards against legacy `"B2B SaaS on Safe, GenAI Rails"` values in `remoteConfig.ts` and `page.tsx`.
