export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  philosophy: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "full-scope-planning",
    number: "01",
    title: "Full-Scope Planning & Destination Management",
    tagline: "Turnkey architectural management from inception to final send-off.",
    description:
      "We orchestrate complex multi-day destination weddings with absolute precision. From heritage palace permit acquisitions and charter aviation management to vendor contract negotiations and master production timelines, every moving element is governed by our direct oversight.",
    deliverables: [
      "Destination venue scouting and exclusive palace buyout negotiations",
      "Master multi-day production schedules and budget engineering",
      "Legal, municipal, and heritage conservation permit clearances",
      "Comprehensive vendor orchestration and quality control",
      "On-ground command center with 24/7 technical and event leads",
    ],
    philosophy:
      "A flawless wedding looks effortless to the guest because thousands of hours of architectural planning operated silently in the background.",
    image: "/images/services/planning.jpg",
  },
  {
    id: "spatial-decor-scenography",
    number: "02",
    title: "Bespoke Spatial Decor & Scenography",
    tagline: "Transforming historic grounds into living, breathing works of art.",
    description:
      "We do not decorate rooms; we craft unforgettable worlds. Our spatial design team builds bespoke architectural sets, custom botanical installations, dramatic lighting scenography, and immersive dining pavilions that honor the intrinsic soul of each destination.",
    deliverables: [
      "Custom 3D architectural renders and atmospheric lighting layouts",
      "Signature ceremonial mandaps engineered specifically for the site",
      "Haute-horticulture floral curation sourced globally and locally",
      "Bespoke dining scenography, custom textiles, and heirloom tableware",
      "Artisan soundscapes and sensory scent diffusion designs",
    ],
    philosophy:
      "Every archway, shadow, and candle must evoke an emotional reverence that stays etched in memory forever.",
    image: "/images/services/scenography.jpg",
  },
  {
    id: "royal-hospitality-logistics",
    number: "03",
    title: "Royal Hospitality & VIP Guest Logistics",
    tagline: "High-touch, personalized care treating every guest like royalty.",
    description:
      "Indian weddings are deeply rooted in the sacred honor of guest hospitality (Atithi Devo Bhava). We manage luxury airport welcomes, fleet escorts, personalized palace suite allocations, 24/7 guest concierge desks, and bespoke gifting suites with unmatched grace.",
    deliverables: [
      "Dedicated VIP concierge desk and personal guest liaison officers",
      "Luxury fleet management, private airport transfers, and luggage escorts",
      "Curated welcome suites with bespoke destination gifting hampers",
      "Personalized dietary orchestration across all gourmet banquets",
      "Guest styling lounges, saree draping artists, and emergency styling kits",
    ],
    philosophy:
      "Your guests should feel like honored dignitaries in a private palace, enveloped in genuine warmth and effortless comfort.",
    image: "/images/services/hospitality.jpg",
  },
  {
    id: "artist-entertainment-curation",
    number: "04",
    title: "Artist & Entertainment Curation",
    tagline: "Mesmerizing cultural symphonies and world-class performances.",
    description:
      "From soul-stirring classical sitar and shehnai melodies at sunrise to high-energy celebrity live acts, international DJs, and theatrical royal processions, we curate bespoke artistic experiences that mirror your personality and elevate the celebration's tempo.",
    deliverables: [
      "Celebrity artist bookings, riders, and technical sound management",
      "Curated traditional heritage ensembles (Rajasthani folk, Sufi qawwals, Manganiyars)",
      "Bespoke bridal entry and groom baraat musical scoring",
      "Theatrical lighting design, laser scenography, and cold-pyro spectacles",
      "Custom after-party concepts and nightlife acoustic engineering",
    ],
    philosophy:
      "Music and performance are the emotional heartbeat of the celebration — paced with theatrical intuition to create euphoric crescendos.",
    image: "/images/services/entertainment.jpg",
  },
];
