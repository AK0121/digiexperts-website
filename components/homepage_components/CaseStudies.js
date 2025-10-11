"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Nextrade",
    slug: "nextrade",
    subtitle: "B2B Trading Platform",
    desc: "Learn how DigiExperts designed and developed a scalable B2B trading platform for Nextrade, boosting traffic, user engagement, and client acquisition.",
    img: "/images/nextrade.png",
    color: "#6366f1",
    stats: "70% More Leads"
  },
  {
    title: "Vijay Restaurant",
    slug: "vijay",
    subtitle: "Restaurant branding",
    desc: "See how DigiExperts created a modern, SEO-friendly restaurant website for Vijay Restaurant, increasing local visibility and online orders.",
    img: "/images/vr.png",
    color: "#5fb98b",
    stats: "Brand Awareness"
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="min-h-screen py-10 sm:py-10 bg-[#000617] font-outfit relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#9ccfff]/10 to-[#6366f1]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-[#10b981]/10 to-[#9ccfff]/10 rounded-full blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(156,207,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(156,207,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Enhanced Heading Section */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center mb-32 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glitch Effect Text */}
            <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-white  tracking-tight relative z-10">
              Case Studies
            </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#9ccfff] to-transparent mx-auto mt-8 max-w-md"
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl lg:text-3xl font-inter text-gray-300 mt-8 relative"
        >
          Digital Success Stories with{" "}
          <motion.span 
            className="text-[#9ccfff] relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            DigiExperts
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-[#9ccfff]"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.h2>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg lg:text-xl font-inter w-10/12 md:w-6/12 mx-auto text-gray-300 mt-8 relative"
            >
              Explore how DigiExperts delivers real results in Web Design, Development, and Digital Marketing
            </motion.p>
      </motion.div>

      {/* Case Study Cards with Advanced Interactions */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={i} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
    
    setMousePosition({
      x: (e.clientX - centerX) / rect.width,
      y: (e.clientY - centerY) / rect.height,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      viewport={{ once: true }}
      style={{ 
        rotateX, 
        rotateY,
        transformPerspective: 1000,
      }}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Dynamic Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, ${study.color}, transparent 70%)`,
        }}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent, ${study.color}, transparent)`,
          padding: "2px",
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full rounded-3xl bg-[#000617]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 p-8">
        {/* Stats Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-[#9ccfff] mb-6"
        >
          <div className="w-2 h-2 bg-[#9ccfff] rounded-full mr-2 animate-pulse" />
          {study.stats}
        </motion.div>

        {/* Image Container with Parallax */}
        <motion.div 
          className="relative h-80 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 10,
            }}
          >
            <Image
              src={study.img}
              alt={study.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 80vw"
              className="object-contain transition-all duration-700 group-hover:scale-110"
              style={{
                filter: `hue-rotate(${mousePosition.x * 10}deg) saturate(${1 + mousePosition.y * 0.3})`,
              }}
            />
          </motion.div>
          
          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Particles */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#9ccfff] rounded-full"
                  initial={{
                    x: Math.random() * 300,
                    y: Math.random() * 300,
                    opacity: 0,
                  }}
                  animate={{
                    y: -20,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Text Content with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h3 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl font-bold text-white mb-2 group-hover:text-[#9ccfff] transition-colors duration-300"
          >
            {study.title}
          </motion.h3>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: study.color }}
          >
            {study.subtitle}
          </motion.p>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-300 font-inter leading-relaxed mb-8"
          >
            {study.desc}
          </motion.p>

          {/* Enhanced CTA Button */}
          <Link href={`/case-studies/${study.slug}`}>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 20px 40px ${study.color}40`,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group/button cursor-pointer px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 border-2 border-white/20 hover:border-white/40"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: study.color }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.span 
              className="relative z-10 text-white group-hover/button:text-[#9ccfff] transition-colors duration-300 flex items-center gap-2"
            >
              View Case Study
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.span>
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;