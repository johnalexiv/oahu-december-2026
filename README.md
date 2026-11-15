# Oʻahu · December 2026

Five-day Oʻahu itinerary site, Dec 9–13, 2026. It's built on the same template as `hokkaido-summer`.

## Stack

Vite + React 19, Tailwind, GSAP, Lucide icons. Tests use Vitest and React Testing Library.

## Scripts

```
npm install
npm run dev      # http://localhost:5173/oahu-december-2026/
npm run build    # production build → dist/
npm test
```

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. Before the first deploy:

1. Create a GitHub repo named `oahu-december-2026`. The Vite `base` path matches that name.
2. Enable Pages with "GitHub Actions" as the source.

## Layout

- `src/data/` holds all trip content: days, bookings, flights, stay, research and images. Edit these files to update the plan.
- `src/components/` holds the section components, shared with the Hokkaido site.
- `public/images/` holds the illustrated placeholders. To use real photos, add them here and repoint `src/data/images.js`.
