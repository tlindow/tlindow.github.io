# AI Knowledge Base — Universal Prompt Bar

**Date:** 2026-08-18  
**Tags:** #ai #rag #prompts #llms-txt #minimalism #tinker #marketing-site

## Context

Updated the command bar in [Hero.tsx](file:///Users/tylerlindow/repos/tlindow/site/src/components/Hero.tsx) so it functions directly as an **AI prompt** rather than a shell `curl` command.

## Reflections

- A natural-language prompt referencing `/llms.txt` works seamlessly across all AI interfaces (Gemini, Claude, ChatGPT, Cursor, Copilot, Antigravity, Raycast AI, terminal LLMs).
- When pasted into any AI assistant, the model automatically fetches the canonical `/llms.txt` and provides a complete, grounded answer about Tyler's background, ventures, and keynote.

## Decisions

1. **Universal AI Prompt Box** — Formatted as:
   ```
   > Read https://tlindow.github.io/llms.txt and tell me about Tyler Lindow
   ```
2. **1-Click Copy with Feedback** — Clicking the box or the button copies the prompt directly to the clipboard with an instant *"Copied"* badge.
3. **Clean Developer Subtext** — *"Paste in your favorite AI"*.
