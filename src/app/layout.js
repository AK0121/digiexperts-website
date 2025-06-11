import { poppins } from "../../lib/font.js";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata = {
  title: "DigiExperts – Your Digital Growth Partner",
  description: "We grow your business using cutting-edge digital strategies, SEO, ads & conversion-focused design.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["digital marketing", "SEO", "web development", "Jaipur", "performance marketing", "Best Website Design", "Facebook Ads", "Meta Marketing", "Small business marketing", "Digital", "Digiexperts"],
  authors: [{ name: "Abhishek (AK)", url: "https://digiexperts.solutions" }],
  creator: "AKcelerate",
  openGraph: {
    title: "DigiExperts – Growth Partner",
    description: "Result-driven digital growth for serious businesses.",
    url: "https://digiexperts.solutions",
    siteName: "DigiExperts",
    images: [
      {
        url: "https://digiexperts.solutions/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigiExperts OG Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiExperts – Growth Partner",
    description: "We scale your business digitally with performance-based strategies.",
    creator: "@yourTwitter",
    images: ["https://digiexperts.solutions/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: "https://digiexperts.solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
