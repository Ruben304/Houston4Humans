# Houston for Humans

An interactive web application exploring how Houston can become a more walkable, transit-connected, and flood-resilient city. Built with a full-page interactive map and data-driven content sections.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Map | [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) via [react-map-gl](https://visgl.github.io/react-map-gl/) |
| Icons | [lucide-react](https://lucide.dev) |
| Runtime | Node.js / npm |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, global CSS
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Global styles + Mapbox popup overrides
│
├── components/
│   ├── Header.tsx          # Sticky nav with smooth-scroll links       [Client]
│   ├── HoustonMap.tsx      # Mapbox GL map with layer Sources/Layers   [Client]
│   ├── MapControls.tsx     # Layer toggle panel rendered over the map  [Client]
│   ├── MapWrapper.tsx      # SSR-safe dynamic import shell for the map [Client]
│   │
│   └── sections/
│       ├── HeroSection.tsx         # Landing hero with city stats      [Server]
│       ├── WalkabilitySection.tsx  # Walk scores + proposals           [Server]
│       ├── TransitSection.tsx      # Existing/proposed rail + BRT      [Server]
│       └── FloodSection.tsx        # Flood zones + mitigation plans    [Server]
│
└── data/
    └── houston.ts          # All GeoJSON datasets + city statistics
```

---

## Architecture

### Rendering Model

The app uses Next.js App Router with a mix of Server and Client Components:

- **Server Components** — All content sections (`HeroSection`, `WalkabilitySection`, `TransitSection`, `FloodSection`) render on the server. No JavaScript shipped for static content.
- **Client Components** — `Header`, `HoustonMap`, `MapControls`, and `MapWrapper` are marked `"use client"` because they require browser APIs (scroll listeners, Mapbox WebGL, state).

### Map Loading (SSR Safety)

Mapbox GL JS requires `window`/WebGL and cannot run server-side. The solution is a two-layer wrapper:

```
page.tsx (Server)
  └── MapWrapper.tsx ("use client")
        └── next/dynamic(() => import("./HoustonMap"), { ssr: false })
              └── HoustonMap.tsx — Mapbox map, only runs in browser
```

`next/dynamic` with `ssr: false` must live inside a Client Component in the App Router — it cannot be called directly from a Server Component.

### Map Layers

Three GeoJSON layers are defined in `src/data/houston.ts` and rendered as toggleable Mapbox `Source`/`Layer` pairs:

| Layer | Type | Coloring |
|---|---|---|
| Walkability | Polygon fill | Walk score 0–100 → red to green gradient |
| Transit | LineString | Blue = existing rail, cyan = existing BRT, orange = proposed rail, yellow = proposed BRT. Dashed = proposed. |
| Flood Risk | Polygon fill | Purple = extreme, red = high, amber = medium, green = low |

### TypeScript + Mapbox Expressions

Mapbox expression arrays (`["match", ...]`, `["case", ...]`) don't satisfy TypeScript's strict `ExpressionSpecification` type when inferred as plain arrays. The codebase uses a cast helper:

```ts
import type { ExpressionSpecification } from "mapbox-gl";
const expr = (e: unknown) => e as ExpressionSpecification;

// Usage
"fill-color": expr(["match", ["get", "riskLevel"], "high", "#dc2626", ...])
```

---

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd houstommap
npm install
```

### 2. Set up Mapbox token

The interactive map requires a free Mapbox public token.

1. Create a free account at [mapbox.com](https://account.mapbox.com/)
2. Copy `.env.local.example` to `.env.local`
3. Paste your token:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJleGFtcGxlIn0.your-token
```

> Without a token the site still loads — the map section shows a friendly setup prompt instead.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## Data Sources

All data in `src/data/houston.ts` is sourced from publicly available reports and approximated for visualization purposes:

- **Walk Scores** — Walk Score API / neighborhood estimates
- **METRORail routes** — METRO Houston GTFS / official route maps
- **Flood zones** — FEMA FIRM Maps, Harris County Flood Control District
- **Harvey damage figures** — Texas General Land Office / Harvey Task Force reports
- **Proposed transit corridors** — METRO's METRONext Moving Forward Plan

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Yes (for map) | Mapbox public token — get one free at mapbox.com |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
