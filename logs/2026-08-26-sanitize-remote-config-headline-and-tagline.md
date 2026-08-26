# Sanitize Firebase Remote Config Stale Headline and Subtitle Variants

**Date:** 2026-08-26  
**Tags:** #firebase #remote-config #ab-testing #bugfix #state #headline #sanitization

## Context
When loading the site, Firebase Remote Config fetched previously stored legacy parameter values from remote servers/IndexedDB cache (such as `"Staff B2B Product Manager"` and `"Staff Developer Product Manager"`), causing the hero display headline to briefly render the updated local default before flipping back to the legacy string.

## Reflections
- Client-side remote configuration caches require strict sanitization guards against legacy values when canonical headings are updated across the codebase.

## Decisions
1. **Remote Config Sanitization:** Updated `getRemoteConfigValues()` in `remoteConfig.ts` to sanitize any legacy headline containing `"Staff"` or outdated titles and route them to `DEFAULT_REMOTE_CONFIG.hero_headline_variant` (`"Fintech Eng Product Manager"`).
2. **Page-Level Fallback:** Added `displayHeadline` sanitization in `page.tsx` ensuring that even if an asynchronous state update delivers a legacy value, the display H1 remains firmly locked to `"Fintech Eng Product Manager"`.
3. **Subtitle Sanitization:** Added matching sanitization for `"B2B Fintech on DevX Rails"` and `"B2B Fintech on Developer Rails"` to automatically resolve to `"B2B Scale on DevX Rails · $0 – $10B+ GMV enterprises"`.
4. **Preset Synchronization:** Updated all variant presets in `remoteConfig.ts` and descriptions in `ExperimentPreviewBar.tsx`.

## Next
- Verify stable rendering in production without any hydration or remote fetch flash.
