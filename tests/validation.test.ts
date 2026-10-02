import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  inquirySchema,
  generateWhatsAppLink,
  formatWhatsAppMessage,
} from "../src/lib/validation/inquiry.ts";

describe("Inquiry Validation & WhatsApp Generator", () => {
  it("successfully parses valid inquiry data", () => {
    const validData = {
      name: "Rohan Sharma",
      destination: "jaipur" as const,
      date: "November 2026",
      guests: "400",
      vision: "A royal palace wedding with ancestral Rajasthani decor.",
    };

    const result = inquirySchema.safeParse(validData);
    assert.equal(result.success, true);
  });

  it("fails when name is too short", () => {
    const invalidData = {
      name: "R",
      destination: "jaipur" as const,
      date: "November 2026",
      guests: "400",
    };

    const result = inquirySchema.safeParse(invalidData);
    assert.equal(result.success, false);
  });

  it("formats the WhatsApp message starting with 'Hi, My name is [Name]...'", () => {
    const inquiry = {
      name: "Pooja & Aryan",
      destination: "udaipur" as const,
      date: "December 2026",
      guests: "350",
      vision: "Lakeside island celebration.",
    };

    const message = formatWhatsAppMessage(inquiry);
    assert.equal(
      message,
      "Hi, My name is Pooja & Aryan. I'm looking to plan a wedding in Udaipur around December 2026 for around 350 guests. Notes: Lakeside island celebration."
    );
  });

  it("generates a valid wa.me URL with encoded message and phone number", () => {
    const inquiry = {
      name: "Kabir",
      destination: "corbett" as const,
      date: "Spring 2027",
      guests: "200",
    };

    const url = generateWhatsAppLink(inquiry, "919876543210");
    assert.ok(url.startsWith("https://wa.me/919876543210?text="));
    assert.ok(url.includes(encodeURIComponent("Hi, My name is Kabir.")));
    assert.ok(url.includes(encodeURIComponent("Jim Corbett")));
  });
});
