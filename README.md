# Raider Xtreme site

Astro + Tailwind, static output.

## Local
    npm install
    npm run dev

## Deploy (Vercel)
1. Push this folder's contents to a GitHub repo (`package.json` at repo root).
2. vercel.com → Add New → Project → import the repo.
3. Framework preset: Astro (auto-detected). Build: `astro build`, output: `dist`. Deploy.

Legacy `.html` URLs 301 via `vercel.json`. Update `site` in `astro.config.mjs` once the real domain points here.

## Content to finish
- School Cheer copy (draft)
- Fun Friday pricing
- YouTube IDs: Studio X, Air Extreme
- Competitive info packet PDF → `public/`
- iClassPro session IDs in `src/data/site.ts`
