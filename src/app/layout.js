import { poppins } from "../../lib/font.js";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata = {
  title: "DigiExperts",
  description: "Your digital growth partner",
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
