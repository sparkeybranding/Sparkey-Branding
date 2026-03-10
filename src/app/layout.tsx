import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparkey! Branding | High-Velocity Design & Branding Agency",
  description: "Sparkey! Branding is a premium design agency specializing in high-converting websites, luxury branding, and digital strategy for ambitious entrepreneurs. Fast, vibrant, and undeniably luxury.",
  keywords: ["branding agency", "web design", "luxury branding", "digital marketing", "graphic design", "high conversion websites", "Sparkey Branding", "creative agency"],
  authors: [{ name: "Sparkey! Branding" }],
  creator: "Sparkey! Branding",
  publisher: "Sparkey! Branding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sparkeybranding.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sparkey! Branding | High-Velocity Design & Branding Agency",
    description: "Design at the Speed of Light. Quality that Defies Gravity. High-converting sales machines masked as luxury digital art.",
    url: "https://sparkeybranding.com",
    siteName: "Sparkey! Branding",
    images: [
      {
        url: "/images/og-image-final.png",
        width: 1200,
        height: 630,
        alt: "Sparkey! Branding - High Velocity Design Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkey! Branding | High-Velocity Design & Branding Agency",
    description: "Design at the Speed of Light. Quality that Defies Gravity.",
    images: ["/images/og-image-final.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased bg-white text-black selection:bg-black selection:text-white overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sparkey! Branding",
              "image": "https://sparkeybranding.com/images/og-image-final.png",
              "@id": "https://sparkeybranding.com",
              "url": "https://sparkeybranding.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "postalCode": "",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0522,
                "longitude": -118.2437
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/SparkeyBranding",
                "https://www.instagram.com/sparkeybranding"
              ],
              "description": "Design at the Speed of Light. Premium branding and high-velocity web design agency for ambitious founders."
            }),
          }}
        />
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
