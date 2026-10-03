import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FounderEthos() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I read your personal ethos on gouravevents.com and would love to speak with you."
  )}`;

  return (
    <section className="py-24 bg-gradient-to-b from-alabaster via-ivory-subtle/60 to-alabaster border-t border-champagne-border/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold">
          The Founder&apos;s Manifesto
        </span>

        <h2 className="font-serif text-3xl md:text-5xl text-burgundy mt-4 mb-8 font-normal leading-tight">
          &ldquo;We Do Not Produce Weddings in Bulk.
          <br className="hidden md:inline" /> Every Celebration is a Private Royal Commission.&rdquo;
        </h2>

        <div className="space-y-6 text-sm md:text-base text-charcoal-muted font-light leading-relaxed max-w-3xl mx-auto mb-12">
          <p>
            When a couple invites us into their sacred journey, they aren&apos;t handed over to junior coordinators or regional sub-agencies. I personally lead every architectural sketch, every venue walk-through, every vendor negotiation, and every twilight phera.
          </p>
          <p className="text-taupe font-normal">
            By intentionally limiting our calendar to a selective number of celebrations each season across Jim Corbett, Jaipur, Udaipur, and Rishikesh, we preserve what matters most: uncompromised artistry, genuine emotional investment, and perfection in execution.
          </p>
        </div>

        {/* Founder Signature & Title Block */}
        <div className="flex flex-col items-center justify-center space-y-1.5 mb-10">
          <div className="font-serif text-2xl tracking-[0.2em] text-charcoal-deep uppercase font-semibold">
            Gourav
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-rosegold font-medium">
            Founder & Principal Event Architect
          </p>
          <p className="text-[11px] text-taupe tracking-wider">
            Gourav Events · gouravevents.com
          </p>
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="pt-6">
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
    </section>
  );
}
