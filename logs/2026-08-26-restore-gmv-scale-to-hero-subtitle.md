# Restore GMV Scale to Hero Subtitle

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #remote-config #scale

## Context
Restored the enterprise GMV scale descriptor (`· $0 – $10B+ GMV enterprises`) to the primary hero subtitle tagline, forming **`"B2B SaaS on curiosity-safe, GenAI Rails · $0 – $10B+ GMV enterprises"`**.

## Reflections
- With the header wrapper set to `max-w-5xl` and `sm:whitespace-nowrap`, the complete tagline and scale metric fit on a single line across desktop and tablet viewports without awkward wrapping.

## Decisions
1. **Remote Config Preset:** Updated `baseline` preset `hero_subtitle_variant` in `remoteConfig.ts` to `"B2B SaaS on curiosity-safe, GenAI Rails · $0 – $10B+ GMV enterprises"`.
2. **Hero Subtitle:** Updated `page.tsx` default `displaySubtitle` fallback to `"B2B SaaS on curiosity-safe, GenAI Rails · $0 – $10B+ GMV enterprises"`.
3. **Single-Line Layout:** Retained `max-w-5xl` container and `sm:whitespace-nowrap` on hero subtitle text element.
