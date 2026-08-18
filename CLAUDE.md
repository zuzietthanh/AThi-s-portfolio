# MarketingPortfolio — extracted from Rocket.new

Personal marketing portfolio for **Vu Dang Anh Thi** (university assignment).
This is the full source recovered from the Rocket.new project
`6a7dada88b9ee4001498942c`, so the site can live on without Rocket credits.

## Stack

- Next.js 15.5.18 (App Router) + React 19
- TypeScript, Tailwind CSS, PostCSS
- Fonts: `DM Sans` + `Fraunces` via `next/font/google`

## Getting started

```bash
npm install     # regenerates package-lock.json (see "Known gaps")
npm run dev     # http://localhost:4028
npm run build   # production build
```

## Routes

| Route                    | File                                  |
|--------------------------|---------------------------------------|
| `/`                      | `src/app/page.tsx`                    |
| `/cv`                    | `src/app/cv/page.tsx`                 |
| `/statement-of-purpose`  | `src/app/statement-of-purpose/page.tsx` |
| `/robots.txt`            | `src/app/robots.ts`                   |
| `/sitemap.xml`           | `src/app/sitemap.ts`                  |

Shared chrome lives in `src/components/` (`Header`, `Footer`, `ui/App*`).
Page-specific sections live in `components/` folders beside each page.

## Verification already done

`npm install && npx next build` was run against this exact tree: compiles
clean, all 8 static pages generate, and `/`, `/cv`, `/statement-of-purpose`
render correctly. No code changes were needed.

## Current state

Rocket is fully removed. `grep -ri rocket src/ next.config.mjs
image-hosts.config.mjs package.json` returns nothing.

1. **`package-lock.json` is absent** and gitignored. `npm install`
   regenerates it. Dependency *versions* in `package.json` are exact.
   Consider committing the lockfile for reproducible builds.

2. **`.env` is gitignored** (it was NOT, originally — it was tracked, and
   it still contains a real-looking `ANTHROPIC_API_KEY` that should be
   revoked). Nothing in `.env` is wired up by the site except
   `NEXT_PUBLIC_SITE_URL`.

3. **Error suppression is off.** `next.config.mjs` no longer sets
   `typescript.ignoreBuildErrors` or `eslint.ignoreDuringBuilds`, so
   `npm run build` type-checks and lints for real. It passes. Six
   non-blocking ESLint warnings remain (4 `no-explicit-any`, 2
   `alt-text` false positives in `AppImage`).

4. **The CV PDF renders locally.** `CVDocument.tsx` embeds
   `/assets/images/Vu_Dang_Anh_Thi_CV.pdf` with `<object>` and a download
   fallback. The old Google Docs Viewer iframe needed Google to fetch a
   public URL, which is why it was always blank on localhost.
   Not verified on mobile Safari — see "Known risk" below.

5. **Deployment.** `sitemap.ts`, `robots.ts` and `metadata.metadataBase`
   all read `NEXT_PUBLIC_SITE_URL`, falling back to `localhost:3000`.
   Set that variable in your host's environment once you have a domain —
   no code change needed.

## Known risk

`<object>` PDF embedding is unreliable on **mobile Safari**: it often
renders a blank box *without* triggering the `<object>` fallback. Test
`/cv` on a real iPhone. If it is blank, the fix is to detect iOS and
render the download link (or a page-one PNG) instead of the `<object>`.

## Assets

- `public/assets/images/image-1787068988743.png` — graduation hero photo
- `public/assets/images/app_logo.png` — site logo
- `public/assets/images/no_image.png` — image fallback used by `ui/AppImage.tsx`
- `public/assets/images/doc-statement-of-purpose.png`, `doc-curriculum-vitae.png`,
  `doc-cover-letter.png` — homepage document cards (were on Rocket's CDN)
- `public/assets/images/profile-headshot.png` — LinkedIn card avatar
  (AI-generated stock image, not a real photo)
- `public/assets/images/Vu_Dang_Anh_Thi_CV.pdf` — the CV
- `public/favicon.ico`

All images are served locally from `public/assets/images/`. Remote hosts
allowlisted in `image-hosts.config.mjs` (unsplash, pexels, pixabay) are
not currently used by any component.
