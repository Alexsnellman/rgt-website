@AGENTS.md

# RGT Website — Claude Control File

## Memory Vault
On every new session, read these files for full context:
- ~/Documents/AlexVault/Claude/MEMORY.md

## Auto-Memory Rules
- Save new memories to ~/Documents/AlexVault/Claude/
- Update ~/Documents/AlexVault/Claude/MEMORY.md when adding new files

## Project Overview
B2B service website for RGT Rakennuspalvelut — construction/demolition company specializing in asbestos removal and general building services in Helsinki. Live at rgt.fi.

## Stack
- **Framework:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS 3.4
- **Email:** Nodemailer (Zoho SMTP)
- **No database** — static content site

## Key Routes
- `app/alueet/` — location/area pages (Helsinki regions)
- `app/palvelut/` — service pages (demolition, kitchen reno, sanitation, etc.)
- Contact form with Zoho email integration

## Key Files
- `data/services.ts` — 16+ services with full descriptions, FAQs, use cases, SEO metadata
- `data/locations.ts` — location data for area-based pages
- `components/` — Hero, ServiceGrid, FAQ, TrustStrip, WhyUs, Benefits, ContactForm

## SEO
- JSON-LD structured data (LocalBusiness + FAQ schema)
- Service + location cross-linking for local SEO

---

## Current State (updated 2026-04-16)
- **Stage:** Maintenance mode — content-complete, deployed at rgt.fi
- **Current focus:** Minor image/layout refinements only
- **What's built:** Full marketing site, 16+ service pages, area pages, contact form, SEO markup
- **What's in progress:** Nothing major — occasional image swaps and layout tweaks
- **What's NOT started:** Nothing planned — site is feature-complete for its purpose

## Decisions Made — Do NOT Re-Suggest Alternatives
- **Next.js 14 + React 18** — do NOT suggest upgrading to Next.js 16 or React 19 (site is stable, no reason to touch)
- **Tailwind CSS 3.4** — do not suggest upgrading to v4 (site is in maintenance mode)
- **Nodemailer + Zoho SMTP** — do not suggest Resend, SendGrid, or other email services
- **No database** — this is a static content site, do not suggest adding Supabase or any database
- **Static data files** (services.ts, locations.ts) — do not suggest CMS or database-driven content
- **Finnish language only** — do not suggest adding English

## Rejected Ideas — Stop Suggesting These
- Adding a database or CMS (static site is intentional)
- Upgrading Next.js or React versions (maintenance mode, don't break working site)
- Replacing Zoho email with other providers
- Adding English or multi-language support
- Complex state management (no client state needed)
- Any major feature additions (site serves its purpose as-is)
