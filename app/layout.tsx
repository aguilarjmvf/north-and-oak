import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionConfig } from "@/components/shared/MotionConfig";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "North & Oak — Furniture Built to Last",
    template: "%s | North & Oak",
  },
  description:
    "Premium furniture and home décor rooted in Scandinavian design. Handcrafted from sustainably sourced materials. Designed in Portland, Oregon.",
  metadataBase: new URL("https://northandoak.com"),
  openGraph: {
    siteName: "North & Oak",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "North & Oak — Furniture Built to Last",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=630&fit=crop&q=80"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <MotionConfig>
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
