import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

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
    <main className="min-h-screen bg-obsidian pt-32 pb-24 text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Core Disciplines
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne mt-3 mb-6 font-normal">
            The Art of Curation
          </h1>
          <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
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
                className="rounded-3xl border border-champagne/15 bg-gradient-to-br from-burgundy/30 via-burgundy-deep to-obsidian p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-6 relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden border border-champagne/20 shadow-xl ${
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
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute top-6 left-6 font-serif text-4xl text-champagne/60 font-light">
                      {service.number}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-rosegold font-medium">
                      Pillar {service.number}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-champagne font-normal">
                      {service.title}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-taupe font-medium">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-ivory/85 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-champagne block mb-3 font-medium">
                        Comprehensive Scope:
                      </span>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-ivory/80 font-light flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-rosegold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-2 border-rosegold/50 pl-4 py-1.5 text-xs italic text-ivory/70 font-serif">
                      &ldquo;{service.philosophy}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Process Timeline Section */}
        <section className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
              The Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-champagne mt-2 font-normal">
              How We Architect Your Celebration
            </h2>
            <p className="text-xs text-taupe mt-3 uppercase tracking-wider">
              Four structured milestones from private brief to standing ovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-champagne/15 bg-burgundy-deep/40 p-6 md:p-8 flex flex-col justify-between hover:border-champagne/30 transition-colors"
              >
                <div>
                  <span className="font-serif text-xs uppercase tracking-[0.2em] text-rosegold">
                    {phase.phase}
                  </span>
                  <h3 className="font-serif text-lg text-champagne mt-2 mb-3 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-ivory/70 font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-champagne/10 text-[10px] text-taupe uppercase tracking-widest">
                  Milestone 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Banner */}
        <div className="rounded-3xl border border-champagne/20 bg-gradient-to-r from-burgundy/50 via-burgundy-deep to-obsidian p-10 md:p-16 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Personal Engagement
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-champagne mt-2 mb-4 font-normal">
            Ready to Begin Architectural Planning?
          </h2>
          <p className="text-sm text-ivory/80 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Every wedding starts with an exploratory conversation. Reach out directly to Gourav on WhatsApp to discuss your dates and destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-xl shadow-champagne/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-champagne/30 text-ivory text-xs uppercase tracking-[0.2em] hover:text-champagne hover:border-champagne transition-colors"
            >
              <span>View VIP Concierge</span>
              <ArrowRight className="w-4 h-4 text-rosegold" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
