# Investor Desk

A blotter for startup CEOs: pick a **supported thesis**, pick a **country**, then scroll a file of public-sourced investors.

The search bar is not a search engine. It only filters a closed category list. After a match, a second field asks which country’s checks you want. The other half of that field shows the country inferred from your IP (`ipwho.is`). The rails then shrink, and each investor occupies the viewport as a plate: a Three.js file-card portrait plus sourced facts.

> This catalog is a starting file, not a complete map of global capital. Net worth is linked, not copied, so stale numbers do not pretend to be current.

## Demo

```bash
npm install
npm run dev
```

Open the URL Vite prints. Type `fintech`, pick **United States**, then scroll or use arrow keys.

| Command        | What it does                         |
| -------------- | ------------------------------------ |
| `npm run dev`  | Local desk                           |
| `npm run build`| Production bundle                    |
| `npm test`     | Category, filter, geo, and URL tests |
| `npm run preview` | Serve the production build        |

Deep links look like `/?cat=fintech&country=US&plate=0`.

## How the desk works

1. **Thesis.** Ten categories live in `src/catalog/categories.ts`. Typing never creates a new one.
2. **Country.** `src/geo/detectCountry.ts` reads ISO country from IP. You still choose the check country.
3. **Plates.** `src/catalog/investors.ts` is a static, sourced file. Empty drawers stay empty.
4. **Motion.** The active plate is a WebGL card (Three.js + GSAP). Scroll axis follows the gesture (down vs sideways). `prefers-reduced-motion` snaps without tween.

## Seams

Tests live on three public seams: category matching, investor filtering, IP JSON parse. React is an adapter around the catalog module. See `CONTEXT.md`.

## Design

Direction is in `DESIGN.md` (paper, ink, brass, stamp red). Reasons for visual choices are in `DECISIONS.md`. Theme toggle: lamp paper / night desk.

## Stack

Vite, React, TypeScript, Three.js, GSAP, Vitest.

## Honesty limits

Portraits are initial plates, not licensed photographs. There are no testimonials. Statistics that cannot be sourced are omitted.
