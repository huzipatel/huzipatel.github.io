# huzipatel.github.io

Personal site for Huzi Patel — solution architect / applied AI.

Stack: Astro 5 + Tailwind v4, static output, zero client JS.

## Local dev

```bash
npm install
npm run dev          # localhost:4321
npm run build        # dist/
npm run preview      # preview the built site
```

## Deploys

Two deploy targets are wired:

- **GitHub Pages** — `.github/workflows/deploy.yml` builds on push to `main`.
- **Netlify** — `netlify.toml` is ready; connect the repo in the Netlify dashboard
  and it builds with no further config.

## Content

- Project / case-study content lives in `src/data/projects.ts`.
- Experience + skills live inline in `src/pages/index.astro`.
- Each project auto-generates a page at `/work/<slug>/`.
