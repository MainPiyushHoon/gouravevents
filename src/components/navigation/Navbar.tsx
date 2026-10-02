"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp link for instant founder inquiry
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring your work on gouravevents.com and would love to consult with you regarding our wedding."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-champagne/10 py-3.5 shadow-2xl shadow-obsidian/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram & Wordmark */}
        <Link
          href="/"
          className="group flex flex-col items-start transition-opacity hover:opacity-90"
        >
          <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-champagne uppercase font-medium">
            Gourav Events
          </span>
          <span className="text-[10px] tracking-[0.3em] text-taupe uppercase -mt-0.5 group-hover:text-rosegold transition-colors">
            Wedding Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-champagne transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rosegold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Direct Founder WhatsApp Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/25 bg-burgundy/40 text-champagne text-xs uppercase tracking-[0.15em] hover:bg-champagne hover:text-obsidian hover:border-champagne transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
            </span>
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Speak with Gourav</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-champagne hover:text-ivory transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-obsidian/98 backdrop-blur-xl border-t border-champagne/10 z-40 px-6 py-10 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.2em] text-ivory/90 hover:text-champagne transition-colors flex items-center justify-between border-b border-champagne/5 pb-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-rosegold" />
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-champagne/10 flex flex-col gap-4">
            <p className="text-xs text-taupe tracking-wider">
              Direct founder consultations via WhatsApp:
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.15em] font-medium hover:bg-champagne-subtle transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
