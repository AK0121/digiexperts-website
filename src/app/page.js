"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HeroBanner from "../../components/ui/HeroBanner";
import Services from "../../components/homepage_components/Services";
import CaseStudies from "../../components/homepage_components/CaseStudies";
import WhyDigiexperts from "../../components/homepage_components/WhyDigiexperts";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 250], [0, -150], { clamp: false });
  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
    mass: 2,
  }); 

  return (
    <div className="min-h-screen bg-black">
      <section
        className="relative font-outfit h-[110vh] md:h-[90vh] lg:h-[110vh] pt-12 lg:py-20
       bg-gradient-to-br from-gray-950 via-[#000223] to-[#000223] overflow-hidden"
      >
        {/* Subtle Grid + Glow Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 6px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 6px)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-purple-900/40 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-0 pb-32 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          {/* Left Content */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
            style={{ y: smoothY }}
            className="flex-1 min-w-[320px] pt-10 text-center lg:text-left space-y-8"
          >
            <div className="Heading flex flex-col gap-4">
              <h1 className="text-5xl sm:text-7xl uppercase font-medium text-white">
                <span className="block">Enter the</span> <span className="block text-6xl">Digital World</span>
              </h1>
              <h2 className="text-xl font-inter text-gray-100">
                with Our Website Design & Digital Marketing Agency
              </h2>
            </div>

            <div className="Sub-heading flex flex-col font-inter">
              <p className="pl-1 text-lg sm:text-xl tracking-[0.05rem] leading-[27px] text-gray-200 max-w-xl mx-auto lg:mx-0">
                A new era of creativity & technology.
              </p>
              <p className="pl-1 text-lg sm:text-xl tracking-[0.05rem] leading-[27px] text-gray-200 max-w-xl mx-auto lg:mx-0">
                We build unforgettable digital experiences that move people.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center items-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="relative text-lg lg:text-xl w-72 h-14 px-8 py-5 rounded-[8px] font-inter font-semibold text-white bg-gradient-to-tr from-[#2896fe] to-[#601ee4] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  Let&rsquo;s Work Together
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                onClick={() => handleScroll("case-studies")}
                className="w-72 cursor-pointer h-14 text-lg lg:text-xl font-inter px-8 py-5 rounded-[8px] bg-gray-100/10 font-semibold text-gray-200 backdrop-blur-md hover:text-white hover:border-white/40 transition-all duration-300 flex items-center justify-center"
                >
                  See Our Work
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Globe */}
          <div className="flex-1 flex pr-24 sm:pr-0 items-center justify-center lg:justify-end">
            <motion.div
              style={{ y }}
              className="relative w-[clamp(280px,40vw,600px)] aspect-square lg:translate-x-16"
              initial={{ filter: "brightness(5)", scale: 0.2 }}
              animate={{ filter: "brightness(1)", scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            >
              {/* Globe */}
              <motion.div className="absolute inset-0 z-50">
                <Image
                  src="/images/globe.png"
                  alt="Digital World Globe"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
                  priority
                  className="object-contain"
                />
              </motion.div>

              {/* Glow */}
              <motion.div
                className="absolute z-40 inset-0 rounded-full bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-800/40 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
                  style={{
                    left: `${10 + i * 7}%`,
                    top: `${20 + (i % 4) * 20}%`,
                    zIndex: i % 2 === 0 ? 15 : 25,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <HeroBanner />
      <Services />
      <CaseStudies />
      <WhyDigiexperts />
    </div>
  );
};

export default HeroSection;
