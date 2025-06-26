import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Target,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      step: "01",
      title: "Strategy & Planning",
      icon: Target,
      description:
        "We analyze your business, audience, and goals to create a winning strategy.",
      details: {
        subtitle: "Deep Dive Analysis & Strategic Foundation",
        content: [
          "Comprehensive business audit and competitor analysis",
          "Target audience research and persona development",
          "Market positioning and value proposition refinement",
          "Goal setting with clear KPIs and success metrics",
          "Custom funnel architecture and conversion path mapping",
          "Budget allocation and timeline development",
        ],
        benefits:
          "Get crystal-clear direction with data-backed strategies that align with your business objectives and market opportunities.",
      },
    },
    {
      step: "02",
      title: "Design & Development",
      icon: Palette,
      description:
        "We build and optimize your landing pages and set up targeted ad campaigns.",
      details: {
        subtitle: "High-Converting Assets & Campaign Setup",
        content: [
          "Mobile-first responsive landing page design",
          "A/B tested layouts with proven conversion elements",
          "Advanced tracking and analytics implementation",
          "Multi-platform ad campaign creation (Google, Facebook, LinkedIn)",
          "Compelling ad copy and creative asset development",
          "Lead capture systems and CRM integration",
        ],
        benefits:
          "Transform visitors into customers with professionally designed pages and precisely targeted campaigns that drive results.",
      },
    },
    {
      step: "03",
      title: "Launch & Optimize",
      icon: Rocket,
      description:
        "We launch your campaigns and continuously optimize for maximum results.",
      details: {
        subtitle: "Performance Monitoring & Continuous Improvement",
        content: [
          "Strategic campaign launch with real-time monitoring",
          "Daily performance analysis and bid optimization",
          "A/B testing of ad creatives, copy, and landing pages",
          "Conversion rate optimization through data insights",
          "Weekly reporting with actionable recommendations",
          "Scaling successful campaigns for maximum ROI",
        ],
        benefits:
          "Watch your ROI grow with our data-driven optimization approach that consistently improves performance over time.",
      },
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const expandVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        opacity: { delay: 0.1 },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="py-20 px-6 bg-black/20 relative z-[1] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent, and results-driven approach to transform your
            business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 justify-center max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`
                  bg-gradient-to-br from-purple-500/30 to-indigo-500/30 
                  backdrop-blur-3xl border border-purple-500/20 
                  rounded-2xl p-8 group relative transition-all duration-500 
                  w-full max-w-5xl mx-auto
                  hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-indigo-500/30 
                  hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20
                `}
              >
                <div className={isExpanded ? "flex flex-col gap-8" : ""}>
                  <div>
                    {/* Step Number */}
                    <motion.div 
                      className="text-6xl text-center md:text-7xl font-black mb-6 leading-none bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                      className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6"
                      whileHover={{ 
                        scale: 1.1,
                        background: "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-purple-300" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl text-center font-bold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <div>
                    <motion.button
                      onClick={() => toggleExpand(index)}
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 8px 25px rgba(147, 51, 234, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blur bg-gray-400/20 backdrop-blur-lg text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-4 cursor-pointer w-full sm:w-80 justify-center mb-4 transition-all duration-300 mx-auto"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="w-full overflow-hidden"
                      >
                        <div className="border-t border-purple-500/20 pt-6 space-y-6">
                          <motion.h4 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold text-purple-200"
                          >
                            {service.details.subtitle}
                          </motion.h4>

                          <div className="space-y-3">
                            {service.details.content.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                custom={itemIndex}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20"
                          >
                            <div className="flex items-start gap-3">
                              <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-yellow-200 mb-2">
                                  Key Benefit
                                </h5>
                                <p className="text-gray-300 text-sm">
                                  {service.details.benefits}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}