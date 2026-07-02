export type Product = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  features: readonly string[];
  applications: readonly string[];
  image: string;
  imageAlt: string;
  leadTime: string;
  materials: readonly string[];
  badge?: string;
};

export const products: readonly Product[] = [
  {
    slug: "coin-dies",
    title: "Coin Dies",
    subtitle: "Clean strikes & consistent finishes",
    shortDescription:
      "Precision-engineered coin dies that deliver crisp, repeatable strikes across gold, silver, brass, and copper coinage.",
    longDescription:
      "Our coin dies are engineered for clarity of impression and longevity of run. We work across denominations, commemorative pieces, religious coinage, and corporate gift coins. Each die is finished by hand by our master craftsmen after CNC to deliver the consistent strike quality that long production runs demand.",
    features: [
      "Precision dies across all metals",
      "Clean strikes & consistent quality finish",
      "Available across all shapes and sizes",
      "Hand-finished after machining for crispness",
    ],
    applications: [
      "Commemorative & gift coins",
      "Religious & temple coins",
      "Corporate branded coins",
      "Wedding & event coins",
    ],
    image: "/images/categories/coin-die.webp",
    imageAlt: "Precision-engineered coin dies",
    leadTime: "7–12 days",
    materials: ["D2", "H13", "SKD11"],
    badge: "Best Seller",
  },
  {
    slug: "jewellery-dies",
    title: "Jewellery Dies",
    subtitle: "Pendants, ornamental & more",
    shortDescription:
      "Fine-detail dies for pendants, ornamental motifs, and Nagas pieces capturing intricate jewellery design with absolute fidelity.",
    longDescription:
      "From delicate pendants to ornamental Nagas, our jewellery dies hold the finest detail and complex profiles that conventional machining cannot reach. The result: dies that reproduce a designer's vision exactly, run after run.",
    features: [
      "Pendant dies of all complexities",
      "Ornamental & motif dies",
      "Nagas dies with fine detailing",
      "Filigree & openwork pattern dies",
    ],
    applications: [
      "Pendants & lockets",
      "Ornamental jewellery sets",
      "Nagas / Naga pathakkam dies",
      "Designer collections",
    ],
    image: "/images/categories/jewellery-die.webp",
    imageAlt: "Detailed jewellery dies with intricate patterns",
    leadTime: "10–15 days",
    materials: ["D2", "H13", "SKD11"],
    badge: "Fine Detail",
  },
  {
    slug: "religious-dies",
    title: "Religious Dies",
    subtitle: "Vel, Soolam & God figure dies",
    shortDescription:
      "Devotional dies crafted with reverence: Vel, Soolam, God figures, Thalli, Nagas Thalli, Patta Gundu, and Manga Kasu.",
    longDescription:
      "Religious jewellery demands both technical precision and sensitivity to traditional iconography. Our religious die range covers the full vocabulary of South Indian devotional jewellery: Vel and Soolam dies, God figure dies for popular deities, Thalli and Nagas Thalli dies, Patta Gundu, and Manga Kasu. We work from your existing designs or develop new ones with you.",
    features: [
      "Vel die & Soolam die",
      "God figure dies for religious symbols",
      "Thalli & Nagas Thalli dies",
      "Patta Gundu & Manga Kasu dies",
    ],
    applications: [
      "Temple jewellery manufacturing",
      "Thali & wedding jewellery",
      "Devotional / festival jewellery",
      "Heritage collections",
    ],
    image: "/images/categories/religious-die.webp",
    imageAlt: "Religious symbol dies",
    leadTime: "10–15 days",
    materials: ["D2", "H13", "SKD11"],
    badge: "Heritage Craft",
  },
  {
    slug: "custom-dies",
    title: "Custom Dies",
    subtitle: "Logos & special applications",
    shortDescription:
      "Fully bespoke dies from corporate logos to specialised industrial applications. Bring us a sketch or a STEP file; we'll do the rest.",
    longDescription:
      "From logos to specialised applications, fully customised dies are built to match your exact requirement. High-detail dies engineered for accurate human faces and portrait designs deliver sharp definition and consistent results, and include precision cutting die models.",
    features: [
      "Fully customised dies",
      "Logo and branding dies",
      "Special application dies",
      "Expert application & prototyping",
    ],
    applications: [
      "Corporate branded coins / medallions",
      "Limited-edition collections",
      "Industrial / non-jewellery use",
      "Prototype validation runs",
    ],
    image: "/images/categories/custom-die.webp",
    imageAlt: "Custom and branding dies",
    leadTime: "12–15 days",
    materials: ["D2", "H13", "SKD11"],
    badge: "Fast Quote",
  },
];

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
