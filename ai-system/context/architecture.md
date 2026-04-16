# RGT Website - Architecture

## Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Email**: Nodemailer with Zoho SMTP
- **Database**: None (fully static site)
- **Deployment**: Vercel

## Project Structure
```
rgt-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── palvelut/           # Service pages (16+ pages)
│   ├── alueet/             # Area/location pages
│   ├── yhteystiedot/       # Contact page
│   └── api/
│       └── contact/        # Contact form API route (Nodemailer)
├── components/             # Shared React components
├── data/
│   ├── services.ts         # Static service data (all 16+ services)
│   └── locations.ts        # Static location/area data
├── public/                 # Static assets, images
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## Key Architecture Decisions
- **No database**: All content is hardcoded in TypeScript files under `data/`. Service and location data lives in `data/services.ts` and `data/locations.ts`.
- **Static generation**: Pages are statically generated at build time for maximum performance.
- **Nodemailer + Zoho SMTP**: Contact form submissions are sent via Zoho SMTP through Nodemailer. This is the only server-side functionality.
- **JSON-LD structured data**: Every service page includes structured data for search engine optimization.
- **No CMS**: Content changes require code changes and redeployment.

## Data Flow
1. User visits a service/area page -> statically served from Vercel CDN
2. User submits contact form -> POST to /api/contact -> Nodemailer sends email via Zoho SMTP -> response returned to client

## Environment Variables
- Zoho SMTP credentials for Nodemailer (host, port, user, pass)
- Recipient email address for contact form submissions
