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
import { FloralCorner } from "@/components/ui/FloralMotif";

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
      destination: "corbett",
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
    <div className="relative rounded-3xl border border-champagne-border/60 bg-white p-8 sm:p-12 shadow-xl overflow-hidden">
      <FloralCorner position="top-left" className="opacity-40" />
      <FloralCorner position="top-right" className="opacity-40" />
      <FloralCorner position="bottom-left" className="opacity-40" />
      <FloralCorner position="bottom-right" className="opacity-40" />
      {!submittedData ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="border-b border-champagne-border/30 pb-4 mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-rosegold font-semibold">
              Bespoke Inquiry Gateway
            </span>
            <h3 className="font-serif text-2xl text-burgundy mt-1 font-normal">
              Initiate Consultation with Gourav
            </h3>
            <p className="text-xs text-charcoal-muted font-light mt-1">
              Your details will be formatted into a personal message and opened directly in WhatsApp.
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium"
            >
              Your Name / Couple&apos;s Names *
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Aryan & Tara"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl bg-alabaster border border-champagne-border/60 text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-burgundy focus:bg-white transition-colors"
            />
            {errors.name && (
              <p className="text-xs text-rosegold mt-1 font-medium">{errors.name.message}</p>
            )}
          </div>

          {/* Destination & Season */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="destination"
                className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium"
              >
                Preferred Destination *
              </label>
              <select
                id="destination"
                {...register("destination")}
                className="w-full px-4 py-3 rounded-xl bg-alabaster border border-champagne-border/60 text-charcoal text-sm focus:outline-none focus:border-burgundy focus:bg-white transition-colors"
              >
                <option value="corbett">Jim Corbett (Forest Luxury & Sanctuary)</option>
                <option value="jaipur">Jaipur (Heritage Palace)</option>
                <option value="udaipur">Udaipur (Lakeside Romance)</option>
                <option value="rishikesh">Rishikesh (Sacred Riverfront)</option>
                <option value="other">Other Luxury Destination</option>
              </select>
              {errors.destination && (
                <p className="text-xs text-rosegold mt-1 font-medium">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="date"
                className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium"
              >
                Estimated Season / Date *
              </label>
              <input
                id="date"
                type="text"
                placeholder="e.g. Winter 2026 or Dec 15"
                {...register("date")}
                className="w-full px-4 py-3 rounded-xl bg-alabaster border border-champagne-border/60 text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-burgundy focus:bg-white transition-colors"
              />
              {errors.date && (
                <p className="text-xs text-rosegold mt-1 font-medium">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Guest Count */}
          <div className="space-y-1.5">
            <label
              htmlFor="guests"
              className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium"
            >
              Estimated Guest Scale *
            </label>
            <input
              id="guests"
              type="text"
              placeholder="e.g. 250 - 350 Guests"
              {...register("guests")}
              className="w-full px-4 py-3 rounded-xl bg-alabaster border border-champagne-border/60 text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-burgundy focus:bg-white transition-colors"
            />
            {errors.guests && (
              <p className="text-xs text-rosegold mt-1 font-medium">{errors.guests.message}</p>
            )}
          </div>

          {/* Celebration Vision / Notes */}
          <div className="space-y-1.5">
            <label
              htmlFor="vision"
              className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium"
            >
              Celebration Vision or Specific Questions (Optional)
            </label>
            <textarea
              id="vision"
              rows={3}
              placeholder="Tell Gourav about your dream venues, decor aesthetic, musical inclinations, or special family wishes..."
              {...register("vision")}
              className="w-full px-4 py-3 rounded-xl bg-alabaster border border-champagne-border/60 text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-burgundy focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-light hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-burgundy/15"
          >
            <MessageCircle className="w-4 h-4 text-champagne-light" />
            <span>Connect with Gourav on WhatsApp</span>
          </button>
        </form>
      ) : (
        /* Confirmation State */
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7 text-burgundy" />
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-rosegold font-semibold">
              Inquiry Formatted
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal-deep mt-1 font-normal">
              WhatsApp Conversation Launched
            </h3>
            <p className="text-xs text-charcoal-muted max-w-md mx-auto mt-2 font-light">
              Your inquiry has been generated and dispatched to WhatsApp to chat directly with Gourav.
            </p>
          </div>

          {/* Formatted Message Preview */}
          <div className="rounded-xl border border-champagne-border/60 bg-alabaster p-5 text-left max-w-lg mx-auto shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1.5 font-semibold">
              Message Preview:
            </span>
            <p className="text-xs text-charcoal font-mono leading-relaxed bg-white p-3.5 rounded-lg border border-champagne-border/40">
              {submittedData.messageText}
            </p>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={submittedData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.15em] font-medium hover:bg-burgundy-light transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-champagne-light" />
              <span>Reopen WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-charcoal/20 text-charcoal text-xs uppercase tracking-[0.15em] hover:text-burgundy hover:border-burgundy transition-colors"
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
