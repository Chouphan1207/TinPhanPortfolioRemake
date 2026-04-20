# FOUNDATION — Your project starter

By Tin Phan

A Feature‑Sliced, themeable front‑end foundation template — built with React, TypeScript and Vite. This repository demonstrates internationalization (i18n), reusable UI primitives, Storybook-driven component development, unit tests (Vitest), and CI visual regression.

---

## Quick summary

- Architecture: Feature‑Sliced Design (FSD)
- Key features: i18n (en/vi), three themes (Neutral / Calm / Heavy), reusable UI components (Button, Input, AppIcon), SVGs via `vite-plugin-svgr`
- Tooling: Vite, Storybook, Vitest, ESLint, Stylelint, Chromatic

---

## Table of contents

- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Main features & where to look](#main-features--where-to-look)
- [Scripts](#scripts)
- [Implementation notes & snippets](#implementation-notes--snippets)
- [CI / Chromatic notes](#ci--chromatic-notes)
- [Troubleshooting (common gotchas)](#troubleshooting-common-gotchas)
- [Recent fixes](#recent-fixes)
- [Contributing](#contributing)
- [License](#license)

---

## Getting started

Prereqs: Node 20+, npm

1. Install dependencies

   npm ci

2. Run development server

   npm run dev

3. Storybook (component playground)

   npm run storybook

4. Build Storybook (for Chromatic / static output)

   npm run build-storybook

5. Run unit tests

   npm run test:unit

6. Linting

   npm run lint
   npm run stylelint

---

## Project structure (high level)

- `src/app` — app bootstrap & providers
- `src/widgets` — UI widgets (Header, Footer, ThemeSwitcher, etc.)
- `src/features` — grouped feature logic
- `src/shared` — UI primitives, assets, config (theme, i18n)
- `public/locales` — translation JSON files (`en`, `vi`)
- `.github/workflows` — CI (Chromatic + tests + lint)

This follows Feature‑Sliced Design to keep modules focused and testable.

---

## Main features & where to look

- Internationalization (i18n)
  - Packages: `react-i18next`, `i18next`
  - Files: `public/locales/{en,vi}/translation.json`
  - Usage: `useTranslation()` → `t('footer.changeLog')`
  - Note: language detector loads translations based on browser locale.

- Theming
  - Centralized: `src/shared/config/theme/ThemeContext.ts`
  - Provider: `src/app/providers/theme/ThemeProvider.tsx`
  - UI: `src/widgets/Header/ui/ThemeSwitcher/*`

- UI primitives
  - `src/shared/ui/Button` — `clsx` for conditional classes
  - `src/shared/ui/Input` — includes password visibility toggle
  - `src/shared/ui/AppIcon` — single place to render SVG icons

- SVGs as React components
  - Plugin: `vite-plugin-svgr` (configured in `vite.config.ts`)
  - Import pattern: `import SearchIcon from '@/shared/assets/icons/Search.svg?react'`

- Development tools
  - Storybook stories: `*.stories.tsx` adjacent to components
  - Unit tests: Vitest + React Testing Library
  - ESLint config: `eslint.config.js`
  - Stylelint: `.stylelintrc.json` (if present)

- Resilience & UX
  - `ErrorBoundary` component for runtime errors
  - `PageNotFound` route for unknown URLs
  - `Spinner` component for async loading states

---

## Scripts (use from project root)

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run storybook` — start Storybook
- `npm run build-storybook` — build Storybook static
- `npm run test:unit` — run Vitest unit tests
- `npm run lint` — ESLint
- `npm run stylelint` — Stylelint (if configured)

---

## Implementation notes & snippets

- Safe theme rotation (avoids nested ternaries)

```ts
const themes = ["neutral", "calm", "heavy"] as const;
setTheme((current) => themes[(themes.indexOf(current) + 1) % themes.length]);
```

- i18n usage

```tsx
const { t } = useTranslation();
<span>{t("footer.changeLog")}</span>;
```

- SVG import (vite‑plugin‑svgr)

```tsx
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
<AppIcon Icon={SearchIcon} />;
```

- Password input behavior
  - Toggle visibility via button (eye icon)
  - Add CSS `:focus` styles to highlight active field

---

## CI / Chromatic notes

- Chromatic is configured in `.github/workflows/main.yaml` and publishes Storybook for visual regression.
- Option available: `autoAcceptChanges: true` — can be enabled to auto‑accept visual diffs in CI.

---

## Troubleshooting — common gotchas

- Case‑sensitive filenames: imports must match file case exactly (CI runs on Linux).
  - Example fixed: `src/shared/assets/icons/Logo.png` (was `logo.png` locally).
- i18n key mismatches: component uses `footer.changeLog` → translations must use same key.
- SVG imports: use `?react` when importing as React components.

---

## Contributing

- Follow Feature‑Sliced structure for new features.
- Add Storybook stories and unit tests for all UI primitives and widgets.
- Keep i18n keys consistent and add translations under `public/locales`.

---

## License

MIT — Tin Phan
