import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pure-essence-school.vercel.app"),
  title: "Pure Essence School | Purity, Piety, and Purpose",
  description:
    "Pure Essence School — A premier Islamic school in Ibogun, Ogun State, blending Quranic excellence with modern education. Creche through Secondary. Purity, Piety, and Purpose.",
  keywords:
    "Islamic school Nigeria, Ogun State school, Quran memorisation, Tahfeedh school, STEM Islamic school, Pure Essence School",
  openGraph: {
    title: "Pure Essence School | مدرسة الجوهر النقي",
    description: "Purity, Piety, and Purpose — Nurturing the next generation of faithful leaders.",
    images: ["/images/school_og_banner_1775113011689.png"],
    siteName: "Pure Essence School",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Essence School | Purity, Piety, and Purpose",
    description: "Purity, Piety, and Purpose — Nurturing the next generation of faithful leaders.",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Pure Essence School",
    alternateName: "مدرسة الجوهر النقي",
    url: "https://pure-essence-school.vercel.app",
    logo: "https://pure-essence-school.vercel.app/images/school_og_banner_1775113011689.png",
    image: "https://pure-essence-school.vercel.app/images/school_og_banner_1775113011689.png",
    description:
      "A premier Islamic school in Ibogun, Ogun State, Nigeria, blending Quranic excellence with modern education. Creche through Secondary — Purity, Piety, and Purpose.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibogun Olaogun Road",
      addressLocality: "Iffo",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    telephone: ["+2348027585598", "+2349067849685", "+2348077510700"],
    email: "pureessenceschool@gmail.com",
    openingHours: "Mo-Fr 08:00-16:00",
    educationalLevel: ["Creche", "Nursery", "Primary School", "Junior Secondary", "Senior Secondary"],
    keywords: "Islamic school Nigeria, Quran school, Tahfeedh, Ogun State school, STEM Islamic education",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSerif.variable} ${manrope.variable} bg-[#faf9f8] text-[#1a1c1c] font-body antialiased overflow-x-hidden`}>
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
