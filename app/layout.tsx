import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
