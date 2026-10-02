# Design Specification: Gourav Events Luxury Wedding Website

**Date:** 2026-10-02  
**Client:** Gourav Events  
**Domain:** gouravevents.com  
**Design Authority:** Impeccable Design System  
**Implementation Authority:** Antigravity Engineering  

---

## 1. Overview & Strategic Intent

Gourav Events is an established luxury wedding planning and event design studio. The objective is to build a premier digital flagship that communicates **luxury, royalty, elegance, grandeur, exclusivity, craftsmanship, and emotion** ("These people create extraordinary weddings").

The website functions as a **cinematic editorial monograph and portfolio showcase**, rejecting conventional corporate agency layouts, marketplace directory structures, and generic AI wedding templates.

### Core Specialization & Destinations
- **Jaipur:** Grand heritage palaces, royal courtyards, and amber-lit regal traditions.
- **Udaipur:** Lakeside palace romance, island pavilions, and floating majestic celebrations.
- **Jim Corbett:** Secluded wilderness sanctuaries, intimate forest luxury, and bespoke natural scenography.
- **Rishikesh:** Sacred riverbanks, foothills tranquility, spiritual aura, and elevated bespoke gatherings.

### Primary Conversion Mechanism
- **Direct Founder WhatsApp Consultation:** Inquiries are handled personally by the founder (Gourav). Visitors can initiate direct conversations via curated touchpoints or via a streamlined concierge inquiry form that formats a natural WhatsApp message (`"Hi, My name is [Name]..."`) and deep-links directly to WhatsApp.

---

## 2. Visual World & Impeccable Design Standards

### Color System
- **Obsidian (`#0B0909`):** Deep near-black canvas establishing cinematic depth and high contrast.
- **Deep Burgundy (`#2A0E16`):** Royal Indian heritage backdrop used for elevated sections, cards, and atmosphere.
- **Rose Gold (`#B76E79`):** Restrained luxury metallic accent for fine borders, active indicators, and subtle highlights (strictly avoiding bright pink).
- **Champagne (`#E8C7A8`):** Warm golden radiance for primary interactive focal points and text highlights.
- **Warm Ivory (`#F5EFE7`):** High-contrast editorial typography ensuring WCAG AA >= 4.5:1 legibility against dark surfaces.
- **Muted Taupe (`#9C8D88`):** Secondary metadata, timestamps, and captions.

### Typography (`next/font/google`)
- **Display Serif:** `Cinzel` / `Cormorant Garamond` (classic proportions, regal weight, tight letter-spacing capped at -0.02em).
- **Body & Controls:** `Plus Jakarta Sans` / `Outfit` (clean geometric clarity, balanced measure between 65–75 characters per line).

### Craft Floor & Category Refusals
- **No generic card grids:** Refuse identical 3-column icon-plus-heading-plus-text cards.
- **No gradient text:** Contrast and emphasis achieved strictly through scale, font weight, and color luminance.
- **No tacky glitter or decorative glassmorphism:** Surfaces are textured from architectural stone, warm textiles, and deep shadows.
- **Zero layout shifts:** Images explicitly declare aspect ratios and Next.js `sizes`.

---

## 3. Concrete Technical Stack

* **Framework:** Next.js 16+ (App Router)
* **Language:** TypeScript (strict mode enabled)
* **Styling:** Tailwind CSS (configured with brand palette tokens)
* **Smooth Scrolling:** Lenis (desktop momentum, native on touch, disabled on `prefers-reduced-motion`)
* **Motion & Timelines:** Anime.js for authored page-load reveals and micro-interactions; native CSS transitions for standard UI states. No GSAP by default.
* **Forms & Validation:** `react-hook-form` + `zod`
* **Icons:** `lucide-react` (used sparingly for functional navigation and actions; no emoji icons)
* **Images:** Next.js `<Image>` with responsive sizing, WebP/AVIF output, and blur placeholders
* **Package Manager:** `pnpm` (via `npx pnpm`)

---

## 4. Architecture & File Structure

```text
src/
├── app/
│   ├── layout.tsx             # Root layout: fonts, Lenis smooth scroll provider, metadata
│   ├── page.tsx               # Primary experiential showcase (Hero, Destinations, Disciplines, Chronicles, Contact)
│   ├── about/
│   │   └── page.tsx           # The House of Gourav Events, philosophy, craftsmanship ethos
│   ├── services/
│   │   └── page.tsx           # Deep dive into the 4 disciplines of mastery
│   ├── weddings/
│   │   ├── page.tsx           # Full portfolio chronicle with destination filter
│   │   └── [slug]/
│   │       └── page.tsx       # Individual wedding editorial narrative & gallery
│   ├── contact/
│   │   └── page.tsx           # VIP Concierge: direct founder WhatsApp + structured inquiry form
│   ├── sitemap.ts             # Dynamic XML sitemap
│   └── robots.ts              # SEO crawlers configuration
│
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx         # Obsidian glass header, mobile drawer, WhatsApp action CTA
│   │   └── Footer.tsx         # Monograph closing, destinations index, contact lines
│   ├── hero/
│   │   └── Hero.tsx           # Atmospheric thesis hero with direct actions
│   ├── destinations/
│   │   └── DestinationsShowcase.tsx # Interactive switch between Jaipur, Udaipur, Corbett, Rishikesh
│   ├── services/
│   │   ├── ServicesOverview.tsx     # Homepage discipline highlights
│   │   └── ServiceDetail.tsx        # Detailed service breakdown component
│   ├── weddings/
│   │   ├── FeaturedWeddings.tsx     # Homepage curated chronicles
│   │   ├── WeddingCard.tsx          # Editorial image card with hover revelation
│   │   └── WeddingGallery.tsx       # Full gallery layout with lightbox capability
│   ├── testimonials/
│   │   └── TestimonialSlider.tsx    # Client narratives and emotional praise
│   ├── contact/
│   │   ├── ContactForm.tsx          # Form validating input and deep-linking to WhatsApp
│   │   └── WhatsAppDirect.tsx       # Instant founder WhatsApp action
│   ├── animations/
│   │   ├── SmoothScroll.tsx         # Lenis wrapper component
│   │   └── FadeIn.tsx               # CSS/Anime reveal helper
│   └── ui/
│       ├── Button.tsx               # Primary champagne / secondary burgundy buttons
│       └── SectionHeading.tsx       # Standardized editorial title block
│
├── data/
│   ├── weddings.ts            # Typed wedding case studies (Jaipur, Udaipur, Corbett, Rishikesh)
│   ├── services.ts            # 4 core disciplines specifications
│   ├── testimonials.ts        # Client quotes & destination experiences
│   └── site.ts                # Brand constants, phone, WhatsApp link, social handles
│
├── lib/
│   ├── animations/            # Anime.js reveal configurations
│   ├── utils.ts               # Tailwind class merging & formatting utilities
│   └── validation/
│       └── inquiry.ts         # Zod schema for inquiry validation & WhatsApp link generator
│
├── public/
│   ├── images/                # High-fidelity editorial wedding assets
│   └── fonts/
│
└── styles/
    └── globals.css            # Tailwind directives, theme variables, custom scrollbar
```

---

## 5. Data Schemas & WhatsApp Inquiry Flow

### Data Schema (`src/data/weddings.ts`)
```typescript
export interface Wedding {
  slug: string;
  title: string;
  couple: string;
  year: number;
  location: string;
  destinationTag: 'jaipur' | 'udaipur' | 'corbett' | 'rishikesh';
  venue: string;
  guestScale: string;
  description: string;
  decorTheme: string;
  heroImage: string;
  gallery: string[];
  decorHighlights: string[];
  quote?: {
    text: string;
    author: string;
  };
}
```

### WhatsApp Message Generation (`src/lib/validation/inquiry.ts`)
The inquiry form collects:
1. `name`: string (min 2 chars)
2. `destination`: 'jaipur' | 'udaipur' | 'corbett' | 'rishikesh' | 'other'
3. `date`: string (estimated date or season)
4. `guests`: string (estimated guest count)
5. `vision`: string (optional notes or vision)

The generator formats a direct, natural message:
```text
Hi, My name is [Name]. I'm looking to plan a wedding in [Destination] around [Date] for around [Guests] guests. [Vision]
```
The link is constructed as:
`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`

The user is taken directly to WhatsApp to chat with Gourav personally, while the page displays a confirmation state.

---

## 6. Server vs. Client Boundary Strategy

- **Server Components (Default):**
  - Page layouts, Static editorial copy, Services overview, Wedding portfolio grids, Story articles, Footer.
- **Client Components (`"use client"`):**
  - `Navbar.tsx` (mobile toggle, scroll state)
  - `SmoothScroll.tsx` (Lenis initialization)
  - `DestinationsShowcase.tsx` (destination tab switching)
  - `ContactForm.tsx` (`react-hook-form` + `zod` state + WhatsApp redirect)

---

## 7. Performance & Quality Verification Checklist

1. **Type Safety:** `npx pnpm check` (zero TypeScript errors)
2. **Build Integrity:** `npx pnpm build` (clean static generation with zero route errors)
3. **Impeccable Mechanical Audit:** `node C:\Users\HP\.gemini\antigravity\skills\impeccable\scripts\detect.mjs --json`
4. **Responsive Testing:** Desktop (1440px+), Tablet (768px–1024px), Mobile (375px–430px)
5. **Reduced Motion:** Fully functional and visually intact with `prefers-reduced-motion: reduce`
6. **No Console Errors:** Clean hydration and zero runtime warnings.
