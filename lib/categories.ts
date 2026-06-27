export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
};

export const categories: readonly Category[] = [
  {
    slug: "coin-dies",
    title: "Coin Dies",
    subtitle: "Precision dies across all metals",
    features: [
      "Built for clean strikes and sharp detailing",
      "Consistent output across every batch",
    ],
    image: "/images/categories/coin-die.webp",
    imageAlt: "Precision-engineered coin dies",
  },
  {
    slug: "jewellery-dies",
    title: "Jewellery Dies",
    subtitle: "Pendants, ornamental & nagas dies",
    features: [
      "Pendants and ornamental custom designs",
      "Nagas work executed with fine detailing",
    ],
    image: "/images/categories/jewellery-die.webp",
    imageAlt: "Detailed jewellery dies with intricate patterns",
  },
  {
    slug: "religious-dies",
    title: "Religious Dies",
    subtitle: "Vel, Soolam, Villaku, God figures & more",
    features: [
      "Vel, Soolam, Villaku, God figures, Thalli, Patta Gundu, Manga Kasu and more",
      "Designed with clarity, depth and traditional accuracy",
    ],
    image: "/images/categories/religious-die.webp",
    imageAlt: "Religious symbol dies",
  },
  {
    slug: "custom-dies",
    title: "Custom Dies",
    subtitle: "Logos, faces, portraits & special applications",
    features: [
      "Fully customised dies to match your exact requirement",
      "High-detail face and portrait dies with sharp definition",
      "Precision cutting die models",
    ],
    image: "/images/categories/custom-die.webp",
    imageAlt: "Custom logo, portrait and cutting dies",
  },
];
