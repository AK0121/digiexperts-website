import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative min-h-screen w-full text-white font-outfit overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/footer-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <h1 className="text-center max-w-6xl">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              Build your digital legacy
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-2 lg:mt-4">
              With <span className="uppercase bg-gradient-to-tr from-blue-400 to-purple-500 bg-clip-text text-transparent">Digiexperts</span>
            </span>
          </h1>
        </div>

        {/* Footer Links Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/20 pb-3">
                  Quick Links
                </h3>
                <nav className="flex flex-col space-y-3">
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    <a href="/work">Work</a>
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    <a href="/about">About Us</a>
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    <a href="/blogs">Blogs</a>
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    <a href="/contact">Contact</a>
                  </span>
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/20 pb-3">
                  Services
                </h3>
                <nav className="flex flex-col space-y-3">
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    Website Design/Development
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    Meta Marketing
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    SEO & Google Ads
                  </span>
                  <span className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    Digiexperts Package
                  </span>
                </nav>
              </div>

              {/* Socials */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/20 pb-3">
                  Socials
                </h3>
                <nav className="flex flex-col space-y-3">
                  <Link href="/work" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    Facebook
                  </Link>
                  <Link href="/blogs" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    Instagram
                  </Link>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    LinkedIn
                  </Link>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    WhatsApp
                  </Link>
                </nav>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-8 text-center md:text-left">
              <p className="text-sm md:text-base text-center text-white/80">
                Copyright © 2025 Digiexperts. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;