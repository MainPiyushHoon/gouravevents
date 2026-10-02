import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring your wedding work on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 
        DIRECTION CONTRACT
        THESIS: Royal Indian wedding planning treated as an intimate private commission rather than an agency production line.
        OWN-WORLD: Obsidian #0B0909 depth, Deep Burgundy #2A0E16 foundation, subtle Rose Gold #B76E79 dividers, Champagne #E8C7A8 highlights.
        STORY: The visitor realizes Gourav Events crafts extraordinary celebrations across India's most evocative palaces and sanctuaries, connecting directly with the founder.
        FIRST VIEWPORT: Full-bleed twilight palace scene under dark vignette, statuesque serif typography, founder personal badge, direct WhatsApp CTA.
        FORM: Luxury Cinematic Monograph with direct founder-led conversion.
      */}

      {/* Atmospheric Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-twilight-palace.jpg"
          alt="Majestic royal Indian wedding palace courtyard at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Luxury Scenography Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/80" />
        <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/20 bg-burgundy-deep/60 backdrop-blur-md text-[11px] uppercase tracking-[0.3em] text-champagne mb-8 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-rosegold" />
          <span>Haute-Couture Wedding Production</span>
        </div>

        {/* Central Thesis Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-ivory max-w-4xl leading-[1.12] mb-6 drop-shadow-sm">
          Crafting Extraordinary Weddings Where{" "}
          <span className="italic font-normal text-champagne">Royalty</span> Meets{" "}
          <span className="italic font-normal text-rosegold">Emotion.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-ivory/80 font-light leading-relaxed mb-10 tracking-wide">
          From the regal palace courtyards of Jaipur and Udaipur to the ancient wilderness of Jim Corbett and sacred riverbanks of Rishikesh — every celebration is personally curated and masterminded by Gourav.
        </p>

        {/* Dual Luxury Action Pathways */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary: Direct WhatsApp with Gourav */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-champagne/15"
          >
            <MessageCircle className="w-4 h-4 text-obsidian" />
            <span>Consult Gourav on WhatsApp</span>
          </a>

          {/* Secondary: Explore Works */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-champagne/30 bg-obsidian/50 backdrop-blur-md text-ivory text-xs uppercase tracking-[0.2em] hover:border-champagne hover:bg-burgundy/40 hover:text-champagne transition-all duration-300"
          >
            <span>Explore The Portfolio</span>
          </Link>
        </div>

        {/* Destination Footnotes */}
        <div className="mt-14 pt-8 border-t border-champagne/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-[0.25em] text-taupe font-light">
          <span className="hover:text-champagne transition-colors">Jaipur</span>
          <span className="text-rosegold/40">✦</span>
          <span className="hover:text-champagne transition-colors">Udaipur</span>
          <span className="text-rosegold/40">✦</span>
          <span className="hover:text-champagne transition-colors">Jim Corbett</span>
          <span className="text-rosegold/40">✦</span>
          <span className="hover:text-champagne transition-colors">Rishikesh</span>
        </div>

        {/* Gentle Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 text-taupe/60 hover:text-champagne transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Discover The Monograph</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-rosegold/70" />
        </div>
      </div>
    </section>
  );
}
