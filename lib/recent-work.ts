export type RecentWorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const recentWork: readonly RecentWorkItem[] = [
  {
    id: "rw-balaji",
    title: "Balaji (Balaji)",
    category: "Religious Dies",
    image: "/images/recent-work/balaji.webp",
    imageAlt: "Steel die engraved with Lord Balaji deity motif",
  },
  {
    id: "rw-bangle",
    title: "Bangle Profile (Vallaiyal)",
    category: "Jewellery Dies",
    image: "/images/recent-work/bangle.webp",
    imageAlt: "Curved steel bangle profile die with ornamental border",
  },

  {
    id: "rw-pendant-laxmi-vilakku",
    title: "Pendant Laxmi Vilakku (Pathakkam Lakshmi Vilakku)",
    category: "Jewellery Dies",
    image: "/images/recent-work/pentant-laxmi-vilakku.webp",
    imageAlt: "Pendant stamping die with Laxmi Vilakku motif",
  },
  {
    id: "rw-plate",
    title: "Plate (Thattu)",
    category: "Custom Dies",
    image: "/images/recent-work/plate.webp",
    imageAlt: "Decorative steel plate forming die",
  },
  {
    id: "rw-trident",
    title: "Trident (Trisoolam)",
    category: "Religious Dies",
    image: "/images/recent-work/Trident.webp",
    imageAlt: "Steel die engraved with trident (trishul) motif",
  },
  {
    id: "rw-vishvakarma",
    title: "Vishvakarma (Vishwakarma)",
    category: "Religious Dies",
    image: "/images/recent-work/Vishvakarma.webp",
    imageAlt: "Steel die engraved with Lord Vishvakarma deity motif",
  },
];
