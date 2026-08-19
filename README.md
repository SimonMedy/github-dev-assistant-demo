# GitHub Dev Assistant — Showcase

Site vitrine de présentation de **GitHub Dev Assistant**, un assistant de développement GitHub autonome conçu autour des branches de travail, de GitHub Actions, des pull requests et de garde-fous stricts.

## Stack

- Vite
- React
- TypeScript
- CSS moderne sans framework UI runtime
- Vitest
- Playwright
- ESLint
- GitHub Actions

## Développement local

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run test
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

La CI exécute les validations statiques et unitaires, puis lance Playwright dans Chromium avec deux profils : desktop `1440×900` et mobile `390×844`.

## Artifacts visuels Playwright

Les tests E2E vérifient le contenu principal, les ancres de navigation et l’absence de débordement horizontal. Les artifacts GitHub Actions incluent pendant 14 jours :

- des captures PNG pleine page et par section ;
- un hero capturé au viewport réel ;
- des screenshots HiDPI en pixels device (DPR 2 desktop, DPR 3 mobile) ;
- des vidéos à résolution explicite (`1440×900` desktop, `390×844` mobile) ;
- les traces Playwright ;
- le rapport HTML Playwright.

## GPT definition

La configuration source utilisée pour recréer et maintenir **GitHub Dev Assistant** est versionnée dans [`gpt-definition/`](gpt-definition/).

Ce dossier contient les instructions du GPT et une archive lossless de son schéma OpenAPI. Les secrets et credentials d’authentification n’y sont jamais stockés.
