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
      "Designed for clean strikes and consistent quality",
      "Available across all shapes and sizes",
    ],
    image: "/images/categories/coin-die.webp",
    imageAlt: "Precision-engineered coin dies",
  },
  {
    slug: "jewellery-dies",
    title: "Jewellery Dies",
    subtitle: "Pendants, ornamental & nagas dies",
    features: [
      "Dies for pendants and ornamental custom designs",
      "Nagas dies with fine detailing",
    ],
    image: "/images/categories/jewellery-die.webp",
    imageAlt: "Detailed jewellery dies with intricate patterns",
  },
  {
    slug: "religious-dies",
    title: "Religious Dies",
    subtitle: "Vel, Soolam, Villaku & God figure dies",
    features: [
      "Thalli dies, Patta Gundu, and Manga kasu dies",
      "And more devotional ranges",
    ],
    image: "/images/categories/religious-die.webp",
    imageAlt: "Religious symbol dies",
  },
  {
    slug: "custom-dies",
    title: "Custom Dies",
    subtitle: "Logo, branding & special applications",
    features: [
      "Fully customised dies to your exact requirement",
      "Special application and cutting die models",
    ],
    image: "/images/categories/custom-die.webp",
    imageAlt: "Custom and branding dies",
  },
];
