import { poppins } from "../../lib/font.js";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import CustomHead from "../../components/Head.js";

export const metadata = {
  title: "DigiExperts — Your Digital Growth Partner",
  description: "We grow your business using cutting-edge digital strategies, SEO, ads & conversion-focused design.",
  keywords: [
    "web development Jaipur",
    "digital marketing Jaipur",
    "Facebook ads agency",
    "best website designer in Jaipur",
    "performance marketing",
    "SEO expert Jaipur",
    "Digiexperts solutions",
    "small business marketing",
    "landing page designer",
    "meta marketing expert",
    "local web developer Jaipur",
    "ad agency Jaipur",
    "Jaipur digital agency",
    "Digiexperts",
    "best digital agency Vidhyadhar Nagar"
  ],
  authors: [{ name: "Abhishek (AK)", url: "https://digiexperts.solutions" }],
  creator: "AKcelerate",
  openGraph: {
    title: "DigiExperts — Growth Partner",
    description: "From stunning websites to Facebook ads that convert — DigiExperts helps businesses grow faster with real digital results that matter.",
    url: "https://digiexperts.solutions",
    siteName: "DigiExperts",
    images: [
      {
        url: "https://digiexperts.solutions/images/digiexperts-mockup.png",
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
    title: "DigiExperts — Growth Partner",
    description: "From stunning websites to Facebook ads that convert — DigiExperts helps businesses grow faster with real digital results that matter.",
    creator: "@yourTwitter",
    images: ["https://digiexperts.solutions/images/digiexperts-mockup.png"],
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
  icons:{
    icon:"/favicon.ico"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <CustomHead />
      <body className={`${poppins.className} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
