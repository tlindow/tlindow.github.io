# Launch Wallet Uniform Desktop Card Dimensions & Metrics Update

**Date:** 2026-08-26  
**Tags:** #ui #launch-wallet #cards-grid #metrics-update #fixed-dimensions #desktop-consistency

## Context

Standardized the card dimensions across all desktop screen viewports so the grid cards remain the exact same physical size (340px width with standard 1.586/1 debit card aspect ratio) rather than expanding or shrinking across varying desktop screen widths.

## Reflections

- Enforcing a fixed desktop card width (`w-[340px]`) ensures consistent visual weight, typography proportions, and spacing across all laptop, desktop, and ultra-wide displays.
- On mobile devices, cards scale fluidly (`w-full max-w-[340px] mx-auto`) to fit smaller viewports without overflowing.

## Decisions

1. **Fixed Desktop Sizing:** Set `sm:w-[340px]` on all cards in the grid.
2. **Updated Metrics:**
   - **Computer History Museum:** `500+ young developers educated`
   - **The Tech Interactive:** `1000+ young engineers inspired`
   - **Galvanize:** `$400k revenue & 20 developers onboarded`
   - **Affirm:** `10.11B+ GMV & 300+ developers supported`
   - **Beginner:** `27 tech founders understood`

## Next

- Ready for deployment or user review.
