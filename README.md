# SUGI Landing Page

Landing page for **SUGI Ecosystem** — an integrated AI platform for Indonesian agriculture. Built with React + Vite + Tailwind CSS v4.

## Tech Stack

- **React 19** with Vite 8
- **Tailwind CSS v4** (design tokens, responsive utilities)
- **React Router v7** (lazy-loaded routes, AnimatePresence page transitions)
- **Framer Motion** (scroll animations, staggered reveals, page transitions)
- **react-helmet-async** (per-route SEO meta tags)

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── product/       # ProductPageTemplate, WorkflowStepper, ScreenshotLightbox, etc.
│   ├── sections/      # Hero, TeamMemberCard, ContactForm
│   └── ui/            # Button, Card, Badge, Container, Section, StatBlock,
│                      # CountUpStat, FAQAccordion, TimelineAnimated,
│                      # PartnerLogoStrip, ScrollProgressIndicator, SEOHead
├── contexts/          # LanguageContext (ID/EN switch)
├── data/              # siteContent, productsContent, faqData, teamData, partnersData
├── pages/
│   ├── products/      # 11 lazy-loaded product deep-dive pages
│   └── ...            # Home, AboutUs, Problem, Solution, VisionMission, etc.
└── router/            # AppRouter with lazy routes + AnimatePresence
```

## Pages

| Route | Page |
|-------|------|
| `/` | Beranda (Home) |
| `/tentang-kami` | Tentang Kami |
| `/masalah` | Masalah |
| `/solusi` | Solusi |
| `/visi-misi` | Visi & Misi |
| `/ekosistem` | Ekosistem |
| `/fitur` | Fitur |
| `/teknologi-ai` | Teknologi AI |
| `/tim` | Tim |
| `/kontak` | Kontak |
| `/faq` | FAQ |
| `/produk` | Index produk |
| `/produk/*` | 11 halaman produk detail (lazy-loaded) |

## Getting Started

```bash
npm install
npm run dev      # Development server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Deployment

Deploys to **Netlify**. Config in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* → /index.html`
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Cache headers for assets and images

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Content

All user-facing copy is in **Bahasa Indonesia** with an **English toggle** via `LanguageContext`. Content data is centralized in `src/data/` files — no hardcoded strings in components.

## Assets

All images live in `public/image/` with their original filenames. Do not rename or move asset files.
