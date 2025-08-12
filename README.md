### Vue Admin Simple

An Admin Dashboard starter built with Vue 3 + TypeScript + Vite, integrating PrimeVue + Tailwind, Pinia, Vue Router, TanStack Vue Query/Table, Mock Service Worker (MSW), and Orval for API client generation from OpenAPI.

- **Tech stack**: Vue 3, TypeScript, Vite 7, PrimeVue 4, TailwindCSS 4, Pinia 3, Vue Router 4, TanStack Vue Query 5, MSW 2, Orval 7
- **API**: Code generated from `openapi.yaml` with an axios mutator, MSW mock handlers, and Zod schemas
- **UI/Theme**: Custom PrimeVue preset with Dark mode
- **Deployment**: `base` configured for GitHub Pages with a one-command deploy

---

### System Requirements

- Node.js >= 18
- pnpm (recommended): `npm i -g pnpm`

---

### Installation

```bash
pnpm install
```

---

### Development

```bash
pnpm dev
```

- App runs with Vite at `http://localhost:5173` (default)
- MSW is started automatically in `src/app/bootstrap.ts` and serves the worker from `public/mockServiceWorker.js`
- Router uses `createWebHistory(import.meta.env.BASE_URL)` aligned with `base` in `vite.config.ts`

---

### Build & Preview

```bash
pnpm build   # build to dist
pnpm preview # preview the build
```

Vite config highlights:

- `root`: `src/app`
- `base`: `/` in development and `/vue-admin-simple/` in production (GitHub Pages friendly)
- `outDir`: `dist` (at the repo root)

---

### GitHub Pages Deployment

Use the ready-made script:

```bash
pnpm deploy:gp
```

What it does:

- Builds the app, copies `dist/index.html` to `dist/404.html` (SPA fallback)
- Publishes `dist/` to the `gh-pages` branch using `gh-pages`

Notes:

- `vite.config.ts` sets `base: '/vue-admin-simple/'` in production
- MSW in `bootstrap.ts` automatically points to `/vue-admin-simple/mockServiceWorker.js` in production

---

### API, Orval and Mocking (MSW)

- OpenAPI spec: `openapi.yaml`
- Orval config: `orval.config.ts`
  - Generates API hooks by tag into `src/shared/services/api/hooks/`
  - Generates schemas into `src/shared/services/api/models/`
  - Generates Zod types into `src/shared/services/api/types/`
  - Uses axios mutator: `src/shared/lib/axios/index.ts`
  - Auto-generates MSW mock handlers from the spec

Regenerate from OpenAPI:

```bash
pnpm orval
```

MSW:

- Worker: `src/shared/services/msw/browser.ts`
- Combined handlers: `src/shared/services/msw/handlers.ts` (merges `auth`, `products`, `tasks`)
- Worker is started in `src/app/bootstrap.ts`

Example of using Orval-generated hooks:

```ts
import { useGetMe, usePostLogin } from '@/shared/services/api'

const { data: me } = useGetMe()

const loginMutation = usePostLogin()
loginMutation.mutate({ data: { email: 'user@example.com', password: 'secret' } })
```

---

### Routing and Session

- Router: `src/app/providers/routers/index.ts`
- A guard calls `getMe()` when not logged in to bootstrap session state from the mock API
- If a route requires auth (`to.meta.requiresAuth`) and there is no session, navigation redirects to the login page

---

### Project Structure (condensed)

```
src/
  app/                # entry, Vite root, MSW bootstrap, theme, router
  entities/           # domain models (user, product, task, ...)
  features/           # feature modules (auth, breadcrumb, loading, products, tasks, theme)
  pages/              # pages (dashboard, login, product, tasks)
  shared/
    lib/              # axios, utils
    router/           # route path helpers
    services/
      api/            # Orval generated code (hooks, models, types)
      msw/            # worker & handlers
    styles/           # base CSS
    ui/               # reusable UI components (table, datatable, chart, ...)
  widgets/            # layout, header, sidebar, ...
```

Path alias: `@` points to `src/` (see `vite.config.ts`).

---

### Theme and UI

- PrimeVue is configured in `src/app/main.ts` with `appPrimeVuePreset`
- Ripple, Tooltip, and ToastService are enabled
- Tailwind is configured via `@tailwindcss/vite` and `tailwindcss-primeui`

---

### Lint & Format

```bash
pnpm lint      # run ESLint
pnpm lint:fix  # fix ESLint issues
pnpm format    # prettier --write
```

Pre-commit: `husky` + `lint-staged` run ESLint and Prettier for `src/**/*.{js,ts,vue}`.

---

### Development Tips

- Use MSW to develop independently of a backend; update the OpenAPI spec and run `npx orval` to sync hooks and mocks
- When deploying to GitHub Pages, ensure the repo name matches the `base` (`/vue-admin-simple/`). If it changes, update `vite.config.ts` and the `prefix` logic in `bootstrap.ts`

---

### License

MIT — see `LICENSE`.
