# VYDA Hotels — Premium Redesign (React / Vite / Tailwind)

A premium, editorial redesign of the VYDA Hotels homepage, built as a
static frontend application. No backend, payments, or authentication —
the booking widget is a visually complete enquiry/demo flow only.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, hover states, page transitions)
- Lucide React (UI icons)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI: Nav, Button, Footer, Reveal (scroll-in wrapper), StayCard, MobileStickyCta
  sections/     One file per homepage section (Hero, BookingWidget, Experience, FeaturedStays, ...)
  data/         content.js -- all copy + image URLs, separate from UI so a CMS/API can replace it later
  pages/        Home.jsx assembles the sections in order
  App.jsx, main.jsx
```

## About the photography

This build could not download and rehost binary image files (the
environment that produced it has no network access to fetch image
bytes from vydahotels.com or nivaarahotels.com). Every photo in the
site is therefore a **direct, first-party URL** to the real image on
VYDA's or Nivaara's own official media library -- genuine property
photography, not stock images, and nothing invented.

This means:

- The site needs internet access to load images (they are not bundled
  in this ZIP as local files).
- If VYDA reorganizes those media libraries, a URL could break.
- `src/data/content.js` has a sourcing note at the top, and
  `src/assets/README.md` explains exactly how to swap each URL for a
  locally-hosted file with zero component changes, whenever you're
  ready to download the originals yourself and bundle them properly.

## Content accuracy

All copy -- room counts, addresses, amenities, MICE categories,
testimonials -- is sourced from vydahotels.com and nivaarahotels.com.
Nothing is invented: no fabricated prices, ratings, awards, or hotels
in destinations (Ooty, Hyderabad, Pondicherry) where VYDA does not yet
list a specific property.
