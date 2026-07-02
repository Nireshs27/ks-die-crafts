export const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Send your requirement via WhatsApp or the enquiry form. We'll take it forward from there.",
  },
  {
    question: "Can you make dies from our design?",
    answer:
      "Yes — if the design is technically feasible, we'll convert it into a production-ready die.",
  },
  {
    question: "Do you offer different polishing techniques?",
    answer:
      "Yes — matte, mirror, and Bombay polish based on your final output requirement.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We don't skip the basics: material selection, engraving depth, hardness — everything is checked before delivery.",
  },
  {
    question: "What happens if the die doesn't perform well in production?",
    answer:
      "We don't disappear after delivery. We review the issue, identify the root cause, and guide you on the fix.",
  },
] as const;

export type Faq = (typeof faqs)[number];
