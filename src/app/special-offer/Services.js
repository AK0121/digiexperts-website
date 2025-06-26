"use client";

import { useState } from "react";
import {
  Zap,
  Target,
  ArrowRight,
  Globe,
  Sparkles,
  TrendingUp,
  Eye,
  Users,
  BarChart3,
  Shield,
  Rocket,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "./FormModal";

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: "landing-pages",
      icon: Zap,
      title: "High-Converting Landing Pages",
      subtitle: "Transform Traffic Into Revenue",
      description:
        "Custom-designed landing pages that turn traffic into leads and sales. Mobile-optimized, fast-loading, and conversion-focused.",
      gradient: "from-purple-600 via-pink-600 to-red-500",
      cardGradient: "from-purple-900/30 via-pink-900/20 to-red-900/30",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-400/60",
      buttonColor: "text-purple-400",
      features: [
        { icon: Globe, text: "Mobile-first responsive design" },
        { icon: TrendingUp, text: "A/B tested conversion elements" },
        { icon: BarChart3, text: "Analytics and tracking setup" },
        { icon: Users, text: "Lead capture optimization" },
      ],
      detailedFeatures: [
        "Lightning-fast loading speeds (under 3 seconds)",
        "Psychology-driven design elements",
        "Advanced form optimization and validation",
        "Cross-browser compatibility testing",
        "SEO-optimized structure and content",
        "Integration with major CRM platforms",
        "Heatmap and user behavior analysis",
        "Conversion rate optimization consulting",
      ],
      benefits:
        "Increase your conversion rates by up to 300% with scientifically-designed landing pages that guide visitors toward taking action.",
      stats: [
        { number: "300%", label: "Avg. Conversion Increase" },
        { number: "2.5s", label: "Load Time" },
        { number: "98%", label: "Mobile Compatibility" },
      ],
    },
    {
      id: "facebook-ads",
      icon: Target,
      title: "Facebook Ads Management",
      subtitle: "Precision-Targeted Growth Engine",
      description:
        "Profitable Facebook ad campaigns that reach your ideal customers and drive qualified leads to your business.",
      gradient: "from-blue-600 via-cyan-500 to-teal-400",
      cardGradient: "from-blue-900/30 via-cyan-900/20 to-teal-900/30",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "hover:border-blue-400/60",
      buttonColor: "text-blue-400",
      features: [
        { icon: Eye, text: "Targeted audience research" },
        { icon: Sparkles, text: "Creative ad design & copy" },
        { icon: TrendingUp, text: "Campaign optimization" },
        { icon: BarChart3, text: "Detailed performance reports" },
      ],
      detailedFeatures: [
        "AI-powered audience targeting and lookalike modeling",
        "Creative testing with 50+ ad variations",
        "Real-time bid optimization and budget allocation",
        "Multi-platform campaign management (FB, IG, Messenger)",
        "Advanced retargeting and funnel automation",
        "Competitor analysis and market intelligence",
        "Custom conversion tracking and attribution",
        "Weekly strategy calls and performance reviews",
      ],
      benefits:
        "Scale your business with data-driven ad campaigns that consistently deliver qualified leads at the lowest possible cost.",
      stats: [
        { number: "5x", label: "ROAS Average" },
        { number: "68%", label: "Cost Reduction" },
        { number: "24/7", label: "Campaign Monitoring" },
      ],
    },
  ];

  const toggleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.6)",
        "0 0 20px rgba(147, 51, 234, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const borderRotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: { x: "100%" },
  };

  return (
    <section
      id="services-section"
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5"></div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(147,51,234,0.05)_0%,_transparent_70%)] rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-6 py-2 rounded-full border border-purple-500/30 mb-6 backdrop-blur-sm"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">
              Core Services
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in two powerful services that drive real business
            results through cutting-edge technology and proven strategies
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <motion.div
                key={service.id}
  
                className={`relative rounded-3xl p-8 transition-all duration-500 overflow-hidden
                  bg-gradient-to-br from-[rgba(15,23,42,0.8)] to-[rgba(30,41,59,0.6)]
                  backdrop-blur-xl border-2 ${service.borderColor} ${service.hoverBorderColor}
                  hover:bg-gradient-to-br hover:from-[rgba(15,23,42,0.9)] hover:to-[rgba(30,41,59,0.8)]
                  group`}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `conic-gradient(from 0deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))`,
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor",
                  }}
                  variants={borderRotateVariants}
                  animate="animate"
                />

                <div className={`${isExpanded ? "lg:flex lg:gap-12" : ""}`}>
                  <div className={`${isExpanded ? "lg:w-1/2" : ""}`}>
                    {/* Icon and Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="group-hover:animate-none"
                      >
                        <div
                          className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl`}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2 text-white">
                          {service.title}
                        </h3>
                        <p
                          className={`text-lg font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        >
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div
                            key={featureIndex}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-3 transition-all duration-300"
                          >
                            <FeatureIcon
                              className={`w-5 h-5 ${service.buttonColor}`}
                            />
                            <span className="text-gray-300 text-sm font-medium">
                              {feature.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-black/30 to-slate-800/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 mb-8">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        {service.stats.map((stat, statIndex) => (
                          <motion.div
                            key={statIndex}
                            className="cursor-default"
                          >
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                            >
                              {stat.number}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="lg:w-1/2 lg:pl-8 lg:border-l lg:border-purple-500/20 overflow-hidden"
                      >
                        <h4 className="text-2xl font-bold mb-6 text-white">
                          Advanced Features
                        </h4>

                        <div className="space-y-4 mb-8">
                          {service.detailedFeatures.map(
                            (feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-gray-300">{feature}</span>
                              </motion.div>
                            )
                          )}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className={`bg-gradient-to-r ${service.cardGradient} rounded-xl p-6 ${service.borderColor} border`}
                        >
                          <div className="flex items-start gap-3">
                            <Shield
                              className={`w-6 h-6 ${service.buttonColor} mt-1 flex-shrink-0`}
                            />
                            <div>
                              <h5
                                className={`font-bold ${service.buttonColor} mb-3`}
                              >
                                Why Choose This Service?
                              </h5>
                              <p className="text-gray-300">
                                {service.benefits}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Learn More Button */}
                <div className="mt-8 flex gap-4 justify-center">
                  <motion.button
                    onClick={() => toggleExpand(service.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative overflow-hidden bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 cursor-pointer hover:shadow-2xl transition-all duration-300 group`}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      variants={shimmerVariants}
                      initial="initial"
                      whileHover="animate"
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">
                      {isExpanded ? "Show Less" : "Learn More"}
                    </span>
                    <motion.div
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 relative z-10"
                    >
                      {isExpanded ? (
                        <>
                          <ArrowUp className="lg:hidden block" />
                          <ArrowLeft className="hidden lg:block" />
                        </>
                      ) : (
                        <>
                          <ArrowRight className="lg:block hidden" />
                          <ArrowDown className="block lg:hidden" />
                        </>
                      )}
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ y: -8 }}
            className="relative rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden
              bg-gradient-to-br from-[rgba(15,23,42,0.8)] to-[rgba(30,41,59,0.6)]
              backdrop-blur-xl border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500"
          >
            <motion.div
              variants={glowVariants}
              animate="animate"
              className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust our proven
              strategies to drive growth and maximize ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white cursor-pointer px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  variants={shimmerVariants}
                  initial="initial"
                  whileHover="animate"
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Start Your Project Today</span>
              </motion.button>
              <motion.a
                href="https://wa.me/916350617334"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white cursor-pointer px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  variants={shimmerVariants}
                  initial="initial"
                  whileHover="animate"
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Direct Message</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}