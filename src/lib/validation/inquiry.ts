import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  destination: z.enum(["jaipur", "udaipur", "corbett", "rishikesh", "other"], {
    message: "Please select a preferred destination",
  }),
  date: z.string().min(2, "Please specify an estimated date or season"),
  guests: z.string().min(1, "Please specify estimated guest count"),
  vision: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const destinationLabels: Record<InquiryInput["destination"], string> = {
  jaipur: "Jaipur",
  udaipur: "Udaipur",
  corbett: "Jim Corbett",
  rishikesh: "Rishikesh",
  other: "Other Destination",
};

export function formatWhatsAppMessage(data: InquiryInput): string {
  const destName = destinationLabels[data.destination] || "Destination";
  const visionPart =
    data.vision && data.vision.trim().length > 0
      ? ` Notes: ${data.vision.trim()}`
      : "";
  return `Hi, My name is ${data.name.trim()}. I'm looking to plan a wedding in ${destName} around ${data.date.trim()} for around ${data.guests.trim()} guests.${visionPart}`;
}

export function generateWhatsAppLink(
  data: InquiryInput,
  phoneNumber = "919876543210"
): string {
  const text = formatWhatsAppMessage(data);
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
