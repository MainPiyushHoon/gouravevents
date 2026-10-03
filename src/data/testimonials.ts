export interface Testimonial {
  id: string;
  couple: string;
  role: string;
  destination: string;
  venue: string;
  year: number;
  quote: string;
  storySnippet: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "kabir-meera",
    couple: "Kabir & Meera Kapoor",
    role: "The Couple",
    destination: "Jim Corbett",
    venue: "Riverine Reserve Sanctuary",
    year: 2024,
    quote:
      "We wanted a wedding that honored our love for the wild while maintaining haute-couture elegance. Gourav built an enchanting forest kingdom that felt intimate, regal, and deeply sacred.",
    storySnippet:
      "A jungle sanctuary soiree surrounded by ancient canopies, acoustic Sufi harmonies, and starlit riverbed celebrations.",
  },
  {
    id: "aryaman-nayantara",
    couple: "Aryaman & Nayantara Singhania",
    role: "The Bride & Groom",
    destination: "Jaipur",
    venue: "Samode Palace",
    year: 2025,
    quote:
      "Gourav is not merely an event planner; he is an artist with an uncanny ability to turn complex royal logistics into pure poetry. Our 450 guests from 14 countries were utterly mesmerized by the warmth and grandeur.",
    storySnippet:
      "A three-day palace extravaganza featuring torchlit courtyards, velvet-draped mandap architecture, and private polo-ground celebrations.",
  },
  {
    id: "rajesh-mehta-father",
    couple: "Dev & Tara Mehta",
    role: "Father of the Bride",
    destination: "Udaipur",
    venue: "Jagmandir Island Palace",
    year: 2025,
    quote:
      "Entrusting my daughter's wedding to Gourav was the best decision our family made. He treated our celebration as his own sacred responsibility. There was not a single second of hesitation or panic.",
    storySnippet:
      "An ethereal lakefront wedding where guests arrived by boat across moonlit waters into a candlelit island wonderland.",
  },
  {
    id: "siddharth-ananya",
    couple: "Siddharth & Ananya Verma",
    role: "The Couple",
    destination: "Rishikesh",
    venue: "Ganga Sanctuary",
    year: 2024,
    quote:
      "The private Ganga aarti and the sunset pheras overlooking the turquoise river moved every single guest to tears. The spiritual reverence paired with royal hospitality was beyond anything we imagined.",
    storySnippet:
      "A riverside spiritual celebration blessed by twilight Vedic chants and a thousand floating flower lanterns.",
  },
];
