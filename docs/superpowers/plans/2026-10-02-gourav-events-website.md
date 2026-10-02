# Gourav Events Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a luxury, high-performance wedding planning website for Gourav Events featuring an editorial showcase across Jaipur, Udaipur, Jim Corbett, and Rishikesh, with direct founder WhatsApp inquiry handling and Impeccable design execution.

**Architecture:** Next.js 16+ App Router with TypeScript and Tailwind CSS; Server Components for 90%+ of editorial views, isolated Client Components for smooth scrolling (Lenis), interactive destination switcher, and form-to-WhatsApp validation (`react-hook-form` + `zod`); strongly typed static data structures separating presentation from content.

**Tech Stack:** Next.js 16+, React 19, TypeScript, Tailwind CSS, Lenis, Anime.js, Lucide React, React Hook Form, Zod, pnpm (via `npx pnpm`).

## Global Constraints

- **Design Authority:** Impeccable Design System (`PRODUCT.md`, `craft-floor.md`, `.impeccable/surfaces/index-html.md`).
- **Brand Palette:** Obsidian `#0B0909`, Deep Burgundy `#2A0E16`, Rose Gold `#B76E79` (restrained accent only), Champagne `#E8C7A8`, Warm Ivory `#F5EFE7`, Muted Taupe `#9C8D88`.
- **Refused Defaults:** No bright pink, no generic AI cards/templates, no gradient text, no fake glitter, no marketplace/vendor directory elements, no unoptimized images.
- **Conversion Flow:** Direct WhatsApp consultation with Gourav personally, featuring natural message formatting: `"Hi, My name is [Name]. I'm looking to plan a wedding in [Destination] around [Date] for around [Guests] guests. [Vision]"`.
- **Performance:** 60 FPS scrolling, Next.js `<Image>` with WebP/AVIF and responsive `sizes`, no heavy scroll listeners.

---

### Task 1: Scaffolding Next.js Project with Tailwind & Impeccable Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`
- Create: `src/styles/globals.css`
- Create: `src/app/layout.tsx` (baseline)

**Interfaces:**
- Produces: Runnable Next.js dev server with Tailwind color tokens (`obsidian`, `burgundy`, `rosegold`, `champagne`, `ivory`, `taupe`) and base CSS.

- [ ] **Step 1: Initialize Next.js project and install dependencies**

Run in project root:
```bash
npx pnpm init
npx pnpm add next@latest react@latest react-dom@latest lucide-react lenis animejs react-hook-form @hookform/resolvers zod clsx tailwind-merge
npx pnpm add -D typescript @types/node @types/react @types/react-dom @types/animejs tailwindcss@^3.4.17 postcss autoprefixer
```

- [ ] **Step 2: Create TypeScript & Tailwind configuration**

Create `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0909",
        burgundy: {
          DEFAULT: "#2A0E16",
          deep: "#1A080D",
          light: "#3D1420",
        },
        rosegold: {
          DEFAULT: "#B76E79",
          muted: "rgba(183, 110, 121, 0.4)",
        },
        champagne: {
          DEFAULT: "#E8C7A8",
          subtle: "#F2DEC9",
        },
        ivory: "#F5EFE7",
        taupe: "#9C8D88",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

Create `src/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0B0909;
  --foreground: #F5EFE7;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-sans), sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbar matching obsidian & champagne palette */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0B0909;
}
::-webkit-scrollbar-thumb {
  background: #2A0E16;
  border-radius: 3px;
  border: 1px solid rgba(232, 199, 168, 0.2);
}
::-webkit-scrollbar-thumb:hover {
  background: #B76E79;
}
```

- [ ] **Step 3: Verify build and dependencies**

Run: `npx pnpm build`  
Expected: Clean build verification.

- [ ] **Step 4: Commit Task 1**

```bash
git add package.json pnpm-lock.yaml tsconfig.json tailwind.config.ts postcss.config.mjs next.config.ts src/styles/globals.css
git commit -m "chore: scaffold Next.js 16 application with Tailwind and Impeccable tokens"
```

---

### Task 2: Typed Data Layer, Utilities & WhatsApp Generator

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/lib/validation/inquiry.ts`
- Create: `src/data/site.ts`
- Create: `src/data/weddings.ts`
- Create: `src/data/services.ts`
- Create: `src/data/testimonials.ts`
- Create: `tests/validation.test.ts`

**Interfaces:**
- Consumes: `zod`
- Produces:
  - `generateWhatsAppLink(data: InquiryInput): string`
  - `inquirySchema`: Zod validation schema
  - Typed collections: `weddings`, `services`, `testimonials`, `siteConfig`

- [ ] **Step 1: Write test for WhatsApp URL generation and Zod validation**

Create `tests/validation.test.ts`:
```typescript
import { inquirySchema, generateWhatsAppLink } from '../src/lib/validation/inquiry';

describe('Inquiry Validation & WhatsApp Link Generator', () => {
  it('validates a correct inquiry input', () => {
    const input = {
      name: 'Rohan Sharma',
      destination: 'jaipur',
      date: 'November 2026',
      guests: '300-500',
      vision: 'A royal palace wedding with authentic Rajasthani decor.',
    };
    const parsed = inquirySchema.safeParse(input);
    expect(parsed.success).toBe(true);
  });

  it('generates the exact conversational WhatsApp URL format', () => {
    const input = {
      name: 'Pooja & Aryan',
      destination: 'udaipur',
      date: 'December 2026',
      guests: '400',
      vision: 'Lakefront celebration with traditional musical curation.',
    };
    const url = generateWhatsAppLink(input, '919876543210');
    expect(url).toContain('https://wa.me/919876543210?text=');
    expect(url).toContain(encodeURIComponent('Hi, My name is Pooja & Aryan.'));
    expect(url).toContain(encodeURIComponent('Udaipur'));
  });
});
```

- [ ] **Step 2: Implement validation and WhatsApp generator**

Create `src/lib/validation/inquiry.ts`:
```typescript
import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  destination: z.enum(["jaipur", "udaipur", "corbett", "rishikesh", "other"]),
  date: z.string().min(2, "Please specify an estimated date or season"),
  guests: z.string().min(1, "Please specify estimated guest count"),
  vision: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const destinationLabels: Record<InquiryInput["destination"], string> = {
  jaipur: "Jaipur",
  udaipur: "Udaipur",
  corbett: "Jim Corbett",
  rishikesh: "Rishikesh",
  other: "Destination Wedding",
};

export function generateWhatsAppLink(data: InquiryInput, phoneNumber = "919876543210"): string {
  const destName = destinationLabels[data.destination] || "Destination";
  const visionPart = data.vision && data.vision.trim().length > 0 ? ` Notes: ${data.vision.trim()}` : "";
  const text = `Hi, My name is ${data.name.trim()}. I'm looking to plan a wedding in ${destName} around ${data.date.trim()} for around ${data.guests.trim()} guests.${visionPart}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
```

Create `src/lib/utils.ts`:
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Create typed data structures**

Create `src/data/site.ts`:
```typescript
export const siteConfig = {
  name: "Gourav Events",
  tagline: "Extraordinary Weddings Where Royalty Meets Emotion",
  description: "Premier luxury wedding planning and event design studio specializing in royal palaces and evocative destinations across Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
  domain: "gouravevents.com",
  url: "https://gouravevents.com",
  founder: "Gourav",
  phone: "+91 98765 43210", // Primary contact
  whatsappNumber: "919876543210", // Dedicated founder WhatsApp number for direct client inquiries
  email: "concierge@gouravevents.com",
  destinations: [
    { id: "jaipur", name: "Jaipur", subtitle: "Royal Heritage & Palace Splendor", description: "Grand fortresses, regal courtyards, and amber-lit traditions." },
    { id: "udaipur", name: "Udaipur", subtitle: "Lakeside Romance & Island Pavilions", description: "Shimmering waters, floating palaces, and timeless royal romance." },
    { id: "corbett", name: "Jim Corbett", subtitle: "Wilderness Grandeur & Forest Sanctuaries", description: "Intimate forest luxury, riverine canopies, and organic elegance." },
    { id: "rishikesh", name: "Rishikesh", subtitle: "Sacred Riverfronts & Foothills Serenity", description: "Spiritual tranquility, holy riverbanks, and elevated celebrations." },
  ],
  socials: {
    instagram: "https://instagram.com/gouravevents",
    pinterest: "https://pinterest.com/gouravevents",
  },
};
```

Create `src/data/weddings.ts`:
Full typed wedding chronicles with 4 landmark celebrations (Jaipur, Udaipur, Corbett, Rishikesh) including venues, guest scale, decor highlights, and testimonials.

Create `src/data/services.ts`:
4 core disciplines with scopes: Full-Scope Planning & Curation, Bespoke Spatial Scenography, Royal Hospitality & Logistics, Artist & Entertainment Curation.

Create `src/data/testimonials.ts`:
Editorial quotes from couples and families praising the founder's direct guidance and flawless execution.

- [ ] **Step 4: Run validation test**

Run: `node --test` or test script to confirm TypeScript interfaces and validation logic.

- [ ] **Step 5: Commit Task 2**

```bash
git add src/lib/ src/data/
git commit -m "feat: add typed data layer, site configuration, and WhatsApp generator"
```

---

### Task 3: Root Layout, Fonts, Lenis Smooth Scroll & Navigation

**Files:**
- Create: `src/components/animations/SmoothScroll.tsx`
- Create: `src/components/navigation/Navbar.tsx`
- Create: `src/components/navigation/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `siteConfig`, `SmoothScroll`
- Produces: Full layout shell with responsive luxury navbar, mobile drawer, direct founder WhatsApp CTA, and editorial footer.

- [ ] **Step 1: Create SmoothScroll client component**

Create `src/components/animations/SmoothScroll.tsx`:
```tsx
"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2: Create Navbar and Footer**

Create `src/components/navigation/Navbar.tsx`:
- Fixed top navigation with obsidian backdrop blur and hairline champagne divider.
- Brand logo in serif typography: "GOURAV EVENTS".
- Desktop links: Weddings, Destinations, Disciplines, About, Contact.
- Action button: Direct VIP WhatsApp trigger with phone icon ("Speak with Gourav").
- Mobile hamburger menu opening full-screen obsidian drawer with smooth entrance.

Create `src/components/navigation/Footer.tsx`:
- Editorial brand monograph, destination links, direct founder hotline, and copyright.

- [ ] **Step 3: Update `src/app/layout.tsx` with Google Fonts**

Load `Cinzel` (display serif) and `Plus Jakarta Sans` (body sans) via `next/font/google`.

- [ ] **Step 4: Commit Task 3**

```bash
git add src/components/ src/app/layout.tsx
git commit -m "feat: implement root layout, typography, Lenis smooth scroll, and navigation"
```

---

### Task 4: Atmospheric Hero & Interactive Destinations Showcase

**Files:**
- Create: `src/components/hero/Hero.tsx`
- Create: `src/components/destinations/DestinationsShowcase.tsx`
- Create: `src/app/page.tsx` (initial assembly)
- Add: High-fidelity visual assets in `public/images/destinations/`

**Interfaces:**
- Consumes: `siteConfig.destinations`, `weddings`
- Produces: First viewport editorial thesis and interactive destination switch experience.

- [ ] **Step 1: Implement Hero component**

Create `src/components/hero/Hero.tsx`:
- Monograph opening: "Crafting Extraordinary Weddings Where Royalty Meets Emotion."
- Background: Layered deep burgundy and obsidian texture with subtle vignette.
- Restrained luxury CTAs: "Explore Selected Works" and "Consult Gourav on WhatsApp".

- [ ] **Step 2: Implement DestinationsShowcase component**

Create `src/components/destinations/DestinationsShowcase.tsx`:
- Interactive destination tabs: Jaipur, Udaipur, Jim Corbett, Rishikesh.
- Smooth state transition updating the scene description, architectural notes, signature venues, and a direct pre-filled WhatsApp link for that destination.

- [ ] **Step 3: Commit Task 4**

```bash
git add src/components/hero/ src/components/destinations/ src/app/page.tsx public/images/
git commit -m "feat: add atmospheric thesis hero and interactive destinations showcase"
```

---

### Task 5: Disciplines of Mastery, Founder Ethos & Testimonials

**Files:**
- Create: `src/components/services/ServicesOverview.tsx`
- Create: `src/components/home/FounderEthos.tsx`
- Create: `src/components/testimonials/TestimonialSlider.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `services`, `testimonials`, `siteConfig`
- Produces: Refined editorial presentations of the 4 core disciplines and Gourav's personal manifesto.

- [ ] **Step 1: Implement ServicesOverview**

Create `src/components/services/ServicesOverview.tsx`:
- Refuses uniform cards; uses a high-contrast editorial numbered layout for the four disciplines:
  1. Full-Scope Planning & Destination Management
  2. Bespoke Spatial Decor & Scenography
  3. Royal Hospitality & Guest Logistics
  4. Artist & Entertainment Curation

- [ ] **Step 2: Implement FounderEthos**

Create `src/components/home/FounderEthos.tsx`:
- Intimate, high-touch statement from the founder on why Gourav Events caps the number of weddings per season to maintain uncompromising personal oversight.

- [ ] **Step 3: Implement TestimonialSlider**

Create `src/components/testimonials/TestimonialSlider.tsx`:
- Emotional client words celebrating unforgettable moments.

- [ ] **Step 4: Commit Task 5**

```bash
git add src/components/services/ src/components/home/ src/components/testimonials/ src/app/page.tsx
git commit -m "feat: add disciplines overview, founder ethos, and client narratives"
```

---

### Task 6: Wedding Chronicles Portfolio & Dynamic Slug Route

**Files:**
- Create: `src/components/weddings/FeaturedWeddings.tsx`
- Create: `src/components/weddings/WeddingCard.tsx`
- Create: `src/app/weddings/page.tsx`
- Create: `src/app/weddings/[slug]/page.tsx`

**Interfaces:**
- Consumes: `weddings` data
- Produces: Portfolio index with destination filters and individual immersive wedding chronicle pages.

- [ ] **Step 1: Implement FeaturedWeddings and WeddingCard**

Create `src/components/weddings/WeddingCard.tsx` and `FeaturedWeddings.tsx`:
- Next.js `<Image>` with explicit aspect ratios, responsive `sizes`, hover scale (`scale-[1.02]`), and subtle champagne keyline border.

- [ ] **Step 2: Implement `/weddings/page.tsx`**

Create `src/app/weddings/page.tsx`:
- Server Component listing all weddings, with interactive destination filter tabs (All, Jaipur, Udaipur, Jim Corbett, Rishikesh).

- [ ] **Step 3: Implement `/weddings/[slug]/page.tsx`**

Create `src/app/weddings/[slug]/page.tsx`:
- Generates static params for each wedding slug (`generateStaticParams`).
- Displays venue, guest scale, couple narrative, decor highlights, photo gallery, and a direct "Discuss a celebration like this with Gourav" WhatsApp CTA.

- [ ] **Step 4: Commit Task 6**

```bash
git add src/components/weddings/ src/app/weddings/
git commit -m "feat: build wedding chronicles gallery and dynamic story pages"
```

---

### Task 7: Services & About Pages

**Files:**
- Create: `src/app/services/page.tsx`
- Create: `src/app/about/page.tsx`

**Interfaces:**
- Consumes: `services`, `siteConfig`
- Produces: Deep editorial explorations of the company's heritage and service disciplines.

- [ ] **Step 1: Implement `/services/page.tsx`**

Create `src/app/services/page.tsx`:
- Comprehensive breakdown of all 4 planning disciplines, deliverables, destination logistics, and a client journey timeline (Concept -> Scenography -> Production -> Execution).

- [ ] **Step 2: Implement `/about/page.tsx`**

Create `src/app/about/page.tsx`:
- The story of Gourav Events, the founding philosophy, royal heritage connection, and craftsmanship standards.

- [ ] **Step 3: Commit Task 7**

```bash
git add src/app/services/ src/app/about/
git commit -m "feat: implement dedicated services and about pages"
```

---

### Task 8: Direct Founder WhatsApp Inquiry Gateway (`/contact`)

**Files:**
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: `inquirySchema`, `generateWhatsAppLink`, `siteConfig`
- Produces: Interactive form converting validated inputs directly into a personalized WhatsApp conversation with Gourav.

- [ ] **Step 1: Implement ContactForm client component**

Create `src/components/contact/ContactForm.tsx`:
- Uses `react-hook-form` with `zodResolver(inquirySchema)`.
- Fields: Name, Destination, Estimated Date, Guest Count, Vision/Notes.
- On valid submission:
  - Formats message: `"Hi, My name is [Name]. I'm looking to plan a wedding in [Destination] around [Date] for around [Guests] guests. [Vision]"`
  - Opens `https://wa.me/<whatsappNumber>?text=<encoded_text>` in a new tab.
  - Displays on-screen confirmation card with the inquiry summary and a manual button ("Reopen WhatsApp") in case of pop-up blockers.

- [ ] **Step 2: Implement `/contact/page.tsx`**

Create `src/app/contact/page.tsx`:
- Displays VIP Concierge headline, founder direct line, office hub contacts (Jaipur, Udaipur, Corbett, Rishikesh), and the interactive ContactForm.

- [ ] **Step 3: Commit Task 8**

```bash
git add src/components/contact/ src/app/contact/
git commit -m "feat: implement VIP concierge and direct WhatsApp inquiry form"
```

---

### Task 9: SEO Endpoints, Metadata, Sitemap & Robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/layout.tsx` (enrich metadata)

**Interfaces:**
- Consumes: `siteConfig`, `weddings`
- Produces: Valid XML sitemap, robots.txt, OpenGraph and Twitter card tags.

- [ ] **Step 1: Implement dynamic `sitemap.ts`**

Generate entries for `/`, `/about`, `/services`, `/weddings`, `/contact`, and all `/weddings/[slug]` URLs.

- [ ] **Step 2: Implement `robots.ts`**

Allow all search engines; point to `https://gouravevents.com/sitemap.xml`.

- [ ] **Step 3: Commit Task 9**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx
git commit -m "feat: add SEO metadata, dynamic sitemap, and robots endpoints"
```

---

### Task 10: Impeccable Mechanical Audit, Build Verification & Quality Sign-Off

**Files:**
- Audited across all `src/` files

- [ ] **Step 1: Run TypeScript verification**

Run: `npx pnpm check` (or `npx tsc --noEmit`)  
Expected: Zero type errors.

- [ ] **Step 2: Run Production Build**

Run: `npx pnpm build`  
Expected: Clean static generation of all pages without errors or hydration mismatches.

- [ ] **Step 3: Run Impeccable Mechanical Detector**

Run: `node C:\Users\HP\.gemini\antigravity\skills\impeccable\scripts\detect.mjs --json`  
Expected: Verify zero critical design violations against `craft-floor.md`.

- [ ] **Step 4: Responsive & Browser Verification**

Run dev server and test:
- Desktop (1440px): Smooth Lenis scrolling, typography hierarchy, hover states.
- Mobile (375px–430px): Touch responsiveness, mobile nav drawer, one-tap WhatsApp trigger.
- WhatsApp message generation: Verify the generated URL contains `"Hi, My name is [Name]..."` and opens correctly.

- [ ] **Step 5: Final Git Commit**

```bash
git add .
git commit -m "chore: complete quality audit, performance checks, and build sign-off"
```
