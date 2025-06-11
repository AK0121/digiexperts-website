"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="logo-container h-28 w-28 bg-contain">
              <Image
                alt="Digiexperts-logo"
                className="object-contain"
                height={500}
                width={500}
                src="/images/digiexperts-logo.png"
              ></Image>
            </Link>
          </div>
          <nav className="hidden sm:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link> 
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center bg-blue-600 px-5 py-3 rounded-full text-white"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="font-medium">Menu</span>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <nav className="nav-menu fixed top-0 left-0 w-full h-screen z-50">
            {/* Layer 1: Green BG screen */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: menuOpen ? "0%" : "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full bg-[#000000f6] z-10"
            />

            {/* Layer 2: Menu links */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: menuOpen ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 text-white flex flex-col justify-center items-center gap-10 text-6xl font-bold"
            >
               <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute z-50 top-5 right-5 flex items-center bg-white px-5 py-3 rounded-full text-black"
            >
              <svg
                className="h-8 w-8 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="text-xl">Close</span>
            </button>
              <li className="border-b-2 border-gray-100">
                <Link onClick={() => setMenuOpen(!menuOpen)} href="/">Home</Link>
              </li>
              <li className="border-b-2 border-gray-100">
                <Link onClick={() => setMenuOpen(!menuOpen)} href="/services">Services</Link>
              </li>
              <li className="border-b-2 border-gray-100">
                <Link onClick={() => setMenuOpen(!menuOpen)} href="/about">About</Link>
              </li>
              <li className="border-b-2 border-gray-100">
                <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact">Contact</Link>
              </li>
            </motion.ul>
          </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
