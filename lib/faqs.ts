export const faqs = [
  {
    question: "How can I place orders?",
    answer:
      "Send your requirement on WhatsApp or through the form below. We'll take it forward.",
  },
  {
    question: "Can you create die with our design?",
    answer:
      "Yes, if your design works technically, we'll make it into a proper production die.",
  },
  {
    question: "Do you offer different die polishing techniques?",
    answer:
      "Yes, we offer different finishes — matte, mirror, Bombay polish — based on your final output.",
  },
  {
    question: "How do we ensure quality?",
    answer:
      "We don't skip the basics — material, engraving depth, hardness, everything is checked properly before delivery.",
  },
  {
    question: "Do we take single order or bulk order?",
    answer:
      "Single or bulk — doesn't matter. We handle both the same way.",
  },
] as const;

export type Faq = (typeof faqs)[number];
