import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import CustomHead from "../../components/Head.js";
import { Outfit, Inter, Bebas_Neue } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <CustomHead />
      <body className={` ${outfit.variable} ${inter.variable} ${bebas_neue.variable} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
