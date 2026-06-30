import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/products-page-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products Steel dies for jewellery, coin & custom applications",
  description:
    "Browse KS Diecrafts' full range of precision steel dies coin dies, jewellery dies, religious dies, and fully custom dies. Engineered in Chennai since 1998.",
  alternates: { canonical: `${siteConfig.url}/products` },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
