# North & Oak

A premium Scandinavian furniture brand portfolio website. Designed to demonstrate a full e-commerce front-end — collections, product detail pages, editorial journal, trade programme, and contact — built with modern web tooling.

**Live site →** [north-and-oak-delta.vercel.app](https://north-and-oak-delta.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Forms | React Hook Form + Zod |
| Images | Unsplash CDN via next/image |
| Deployment | Vercel |

---

## Features

- **31 statically generated pages** — all routes pre-rendered at build time
- **6 collections** — living room, dining, bedroom, lounge, outdoor, lighting
- **7 products** with image galleries, variant selectors, specifications, and related products
- **6 journal articles** with JSON-LD structured data and OpenGraph metadata
- **Animated hero sections** with reduced-motion support
- **Accessible navigation** — keyboard focus trap in mobile menu, dropdown keyboard support
- **SEO** — sitemap.xml, robots.txt, breadcrumb schema, article schema
- **Fully responsive** — mobile-first layout throughout

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build
npm start
```

Requires **Node.js 20+**.

---

## Project Structure

```
app/                    # Next.js App Router pages
  collections/          # Collections list + [slug] detail + [product] detail
  journal/              # Journal index + [slug] article
  about/
  contact/
  trade/
  faq/

components/
  layout/               # Header, Footer, Breadcrumb, MobileMenu
  sections/             # Hero, FeaturedCollections, SustainabilityStats, etc.
  collections/          # ProductCard, ProductDetail, CollectionHero, etc.
  journal/              # ArticleCard, ArticleHero, RelatedArticles, etc.
  forms/                # ContactForm, TradeApplicationForm, NewsletterForm
  shared/               # AnimatedSection, SectionHeading, Button, etc.

data/                   # Static data — collections, products, articles
types/                  # TypeScript interfaces
lib/                    # Zod schemas, utilities
```

---

## Design System

Tokens are defined in `app/globals.css` under `:root` and mapped into Tailwind v4 via `@theme inline`. Key brand colours:

| Token | Value | Use |
|---|---|---|
| `--birch` | `#F5F0E8` | Background |
| `--oak` | `#8C6D4F` | Primary accent |
| `--char` | `#1C1A17` | Body text |
| `--warmstone` | `#C8B99A` | Borders, labels |

Typography uses **Cormorant Garamond** (headings), **DM Sans** (body), and **DM Mono** (labels/captions).

---

## Deployment

The repository is connected to Vercel. Every push to `master` triggers an automatic production deployment.

To deploy manually:

```bash
npx vercel --prod
```
