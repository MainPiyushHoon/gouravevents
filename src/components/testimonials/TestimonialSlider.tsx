"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIdx];

  return (
    <section className="py-24 bg-obsidian border-t border-champagne/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Words of Reverence
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-champagne mt-3 font-normal">
            Voices of Our Couples & Families
          </h2>
        </div>

        {/* Testimonial Feature Card */}
        <div className="rounded-3xl border border-champagne/20 bg-gradient-to-b from-burgundy/30 via-burgundy-deep to-obsidian p-8 sm:p-12 md:p-16 relative shadow-2xl">
          <Quote className="w-12 h-12 text-rosegold/30 mb-8 mx-auto" />

          {/* Emotional Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory/95 font-normal leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author Metadata */}
          <div className="text-center space-y-1">
            <h4 className="font-serif text-lg text-champagne tracking-wider">
              {current.couple}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe">
              {current.role} · {current.destination} ({current.year})
            </p>
            <p className="text-[11px] text-rosegold/80 font-light mt-1">
              Celebrated at {current.venue}
            </p>
          </div>

          {/* Story Snippet */}
          <div className="mt-8 pt-6 border-t border-champagne/10 text-center max-w-xl mx-auto">
            <p className="text-xs text-ivory/60 font-light italic">
              {current.storySnippet}
            </p>
          </div>

          {/* Prev / Next Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-champagne/20 text-champagne hover:bg-champagne hover:text-obsidian transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-serif text-taupe tracking-widest px-2">
              0{currentIdx + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={next}
              className="p-3 rounded-full border border-champagne/20 text-champagne hover:bg-champagne hover:text-obsidian transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
