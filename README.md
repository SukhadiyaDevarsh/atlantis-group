# Atlantis Group — Landing Page

A Next.js + Tailwind landing page for Atlantis Group, a real estate business
established in 1989. Corporate/professional style: ink, ivory, and accent,
paired serif/sans type, and a seal-style monogram used as the site's
signature mark.

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/layout.tsx` — fonts (Fraunces, Inter, JetBrains Mono) and page metadata
- `app/page.tsx` — all page sections (Nav, Hero, Trust bar, Services, Why Us,
  Testimonials, Contact, Footer)
- `app/globals.css` — Tailwind entrypoint + a few custom utilities
- `tailwind.config.ts` — color palette and font tokens

## Before you launch

- [ ] Replace the placeholder testimonials in `Testimonials()` with real
      client quotes
- [ ] Replace the stats in `TrustBar()` with your actual numbers
- [ ] Wire the contact form up to a service (e.g. [Formspree](https://formspree.io),
      [Resend](https://resend.com)) or a Next.js API route — right now it
      doesn't submit anywhere
- [ ] Add a real domain and deploy (Vercel is the easiest: connect this repo
      at https://vercel.com/new)
- [ ] Add a favicon and Open Graph image in `app/`
- [ ] Update the copyright year logic if needed and double check all copy

## Deploying

The fastest path is [Vercel](https://vercel.com):
1. Push this project to a GitHub repo
2. Import it at vercel.com/new
3. Vercel auto-detects Next.js and deploys — no config needed
