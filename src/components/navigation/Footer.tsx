import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
} from "@/components/ui/FloralMotif";

export default function Footer() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was reviewing your portfolio on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <footer className="bg-burgundy text-ivory pt-20 pb-12 border-t border-champagne-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Callout: Founder Direct Connect Banner */}
        <div className="rounded-2xl border border-gold/30 bg-burgundy-deep/60 p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <FloralCorner position="top-left" className="!text-gold-light/75" />
          <FloralCorner position="bottom-right" className="!text-gold-light/75" />
          <BotanicalWatermark orientation="right" className="!text-gold-light/25" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-light font-medium block">
              Private Commission
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-ivory mt-2 mb-3 leading-tight font-normal">
              Begin planning your celebration with Gourav.
            </h3>
            <FloralDivider variant="compact" className="!my-2 !justify-start opacity-75" />
            <p className="text-sm text-ivory/80 leading-relaxed mb-6 font-light">
              Every celebration is personally directed by the founder. Reach out directly on WhatsApp to initiate a private conversation.
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-champagne-light text-charcoal-deep text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-lg shadow-black/20"
            >
              <MessageCircle className="w-4 h-4 text-charcoal-deep" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-rosegold/20 blur-3xl pointer-events-none" />
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Thesis */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/brand-logo.png"
                  alt="Gaurav Events Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg tracking-[0.2em] text-champagne-light uppercase font-semibold block leading-tight">
                  Gourav Events
                </span>
                <span className="text-[10px] tracking-[0.2em] text-champagne-light/75 lowercase font-serif italic">
                  where memories are created...
                </span>
              </div>
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed font-light">
              A private luxury wedding planning and event design studio crafting unforgettable royal and scenic celebrations across India’s most storied destinations.
            </p>
            <div className="pt-2 text-xs text-champagne-light font-medium">
              <p>Founder Oversight on Every Celebration</p>
            </div>
            {/* Social Presence */}
            <div className="pt-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-champagne-light/75 block mb-2.5 font-medium">
                Official Channels
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Gaurav Events on Instagram"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-white/5 hover:bg-gold/15 hover:border-gold text-xs text-ivory/90 hover:text-champagne-light transition-all group"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold group-hover:text-gold-light transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="font-medium text-[11px] tracking-wider">Instagram</span>
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Gaurav Events on Facebook"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-white/5 hover:bg-gold/15 hover:border-gold text-xs text-ivory/90 hover:text-champagne-light transition-all group"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold group-hover:text-gold-light transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="font-medium text-[11px] tracking-wider">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold">
              Destinations
            </h4>
            <ul className="space-y-3">
              {siteConfig.destinations.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/weddings?destination=${dest.id}`}
                    className="text-xs text-ivory/80 hover:text-champagne-light transition-colors flex items-center justify-between group"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] text-ivory/50 group-hover:text-champagne-light transition-colors">
                      {dest.tagline.split("&")[0].trim()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Disciplines & House */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/weddings"
                  className="text-xs text-ivory/80 hover:text-champagne-light transition-colors"
                >
                  Weddings Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-xs text-ivory/80 hover:text-champagne-light transition-colors"
                >
                  Sacred Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-ivory/80 hover:text-champagne-light transition-colors"
                >
                  The Four Disciplines
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs text-ivory/80 hover:text-champagne-light transition-colors"
                >
                  The House of Gourav Events
                </Link>
              </li>
              <li>
                <Link
                  href="/enquire"
                  className="text-xs text-ivory/80 hover:text-champagne-light transition-colors font-medium text-champagne-light"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hubs */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold">
              Private Inquiries
            </h4>
            <div className="space-y-3 text-xs text-ivory/80 font-light">
              <p>
                <span className="text-ivory/60 block text-[10px] uppercase tracking-wider">
                  Direct Line:
                </span>
                {siteConfig.phoneDisplay}
              </p>
              <p>
                <span className="text-ivory/60 block text-[10px] uppercase tracking-wider">
                  Concierge Desk:
                </span>
                {siteConfig.email}
              </p>
              <p>
                <span className="text-ivory/60 block text-[10px] uppercase tracking-wider">
                  Presence Hubs:
                </span>
                Jim Corbett · Jaipur · Udaipur · Rishikesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Clean Credits */}
        <div className="pt-6 border-t border-champagne-light/20 flex flex-col md:flex-row items-center justify-between text-[11px] text-ivory/60 gap-4">
          <p>© {new Date().getFullYear()} Gourav Events. All rights reserved.</p>
          <FloralDivider variant="compact" className="opacity-75 my-0" />
          <p className="tracking-widest uppercase text-[10px] text-champagne-light/80 font-medium">
            gouravevents.com · Crafted for Extraordinary Celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
