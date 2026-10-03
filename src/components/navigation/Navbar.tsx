"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize navbar elevation state directly with the Lenis smooth-scroll loop
  useLenis(({ scroll }) => {
    const shouldBeScrolled = scroll > 20;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring your work on gouravevents.com and would love to consult with you regarding our wedding."
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-3.5 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "bg-alabaster/95 border-b border-champagne-border/40 shadow-sm shadow-charcoal/5"
            : "bg-alabaster/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-sm">
              <Image
                src="/brand-logo.png"
                alt="Gaurav Events Emblem"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display text-base sm:text-lg md:text-xl tracking-[0.2em] text-burgundy uppercase font-semibold leading-tight">
                Gourav Events
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-deep lowercase font-serif italic -mt-0.5 group-hover:text-burgundy transition-colors">
                where memories are created...
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navLinks.map((link, idx) => {
              const isLast = idx === siteConfig.navLinks.length - 1;
              if (isLast) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-burgundy/30 bg-burgundy text-ivory text-xs uppercase tracking-[0.18em] hover:bg-burgundy-light hover:border-burgundy-light transition-all duration-300 shadow-sm font-medium ml-2"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-light opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne-light"></span>
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-charcoal/80 hover:text-burgundy transition-colors relative py-1 group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-burgundy transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-burgundy hover:text-charcoal transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-alabaster/98 backdrop-blur-xl border-t border-champagne-border/40 z-40 px-6 py-10 flex flex-col justify-between shadow-2xl overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.2em] text-charcoal/90 hover:text-burgundy transition-colors flex items-center justify-between border-b border-champagne-border/20 pb-3 font-medium"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-burgundy" />
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-champagne-border/30 flex flex-col gap-4">
            <p className="text-xs text-taupe tracking-wider">
              Direct founder consultations via WhatsApp:
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.15em] font-medium hover:bg-burgundy-light transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-champagne-light" />
              <span>Connect on WhatsApp</span>
            </a>

            {/* Social Channels */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-burgundy hover:text-gold transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4 text-gold"
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
                <span>Instagram</span>
              </a>
              <span className="text-champagne-border">·</span>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-burgundy hover:text-gold transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
