# Update Subtitle Tagline to "B2B SaaS on GenAI Rails"

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #b2b #saas #genai #rails

## Context
Updated the primary subtitle tagline from `"B2B SaaS Scale on GenAI Rails"` to **`"B2B SaaS on GenAI Rails"`** across page subtitles, resume contact info, metadata, and Firebase A/B testing presets.

## Reflections
- `"B2B SaaS on GenAI Rails"` provides an even tighter, cleaner narrative hook pairing enterprise B2B SaaS leadership with cutting-edge GenAI tooling.

## Decisions
1. **Resume Contact Subtitle:** Updated `resumeContact.subtitle` in `resumeData.ts` to `"B2B SaaS on GenAI Rails"`.
2. **Hero Subtitle & Remote Config:** Updated `page.tsx` default subtitle and `remoteConfig.ts` baseline preset to `"B2B SaaS on GenAI Rails · $0 – $10B+ GMV enterprises"`.
3. **Metadata & OpenGraph:** Updated `layout.tsx` and `resume/page.tsx` descriptions to reference `"B2B SaaS on GenAI Rails"`.
4. **Sanitization:** Added sanitization guards against previous variations in `remoteConfig.ts` and `page.tsx`.
