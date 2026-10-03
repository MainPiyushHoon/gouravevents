export interface DestinationInfo {
  id: "corbett" | "jaipur" | "udaipur" | "rishikesh";
  name: string;
  tagline: string;
  landscape: string;
  description: string;
  highlights: string[];
  signatureVenues: string[];
  heroImage: string;
}

export const siteConfig = {
  name: "Gourav Events",
  tagline: "Extraordinary Weddings Where Royalty Meets Emotion",
  description:
    "Premier luxury wedding planning and event design studio specializing in evocative wilderness sanctuaries and royal heritage palaces across Jim Corbett, Jaipur, Udaipur, and Rishikesh.",
  domain: "gouravevents.com",
  url: "https://gouravevents.com",
  founder: "Gourav",
  // Note: To configure the live WhatsApp line, update the phone and whatsappNumber below.
  phoneDisplay: "+91 96678 84377",
  whatsappNumber: "919667884377",
  email: "info@gouravevents.com",
  hubs: [
    { city: "Jim Corbett", address: "Dhikala Reserve Corridor, Ramnagar, Uttarakhand" },
    { city: "Jaipur", address: "C-Scheme, Civil Lines, Jaipur, Rajasthan" },
    { city: "Udaipur", address: "Fateh Sagar Heritage Quarter, Udaipur, Rajasthan" },
    { city: "Rishikesh", address: "Ganga Sanctuary Enclave, Tapovan, Rishikesh, Uttarakhand" },
  ],
  destinations: [
    {
      id: "corbett",
      name: "Jim Corbett",
      tagline: "Wilderness Grandeur & Forest Luxury",
      landscape: "Ancient sal trees, misty foothills & riverine retreats",
      description:
        "Where raw natural majesty meets elevated haute-luxe hospitality. We curate intimate jungle celebrations surrounded by ancient canopies, riverbank fire pits, and organic floral architecture.",
      highlights: ["Lantern-lit riverbed sangeet", "Canopy botanical banquets", "Starlit wilderness acoustic soirees"],
      signatureVenues: ["Taj Corbett Resort & Spa", "The Riverview Retreat", "Aahana Wilderness Luxury", "Namah Resort"],
      heroImage: "/images/destinations/corbett.jpg",
    },
    {
      id: "jaipur",
      name: "Jaipur",
      tagline: "Royal Heritage & Amber Splendor",
      landscape: "Palatial courtyards, sand-cast stone arches & royal havelis",
      description:
        "The pink city commands centuries of regal grace. We orchestrate magnificent royal processions, candlelit palace courtyard dinners, and majestic heritage vows set against living history.",
      highlights: ["Torchlit royal polo grounds", "Historic fortress scenography", "Regal elephant & shehnai welcoming rituals"],
      signatureVenues: ["Rambagh Palace", "Samode Palace", "Jai Mahal Palace", "Fairmont Jaipur"],
      heroImage: "/images/destinations/jaipur.jpg",
    },
    {
      id: "udaipur",
      name: "Udaipur",
      tagline: "Lakeside Romance & Island Pavilions",
      landscape: "Shimmering waters, floating palaces & marble colonnades",
      description:
        "The Venice of the East presents ethereal romance. We transform island pavilions and lakeside marble courtyards into moonlit royal sanctuaries where every reflection tells a love story.",
      highlights: ["Illuminated boat bridal arrivals", "Marble terrace fireworks displays", "Floating mandap scenography"],
      signatureVenues: ["Taj Lake Palace", "The Leela Palace Udaipur", "Jagmandir Island Palace", "Oberoi Udaivilas"],
      heroImage: "/images/destinations/udaipur.jpg",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      tagline: "Sacred Riverfronts & Foothills Serenity",
      landscape: "Turquoise river waters, Himalayan breezes & sacred aura",
      description:
        "An aura of profound spiritual sanctity and serene elegance. We craft sacred riverside pheras accompanied by traditional Vedic chants, floating diya ceremonies, and Himalayan tranquility.",
      highlights: ["Holy Ganga twilight aarti pheras", "Floating flower blessing rituals", "Himalayan panoramic sundowners"],
      signatureVenues: ["Ananda in the Himalayas", "Taj Rishikesh Resort & Spa", "Roseate Ganges", "Aloha on the Ganges"],
      heroImage: "/images/destinations/rishikesh.jpg",
    },
  ] as DestinationInfo[],
  socials: {
    instagram: "https://www.instagram.com/gouravevents1/",
    facebook: "https://www.facebook.com/share/1F2rvQbyKi/?mibextid=wwXIfr",
    pinterest: "https://pinterest.com/gouravevents",
    youtube: "https://youtube.com/@gouravevents",
  },
  navLinks: [
    { label: "Weddings", href: "/weddings" },
    { label: "Destinations", href: "/destinations" },
    { label: "Disciplines", href: "/services" },
    { label: "The House", href: "/about" },
    { label: "Enquire Now", href: "/enquire" },
  ],
};
