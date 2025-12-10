"use client"

import { useState, useRef, useEffect } from "react";
import  Lenis  from "lenis";
import {motion, scale} from "framer-motion";

export default function WhyDigiexperts() {
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const containerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

 let lenis;
 useEffect(() => {
  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  checkScreenSize();

    lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.sin((t * Math.PI) / 2),
      smoothWheel: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const bubbles = [
    {
      id: 1,
      title: "Full-Stack Digital Craftsmanship",
      description: "We're not just coders — we're digital craftsmen. From pixel-perfect UI/UX design to rock-solid backend architecture and scalable cloud infrastructure, DigiExperts builds future-ready websites and apps that perform, convert, and impress.",
      size: "medium",
      position: "top-[15%] left-[15%]"
    },
    {
      id: 2,
      title: "Growth-Engineered Strategy",
      description: "We don't just launch websites — we engineer growth engines. Our SEO-optimized, high-performance sites are built to attract, engage, and convert your ideal customers through data-driven design and marketing automation.",
      size: "medium",
      position: "top-[15%] right-[15%]"
    },
    {
      id: 3,
      title: "Long-Term Partnerships, Not Projects",
      description: "Most agencies chase clients. We build relationships. With an average partnership span of 3+ years, web experts continuously evolve your digital ecosystem — from websites to marketing — to keep your brand compounding online.",
      size: "large",
      position: "top-[45%] left-[38%]"
    },
    {
      id: 4,
      title: "Transparent, Agile & Human",
      description: "No mystery. No jargon. Just clarity. Track your project in real time, get weekly progress updates, and collaborate directly with your dedicated DigiExperts team — your digital transformation studio that actually communicates.",
      size: "medium",
      position: "top-[75%] right-[8%]"
    },
    {
      id: 5,
      title: "ROI That Speaks Numbers",
      description: "Every design choice, every line of code, every ad campaign — optimized for measurable ROI. Because good design looks nice, but great design pays for itself.",
      size: "medium",
      position: "top-[75%] left-[12%]"
    }
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'w-[330px] h-[330px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]';
      case 'medium':
        return 'w-[330px] h-[330px] sm:w-[290px] sm:h-[290px] md:w-[280px] md:h-[280px] lg:w-[330px] lg:h-[330px]';
      case 'small':
        return 'w-[330px] h-[330px] sm:w-[260px] sm:h-[260px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px]';
      default:
        return 'w-[330px] h-[330px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px]';
    }
  };

  return (
    <section id="highlights" ref={containerRef} className="min-h-screen w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#000617] via-[#060a38] to-black/70 relative overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center text-white relative z-10 px-4 sm:px-6">
        <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
         className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center font-outfit font-extralight">
          Why Businesses Partner With{" "}
          <span className="text-3xl uppercase sm:text-4xl md:text-6xl lg:text-9xl font-medium bg-gradient-to-r from-[#4084fa] to-[#5e36e7] bg-clip-text text-transparent">
            DigiExperts
          </span>
        </motion.h1>
        <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
         className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center text-white font-outfit font-extralight leading-tight">
          And Stay For Years
        </motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
         className="text-white text-center font-inter text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-2xl mx-auto">
          Most agencies deliver projects. We deliver partnerships. At
          DigiExperts, we mix web design, web development, and digital marketing
          into a growth formula that keeps scaling — year after year
        </motion.p>
      </div>

      {/* Bubbles Container */}
      {isLargeScreen ? (
        // Desktop Layout - Original scatter layout
        <div className="relative w-full h-[1110px]">
          {bubbles.map((bubble) => (
            <motion.div
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.3 }}
              viewport={{ once: true, amount: 0.2 }}
              key={bubble.id}
              className={`absolute ${bubble.position} ${getSizeClasses(bubble.size)} 
             transition-all duration-500 ease-out
                ${hoveredBubble === bubble.id ? ' z-30' : 'z-10'}`}
              onMouseEnter={() => setHoveredBubble(bubble.id)}
              onMouseLeave={() => setHoveredBubble(null)}
            >
              {/* Bubble Glass Effect */}
              <div className="relative w-full h-full rounded-full group">
                {/* Outer Glow */}
                <div className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500
                  ${hoveredBubble === bubble.id ? 'opacity-70' : 'opacity-40'}
                  bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent`} 
                />
                
                {/* Main Bubble */}
                <div className={`absolute inset-0 rounded-full border transition-all duration-500
                  ${hoveredBubble === bubble.id 
                    ? 'border-blue-400/60 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent' 
                    : 'border-blue-400/30 bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-transparent'}
                  backdrop-blur-md shadow-2xl`}
                >
                  {/* Inner Shine */}
                  <div className="absolute top-[15%] left-[20%] w-[40%] h-[40%] rounded-full 
                    bg-gradient-to-br from-white/10 to-transparent blur-xl" 
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h3 className={`font-outfit font-semibold text-white text-lg sm:text-2xl mb-3 transition-all duration-300`}>
                      {bubble.title}
                    </h3>
                    <p className={`font-inter text-blue-100/90 text-xs sm:text-sm leading-relaxed transition-all duration-300
                      ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-80'}`}>
                      {bubble.description}
                    </p>
                  </div>

                  {/* Sparkle Effects */}
                  <div className={`absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-purple-400 
                    transition-all duration-500 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-60'}`} 
                  />
                  <div className={`absolute bottom-[25%] left-[18%] w-1.5 h-1.5 rounded-full bg-blue-300
                    transition-all duration-500 delay-75 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-50'}`} 
                  />
                  <div className={`absolute top-[60%] right-[25%] w-1 h-1 rounded-full bg-purple-300
                    transition-all duration-500 delay-150 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-40'}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        </div>
      ) : (
        // Mobile/Tablet Layout - Vertical scrolling layout
        <div className="flex flex-col gap-20 sm:gap-24 items-center mt-12 pb-12">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              whileTap={{ scale: 1.3 }}
              className={`${getSizeClasses(bubble.size)} 
             transition-all duration-500 ease-out
                ${hoveredBubble === bubble.id ? 'z-30' : 'z-10'}`}
              onMouseEnter={() => setHoveredBubble(bubble.id)}
              onMouseLeave={() => setHoveredBubble(null)}
            >
              {/* Bubble Glass Effect */}
              <div className="relative w-full h-full rounded-full group">
                {/* Outer Glow */}
                <div className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500
                  ${hoveredBubble === bubble.id ? 'opacity-70' : 'opacity-40'}
                  bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent`} 
                />
                
                {/* Main Bubble */}
                <div className={`absolute inset-0 rounded-full border transition-all duration-500
                  ${hoveredBubble === bubble.id 
                    ? 'border-blue-400/60 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent' 
                    : 'border-blue-400/30 bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-transparent'}
                  backdrop-blur-md shadow-2xl`}
                >
                  {/* Inner Shine */}
                  <div className="absolute top-[15%] left-[20%] w-[40%] h-[40%] rounded-full 
                    bg-gradient-to-br from-white/10 to-transparent blur-xl" 
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5 text-center">
                    <h3 className={`font-outfit font-semibold text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-3 transition-all duration-300 leading-tight`}>
                      {bubble.title}
                    </h3>
                    <p className={`font-inter text-blue-100/90 text-xs sm:text-xs md:text-sm leading-relaxed transition-all duration-300
                      ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-80'}`}>
                      {bubble.description}
                    </p>
                  </div>

                  {/* Sparkle Effects */}
                  <div className={`absolute top-[20%] right-[15%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 
                    transition-all duration-500 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-60'}`} 
                  />
                  <div className={`absolute bottom-[25%] left-[18%] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-300
                    transition-all duration-500 delay-75 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-50'}`} 
                  />
                  <div className={`absolute top-[60%] right-[25%] w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-purple-300
                    transition-all duration-500 delay-150 ${hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-40'}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        </div>
      )}
    </section>
  );
}