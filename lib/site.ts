export const siteConfig = {
  name: "KS Diecrafts",
  legalName: "KS Diecrafts",
  logo: "/images/ks-die-craft-logo.png",
  headerLogo: "/images/ks-logo-transparent.webp",
  tagline: "Precision steel dies for India's finest jewellers",
  description:
    "Precision steel die design and manufacturing for jewellery, coin, religious, and custom applications. CNC + Wire EDM craftsmanship from Chennai since 1998.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ksdiecrafts.com",
  locale: "en_IN",
  foundingYear: 1980,
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@ksdiecrafts.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 9376383876",
    phoneDigits: "919376383876",
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "919376383876",
    address:
      "New No : 46, Old No 70/1,\nSecond Floor, Bazullah Road, (Opposite to Baskin & Robins)\nT.Nagar, Chennai – 600017",
    addressShort: "T. Nagar, Chennai – 600017",
    streetAddress: "New No 46, Old No 70/1, Second Floor, Bazullah Road",
    locality: "T. Nagar",
    region: "Tamil Nadu",
    postalCode: "600017",
    country: "IN",
    geo: { latitude: 13.04709, longitude: 80.236259 },
    workingHours: "Monday-Saturday: 9:30 – 19:30\nSunday: Closed",
    workingHoursStructured: {
      days: "Mo-Sa",
      opens: "09:30",
      closes: "19:30",
    },
  },
  social: {
    instagram: "https://instagram.com/ksdiecrafts_",
    facebook: "https://facebook.com/ksdiecraftsfb",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#categories" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about-us" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
