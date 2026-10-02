---
name: Gourav Events
description: Luxury wedding planning and event design studio for royal palaces and evocative landscapes
colors:
  obsidian: "#0B0909"
  burgundy: "#2A0E16"
  burgundy-deep: "#1A080D"
  burgundy-light: "#3D1420"
  rosegold: "#B76E79"
  champagne: "#E8C7A8"
  champagne-subtle: "#F2DEC9"
  ivory: "#F5EFE7"
  taupe: "#9C8D88"
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
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.obsidian}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.champagne-subtle}"
---

# Design System: Gourav Events

## Overview
Gourav Events is a luxury wedding planning and event design studio. The visual world is that of a **Cinematic Royal Monograph**, rejecting generic corporate event templates, wedding vendor marketplaces, and clichéd AI gold glitter.

## Colors
- **Obsidian (`#0B0909`):** Ground surface providing cinematic contrast.
- **Deep Burgundy (`#2A0E16`, `#1A080D`):** Royal Indian heritage backdrop for cards and sections.
- **Rose Gold (`#B76E79`):** Restrained metallic accent for keylines, icons, and micro-dividers. Never used as a dominant bright pink.
- **Champagne (`#E8C7A8`):** Luminous highlight for primary actions, active indicators, and titles.
- **Warm Ivory (`#F5EFE7`):** High-contrast editorial text exceeding WCAG AA standards (>= 4.5:1).
- **Muted Taupe (`#9C8D88`):** Restrained captions, timestamps, and secondary labels.

## Typography
- **Display Serif:** `Cinzel` via Google Fonts. Used for royal headlines, monogram logos, and celebration titles.
- **Body & Interface:** `Plus Jakarta Sans` via Google Fonts. Clean geometric sans for high-readability copy, labels, and forms.

## Layout
- Maximum content measure: `max-w-7xl` with `px-6 md:px-12`.
- Paced editorial density with generous negative space between narrative sections.
- Strict rejection of uniform 3-card grids in favor of stacked, asymmetric monograph compositions.

## Elevation & Depth
- Elevation achieved via subtle keyline champagne borders (`border border-champagne/15`) and deep radial background vignettes.
- Zero harsh box-shadows or fake neon colored halos.

## Shapes
- Container surfaces: `rounded-2xl` and `rounded-3xl`.
- Interactive actions & buttons: `rounded-full` luxury pills.

## Components
- **Navbar:** Obsidian backdrop blur (`backdrop-blur-md bg-obsidian/90`) with hairline champagne border and founder direct WhatsApp badge.
- **Destination Switcher:** Seamless tab journey across Jaipur, Udaipur, Jim Corbett, and Rishikesh.
- **Bespoke Inquiry Gateway:** Validated interactive form that formats natural messages (`"Hi, My name is [Name]..."`) and deep-links directly to WhatsApp.
- **Footer:** Editorial brand monograph, destination index, and direct hotline.

## Do's and Don'ts
- **DO** honor the four confirmed destinations: Jaipur, Udaipur, Jim Corbett, and Rishikesh.
- **DO** keep rose gold restrained as a delicate metallic accent.
- **DO** route inquiries directly to Gourav on WhatsApp.
- **DON'T** introduce bright pink or neon gradients.
- **DON'T** use bounce/elastic easing in animations.
- **DON'T** build vendor directory or marketplace layouts.
