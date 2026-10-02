import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Sparkles, Shield, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "The House of Gourav Events",
  description:
    "Discover the heritage, craftsmanship ethos, and founder-led philosophy of Gourav Events — luxury destination wedding architects.",
};

const pillars = [
  {
    icon: Shield,
    title: "Founder-Led Intimacy",
    description:
      "We deliberately refuse the corporate volume agency model. Gourav personally directs every concept, every walk-through, and every celebration to guarantee uncompromising focus.",
  },
  {
    icon: Sparkles,
    title: "Living Heritage & Scenography",
    description:
      "Whether inside a 300-year-old Rajput palace courtyard or beside the sacred Ganges, our scenography honors the authentic architectural spirit and living traditions of each site.",
  },
  {
    icon: HeartHandshake,
    title: "Sacred Hospitality",
    description:
      "Rooted in Indian ethos of Atithi Devo Bhava, we treat every single family member and guest as a royal dignitary, orchestrating warmth, grace, and effortless luxury.",
  },
];

export default function AboutPage() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was reading about The House of Gourav Events on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-24 text-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            The Studio & Ethos
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne mt-3 mb-6 font-normal">
            The House of Gourav Events
          </h1>
          <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
            Born from a deep reverence for Indian royal heritage, sacred natural landscapes, and the profound beauty of human devotion.
          </p>
        </div>

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border border-champagne/20 shadow-2xl">
            <Image
              src="/images/hero/hero-twilight-palace.jpg"
              alt="The heritage ethos of Gourav Events"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-rosegold block mb-1">
                Founding Philosophy
              </span>
              <p className="font-serif text-lg text-champagne">
                Artisanship Over Volume. Emotion Over Pageantry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-rosegold font-medium">
              A Private Commission
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-champagne font-normal leading-snug">
              &ldquo;We Believe Weddings Should Feel Extraordinary, Not Fabricated.&rdquo;
            </h2>
            <p className="text-sm text-ivory/85 font-light leading-relaxed">
              In an industry increasingly dominated by generic agency templates and standardized wedding packages, Gourav Events was established with a singular conviction: luxury is not loud ornamentation; it is the feeling of absolute intentionality.
            </p>
            <p className="text-sm text-taupe font-light leading-relaxed">
              When a family commissions us, they receive the full creative force of our studio. We limit our commissions each season to ensure Gourav is personally present at every milestone — from the initial palette selection to the midnight phera ceremonies.
            </p>
            <div className="pt-4 border-t border-champagne/10">
              <p className="font-serif text-xl text-champagne">Gourav</p>
              <p className="text-xs uppercase tracking-[0.2em] text-rosegold mt-0.5">
                Founder & Principal Event Architect
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-champagne/15 bg-burgundy-deep/40 p-8 flex flex-col justify-between hover:border-champagne/30 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-full border border-champagne/20 bg-burgundy/50 flex items-center justify-center text-champagne mb-6">
                    <Icon className="w-5 h-5 text-rosegold" />
                  </div>
                  <h3 className="font-serif text-xl text-champagne mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-ivory/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destination Presence Hubs */}
        <section className="mb-24 rounded-3xl border border-champagne/15 bg-gradient-to-b from-burgundy/30 to-obsidian p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
              Regional Presence
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-champagne mt-2 font-normal">
              Active Destination Hubs
            </h2>
            <p className="text-xs text-taupe mt-2">
              On-ground relationships with premier heritage palaces, island properties, and luxury wilderness reserves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.hubs.map((hub) => (
              <div
                key={hub.city}
                className="rounded-xl border border-champagne/10 bg-obsidian/60 p-5 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-champagne font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rosegold" />
                  <span>{hub.city}</span>
                </div>
                <p className="text-xs text-ivory/60 font-light leading-relaxed">
                  {hub.address}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder WhatsApp Callout */}
        <div className="rounded-3xl border border-champagne/20 bg-gradient-to-r from-burgundy/40 via-burgundy-deep to-obsidian p-10 md:p-14 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Private Consultation
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-champagne mt-2 mb-4 font-normal">
            Speak Directly with Gourav
          </h2>
          <p className="text-sm text-ivory/80 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Begin with an exploratory discussion about your dates, destination, and celebration vision.
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-xl shadow-champagne/10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
