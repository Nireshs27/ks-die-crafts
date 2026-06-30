import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { effra } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "jewellery dies",
    "steel die manufacturer",
    "coin dies",
    "ring dies",
    "bangle dies",
    "pendant dies",
    "custom dies",
    "CNC die maker Chennai",
    "Wire EDM dies",
    "religious dies",
    "Nagas dies",
    "tool steel dies",
    "KS Diecrafts",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: siteConfig.favicon, sizes: "32x32", type: "image/png" }],
    apple: siteConfig.appleTouchIcon,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logo,
        width: 240,
        height: 48,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${effra.variable} h-full`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-poster.webp"
          type="image/webp"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased overflow-x-hidden">
        <ThemeProvider>
          <StructuredData />
          <Header />
          <Container className="flex-1 pt-16 flex flex-col">
            <main className="flex-1">{children}</main>
          </Container>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
