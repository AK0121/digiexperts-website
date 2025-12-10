"use client";

import Navbar from "../../components/shared/Navbar.js";
import Footer from "../../components/shared/Footer.js";
import Lenis from "lenis";
import { useEffect } from "react";

export default function RootLayoutClient({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
