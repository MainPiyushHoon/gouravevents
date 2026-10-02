---
name: Gourav Events
description: Luxury wedding planning and event design studio for royal palaces and evocative landscapes
colors:
  alabaster: "#FAF8F5"
  ivory-warm: "#F4EFEA"
  white: "#FFFFFF"
  charcoal: "#1C1817"
  charcoal-muted: "#5C5250"
  burgundy: "#3E1522"
  burgundy-deep: "#260B14"
  burgundy-light: "#541E30"
  rosegold: "#9E5460"
  champagne: "#8C6843"
  champagne-light: "#D6C4AE"
  champagne-subtle: "#EFE6DC"
  taupe: "#7A6E6A"
  taupe-light: "#DCD5CD"
typography:
  display:
    fontFamily: "Cinzel, serif"
    fontWeight: "400, 500, 600"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: "300, 400, 500"
    lineHeight: "1.65"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.alabaster}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-light}"
---

# Design System: Gourav Events

## Overview
Gourav Events is an ultra-luxury wedding planning and event design studio. The visual world is that of a **Radiant Light Royal Monograph**, featuring a warm, welcoming alabaster white ground, pure white elevated cards, high-contrast dark charcoal typography, deep royal burgundy branding, and delicate champagne bronze and rose gold accents.

## Colors
- **Warm Alabaster (`#FAF8F5`):** Primary canvas surface providing an inviting, radiant, high-end warm white ground.
- **Pure White & Warm Ivory (`#FFFFFF`, `#F4EFEA`):** Elevated card containers, form fields, and focal panels.
- **Dark Charcoal (`#1C1817`, `#5C5250`):** Ultra-high contrast, legible serif headings and body copy exceeding WCAG AAA standards.
- **Deep Royal Burgundy (`#3E1522`, `#260B14`):** Signature regal brand accent used for primary CTA buttons, active state indicators, and deep grounding anchors.
- **Rose Gold (`#9E5460`):** Refined metallic accent for eyebrow labels, keylines, and icons.
- **Champagne Bronze (`#8C6843`, `#D6C4AE`):** Luminous metallic highlights and delicate border keylines.
- **Warm Taupe (`#7A6E6A`, `#DCD5CD`):** Secondary metadata, dividers, and subtle borders.

## Scroll & Motion Mechanics
- **Lenis Smooth Scroll:** Virtual scroll interpolation tuned for a buttery smooth sliding feel (`duration: 1.3`, `wheelMultiplier: 0.9`, `smoothWheel: true`).
- Anti-stutter rule enforced: Native CSS `scroll-smooth` strictly disabled on `html` to prevent animation engine conflicts.

## Typography
- **Display Serif:** `Cinzel` via Google Fonts. Used for royal headlines, monogram logos, and celebration titles.
- **Body & Interface:** `Plus Jakarta Sans` via Google Fonts. Clean geometric sans for high-readability copy, labels, and forms.

## Layout
- Maximum content measure: `max-w-7xl` with `px-6 md:px-12`.
- Paced editorial density with generous negative space between narrative sections.
- Stacked, asymmetric monograph compositions and magazine-style full-bleed visual showcases.

## Elevation & Depth
- Elevation achieved via subtle keyline champagne/taupe borders (`border border-taupe-light/60`) and soft, natural ambient shadows.
- Zero harsh box-shadows or fake neon halos.

## Shapes
- Container surfaces: `rounded-2xl` and `rounded-3xl`.
- Interactive actions & buttons: `rounded-full` luxury pills.

## Components
- **Navbar:** Warm alabaster frosted glass header (`backdrop-blur-md bg-alabaster/92`) with hairline border and deep burgundy WhatsApp hotline pill.
- **Destination Switcher:** Seamless tab journey across Jaipur, Udaipur, Jim Corbett, and Rishikesh.
- **Bespoke Inquiry Gateway:** Validated interactive form that formats natural messages (`"Hi, My name is [Name]..."`) and deep-links directly to WhatsApp.
- **Footer:** Grounding royal burgundy anchor block with warm ivory typography and full destination index.

## Do's and Don'ts
- **DO** honor the four confirmed destinations: Jaipur, Udaipur, Jim Corbett, and Rishikesh.
- **DO** keep rose gold restrained as a delicate metallic accent.
- **DO** route inquiries directly to Gourav on WhatsApp.
- **DON'T** introduce bright pink or neon gradients.
- **DON'T** use bounce/elastic easing in animations.
- **DON'T** build vendor directory or marketplace layouts.
