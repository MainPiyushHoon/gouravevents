import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was reviewing your portfolio on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <footer className="bg-obsidian border-t border-champagne/10 pt-20 pb-12 text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Callout: Founder Direct Connect Banner */}
        <div className="rounded-2xl border border-champagne/15 bg-gradient-to-r from-burgundy/50 via-burgundy-deep to-obsidian p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-rosegold font-medium">
              Private Commission
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-champagne mt-2 mb-4 leading-tight">
              Begin planning your celebration with Gourav.
            </h3>
            <p className="text-sm text-ivory/80 leading-relaxed mb-6 font-light">
              Every celebration is personally directed by the founder. Reach out directly on WhatsApp to initiate a private conversation.
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-lg shadow-champagne/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-rosegold/10 blur-3xl pointer-events-none" />
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Thesis */}
          <div className="space-y-4">
            <span className="font-serif text-xl tracking-[0.25em] text-champagne uppercase font-medium">
              Gourav Events
            </span>
            <p className="text-xs text-taupe leading-relaxed font-light">
              A private luxury wedding planning and event design studio crafting unforgettable royal and scenic celebrations across India’s most storied destinations.
            </p>
            <div className="pt-2 text-xs text-rosegold/90">
              <p>Founder Oversight on Every Celebration</p>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne mb-5 font-medium">
              Destinations
            </h4>
            <ul className="space-y-3">
              {siteConfig.destinations.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/weddings?destination=${dest.id}`}
                    className="text-xs text-ivory/70 hover:text-champagne transition-colors flex items-center justify-between group"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] text-taupe group-hover:text-rosegold transition-colors">
                      {dest.tagline.split("&")[0].trim()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Disciplines & House */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne mb-5 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/weddings"
                  className="text-xs text-ivory/70 hover:text-champagne transition-colors"
                >
                  Weddings Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-ivory/70 hover:text-champagne transition-colors"
                >
                  The Four Disciplines
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs text-ivory/70 hover:text-champagne transition-colors"
                >
                  The House of Gourav Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-ivory/70 hover:text-champagne transition-colors"
                >
                  VIP Concierge & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hubs */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne mb-5 font-medium">
              Private Inquiries
            </h4>
            <div className="space-y-3 text-xs text-ivory/80 font-light">
              <p>
                <span className="text-taupe block text-[10px] uppercase tracking-wider">
                  Direct Line:
                </span>
                {siteConfig.phoneDisplay}
              </p>
              <p>
                <span className="text-taupe block text-[10px] uppercase tracking-wider">
                  Concierge Desk:
                </span>
                {siteConfig.email}
              </p>
              <p>
                <span className="text-taupe block text-[10px] uppercase tracking-wider">
                  Presence Hubs:
                </span>
                Jaipur · Udaipur · Jim Corbett · Rishikesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Clean Credits */}
        <div className="pt-8 border-t border-champagne/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-taupe gap-4">
          <p>© {new Date().getFullYear()} Gourav Events. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px] text-rosegold/80">
            gouravevents.com · Crafted for Extraordinary Celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
