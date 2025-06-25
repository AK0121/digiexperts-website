"use client";
import { useState, useEffect } from "react";
import { HeroParallax } from "../../../components/HeroParallax.js";
import  OurProcess  from "@/app/special-offer/OurProcess.js"
import  Services  from "@/app/special-offer/Services.js"
import Footer from "../special-offer/Footer.js";
import { Phone } from "lucide-react";

const products = [
  {
    title: "Forex Funders",
    link: "https://forexfunders.com",
    thumbnail:
    "/images/ff-mockup.png",
  },
  {
    title: "AKcelerate",
    link: "https://akcelerate.digital",
    thumbnail:
    "/images/akcelerate-mockup.png",
  },
  {
    title: "Techsy",
    thumbnail:
    "/images/fake-mockup.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  
  {
    title: "InvestWave",
    thumbnail:
      "/images/fake-mockup-2.png",
  },
  {
    title: "DigiExperts",
    link: "https://digiexperts.solutions",
    thumbnail:
      "/images/digiexperts-mockup.png",
  },
  {
    title: "Vijay Restaurant",
    thumbnail: "/images/vr-mockup.png",
  },

];

const DigiExpertsLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("landinig-footer");
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  const fadeInUp = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.8s ease-out",
  };

  const staggeredFadeIn = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease-out ${delay}s`,
  });

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "Upto 5x", label: "Average ROI" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7); // 7 days from now

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Offer Expired");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center py-2 text-sm sm:text-base font-semibold">
        🚀 Free Consultation Offer – Only 7 Days Left! &nbsp;
        <span className="font-bold tracking-wider">{timeLeft}</span>
      </div>

      {/* Nav */}
      <nav className="container w-10/12 mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          DigiExperts
        </div>
        <button
          onClick={handleScroll} 
          className="bg-gradient-to-r from-purple-600 to-pink-600 flex flex-row items-center  justify-center gap-5 px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform cursor-pointer hover:scale-105"
        >
          <span className="inline-block">
          Contact Us
          </span>
          <span className="animate-pulse">
            <Phone size={20} className="inline-block animate-bounce" />
          </span>
        </button>
      </nav>
    </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-black/75 to-black">
      <HeroParallax products={products} />
        <div className="container mx-auto text-center pt-32">
          <div style={fadeInUp}>
           
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                style={staggeredFadeIn(0.1 * index)}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      <OurProcess />

      {/* Testimonials */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DigiExpertsLanding;