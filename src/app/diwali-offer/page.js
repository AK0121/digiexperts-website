"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Palette, TrendingUp, Clock, Star } from "lucide-react";
import Portfolio from "../diwali-offer/Portfolio";
import Packages from "../diwali-offer/Packages";
import LeadsForm from "../diwali-offer/LeadsForm";
import { useLeadForm } from "../../../hooks/useLeadsForm";
import Image from "next/image";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="bg-gradient-to-br from-purple-900/50 to-orange-900/50 backdrop-blur-sm rounded-lg p-4 min-w-[70px] border border-orange-400/30"
        >
          <div className="text-3xl font-bold text-orange-300">{value}</div>
          <div className="text-xs text-orange-200/70 uppercase">{unit}</div>
        </motion.div>
      ))}
    </div>
  );
};

const FloatingSparkle = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [-20, -80],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut",
    }}
    className="absolute"
    style={{ left: `${Math.random() * 100}%`, top: "100%" }}
  >
    <Sparkles className="w-4 h-4 text-orange-400" />
  </motion.div>
);

const TestimonialCard = ({ name, company, text, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-purple-950/60 to-blue-950/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-400 text-sm">{company}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Firework = ({ delay = 0 }) => {
  const colors = [
    "text-orange-400",
    "text-pink-400",
    "text-yellow-400",
    "text-purple-400",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 2],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: delay,
        repeatDelay: Math.random() * 3 + 2,
      }}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60}%`,
      }}
    >
      <div className="relative">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0, height: 2 }}
            animate={{
              width: [0, 30],
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.8,
              delay: delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 3 + 2,
            }}
            className={`absolute ${color} origin-left`}
            style={{
              transform: `rotate(${i * 45}deg)`,
              left: "50%",
              top: "50%",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const StringLights = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="absolute top-0">
        <motion.path
          d="M 0,30 Q 100,50 200,30 T 400,30 T 600,30 T 800,30 T 1000,30 T 1200,30 T 1400,30 T 1600,30 T 1800,30 T 2000,30"
          stroke="rgba(251, 146, 60, 0.3)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${i * 5 + 2}%`,
            top: `${15 + Math.sin(i * 0.5) * 10}px`,
            background: ["#f97316", "#ec4899", "#fbbf24", "#a855f7"][i % 4],
            boxShadow: `0 0 10px ${
              ["#f97316", "#ec4899", "#fbbf24", "#a855f7"][i % 4]
            }`,
          }}
        />
      ))}
    </div>
  );
};

export default function DiwaliLanding() {
  const targetDate = new Date("2025-10-31T23:59:59").getTime();
  const packagesRef = useRef(null);
  const { isOpen, openLeadForm, closeLeadForm } = useLeadForm();

  const scrollToPackages = () => {
    packagesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Forex Funders",
      text: "DigiExperts transformed our online presence. Our leads increased by 3x within the first month!",
    },
    {
      name: "Vijay",
      company: "Vijay Restaurant",
      text: "Professional, creative, and delivered on time. Our new e-commerce site is stunning and easy to manage.",
    },
    {
      name: "Amit Gupta",
      company: "FitZone Gym",
      text: "Best investment we made for our business. The website design is modern and converts visitors into members.",
    },
    {
      name: "Shubham",
      company: "Neurogen Agents",
      text: "I'm delighted with the professional work done by DigiExperts. Their team expertly built our website, which has greatly improved our AI agent's online presence.",
    },
    {
      name: "Nishant Kumar",
      company: "Kashvi Jewellers",
      text: "Thank you DigiExperts for making our business shine!",
    },
    {
      name: "Muhammad Sohel",
      company: "Dental Clinic",
      text: "We are delighted with the expert work done by DigiExperts for our dental clinic website. The website has greatly improved our online presence and provided a professional image of our clinic. We wholeheartedly recommend DigiExperts for all your digital needs.",
    },
  ];

  const whyUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Responsive",
      description: "Lightning-fast loading on all devices",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom-Designed",
      description: "Unique designs tailored to your brand",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Built to convert visitors into customers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-purple-900 text-white overflow-hidden">
      <LeadsForm isOpen={isOpen} onClose={closeLeadForm} />

      <div className="fixed bottom-2 right-2 z-50 cursor-pointer">
        <a
          href="https://wa.me/916350617334"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={60} height={60} />
        </a>
      </div>

      {/* Top Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 py-3 px-4 overflow-hidden"
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ backgroundSize: "200% 100%" }}
        />
        <div className="relative z-10 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="font-bold pr-1 text-sm md:text-base">
            LIMITED TIME DIWALI SPECIAL!
          </span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="font-bold text-yellow-300 text-sm md:text-base"
          >
            OFFER ENDS OCT 31
          </motion.span>
          <span className="text-sm pl-1 md:text-base">
            - Get Up To 50% OFF 🔥
          </span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* String Lights */}
        <StringLights />

        {/* Fireworks */}
        {[...Array(6)].map((_, i) => (
          <Firework key={i} delay={i * 0.8} />
        ))}

        {/* Floating Sparkles */}
        {[...Array(12)].map((_, i) => (
          <FloatingSparkle key={i} delay={i * 0.5} />
        ))}

        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block text-6xl mb-4"
            >
              🪔
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Transform Your Business This Diwali Season
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Launch a stunning, high-converting website that attracts customers
              and grows your brand — designed exclusively for ambitious Indian
              businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openLeadForm}
                className="px-8 py-4 cursor-pointer bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                Get Your Website Now
              </motion.button>
              <motion.button
                onClick={scrollToPackages}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View All Packages
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Portfolio/Works Section */}
      <Portfolio />

      {/* Packages Section */}
      <Packages ref={packagesRef} />

      {/* Why DigiExperts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
          >
            Why Top Brands Choose DigiExperts
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 text-center group hover:border-orange-400/60 transition-all duration-300"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
          >
            Real Results From Real Clients
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + Footer Combined */}
      <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-black/50">
        {/* Countdown Section */}
        <div className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="w-16 h-16 mx-auto mb-6 text-orange-400" />
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Diwali Offer Ends Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don&apos;t miss out on this limited-time opportunity
              </p>
              <CountdownTimer targetDate={targetDate} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openLeadForm}
                className="mt-12 px-12 py-5 cursor-pointer bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                DigiExperts
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Premium Web Design & Digital Marketing Solutions
              </p>
              <p className="text-gray-500 mb-4">
                📧 digiexperts121@gmail.com | 📱 +91 6350617334
              </p>
              <p className="text-gray-500 mb-6">Made with ❤️ in India</p>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                🪔
              </motion.div>
            </motion.div>
          </div>
        </footer>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </div>
  );
}
