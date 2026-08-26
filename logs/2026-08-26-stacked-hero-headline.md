# Stacked Hero Headline Layout: Fintech / Eng-Product / Manager

**Date:** 2026-08-26  
**Tags:** #ui #typography #hero #headline #layout

## Context
Updated the primary hero `<h1>` display header to stack each word cleanly on its own line:
```
Fintech
Eng-Product
Manager
```

## Decisions
1. **Vertical Word Stacking:** Formatted the `<h1>` in `page.tsx` with a flex-column layout mapping over the headline words (`displayHeadline.split(/\s+/)`), rendering each as a block span (`Fintech`, `Eng-Product`, `Manager`) centered with massive display font scaling.
