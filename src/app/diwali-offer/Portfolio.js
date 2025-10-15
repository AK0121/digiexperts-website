"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  

  const data = [
    {
      title: "AKcelerate",
      link: "https://akcelerate.digital",
      thumbnail: "/images/akcelerate-mockup.png",
      category: "SaaS",
    },
    {
      title: "Forex Funders",
      link: "https://forexfunders.com",
      thumbnail: "/images/ff-mockup.png",
      category: "FinTech",
    },
    {
      title: "Neurogen Agents",
      thumbnail: "/images/neurogen-mockup.png",
      category: "AI",
    },
    {
      title: "DigiExperts",
      link: "https://digiexperts.solutions",
      thumbnail: "/images/digiexperts-mockup.png",
      category: "Agency",
    },
    {
      title: "Vijay Restaurant",
      thumbnail: "/images/vr-mockup.png",
      link: "https://www.vijayrestaurant.food",
      category: "Food & Beverage",
    },
  ];

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 px-4 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-black to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-semibold text-orange-400 mb-4 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/30"
          >
            PORTFOLIO
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-lg text-gray-400">
            Hover over any project to preview
          </p>
        </motion.div>

        {/* Portfolio List */}
        <div className="relative">
          {/* Vertical divider lines */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0" />

          {/* Items */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-0"
          >
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group" // Added group class
              >
                {/* Divider line between items */}
                <motion.div
                  animate={{
                    background:
                      hoveredIndex === idx
                        ? "linear-gradient(to right, rgb(229, 231, 235), rgb(249, 115, 22), rgb(229, 231, 235))"
                        : "linear-gradient(to right, rgb(31, 41, 55), rgb(55, 65, 81), rgb(31, 41, 55))",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-px"
                />

                {/* Item Container */}
                <div className="px-6 py-12 flex items-center justify-between cursor-pointer relative overflow-hidden">
                  {/* Background glow on hover */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-transparent pointer-events-none"
                  />

                  {/* Left dot indicator */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 w-2 h-2 bg-orange-400 rounded-full"
                  />

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.h3
                        animate={{
                          letterSpacing: hoveredIndex === idx ? "2px" : "0px",
                          color:
                            hoveredIndex === idx
                              ? "transparent"
                              : "transparent",
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl uppercase md:text-6xl lg:text-7xl font-black bg-gradient-to-r bg-clip-text"
                        style={{
                          backgroundImage:
                            hoveredIndex === idx
                              ? "linear-gradient(to right, rgb(253, 186, 116), rgb(244, 114, 182), rgb(168, 85, 247))"
                              : "linear-gradient(to right, rgb(255, 255, 255), rgb(229, 231, 235), rgb(156, 163, 175))",
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Subtitle and link */}
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === idx ? 1 : 0,
                          y: hoveredIndex === idx ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 flex items-center gap-3"
                      >
                        <span className="text-sm font-semibold text-orange-400 uppercase tracking-widest">
                          {item.category}
                        </span>
                        {item.link && (
                          <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-orange-400 transition-colors"
                          >
                            Visit <ExternalLink className="w-3 h-3" />
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Right dot indicator */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 w-2 h-2 bg-orange-400 rounded-full"
                  />
                </div>

                {/* Individual Preview for each item - positioned relative to the item */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                    scale: hoveredIndex === idx ? 1 : 0.8,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute left-2/3 top-1/2 pointer-events-none z-50 w-[22rem] h-48 shadow-2xl overflow-hidden bg-black"
                  style={{
                    transform: 'translate(-50%, -100%)', // Center above the text
                  }}
                >
                  {/* Image Preview */}
                  <div className="w-full h-full relative bg-gray-900">
                    {item.thumbnail ? (
                      <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                      >
                        
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-400 mb-2">
                            {item.category}
                          </p>
                          <p className="text-lg font-bold text-white">{item.title}</p>
                        </div>
                      </div>
                    )}

                    {/* Shine effect */}
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  </div>

                  {/* Border glow */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-2xl shadow-lg shadow-orange-500/50 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom divider line */}
          <div className="h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;