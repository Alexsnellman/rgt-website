# RGT Website - Product Decisions

## Confirmed Decisions (Do Not Change)

### Framework & Libraries
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 14 | Stable, works well. Do NOT upgrade to 15+. |
| UI Library | React 18 | Paired with Next.js 14. Do NOT upgrade to 19. |
| Styling | Tailwind CSS 3.4 | Do NOT upgrade to v4. Current setup is stable. |
| Email | Nodemailer + Zoho SMTP | Company already uses Zoho. Do NOT replace with Resend or other services. |

### Architecture
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Database | None | Fully static site. All content in TypeScript files. No CMS needed. |
| Content management | Static files | data/services.ts and data/locations.ts. Code changes = content changes. |
| Deployment | Vercel | Free tier sufficient for this traffic level. |
| Language | Finnish only | Target market is Helsinki. No English version planned. |

## Rejected Alternatives

| Rejected | Why |
|----------|-----|
| Database / CMS | Unnecessary complexity for a static B2B site with infrequent content changes. |
| Upgrading Next.js to 15+ | No benefit. Would require React 19 upgrade. Risk of breaking changes for zero gain. |
| Upgrading React to 19 | Tied to Next.js 14. No reason to upgrade. |
| Upgrading Tailwind to v4 | Breaking changes in config. Site is in maintenance mode. |
| Replacing Zoho with Resend | RGT already uses Zoho for business email. Keep everything in one ecosystem. |
| English language version | Not needed. All customers are Finnish-speaking. |
| Adding major features | Site is in maintenance mode. No feature development. |
| Headless CMS (Sanity, Strapi) | Overkill. Content changes are rare and can be done via code. |
