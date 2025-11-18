# Grocery Price Radar

A modern React + Vite dashboard that compares the price of staple UK supermarket products side by side. Search for items, focus on essentials, drill into price trends, and see how the full weekly basket shifts between Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, and Waitrose.

## Tech stack
- React 18 with Vite 7 for lightning-fast dev & build feedback
- Recharts for simple, responsive trend visualisations
- Modern CSS (custom properties, grid/flexbox) for a polished responsive layout

## Getting started
```bash
npm install
npm run dev
```
Visit `http://localhost:5173` in your browser to explore the dashboard. The dataset is static for now, so no additional services are required.

## Available scripts
- `npm run dev` – start the local dev server with HMR
- `npm run build` – produce an optimised production build in `dist`
- `npm run preview` – locally serve the production build

## Features
- **Hero snapshot** summarises coverage, freshness, and the current cheapest full basket.
- **Smart filters** for category, search, and staple-only views.
- **Comparison table** that highlights the best price, promo notes, spread, and week-on-week trend per product.
- **Interactive price chart** powered by Recharts to visualise historical movements for any selected product.
- **Basket summary** ranks every retailer by the total price of the tracked items.
- **Best value & alerts** flag the highest savings and notable price drops.
- **Supermarket grid** shows key metadata and quick links for each grocer.

## Next steps
- Wire the data layer to a live price API or scheduled scraper.
- Expand the catalogue and include additional filter dimensions (dietary, pack size, etc.).
- Add persistence for user-selected favourites or saved baskets.
