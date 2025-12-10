"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

// Updated nav links (section scroll)
const navLinks = [
  { name: "Services", id: "services" },
  { name: "Case Studies", id: "case-studies" },
  { name: "Highlights", id: "highlights" },
];

export default function Navbar() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); 
  };

  scrollY.on("change", (latest) => {
    setVisible(latest > 50);
  });

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        ref={ref}
        animate={{
          backdropFilter: visible ? "blur(60px)" : "none",
          boxShadow: visible ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
          width: visible ? "70%" : "100%",
          borderRadius: visible ? "3rem" : "0rem",
          y: visible ? 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 40 }}
        className="fixed top-4 left-1/2 z-50 font-inter font-bold -translate-x-1/2 flex flex-col max-w-7xl items-center justify-center px-6 text-white"
      >
        <div className="flex w-full items-center justify-between">

          {/* LOGO → scroll to hero */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/images/digiexperts-logo.webp"
              alt="logo"
              width={200}
              height={200}
              className="w-40 h-20 md:w-56 md:h-28"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="relative cursor-pointer text-lg font-medium transition hover:scale-105"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-tr from-[#2896fe] to-[#601ee4] px-5 py-2 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <IconMenu2 onClick={() => setIsOpen(true)} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed lg:hidden inset-0 z-[999] flex flex-col items-center justify-center bg-[#111111] text-5xl font-bold"
          >
            {/* Background Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-gradient-to-tl from-[#01295b] via-[#0e023d] to-[#3a005f] rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50"
            >
              <IconX className="h-8 w-8 text-white cursor-pointer" />
            </button>

            {/* Menu Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-50 flex flex-col gap-10 text-center text-white"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="hover:text-gray-300"
                >
                  {link.name}
                </button>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white px-6 py-3 text-lg text-black"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
