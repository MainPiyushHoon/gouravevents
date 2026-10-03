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

import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

export default function AboutPage() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was reading about The House of Gourav Events on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-24 text-charcoal relative overflow-hidden">
      {/* Delicate Side Gutters filling outer whitespace on large screens */}
      <FloralSideGutter side="left" className="top-36" />
      <FloralSideGutter side="right" className="top-64" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <RoyalBlossomMedallion />
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
            The Studio & Ethos
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep mt-3 mb-4 font-normal">
            The House of Gourav Events
          </h1>
          <FloralDivider variant="compact" />
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed mt-4">
            Born from a deep reverence for Indian royal heritage, sacred natural landscapes, and the profound beauty of human devotion.
          </p>
        </div>

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border border-taupe-light/60 shadow-xl">
            <FloralCorner position="top-left" />
            <FloralCorner position="bottom-right" />
            <Image
              src="/images/hero/hero-twilight-palace.jpg"
              alt="The heritage ethos of Gourav Events"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-charcoal-deep/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-champagne block mb-1 font-semibold">
                Founding Philosophy
              </span>
              <p className="font-serif text-lg text-white">
                Artisanship Over Volume. Emotion Over Pageantry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 relative p-2">
            <BotanicalWatermark orientation="right" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              A Private Commission
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-deep font-normal leading-snug">
              &ldquo;We Believe Weddings Should Feel Extraordinary, Not Fabricated.&rdquo;
            </h2>
            <FloralDivider variant="compact" className="!my-2 !justify-start" />
            <p className="text-sm text-charcoal/85 font-light leading-relaxed">
              In an industry increasingly dominated by generic agency templates and standardized wedding packages, Gourav Events was established with a singular conviction: luxury is not loud ornamentation; it is the feeling of absolute intentionality.
            </p>
            <p className="text-sm text-charcoal-muted font-light leading-relaxed">
              When a family commissions us, they receive the full creative force of our studio. We limit our commissions each season to ensure Gourav is personally present at every milestone — from the initial palette selection to the midnight phera ceremonies.
            </p>
            <div className="pt-4 border-t border-taupe-light/50">
              <p className="font-script text-3xl text-gold-deep">Gourav</p>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal-muted mt-0.5 font-medium">
                Founder & Principal Event Architect
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-gold/25 bg-white p-8 flex flex-col justify-between hover:border-gold/50 transition-all duration-300 shadow-2xs overflow-hidden"
              >
                <FloralCorner position="top-right" className="!text-gold/80" />
                <div>
                  <div className="w-10 h-10 rounded-full border border-gold/30 bg-ivory-warm flex items-center justify-center text-burgundy mb-6">
                    <Icon className="w-5 h-5 text-burgundy" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-deep mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destination Presence Hubs */}
        <section className="mb-24 rounded-3xl border border-gold/25 bg-white p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <BotanicalWatermark orientation="left" />
          <FloralCorner position="top-left" className="!text-gold/80" />
          <FloralCorner position="bottom-right" className="!text-gold/80" />
          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
              Regional Presence
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-deep mt-2 font-normal">
              Active Destination Hubs
            </h2>
            <FloralDivider variant="compact" />
            <p className="text-xs text-charcoal-muted mt-2">
              On-ground relationships with premier heritage palaces, island properties, and luxury wilderness reserves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {siteConfig.hubs.map((hub) => (
              <div
                key={hub.city}
                className="rounded-xl border border-taupe-light/40 bg-alabaster/70 p-5 space-y-2 shadow-2xs"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-deep font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-burgundy" />
                  <span>{hub.city}</span>
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  {hub.address}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder WhatsApp Callout */}
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-ivory-warm via-white to-alabaster p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <BotanicalWatermark orientation="right" />
          <FloralCorner position="top-left" className="!text-gold/80" />
          <FloralCorner position="top-right" className="!text-gold/80" />
          <FloralCorner position="bottom-left" className="!text-gold/80" />
          <FloralCorner position="bottom-right" className="!text-gold/80" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
              Private Consultation
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-charcoal-deep mt-2 mb-3 font-normal">
              Speak Directly with Gourav
            </h2>
            <FloralDivider variant="compact" />
            <p className="text-sm text-charcoal-muted font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Begin with an exploratory discussion about your dates, destination, and celebration vision.
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-deep transition-all duration-300 shadow-lg shadow-burgundy/15"
            >
              <MessageCircle className="w-4 h-4 text-champagne" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
