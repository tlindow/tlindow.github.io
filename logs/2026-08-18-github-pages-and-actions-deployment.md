# GitHub Pages CI/CD & GitHub Copilot Integration

**Date:** 2026-08-18  
**Tags:** #infrastructure #github-actions #github-pages #copilot #nextjs #static-export

## Context

To establish a zero-cost, automated deployment pipeline for Tyler's personal website and Lindow Labs brand hub (`lindowlabs.github.io`), we migrated the deployment strategy from custom cloud infrastructure to GitHub Pages powered by GitHub Actions. We also introduced repository-level configuration for GitHub Copilot.

## Reflections

- Next.js 16 with static export (`output: 'export'`) completely eliminates the need for any proprietary hosting platform (like Vercel).
- Pure static HTML/CSS/JS export delivers unbeatable latency, zero cold starts, and 100% free hosting with automatic HTTPS on GitHub Pages.
- Equipping the repository with custom instructions (`.github/copilot-instructions.md`) ensures that GitHub Copilot Free/Pro adheres directly to the design aesthetic, Framer Motion conventions, and repository standards without drifting into boilerplate anti-patterns.

## Decisions

1. **Configured `output: 'export'` in `site/next.config.ts`** — Configured unoptimized image handling and static page generation. All routes (`/`, `/brand`, `404`) prerender statically into `site/out/`.
2. **Created `.github/workflows/deploy.yml`** — Automated GitHub Actions workflow using official GitHub Pages actions (`actions/upload-pages-artifact` & `actions/deploy-pages`) triggered on every push to `main`.
3. **Created `.github/copilot-instructions.md`** — Documented architectural patterns, tech stack rules, and design guidelines for Copilot.

## Next

- Create the `lindowlabs` organization on GitHub (or configure custom domain mapping under `tlindow`).
- In GitHub repository settings -> **Pages**, ensure the Source is set to **GitHub Actions**.
