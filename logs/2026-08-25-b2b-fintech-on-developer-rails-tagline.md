# Updated Hero Subtitle Tagline to "B2B Fintech on Developer Rails" & Sanitized Remote Config

**Date:** 2026-08-25  
**Tags:** #ui #copywriting #hero #tagline #fintech #developer-rails #remote-config #sanitization

## Context

1. Updated the primary hero subtitle and metadata tagline from `"B2B at B2C scale"` to **`"B2B Fintech on Developer Rails"`**.
2. Resolved an issue where Firebase Remote Config client-side hydration was fetching a stale legacy string from the Firebase server (`"B2B at B2C scale"`), causing the page to flash the new text and then revert on hydration.
3. Added sanitization logic in both `remoteConfig.ts` (`getRemoteConfigValues`) and `page.tsx` (`displaySubtitle`), guaranteeing that stale cached values automatically resolve to the canonical `"B2B Fintech on Developer Rails · $0 – $1B+ GMV enterprises"`.

## Decisions

- **Headline Alignment:** The hero headline `"Staff B2B Product Manager"` is now permanently paired with `"B2B Fintech on Developer Rails · $0 – $1B+ GMV enterprises"`.
- **Cache Invalidation Safeguard:** Any incoming remote config payload matching legacy patterns (`"B2B at B2C scale"`, `"B2B at B2B scale"`) is superseded by the updated tagline.

## Next

- Verified Next.js production build (`npm run build`) and ESLint (`npm run lint`) pass with 0 errors and 0 warnings.
