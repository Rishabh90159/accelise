# RG Web Solutions Website

Frontend-only Next.js App Router site for a web-development business led by Rishabh Gautam.

## Setup

```bash
npm install
npm run dev
```

## Build Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content Editing

Business details, services, industries, packages, projects, FAQs and blog posts are stored in `lib/content.ts`.

Contact form submissions are not sent to a server. The form validates required fields, shows a thank-you/ready state, then generates either a pre-filled WhatsApp message or a `mailto:` link. Formspree, Web3Forms or a custom API can be connected later from `components/contact-form.tsx`.

## Deployment

The app is configured for static export in `next.config.ts`. Deploy the generated static output to any static host, or use the Codex Sites publishing flow.
