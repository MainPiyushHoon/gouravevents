export interface Wedding {
  slug: string;
  title: string;
  couple: string;
  year: number;
  location: string;
  destinationTag: "jaipur" | "udaipur" | "corbett" | "rishikesh";
  venue: string;
  guestScale: string;
  description: string;
  narrative: string;
  decorTheme: string;
  heroImage: string;
  gallery: string[];
  decorHighlights: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const weddings: Wedding[] = [
  {
    slug: "kabir-meera-corbett-wilderness",
    title: "Enchanted Wilds & Forest Grandeur",
    couple: "Kabir & Meera",
    year: 2024,
    location: "Jim Corbett, Uttarakhand",
    destinationTag: "corbett",
    venue: "Riverine Reserve Sanctuary & Ancient Canopies",
    guestScale: "220 Guests",
    description:
      "An intimate haute-luxe jungle soiree seamlessly blending raw forest majesty with bespoke organic scenography.",
    narrative:
      "For Kabir and Meera, nature was the sacred witness. Set inside the pristine jungle borders of Jim Corbett along the Kosi River, we orchestrated an intimate luxury gathering where ancient sal trees became natural chandeliers draped in micro-fairy lights, wild ferns, and white orchid cascades. The reception unfolded around colossal stone fire pits with live acoustic gypsy-folk harmonies under clear Himalayan skies.",
    decorTheme: "Organic Forest Luxury, Earthy Taupe & Warm Firelight",
    heroImage: "/images/weddings/corbett-wedding-hero.jpg",
    gallery: [
      "/images/weddings/corbett-wedding-1.jpg",
      "/images/weddings/corbett-wedding-2.jpg",
      "/images/weddings/corbett-wedding-3.jpg",
      "/images/weddings/corbett-wedding-4.jpg",
    ],
    decorHighlights: [
      "Riverbed banquet tables carved from reclaimed natural driftwood",
      "Suspended botanical arches with 10,000 hand-strung jasmine buds",
      "Acoustic amphitheater ringed by warm river rock fire bowls",
      "Open-air cocktail conservatory under the Himalayan canopy",
    ],
    testimonial: {
      quote:
        "Gourav transformed the untamed forest into the most elegant, deeply emotional wedding our families have ever witnessed. It felt otherworldly.",
      author: "Kabir & Meera",
    },
  },
  {
    slug: "aryaman-nayantara-jaipur-palace",
    title: "The Royal Amber Splendor",
    couple: "Aryaman & Nayantara",
    year: 2025,
    location: "Jaipur, Rajasthan",
    destinationTag: "jaipur",
    venue: "Samode Palace & Heritage Terraces",
    guestScale: "450 Guests",
    description:
      "A grand royal confluence of ancestral Rajput heritage and modern haute-couture elegance under starry Rajasthani skies.",
    narrative:
      "Nestled against the rugged Aravalli hills, Samode Palace provided an awe-inspiring royal canvas. We designed a majestic 3-day royal narrative: a torchlit welcoming procession flanked by 40 royal horses, a midnight Sufi mehfil illuminated by 1,200 hand-poured wax torches, and a central ceremonial mandap draped in bespoke deep burgundy velvet and antique marigolds.",
    decorTheme: "Heritage Rajputana Royalty & Deep Burgundy Velvet",
    heroImage: "/images/weddings/jaipur-wedding-hero.jpg",
    gallery: [
      "/images/weddings/jaipur-wedding-1.jpg",
      "/images/weddings/jaipur-wedding-2.jpg",
      "/images/weddings/jaipur-wedding-3.jpg",
      "/images/weddings/jaipur-wedding-4.jpg",
    ],
    decorHighlights: [
      "Custom hand-carved stone archways lined with royal brass lanterns",
      "Bespoke deep burgundy and rose gold velvet banquet canopies",
      "Floating floral mandap surrounded by 8-foot heritage brass oil urulis",
      "Curated royal dining experience served on custom engraved copperware",
    ],
    testimonial: {
      quote:
        "Gourav was not merely our planner — he was the mastermind who brought our dream of a royal fairytale into breathtaking reality. Every single guest was spellbound.",
      author: "Aryaman & Nayantara",
    },
  },
  {
    slug: "dev-tara-udaipur-island-palace",
    title: "Moonlit Waters & Island Romance",
    couple: "Dev & Tara",
    year: 2025,
    location: "Udaipur, Rajasthan",
    destinationTag: "udaipur",
    venue: "Jagmandir Island Palace & Lake Pichola",
    guestScale: "380 Guests",
    description:
      "An ethereal lakefront celebration where ivory marble pavilions, shimmering waters, and thousands of floating candles met.",
    narrative:
      "The island of Jagmandir served as a floating sanctuary of romance. Guests arrived on traditional royal shikara boats adorned with white tuberoses and champagne silks. As dusk blanketed the Aravalli horizon, the palace ignited in warm candlelight, accompanied by a world-class sitar and cello symphony, followed by a dramatic fireworks coronation over Lake Pichola.",
    decorTheme: "Ethereal Lakeside Opulence in Champagne & Warm Ivory",
    heroImage: "/images/weddings/udaipur-wedding-hero.jpg",
    gallery: [
      "/images/weddings/udaipur-wedding-1.jpg",
      "/images/weddings/udaipur-wedding-2.jpg",
      "/images/weddings/udaipur-wedding-3.jpg",
      "/images/weddings/udaipur-wedding-4.jpg",
    ],
    decorHighlights: [
      "Floating floral mandap appearing to rest seamlessly upon Lake Pichola",
      "Bridal boat arrival across illuminated moonlit water reflections",
      "360-degree glass banquet pavilion reflecting historic city palace lights",
      "Custom rose-gold scented candles specially cast for the celebration",
    ],
    testimonial: {
      quote:
        "The attention to spatial detail was astonishing. Gourav took personal ownership of every minute, allowing us and our families to experience pure magic without a moment of stress.",
      author: "Dev & Tara",
    },
  },
  {
    slug: "siddharth-ananya-rishikesh-sanctuary",
    title: "Sacred Horizons & Riverbank Vows",
    couple: "Siddharth & Ananya",
    year: 2024,
    location: "Rishikesh, Uttarakhand",
    destinationTag: "rishikesh",
    venue: "Ganga Sanctuary & Foothills Terraces",
    guestScale: "180 Guests",
    description:
      "A transcendent celebration where ancient Vedic chants, pure turquoise mountain waters, and holy riverfront pheras resonated.",
    narrative:
      "High along the cliffs overlooking the sacred Ganga, Siddharth and Ananya exchanged lifelong vows at the exact moment of sunset. The ceremony was blessed by traditional temple priests chanting ancient mantras against the serene roar of the river. As night settled, 1,008 hand-woven flower diyas were floated down the river in a breathtaking spectacle of spiritual devotion and pure celebration.",
    decorTheme: "Sacred White Lotus, Brass Heirlooms & Warm Gold Glow",
    heroImage: "/images/weddings/rishikesh-wedding-hero.jpg",
    gallery: [
      "/images/weddings/rishikesh-wedding-1.jpg",
      "/images/weddings/rishikesh-wedding-2.jpg",
      "/images/weddings/rishikesh-wedding-3.jpg",
      "/images/weddings/rishikesh-wedding-4.jpg",
    ],
    decorHighlights: [
      "Cliffside mandap framing panoramic views of the sacred Ganges river",
      "Grand Twilight Ganga Aarti performed exclusively for the wedding party",
      "White lotus floral scenography paired with antique South Indian brass lamps",
      "Sunset flute and Santoor meditation during the bridal entrance",
    ],
    testimonial: {
      quote:
        "The spiritual serenity, the flawless hospitality, and the royal warmth that Gourav infused into our Rishikesh wedding moved everyone to tears.",
      author: "Siddharth & Ananya",
    },
  },
];
