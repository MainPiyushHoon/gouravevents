import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  FloralDivider,
  FloralCorner,
  RoyalBlossomMedallion,
  BotanicalWatermark,
} from "@/components/ui/FloralMotif";

export default function FounderEthos() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I read your personal ethos on gouravevents.com and would love to speak with you."
  )}`;

  return (
    <section className="py-24 bg-gradient-to-b from-alabaster via-ivory-subtle/50 to-alabaster border-t border-champagne-border/40 relative overflow-hidden">
      {/* Background organic watermark */}
      <BotanicalWatermark orientation="right" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Royal Framed Commission Box to reduce and structure whitespace */}
        <div className="relative rounded-3xl border border-gold/35 bg-white/90 backdrop-blur-xs p-8 sm:p-14 lg:p-16 shadow-xl text-center overflow-hidden">
          <FloralCorner position="top-left" className="!text-gold/80" />
          <FloralCorner position="top-right" className="!text-gold/80" />
          <FloralCorner position="bottom-left" className="!text-gold/80" />
          <FloralCorner position="bottom-right" className="!text-gold/80" />

          {/* Symmetrical Rosette */}
          <RoyalBlossomMedallion className="text-gold" />

          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            The Founder&apos;s Manifesto
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy font-normal leading-tight max-w-2xl mx-auto">
            &ldquo;We Do Not Produce Weddings in Bulk.
            <br /> Every Celebration is a Private Royal Commission.&rdquo;
          </h2>

          <FloralDivider variant="compact" className="my-8 max-w-xs mx-auto" />

          <div className="space-y-5 text-sm md:text-base text-charcoal-muted font-light leading-relaxed max-w-2xl mx-auto mb-10">
            <p>
              When a couple invites us into their sacred journey, they aren&apos;t handed over to junior coordinators or regional sub-agencies. I personally lead every architectural sketch, every venue walk-through, every vendor negotiation, and every twilight phera.
            </p>
            <p className="text-taupe font-normal">
              By intentionally limiting our calendar to a selective number of celebrations each season across Jim Corbett, Jaipur, Udaipur, and Rishikesh, we preserve what matters most: uncompromised artistry, genuine emotional investment, and perfection in execution.
            </p>
          </div>

          {/* Calligraphic Founder Signature & Title Block */}
          <div className="flex flex-col items-center justify-center space-y-1 mb-8">
            <div className="font-script text-5xl md:text-6xl text-gold-deep font-normal not-italic tracking-normal select-none">
              Gourav
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Founder & Principal Event Architect
            </p>
            <p className="text-[11px] text-taupe tracking-wider">
              Gourav Events · gouravevents.com
            </p>
          </div>

          {/* Direct WhatsApp Callout */}
          <div>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-light hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-burgundy/15"
            >
              <MessageCircle className="w-4 h-4 text-champagne-light" />
              <span>Initiate Direct Conversation on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
