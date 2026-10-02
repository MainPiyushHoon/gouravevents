"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, CheckCircle2, RotateCcw, Send } from "lucide-react";
import {
  inquirySchema,
  type InquiryInput,
  generateWhatsAppLink,
  formatWhatsAppMessage,
} from "@/lib/validation/inquiry";
import { siteConfig } from "@/data/site";

export default function ContactForm() {
  const [submittedData, setSubmittedData] = useState<{
    input: InquiryInput;
    url: string;
    messageText: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      destination: "jaipur",
      date: "",
      guests: "",
      vision: "",
    },
  });

  const onSubmit = (data: InquiryInput) => {
    const url = generateWhatsAppLink(data, siteConfig.whatsappNumber);
    const messageText = formatWhatsAppMessage(data);

    // Save submitted state
    setSubmittedData({ input: data, url, messageText });

    // Open WhatsApp in new tab directly
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    reset();
  };

  return (
    <div className="rounded-3xl border border-champagne/20 bg-gradient-to-br from-burgundy/40 via-burgundy-deep to-obsidian p-8 sm:p-12 shadow-2xl relative">
      {!submittedData ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="border-b border-champagne/10 pb-4 mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-rosegold font-medium">
              Bespoke Inquiry Gateway
            </span>
            <h3 className="font-serif text-2xl text-champagne mt-1">
              Initiate Consultation with Gourav
            </h3>
            <p className="text-xs text-taupe font-light mt-1">
              Your details will be formatted into a personal message and opened directly in WhatsApp.
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-[0.15em] text-ivory/80 font-medium"
            >
              Your Name / Couple&apos;s Names *
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Aryan & Tara"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl bg-obsidian/70 border border-champagne/20 text-ivory text-sm placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors"
            />
            {errors.name && (
              <p className="text-xs text-rosegold mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Destination & Season */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="destination"
                className="block text-xs uppercase tracking-[0.15em] text-ivory/80 font-medium"
              >
                Preferred Destination *
              </label>
              <select
                id="destination"
                {...register("destination")}
                className="w-full px-4 py-3 rounded-xl bg-obsidian/70 border border-champagne/20 text-ivory text-sm focus:outline-none focus:border-champagne transition-colors"
              >
                <option value="jaipur" className="bg-obsidian text-ivory">
                  Jaipur (Heritage Palace)
                </option>
                <option value="udaipur" className="bg-obsidian text-ivory">
                  Udaipur (Lakeside Romance)
                </option>
                <option value="corbett" className="bg-obsidian text-ivory">
                  Jim Corbett (Forest Luxury)
                </option>
                <option value="rishikesh" className="bg-obsidian text-ivory">
                  Rishikesh (Sacred Riverfront)
                </option>
                <option value="other" className="bg-obsidian text-ivory">
                  Other Luxury Destination
                </option>
              </select>
              {errors.destination && (
                <p className="text-xs text-rosegold mt-1">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="date"
                className="block text-xs uppercase tracking-[0.15em] text-ivory/80 font-medium"
              >
                Estimated Season / Date *
              </label>
              <input
                id="date"
                type="text"
                placeholder="e.g. Winter 2026 or Dec 15"
                {...register("date")}
                className="w-full px-4 py-3 rounded-xl bg-obsidian/70 border border-champagne/20 text-ivory text-sm placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors"
              />
              {errors.date && (
                <p className="text-xs text-rosegold mt-1">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Guest Count */}
          <div className="space-y-1.5">
            <label
              htmlFor="guests"
              className="block text-xs uppercase tracking-[0.15em] text-ivory/80 font-medium"
            >
              Estimated Guest Scale *
            </label>
            <input
              id="guests"
              type="text"
              placeholder="e.g. 250 - 350 Guests"
              {...register("guests")}
              className="w-full px-4 py-3 rounded-xl bg-obsidian/70 border border-champagne/20 text-ivory text-sm placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors"
            />
            {errors.guests && (
              <p className="text-xs text-rosegold mt-1">{errors.guests.message}</p>
            )}
          </div>

          {/* Celebration Vision / Notes */}
          <div className="space-y-1.5">
            <label
              htmlFor="vision"
              className="block text-xs uppercase tracking-[0.15em] text-ivory/80 font-medium"
            >
              Celebration Vision or Specific Questions (Optional)
            </label>
            <textarea
              id="vision"
              rows={3}
              placeholder="Tell Gourav about your dream venues, decor aesthetic, musical inclinations, or special family wishes..."
              {...register("vision")}
              className="w-full px-4 py-3 rounded-xl bg-obsidian/70 border border-champagne/20 text-ivory text-sm placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors resize-none"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-champagne/15"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect with Gourav on WhatsApp</span>
          </button>
        </form>
      ) : (
        /* Confirmation State */
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-champagne/15 border border-champagne/30 text-champagne flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7 text-champagne" />
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-rosegold font-medium">
              Inquiry Formatted
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-champagne mt-1">
              WhatsApp Conversation Launched
            </h3>
            <p className="text-xs text-ivory/70 max-w-md mx-auto mt-2 font-light">
              Your inquiry has been generated and dispatched to WhatsApp to chat directly with Gourav.
            </p>
          </div>

          {/* Formatted Message Preview */}
          <div className="rounded-xl border border-champagne/15 bg-obsidian/80 p-5 text-left max-w-lg mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1.5 font-medium">
              Message Preview:
            </span>
            <p className="text-xs text-ivory/90 font-mono leading-relaxed bg-burgundy-deep/60 p-3 rounded-lg border border-champagne/10">
              {submittedData.messageText}
            </p>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={submittedData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.15em] font-medium hover:bg-champagne-subtle transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Reopen WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-champagne/25 text-ivory text-xs uppercase tracking-[0.15em] hover:text-champagne hover:border-champagne transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rosegold" />
              <span>Send Another Inquiry</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
