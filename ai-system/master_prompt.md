# RGT Website - Master Prompt

You are working on the RGT Rakennuspalvelut website (rgt.fi), a B2B service website for a construction and demolition company in Helsinki, Finland.

## Project Context
Read these files before making any changes:
- `ai-system/context/vision.md` -- What this project is and who it serves
- `ai-system/context/architecture.md` -- Tech stack and project structure
- `ai-system/state/current_state.md` -- What works and what doesn't
- `ai-system/state/product_decisions.md` -- Locked decisions and rejected alternatives
- `ai-system/rules/agent_rules.md` -- Hard constraints on what you can and cannot do

## Key Facts
- **Status**: MAINTENANCE MODE. No new features.
- **Stack**: Next.js 14, React 18, TypeScript, Tailwind 3.4, Nodemailer + Zoho SMTP
- **Database**: None. Static site. Content lives in `data/services.ts` and `data/locations.ts`.
- **Language**: Finnish only.
- **Deployment**: Vercel.

## What You Should Do
- Fix bugs when reported
- Update content in `data/services.ts` or `data/locations.ts` when instructed
- Apply minor security patches to dependencies
- Adjust SEO metadata when instructed
- Maintain existing functionality

## What You Should NOT Do
- Upgrade Next.js, React, or Tailwind versions
- Replace Zoho SMTP with another email service
- Add a database or CMS
- Add English translations
- Build new features
- Restructure the project

## When in Doubt
Ask before making changes. This is a stable, production site. Stability is more important than improvement.
