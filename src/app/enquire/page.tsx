import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/contact/ContactForm";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

export const metadata: Metadata = {
  title: "Enquire Now — Private Wedding Commission",
  description:
    "Initiate your private wedding planning consultation directly with founder Gourav. Dedicated destination concierge for Jim Corbett, Jaipur, Udaipur, and Rishikesh.",
};

export default function EnquirePage() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I would love to schedule a private wedding consultation with you."
  )}`;

  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-24 text-charcoal relative overflow-hidden">
      {/* Delicate Side Gutters filling outer whitespace */}
      <FloralSideGutter side="left" className="top-40" />
      <FloralSideGutter side="right" className="top-72" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <RoyalBlossomMedallion />
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
            Private Commission
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep mt-3 mb-4 font-normal">
            Enquire Now
          </h1>
          <FloralDivider variant="compact" />
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed mt-4">
            Every celebration begins with a personal conversation directly with the founder.
            Whether you have already chosen your destination or are beginning to envision your celebration, we invite you to share your vision below.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Founder Line & Destination Hubs */}
          <div className="lg:col-span-5 space-y-8 relative">
            <BotanicalWatermark orientation="left" />
            {/* Direct Line Card */}
            <div className="relative rounded-2xl border border-gold/25 bg-white p-8 space-y-6 shadow-sm overflow-hidden">
              <FloralCorner position="top-right" className="!text-gold/80" />
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                  Founder Direct Line
                </span>
                <h3 className="font-serif text-2xl text-charcoal-deep mt-1 font-normal">
                  Speak with Gourav
                </h3>
                <p className="text-xs text-burgundy font-medium mt-1">
                  Founder & Principal Event Architect
                </p>
                <FloralDivider variant="compact" className="!my-2 !justify-start" />
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-burgundy/25 bg-burgundy/5 hover:border-burgundy hover:bg-burgundy hover:text-white transition-all group shadow-2xs"
                >
                  <MessageCircle className="w-5 h-5 text-burgundy group-hover:text-champagne-light transition-colors" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-charcoal-muted group-hover:text-white/80">
                      Primary Channel
                    </span>
                    <span className="text-sm font-medium text-charcoal-deep group-hover:text-white">
                      WhatsApp Direct Hotline
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-taupe-light/50 bg-alabaster/60">
                  <Phone className="w-5 h-5 text-rosegold" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-charcoal-muted">
                      Telephone
                    </span>
                    <span className="text-sm font-medium text-charcoal-deep">
                      {siteConfig.phoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-taupe-light/50 bg-alabaster/60">
                  <Mail className="w-5 h-5 text-rosegold" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-charcoal-muted">
                      Concierge Desk
                    </span>
                    <span className="text-sm font-medium text-charcoal-deep">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-taupe-light/40 flex items-center gap-2 text-xs text-charcoal-muted">
                <Clock className="w-4 h-4 text-rosegold" />
                <span>Responses typically within 2-4 hours</span>
              </div>
            </div>

            {/* Regional Presence Hubs */}
            <div className="relative rounded-2xl border border-gold/25 bg-white p-8 space-y-4 shadow-sm overflow-hidden">
              <FloralCorner position="top-right" className="!text-gold/75" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold block font-semibold">
                Destination Presence Hubs
              </span>
              <div className="space-y-3">
                {siteConfig.hubs.map((hub) => (
                  <div key={hub.city} className="flex items-start gap-2.5 text-xs text-charcoal-muted font-light">
                    <MapPin className="w-3.5 h-3.5 text-burgundy shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal-deep font-semibold">{hub.city}:</strong>{" "}
                      {hub.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Commission Notice */}
            <div className="relative rounded-xl border border-gold/25 bg-ivory-warm/60 p-5 flex items-start gap-3 text-xs text-charcoal-muted font-light overflow-hidden">
              <FloralCorner position="top-left" className="!text-gold/75" />
              <ShieldCheck className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
              <p>
                We limit each calendar year to a selective number of private commissions to ensure undivided personal attention and uncompromised execution quality.
              </p>
            </div>
          </div>

          {/* Right Column: The Interactive ContactForm */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
