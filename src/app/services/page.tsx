import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

export const metadata: Metadata = {
  title: "The Four Disciplines of Mastery",
  description:
    "Explore Gourav Events' comprehensive disciplines: Full-scope destination planning, bespoke spatial scenography, royal hospitality, and artist curation.",
};

const processPhases = [
  {
    phase: "Phase I",
    title: "The Vision & Destination Discovery",
    description:
      "We begin with in-depth private consultations to distill your aesthetic affinities, family traditions, and guest profile. We scout private palace venues, inspect island pavilions, and formulate the master design brief.",
  },
  {
    phase: "Phase II",
    title: "Spatial Scenography & Architectural Sampling",
    description:
      "Our design studio creates custom 3D spatial renders, botanical installations, and bespoke textile sampling. Every mandap, lighting array, and tabletop layout is previewed with exacting fidelity.",
  },
  {
    phase: "Phase III",
    title: "Engineering Logistics & Vendor Orchestration",
    description:
      "We lock municipal permits, private aviation charters, luxury fleet escorts, guest palace allocations, and culinary tastings. Master minute-by-minute operational timelines are engineered.",
  },
  {
    phase: "Phase IV",
    title: "On-Ground Royal Orchestration",
    description:
      "Gourav and our core production directors command on-ground execution 24/7. From the welcoming royal shehnai to the final sunrise phera, every moment flows like a symphony.",
  },
];

export default function ServicesPage() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was reviewing the disciplines of Gourav Events on gouravevents.com and would love to consult with you."
  )}`;

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
            Core Disciplines
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep mt-3 mb-4 font-normal">
            The Art of Curation
          </h1>
          <FloralDivider variant="compact" />
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed mt-4">
            We reject the fragmented model of ordinary event management. Every wedding we design brings four essential disciplines of craftsmanship under singular founder leadership.
          </p>
        </div>

        {/* Disciplines Detailed Sections */}
        <div className="space-y-24 mb-28">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <section
                key={service.id}
                id={service.id}
                className="relative rounded-3xl border border-gold/25 bg-white p-8 sm:p-12 lg:p-16 shadow-md overflow-hidden"
              >
                <FloralCorner position="top-left" className="!text-gold/80" />
                <FloralCorner position="bottom-right" className="!text-gold/80" />
                <BotanicalWatermark
                  orientation={isReversed ? "left" : "right"}
                />

                <div
                  className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-6 relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden border border-taupe-light/40 shadow-sm ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/50 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 font-serif text-4xl text-white/90 font-light drop-shadow-sm">
                      {service.number}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-rosegold font-semibold">
                      Pillar {service.number}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-deep font-normal">
                      {service.title}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-burgundy font-medium">
                      {service.tagline}
                    </p>
                    <FloralDivider variant="compact" className="!my-2 !justify-start" />
                    <p className="text-sm text-charcoal/85 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal-deep block mb-3 font-semibold">
                        Comprehensive Scope:
                      </span>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-charcoal/80 font-light flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-rosegold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-2 border-rosegold/60 pl-4 py-1.5 text-xs italic text-charcoal-muted font-serif">
                      &ldquo;{service.philosophy}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Process Timeline Section */}
        <section className="mb-28 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 relative">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
              The Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-deep mt-2 mb-3 font-normal">
              How We Architect Your Celebration
            </h2>
            <FloralDivider variant="compact" />
            <p className="text-xs text-charcoal-muted mt-3 uppercase tracking-wider">
              Four structured milestones from private brief to standing ovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-gold/25 bg-white p-6 md:p-8 flex flex-col justify-between hover:border-gold/50 transition-colors shadow-2xs overflow-hidden"
              >
                <FloralCorner position="top-right" className="!text-gold/75" />
                <div>
                  <span className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                    {phase.phase}
                  </span>
                  <h3 className="font-serif text-lg text-charcoal-deep mt-2 mb-3 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-taupe-light/40 text-[10px] text-charcoal-muted uppercase tracking-widest font-medium">
                  Milestone 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Banner */}
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-ivory-warm via-white to-alabaster p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <BotanicalWatermark orientation="right" />
          <FloralCorner position="top-left" className="!text-gold/80" />
          <FloralCorner position="top-right" className="!text-gold/80" />
          <FloralCorner position="bottom-left" className="!text-gold/80" />
          <FloralCorner position="bottom-right" className="!text-gold/80" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
              Personal Engagement
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-charcoal-deep mt-2 mb-3 font-normal">
              Ready to Begin Architectural Planning?
            </h2>
            <FloralDivider variant="compact" />
            <p className="text-sm text-charcoal-muted font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Every wedding starts with an exploratory conversation. Reach out directly to Gourav on WhatsApp to discuss your dates and destination.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-deep transition-all duration-300 shadow-lg shadow-burgundy/15"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Connect on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-taupe-light text-charcoal-deep text-xs uppercase tracking-[0.2em] hover:text-burgundy hover:border-burgundy transition-colors bg-white shadow-2xs"
              >
                <span>View VIP Concierge</span>
                <ArrowRight className="w-4 h-4 text-rosegold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
