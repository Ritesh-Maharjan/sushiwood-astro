# Sushiwood (Astro)

Astro port of the Sushiwood Next.js site. Marketing pages are fully static;
the three API routes (`/api/sendemail`, `/api/auth`, `/api/callback`) run
on-demand via the Node adapter.

## Getting Started

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # static pages + server entry in dist/
npm run start    # run the production build (node dist/server/entry.mjs)
```

## Environment variables

Copy `.env.example` to `.env`. Note the renames from the Next.js project:

| Next.js                        | Astro                    |
| ------------------------------ | ------------------------ |
| `NEXT_PUBLIC_WEATHER_API_KEY`  | `PUBLIC_WEATHER_API_KEY` |
| `NEXT_PUBLIC_GITHUB_CLIENT_ID` | `PUBLIC_GITHUB_CLIENT_ID`|
| `NEXT_PUBLIC_BASE_URL`         | `PUBLIC_BASE_URL`        |
| `SMTP_USER` / `SMTP_PASS` / `EMAIL_TO` / `GITHUB_CLIENT_SECRET` | unchanged |

## Structure

- `src/pages` — routes (`index`, `[location]`, `blog/[slug]`, `auth-callback`, `api/*`)
- `src/layouts/Layout.astro` — HTML shell (fonts, meta, sticky header island)
- `src/_component`, `src/components` — React components carried over from the
  Next.js app; interactive ones are hydrated with `client:load`, the rest
  render to static HTML
- `content/blog` — markdown posts (Decap CMS writes here), loaded through an
  Astro content collection (`src/content.config.ts`)
- `public/admin` — Decap CMS, unchanged
