"use client";

import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import PageTransition from "../../components/PageTransition.js";
import { usePageTransition } from "../../hooks/usePageTransition.js";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({ children }) {
  const { isLoading } = usePageTransition();
  const pathname = usePathname()

  const isLandingPage = pathname.startsWith('/special-offer')
  const islandingPage = pathname.startsWith('/diwali-offer')

  return (
    isLandingPage || islandingPage ? (
      <>
        {children}
      </>
    ) : (
      <PageTransition>
        <Navbar />
        {children}
        <Footer />
      </PageTransition>
    )
  );
}
