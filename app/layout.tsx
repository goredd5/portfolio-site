import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhettesh.com"),
  title: "Mike Hettesheimer | Product Leader & Startup Expert",
  description: "Experienced product leader with 10+ years driving startup growth through strategic product development, team leadership, and data-driven decision-making. Learn about my background in e-commerce, SaaS, and product strategy.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mike Hettesheimer | Product Leader & Startup Expert",
    description: "Experienced product leader with 10+ years driving startup growth through strategic product development, team leadership, and data-driven decision-making.",
    url: "https://mhettesh.com",
    siteName: "Mike Hettesheimer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mike Hettesheimer - Product Leader",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://mhettesh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero/199820010016.jpg" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.github.com" />
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
