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

## Known gaps — read before you start

1. **`package-lock.json` is absent.** It was excluded from the export.
   `npm install` regenerates it. Dependency *versions* in `package.json`
   are exact, so this is safe.

2. **`.env` holds Rocket's placeholder keys only** (Supabase, OpenAI,
   Gemini, Anthropic, Stripe, GA, AdSense, Perplexity). Nothing here is
   wired up by the site as it stands. Real values are not present, and
   `.env` is gitignored — keep it that way.

3. **The CV PDF viewer will not render locally.** `CVDocument.tsx` embeds
   the PDF through the Google Docs viewer:

   ```
   https://docs.google.com/viewer?url=<public-url>&embedded=true
   ```

   Google has to fetch that URL, so it fails on `localhost` and on any
   private deployment. This is the bug that was never solved inside
   Rocket. The fix is to embed the local file directly instead:

   ```tsx
   <object data="/assets/images/Vu_Dang_Anh_Thi_CV.pdf"
           type="application/pdf"
           className="w-full h-full">
     <a href="/assets/images/Vu_Dang_Anh_Thi_CV.pdf">Download the CV</a>
   </object>
   ```

   The real CV PDF (475 KB, 1 page) is already in place at
   `public/assets/images/Vu_Dang_Anh_Thi_CV.pdf`. Rocket had deployed a
   62-byte text placeholder there, which is the actual reason the preview
   showed nothing.

4. **Deployment target.** `src/app/sitemap.ts` and `robots.ts` reference the
   old Rocket host `marketingp4838.builtwithrocket.new`. Update these plus
   `NEXT_PUBLIC_SITE_URL` in `.env` when you deploy elsewhere.

## Assets

- `public/assets/images/image-1787068988743.png` — graduation hero photo
- `public/assets/images/app_logo.png` — site logo
- `public/assets/images/no_image.png` — image fallback used by `ui/AppImage.tsx`
- `public/assets/images/Vu_Dang_Anh_Thi_CV.pdf` — the CV
- `public/favicon.ico`

Remote images are allowlisted in `image-hosts.config.mjs` (unsplash, pexels,
pixabay, img.rocket.new). Drop `img.rocket.new` once you confirm nothing
still points at it.
