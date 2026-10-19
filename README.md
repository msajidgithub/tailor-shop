# Asif Ladies Tailors

Bilingual (English / Urdu) marketing website for **Asif Ladies Tailors** — Lyari, Karachi — with pickup & delivery booking via WhatsApp.

Facebook: [asifladiestailor](https://www.facebook.com/asifladiestailor/)

## Business details

| Field | Value |
|-------|--------|
| Phone / WhatsApp | 0348 0276736 |
| Shop 1 (Lyari) | Shop no 6, Al-Hayat Market, Suleman Azad Rd, Lyari Town, Karachi 75660 |
| Shop 2 (PECHS) | Mezzanine floor, Plot 903-904-C, Near FH Autos, Block-2 PECHS, Karachi |
| Hours | Mon–Sat 9 AM–8 PM · Sun 10 AM–3 PM |

Edit shops in [`src/lib/content.ts`](src/lib/content.ts).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features (v1)

- Attractive brand landing page (navy / gold / magenta)
- EN ↔ اردو language toggle with RTL
- Services, pickup & delivery, gallery, visit/map
- Booking form opens WhatsApp with a prefilled message
- Floating WhatsApp button

## Future booking API (1B)

The form uses a stable `BookingPayload` in `src/lib/content.ts`. Later you can:

1. `POST /api/bookings` with the same fields
2. Store in Postgres
3. Keep WhatsApp as an optional notify

See comments in [`src/components/BookingForm.tsx`](src/components/BookingForm.tsx) and [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

## Deploy

```bash
npm run build
npm start
```

Or deploy the Next.js app to Vercel.

## Photos

Drop real images under `public/images/` — see [`public/images/README.md`](public/images/README.md).
