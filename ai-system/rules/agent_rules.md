# RGT Website - Agent Rules

## Critical Constraints

### DO NOT
- Upgrade Next.js beyond 14. The site runs Next.js 14 and must stay on 14.
- Upgrade React beyond 18. React 18 is locked to Next.js 14.
- Upgrade Tailwind beyond 3.4. Tailwind v4 has breaking config changes. Do not migrate.
- Replace Nodemailer + Zoho SMTP with Resend, SendGrid, or any other email service.
- Add a database, CMS, or any dynamic data layer. This is a static site.
- Add English content or internationalization. Finnish only.
- Add new major features. This site is in maintenance mode.
- Modify the data structure in `data/services.ts` or `data/locations.ts` without explicit instruction.
- Add authentication, user accounts, or admin panels.
- Install new major dependencies without explicit approval.

### ALWAYS
- Write all user-facing content in Finnish.
- Maintain JSON-LD structured data on service pages.
- Keep pages statically generated (no `use client` unless absolutely necessary for interactivity).
- Test the contact form after any changes to the API route or email configuration.
- Preserve existing SEO metadata (titles, descriptions, Open Graph tags).
- Use Tailwind 3.4 syntax (not v4 CSS-first syntax).
- Keep bundle size minimal. This is a simple B2B site.

## Code Style
- TypeScript strict mode
- Functional components only
- Tailwind utility classes for all styling (no CSS modules, no styled-components)
- Next.js App Router conventions (layout.tsx, page.tsx, loading.tsx)
- Finnish variable names are acceptable for content-related code

## File Modification Rules
- `data/services.ts` -- Only modify content, do not change the type structure
- `data/locations.ts` -- Only modify content, do not change the type structure
- `app/api/contact/route.ts` -- Handle with care. Test email delivery after changes.
- `tailwind.config.ts` -- Minimal changes only. Do not restructure.

## Testing
- Verify contact form submission works end-to-end after email-related changes
- Check all service pages render correctly after content changes
- Validate JSON-LD with Google's Rich Results Test after schema changes
- Test mobile responsiveness after layout changes
