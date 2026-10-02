import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring your wedding work on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-alabaster">
      {/* 
        DIRECTION CONTRACT
        THESIS: Royal Indian wedding planning treated as an intimate private commission rather than an agency production line.
        OWN-WORLD: Luminous Alabaster #FAF8F5 ground, Crisp Charcoal #1C1817 type, Deep Burgundy #3E1522 royal accents, Champagne Bronze #8C6843 keylines.
        STORY: The visitor realizes Gourav Events crafts extraordinary celebrations across India's most evocative palaces and sanctuaries, connecting directly with the founder.
        FIRST VIEWPORT: Luminous twilight palace scene under warm ivory veil, statuesque serif typography, founder personal badge, direct WhatsApp CTA.
        FORM: Luxury Light Editorial Monograph with direct founder-led conversion.
      */}

      {/* Atmospheric Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-twilight-palace.jpg"
          alt="Majestic royal Indian wedding palace courtyard at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-42 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Luxury Light Scenography Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-alabaster/80 to-alabaster/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-alabaster/85 via-transparent to-alabaster/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(238,223,205,0.4),_transparent_70%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne-border/50 bg-white/90 backdrop-blur-md text-[11px] uppercase tracking-[0.3em] text-burgundy mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rosegold" />
          <span className="font-medium">Haute-Couture Wedding Production</span>
        </div>

        {/* Central Thesis Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-charcoal-deep max-w-4xl leading-[1.14] mb-6">
          Crafting Extraordinary Weddings Where{" "}
          <span className="italic font-normal text-burgundy">Royalty</span> Meets{" "}
          <span className="italic font-normal text-rosegold">Emotion.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-charcoal-muted font-light leading-relaxed mb-10 tracking-wide">
          From the regal palace courtyards of Jaipur and Udaipur to the ancient wilderness of Jim Corbett and sacred riverbanks of Rishikesh — every celebration is personally curated and masterminded by Gourav.
        </p>

        {/* Dual Luxury Action Pathways */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary: Direct WhatsApp with Gourav */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-light hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-burgundy/15"
          >
            <MessageCircle className="w-4 h-4 text-champagne-light" />
            <span>Consult Gourav on WhatsApp</span>
          </a>

          {/* Secondary: Explore Works */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-charcoal/20 bg-white/80 backdrop-blur-md text-charcoal text-xs uppercase tracking-[0.2em] hover:border-burgundy hover:text-burgundy transition-all duration-300 shadow-sm"
          >
            <span>Explore The Portfolio</span>
          </Link>
        </div>

        {/* Destination Footnotes */}
        <div className="mt-14 pt-8 border-t border-champagne-border/40 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-[0.25em] text-taupe font-medium">
          <span className="hover:text-burgundy transition-colors">Jaipur</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Udaipur</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Jim Corbett</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Rishikesh</span>
        </div>

        {/* Gentle Destinations Pathway */}
        <Link
          href="/destinations"
          className="mt-8 flex flex-col items-center gap-2 text-taupe/70 hover:text-burgundy transition-colors group cursor-pointer focus:outline-none focus:ring-1 focus:ring-burgundy/40 rounded-lg px-3 py-1"
          aria-label="Discover destinations"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Discover The Monograph</span>
          <ArrowDown className="w-4 h-4 text-rosegold transition-transform duration-500 group-hover:translate-y-1" />
        </Link>
      </div>
    </section>
  );
}
