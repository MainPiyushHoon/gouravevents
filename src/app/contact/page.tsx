import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "VIP Concierge & Direct Inquiries",
  description:
    "Initiate your private wedding planning consultation directly with Gourav on WhatsApp. Dedicated destination concierge for Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
};

export default function ContactPage() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I would love to schedule a private wedding consultation with you."
  )}`;

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-24 text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
            Personal Engagement
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne mt-3 mb-6 font-normal">
            VIP Concierge
          </h1>
          <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
            Every conversation begins directly with the founder. Whether you have confirmed your destination or are beginning to explore venues, we invite you to connect.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Founder Line & Destination Hubs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Line Card */}
            <div className="rounded-2xl border border-champagne/20 bg-burgundy-deep/60 p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-rosegold font-medium">
                  Direct Line
                </span>
                <h3 className="font-serif text-2xl text-champagne mt-1">
                  Speak with Gourav
                </h3>
                <p className="text-xs text-taupe font-light mt-1">
                  Founder & Principal Event Architect
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-champagne/20 bg-obsidian/70 hover:border-champagne hover:bg-champagne hover:text-obsidian transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-champagne group-hover:text-obsidian transition-colors" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-taupe group-hover:text-obsidian/80">
                      Primary Channel
                    </span>
                    <span className="text-sm font-medium">
                      WhatsApp Hotline
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-champagne/10 bg-obsidian/40">
                  <Phone className="w-5 h-5 text-rosegold" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-taupe">
                      Telephone
                    </span>
                    <span className="text-sm font-light text-ivory/90">
                      {siteConfig.phoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-champagne/10 bg-obsidian/40">
                  <Mail className="w-5 h-5 text-rosegold" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-taupe">
                      Concierge Desk
                    </span>
                    <span className="text-sm font-light text-ivory/90">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-champagne/10 flex items-center gap-2 text-xs text-taupe">
                <Clock className="w-4 h-4 text-rosegold" />
                <span>Responses typically within 2-4 hours</span>
              </div>
            </div>

            {/* Regional Presence Hubs */}
            <div className="rounded-2xl border border-champagne/15 bg-obsidian/60 p-8 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-champagne block font-medium">
                Destination Presence Hubs
              </span>
              <div className="space-y-3">
                {siteConfig.hubs.map((hub) => (
                  <div key={hub.city} className="flex items-start gap-2.5 text-xs text-ivory/70 font-light">
                    <MapPin className="w-3.5 h-3.5 text-rosegold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-champagne font-medium">{hub.city}:</strong>{" "}
                      {hub.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Commission Notice */}
            <div className="rounded-xl border border-champagne/10 bg-burgundy/20 p-5 flex items-start gap-3 text-xs text-taupe font-light">
              <ShieldCheck className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
              <p>
                We limit each calendar year to a selective number of royal commissions to protect uncompromised quality and undivided personal attention.
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
