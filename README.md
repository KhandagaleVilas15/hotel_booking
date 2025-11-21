## Project Overview

This repo contains a full‑stack travel booking experience inspired by the Hotels.com landing page shown in the screenshots. It is split into two packages:

- `backend/` – Node.js + Express API with MongoDB (via Mongoose) for storing hero, destination, and deal content.
- `frontend/` – React (Vite) single-page app that consumes the API and renders the marketing/booking UI.

## Target Features

- Hero booking widget with location, date range, and traveller selectors.
- Promotional strip with program highlights.
- “Your style” carousel-style grid filtered by categories (beach, culture, etc).
- Last-minute deals section populated from the API.
- Fully responsive layout with Hotels.com-inspired color palette and typography.

## Tech Decisions

- **Node 20 + Express** for a lightweight REST API.
- **MongoDB + Mongoose** for structured yet flexible content storage.
- **Vite + React** to rapidly build a fast SPA.
- **Axios + React Query** for data fetching/caching on the client.
- **Zustand** for lightweight shared UI state (search form inputs).

## API Surface (initial)

- `GET /api/hero` – hero headline + default search metadata.
- `GET /api/destinations?category=beach` – curated stays grouped by style.
- `GET /api/deals/last-minute` – time-bound offers.
- `GET /api/deals/:id` – fetch a specific deal/hotel by Mongo ID.
- `POST /api/deals` – add new deals/hotels.
- `PUT /api/deals/:id` – update existing deal/hotel data.
- `GET /api/events` – celebratory slider content (POST to create records).
- `POST /api/search` – accepts search payload and proxies to placeholder logic (ready to hook into real supplier APIs).

## Getting Started

### Backend

```bash
cd backend
cp env.example .env   # adjust the URI/db name as needed
npm install
npm run seed          # populate Mongo with sample content
npm run dev           # starts http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev           # starts http://localhost:5173
```

The Vite dev server is configured to proxy `/api` requests to the backend during development and will fall back to `VITE_API_BASE_URL` when provided.

