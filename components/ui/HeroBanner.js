"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Lenis from "lenis";
import Image from "next/image";

export default function HeroBanner() {
  const containerRef = useRef(null);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 640);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.sin((t * Math.PI) / 2),
      smoothWheel: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax: text & plane
  const rawTextX = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"]);
  const textX = useSpring(rawTextX, {
    stiffness: 80,   // lower = smoother
    damping: 10,     // higher = less bounce
    mass: 2,
  });
  const rawPlaneX = useTransform(
    scrollYProgress,
    [0, 1],
    isLarge ? ["50%", "800%"] : ["50%", "300%"]
  );
  
  const planeX = useSpring(rawPlaneX, {
    stiffness: 50,   // lower = smoother
    damping: 30,     // higher = less bounce
    mass: 0.5,
  });
  const planeY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [120, 100, -85, -15, -50]
  );
  const planeRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [10, -5, 40, -10, 40]
  );
  const planeOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.7]
  );
  const cloudScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Parallax clouds (slower drift than text/plane)
  const cloudX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div
      ref={containerRef}
      className="relative font-bebas-neue pt-0 sm:pt-20 h-[260vh] w-full bg-gradient-to-b from-[#000435] to-[#9ccfff]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Clouds - background layer */}
        <motion.div
          style={{ x: cloudX, scale: cloudScale }}
          className="absolute top-10 left-0 w-full flex justify-between z-0"
        >
          <Image
            src="/images/cloud-img.png"
            alt="cloud top left"
            width={250}
            height={150}
            className="opacity-70"
          />
          <Image
            src="/images/cloud-img.png"
            alt="cloud top right"
            width={220}
            height={140}
            className="opacity-70 hidden sm:flex"
          />
        </motion.div>

        <motion.div
          style={{ x: cloudX, scale: cloudScale }}
          className="absolute bottom-10 left-0 w-full flex justify-around z-0"
        >
          <Image
            src="/images/cloud-img.png"
            alt="cloud bottom left"
            width={200}
            height={120}
            className="opacity-80 hidden sm:flex"
          />
          <Image
            src="/images/cloud-img.png"
            alt="cloud bottom right"
            width={280}
            height={160}
            className="opacity-75"
          />
        </motion.div>

        {/* Paper plane - foreground */}
        <motion.div
          style={{ x: planeX, y: planeY, rotate: planeRotate, opacity: planeOpacity }}
          className="pointer-events-none absolute z-20 left-10 bottom-72 sm:bottom-24 md:bottom-2 will-change-transform"
        >
          <Image
            src="/icons/paperplane.png"
            alt="paper plane"
            width={160}
            height={160}
            className="w-[10vw] min-w-[80px] max-w-[160px] h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
            priority
          />
        </motion.div>

        {/* Big scrolling headline */}
        <motion.span
          style={{ x: textX }}
          className="z-10 text-[32vw] font-medium tracking-tight text-white whitespace-nowrap will-change-transform"
        >
          Technology Meets {""}
          <span className="text-black">creativity</span>
        </motion.span>
      </div>
    </div>
  );
}
