# Investor Desk

A blotter for startup CEOs: pick a **supported thesis**, pick a **country**, then scroll a file of public-sourced investors.

> **Wrong tree trap.** GitHub’s default branch on [T0F1Q2007/investor-finder](https://github.com/T0F1Q2007/investor-finder) is older work. This product lives only on **`cursor-app`**: [github.com/T0F1Q2007/investor-finder/tree/cursor-app](https://github.com/T0F1Q2007/investor-finder/tree/cursor-app). Clone, then `git checkout cursor-app`.

The search bar is not a search engine. It only filters a closed category list. After a match, a second field asks which country’s checks you want. The other half of that field shows where you are sitting (IP, then Cloudflare, then browser language). The rails then shrink, and each investor occupies the viewport as a plate: a Three.js file-card portrait plus sourced facts.

Empty drawers stay empty, but they list other countries that do have a file for that thesis.

Portraits are initial plates, not licensed photographs. Net worth is a Forbes link, not a copied number.

## Demo

```bash
git clone https://github.com/T0F1Q2007/investor-finder.git
cd investor-finder
git checkout cursor-app
npm install
npm run dev
```

Open the URL Vite prints. Type `fintech`, pick **United States**, then scroll or use arrow keys. If you are sitting in a country with no plates, the empty drawer offers countries that do.

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Local desk                           |
| `npm run build`   | Production bundle                    |
| `npm test`        | Category, filter, geo, and URL tests |
| `npm run preview` | Serve the production build           |

Deep links look like `/?cat=fintech&country=US&plate=0`.

## How the desk works

1. **Thesis.** Ten categories live in `src/catalog/categories.ts`. Typing never creates a new one.
2. **Country.** `src/geo/detectCountry.ts` tries IP, then Cloudflare `loc`, then the region on `navigator.language`.
3. **Plates.** `src/catalog/investors.ts` is a static, sourced file.
4. **Motion.** The active plate is a WebGL card (Three.js + GSAP). Scroll axis follows the gesture. `prefers-reduced-motion` snaps without tween.

## Honesty limits

No testimonials. No unsourced statistics. Azerbaijan can appear as a sitting country even when this catalog still has no AZ plates; the empty drawer then points at nearby files (for example Turkey or the UAE).
