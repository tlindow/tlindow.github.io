# Hero "View Launch Wallet" CTA

**Date:** 2026-08-26  
**Tags:** #ui #hero #cta #wallet #launch-wallet #navigation

## Context

1. Updated the primary Hero CTA button in `page.tsx`.
2. Changed the label from **"View Launch Credits"** to **"View Launch Wallet"**.
3. Changed the leading icon from `<Rocket />` to `<Wallet />`.
4. Maintained direct smooth scroll linking to `#launch-wallet` anchor.

## Reflections

- "View Launch Wallet" paired with the `<Wallet />` icon directly mirrors the "Launch Wallet" section heading and its interactive debit card ledger, creating visual and terminological consistency across the landing page.

## Decisions

1. **Hero Primary Action:** "View Launch Wallet" button featuring `<Wallet size={15} />` anchored to `#launch-wallet`.

## Next

- Continue telemetry monitoring of hero CTA engagement across variant styles.
