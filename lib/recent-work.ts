export type RecentWorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export const recentWork: readonly RecentWorkItem[] = [
  {
    id: "rw-1",
    title: "Precision Coin Die",
    category: "Coin Dies",
    image: "/images/categories/coin-die.webp",
    imageAlt: "Precision coin die",
    href: "/products/coin-dies",
  },
  {
    id: "rw-2",
    title: "Intricate Jewellery Die",
    category: "Jewellery Dies",
    image: "/images/categories/jewellery-die.webp",
    imageAlt: "Intricate jewellery die",
    href: "/products/jewellery-dies",
  },
  {
    id: "rw-3",
    title: "Devotional Vel Die",
    category: "Religious Dies",
    image: "/images/categories/religious-die.webp",
    imageAlt: "Devotional religious die",
    href: "/products/religious-dies",
  },
  {
    id: "rw-4",
    title: "Custom Branding Die",
    category: "Custom Dies",
    image: "/images/categories/custom-die.webp",
    imageAlt: "Custom branding die",
    href: "/products/custom-dies",
  },
  {
    id: "rw-5",
    title: "Prototype Development",
    category: "Process",
    image: "/images/process/prototype.jpg",
    imageAlt: "Prototype development",
  },
  {
    id: "rw-6",
    title: "3D Design Support",
    category: "Process",
    image: "/images/process/design-office.jpg",
    imageAlt: "3D Design office",
  },
];