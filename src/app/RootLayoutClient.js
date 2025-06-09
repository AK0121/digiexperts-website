"use client";

import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import PageTransition from "../../components/PageTransition.js";
import { usePageTransition } from "../../hooks/usePageTransition.js";

export default function RootLayoutClient({ children }) {
  const { isLoading } = usePageTransition();

  return (
    <PageTransition isLoading={isLoading}>
      <Navbar />
      {children}
      <Footer />
    </PageTransition>
  );
}
