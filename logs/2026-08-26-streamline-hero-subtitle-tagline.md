# Streamline Hero Subtitle Tagline to "B2B SaaS on curiosity-safe, GenAI Rails"

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #remote-config

## Context
Trimmed the hero subtitle variant to only the primary tagline (`"B2B SaaS on curiosity-safe, GenAI Rails"`), removing the trailing ` · $0 – $10B+ GMV enterprises` segment so it remains punchy and naturally fits on a single line across viewports.

## Reflections
- A single concise tagline creates higher visual focus on the core value proposition and pairs cleanly with the role line below ("Software Engineering Manager <> PM").

## Decisions
1. **Remote Config Preset:** Updated `baseline` preset `hero_subtitle_variant` to `"B2B SaaS on curiosity-safe, GenAI Rails"`.
2. **Sanitization:** Added sanitization guards against previous values containing `"$0 – $10B+ GMV enterprises"` in `remoteConfig.ts` and `page.tsx`.
3. **Hero Subtitle:** Updated `page.tsx` default `displaySubtitle` to `"B2B SaaS on curiosity-safe, GenAI Rails"`.
