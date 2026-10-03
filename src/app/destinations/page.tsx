import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle2, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

export const metadata: Metadata = {
  title: "Destinations of Distinction — Jim Corbett, Jaipur, Udaipur & Rishikesh",
  description:
    "Explore India's most evocative wedding destinations curated by Gourav Events. Wilderness sanctuaries in Jim Corbett, royal heritage palaces in Jaipur and Udaipur, and sacred riverfronts in Rishikesh.",
};

const destinationDetails = [
  {
    id: "corbett",
    name: "Jim Corbett",
    title: "Wilderness Grandeur & Forest Luxury",
    subheading: "Ancient Foothills, Sal Groves & Raw Majesty",
    description:
      "Where raw natural grandeur meets ultra-luxe hospitality. Set against the Himalayan foothills and ancient sal tree canopies, we curate intimate wilderness weddings with lantern-lit riverbeds, botanical floral arches, and acoustic fire-pit soirees.",
    landscape: "Ancient sal trees, misty foothills & riverine retreats",
    bestSeason: "November through April (Crisp mountain air & starry night skies)",
    signatureVenues: [
      "Taj Corbett Resort & Spa (River Kosi Waterfront)",
      "The Riverview Retreat (Foothills Sanctuary)",
      "Aahana Wilderness Luxury (Eco-Haute Reserve)",
      "Namah Resort (Riverside Terraces & Lawn Enclaves)",
    ],
    rituals: [
      "Lantern-lit riverbed sangeet with mountain acoustic music",
      "Organic botanical canopy banquets with earthen scents",
      "Starlit wilderness fire-pit gatherings with warm blankets",
      "Dawn pheras bathed in misty Himalayan morning sunlight",
    ],
    image: "/images/destinations/corbett.jpg",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    title: "Royal Heritage & Amber Splendor",
    subheading: "The Pink City of Maharajas & Monumental Palaces",
    description:
      "Jaipur commands centuries of regal grace. With sandstone courtyards, hand-carved stone jharokhas, and sprawling palace lawns, we orchestrate royal elephant processions, candlelit heritage banquets, and majestic celebrations echoing with classical shehnai melodies.",
    landscape: "Palatial courtyards, sand-cast stone arches & royal havelis",
    bestSeason: "October through March (Pleasant dry winter evenings)",
    signatureVenues: [
      "Rambagh Palace (The Former Royal Residence)",
      "Samode Palace (Heritage Painted Arches)",
      "Jai Mahal Palace (Mughal Gardens & Water Pavilions)",
      "Fairmont Jaipur (Arched Colonnades & Grand Ballrooms)",
    ],
    rituals: [
      "Torchlit royal polo grounds procession",
      "Historic fortress courtyard banquets under starlight",
      "Shehnai & nagada welcoming with rose petal showers",
      "Intricate floral mandaps set inside palace courtyards",
    ],
    image: "/images/destinations/jaipur.jpg",
  },
  {
    id: "udaipur",
    name: "Udaipur",
    title: "Lakeside Romance & Island Pavilions",
    subheading: "The Venice of the East & Shimmering Waters",
    description:
      "The ethereal romance of Udaipur is unmatched across the world. Floating palaces reflected in tranquil lake waters, moonlit marble terraces, and private boat arrivals create an unforgettable dreamscape where every reflection tells an intimate love story.",
    landscape: "Shimmering waters, floating palaces & marble colonnades",
    bestSeason: "September through March (Gentle lake breezes & sunset glow)",
    signatureVenues: [
      "Taj Lake Palace (Historic Island Sanctuary)",
      "The Leela Palace Udaipur (Lake Pichola Panoramas)",
      "Jagmandir Island Palace (Royal 17th Century Island)",
      "The Oberoi Udaivilas (Moorish Domes & Reflecting Pools)",
    ],
    rituals: [
      "Illuminated boat bridal arrivals across Lake Pichola",
      "Marble terrace fireworks displays reflecting on the water",
      "Floating floral mandap scenography over the lake",
      "Sunset acoustic sundowners on island courtyards",
    ],
    image: "/images/destinations/udaipur.jpg",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    title: "Sacred Riverfronts & Foothills Serenity",
    subheading: "Turquoise River Waters & Profound Spiritual Grace",
    description:
      "An aura of profound spiritual sanctity and serene elegance. Perched along the sacred Ganga with panoramic Himalayan vistas, we craft sacred riverside pheras accompanied by traditional Vedic chants, floating diya ceremonies, and tranquil sunset gatherings.",
    landscape: "Turquoise river waters, Himalayan breezes & sacred aura",
    bestSeason: "October through April (Clear turquoise waters & pleasant mountain climate)",
    signatureVenues: [
      "Ananda in the Himalayas (Palace Estate & Wellness Haven)",
      "Taj Rishikesh Resort & Spa (Private River Beachfront)",
      "Roseate Ganges (Boutique Riverside Villas)",
      "Aloha on the Ganges (Panoramic Cliffside Terraces)",
    ],
    rituals: [
      "Holy Ganga twilight aarti ceremony with floating diyas",
      "Sacred Vedic pheras led by traditional temple priests",
      "Himalayan panoramic sundowners with Ayurvedic elixir bars",
      "Morning meditative yoga & blessing rituals for family",
    ],
    image: "/images/destinations/rishikesh.jpg",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-24 text-charcoal relative overflow-hidden">
      {/* Delicate Side Gutters filling outer whitespace */}
      <FloralSideGutter side="left" className="top-40" />
      <FloralSideGutter side="right" className="top-72" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <RoyalBlossomMedallion />
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
            Destinations of Distinction
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep mt-3 mb-4 font-normal">
            Four Sacred Landscapes
          </h1>
          <FloralDivider variant="compact" />
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed mt-4">
            We focus our artistry exclusively on four of India&apos;s most storied landscapes.
            Every venue is personally vetted by Gourav, ensuring unmatched heritage architecture, flawless acoustics, and total exclusivity.
          </p>
        </div>

        {/* Destination Chronicles */}
        <div className="space-y-24">
          {destinationDetails.map((dest, index) => {
            const isEven = index % 2 === 1;
            const destinationWhatsApp = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hi Gourav, I'm interested in planning a destination wedding in ${dest.name}. Could we schedule a consultation?`
            )}`;

            return (
              <section
                key={dest.id}
                className="relative rounded-3xl border border-gold/25 bg-white p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden"
              >
                {/* Minimalist corner framing and background watermark */}
                <FloralCorner position="top-left" className="!text-gold/80" />
                <FloralCorner position="bottom-right" className="!text-gold/80" />
                <BotanicalWatermark
                  orientation={isEven ? "left" : "right"}
                />

                <div
                  className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Canvas */}
                  <div
                    className={`lg:col-span-6 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden border border-champagne-border/40 shadow-lg group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={dest.image}
                      alt={`${dest.name} luxury wedding setting`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
                        Landscape Atmosphere
                      </span>
                      <p className="font-serif text-lg md:text-xl text-ivory mt-0.5 font-light">
                        {dest.landscape}
                      </p>
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold mb-2 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Destination Monograph</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-burgundy font-normal mb-1">
                        {dest.name}
                      </h2>
                      <p className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold mb-2">
                        {dest.title}
                      </p>
                      <FloralDivider variant="compact" className="!my-2 !justify-start" />
                      <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-6">
                        {dest.description}
                      </p>
                    </div>

                    {/* Best Season */}
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory-subtle/60 border border-champagne-border/40 text-xs text-charcoal/80">
                      <Calendar className="w-4 h-4 text-rosegold shrink-0" />
                      <div>
                        <span className="font-semibold text-burgundy block">Optimal Season:</span>
                        <span className="font-light">{dest.bestSeason}</span>
                      </div>
                    </div>

                    {/* Signature Venues */}
                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy block mb-2 font-semibold">
                        Curated Partner Venues:
                      </span>
                      <ul className="space-y-1.5">
                        {dest.signatureVenues.map((venue, idx) => (
                          <li key={idx} className="text-xs text-charcoal/80 font-light flex items-start gap-2">
                            <span className="text-rosegold mt-0.5">✦</span>
                            <span>{venue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Signature Rituals */}
                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy block mb-2 font-semibold">
                        Signature Curated Experiences:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dest.rituals.map((ritual, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rosegold shrink-0 mt-0.5" />
                            <span>{ritual}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Pathways */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-champagne-border/40">
                      <a
                        href={destinationWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.15em] font-medium hover:bg-burgundy-light transition-all duration-300 shadow-md shadow-burgundy/15"
                      >
                        <MessageCircle className="w-4 h-4 text-champagne-light" />
                        <span>Plan in {dest.name} with Gourav</span>
                      </a>

                      <Link
                        href={`/weddings?destination=${dest.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-charcoal/20 text-charcoal text-xs uppercase tracking-[0.15em] hover:text-burgundy hover:border-burgundy transition-colors"
                      >
                        <span>View {dest.name} Works</span>
                        <ArrowRight className="w-3.5 h-3.5 text-rosegold" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Closing Callout: Private Commission */}
        <div className="mt-24 rounded-3xl border border-gold/30 bg-gradient-to-br from-burgundy via-burgundy-deep to-charcoal-deep text-ivory p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <FloralCorner position="top-left" className="!text-gold-light/75" />
          <FloralCorner position="bottom-right" className="!text-gold-light/75" />
          <BotanicalWatermark orientation="left" className="!text-gold-light/25" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-light font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Founder Oversight</span>
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              Begin Curating Your Sacred Landscape
            </h3>
            <FloralDivider variant="compact" />
            <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
              Every couple receives Gourav&apos;s direct attention from venue inspection to twilight pheras.
              Share your preferred destination and guest vision to begin a private consultation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-champagne-light text-charcoal-deep text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-lg"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Gourav, I was exploring your destination portfolio and would love to consult directly."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-champagne-light/30 bg-white/10 text-ivory text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-champagne-light" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
