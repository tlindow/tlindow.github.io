# In-View Docked Bar with Scroll GMV Accumulation & Consistent Card Sizing

**Date:** 2026-08-25  
**Tags:** #ui #docked-bar #scroll-accumulation #gmv #launch-wallet #consistent-card-sizing #minimalism

## Context

1. Standardized debit card sizing in `TractionTimeline.tsx` to remain constant at `w-80` (`320px`) with `aspect-[1.586/1]` across desktop window resize operations, while maintaining `max-w-full` for smaller mobile viewports.
2. Mounted the sticky, in-view triggered `CheckoutDrawer.tsx` at the bottom of the screen that activates only when the Launch Wallet section is visible.
3. Connected the scroll progress through the Launch Wallet cards to real-time GMV accumulation ($400K &rarr; $10.4M+ &rarr; $110.4M+ &rarr; $1.11B+ GMV).
4. Positioned the accumulating GMV metric and primary "Recruit me" CTA button in the final right corner of the docked bar.
5. Removed the legacy site footer.

## Decisions

1. **Consistent Card Sizing:** Set card wrapper to `w-80 max-w-full shrink-0`, preventing cards from stretching into giant banners when resizing desktop windows while keeping proportional fit on mobile.
2. **Right-Corner Docked Bar:** Docked bottom bar with live scroll GMV accumulator and Recruit Me CTA, displayed exclusively when `#launch-wallet` is in view.

## Next

- Verified build and lint checks pass with 0 errors.
