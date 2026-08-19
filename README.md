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

Les tests E2E vérifient le contenu principal, les ancres de navigation et l’absence de débordement horizontal. Chaque profil produit une capture pleine page et une trace Playwright ; le rapport HTML, les screenshots et les traces sont conservés comme artifacts GitHub Actions pendant 14 jours.
