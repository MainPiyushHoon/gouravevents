"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig, type DestinationInfo } from "@/data/site";

export default function DestinationsShowcase() {
  const [activeId, setActiveId] = useState<DestinationInfo["id"]>("jaipur");

  const current =
    siteConfig.destinations.find((d) => d.id === activeId) ||
    siteConfig.destinations[0];

  const destinationWhatsAppUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(
    `Hi Gourav, I'm interested in discussing a destination wedding in ${current.name}. Could we connect?`
  )}`;

  return (
    <section id="destinations" className="py-24 bg-obsidian relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-burgundy/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Destinations of Distinction
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-champagne mt-3 mb-6 font-normal">
            Where Your Story Unfolds
          </h2>
          <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
            We focus our artistry on four iconic Indian landscapes. Each offers a completely distinct sensory world, from centuries-old royal palaces to sacred riverbanks and tranquil jungle reserves.
          </p>
        </div>

        {/* Destination Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14">
          {siteConfig.destinations.map((dest) => {
            const isActive = dest.id === activeId;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveId(dest.id)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-champagne text-obsidian font-medium shadow-lg shadow-champagne/10 scale-105"
                    : "border border-champagne/20 text-ivory/70 hover:border-champagne/50 hover:text-champagne bg-burgundy/20"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-obsidian" : "text-rosegold"}`} />
                <span>{dest.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Destination Card & Visual World */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-champagne/15 bg-gradient-to-br from-burgundy/40 via-burgundy-deep to-obsidian p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Left Column: Visual Canvas */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-champagne/20 shadow-2xl group">
            <Image
              src={current.heroImage}
              alt={`${current.name} luxury wedding scene`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-rosegold">
                  Landscape Vibe
                </span>
                <p className="font-serif text-lg md:text-xl text-ivory mt-0.5 font-light">
                  {current.landscape}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold mb-2">
                <span>Destination Mastery</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-champagne font-normal mb-3">
                {current.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-5">
                {current.tagline}
              </p>
              <p className="text-sm text-ivory/85 leading-relaxed font-light mb-6">
                {current.description}
              </p>

              {/* Signature Venues */}
              <div className="mb-6 pt-4 border-t border-champagne/10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-champagne block mb-2 font-medium">
                  Iconic Partner Venues
                </span>
                <p className="text-xs text-ivory/70 leading-relaxed font-light">
                  {current.signatureVenues.join(" · ")}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ivory/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-rosegold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contextual Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-champagne/10">
              <a
                href={destinationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.15em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-md shadow-champagne/10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Plan in {current.name}</span>
              </a>

              <Link
                href={`/weddings?destination=${current.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-champagne/25 text-ivory text-xs uppercase tracking-[0.15em] hover:text-champagne hover:border-champagne transition-colors"
              >
                <span>View {current.name} Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-rosegold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
