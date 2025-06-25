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
import { motion } from "motion/react";
import ConsultationModal from "./FormModal";

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staggeredFadeIn = (delay) => ({
    animation: `fadeInUp 0.8s ease-out ${delay}s both`,
  });

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
      borderColor: "purple-500/30",
      hoverBorderColor: "purple-400/60",
      buttonColor: "purple-400",
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
      borderColor: "blue-500/30",
      hoverBorderColor: "blue-400/60",
      buttonColor: "blue-400",
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

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .service-card {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(30, 41, 59, 0.6) 100%
          );
          backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(147, 51, 234, 0.3),
            transparent
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.9) 0%,
            rgba(30, 41, 59, 0.8) 100%
          );
        }

        .service-card:hover::before {
          background: linear-gradient(
            45deg,
            rgba(147, 51, 234, 0.5),
            rgba(59, 130, 246, 0.5),
            rgba(147, 51, 234, 0.5)
          );
          animation: rotate-border 3s linear infinite;
        }

        .icon-container {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          animation: float 3s ease-in-out infinite;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(147, 51, 234, 0.3);
          transform: translateX(5px);
        }

        .stats-grid {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(30, 41, 59, 0.3) 100%
          );
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .learn-more-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .learn-more-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .learn-more-btn:hover::before {
          left: 100%;
        }

        .expand-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expand-content.expanded {
          max-height: 1000px;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }
      `}</style>

      <section
        id="services-section"
        className="py-20 px-6 relative overflow-hidden"
      >
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div style={staggeredFadeIn(0.2)} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-6 py-2 rounded-full border border-purple-500/30 mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200">
                Core Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in two powerful services that drive real business
              results through cutting-edge technology and proven strategies
            </p>
          </div>

          <div className="grid gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  style={staggeredFadeIn(0.4 + index * 0.2)}
                  className={`service-card rounded-3xl p-8 transition-all duration-500`}
                >
                  <div className={`${isExpanded ? "lg:flex lg:gap-12" : ""}`}>
                    <div className={`${isExpanded ? "lg:w-1/2" : ""}`}>
                      {/* Icon and Header */}
                      <div className="flex items-start gap-6 mb-8">
                        <div className="icon-container">
                          <div
                            className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
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
                            <div
                              key={featureIndex}
                              className="feature-item rounded-xl p-4 flex items-center gap-3"
                            >
                              <FeatureIcon
                                className={`w-5 h-5 text-${service.buttonColor}`}
                              />
                              <span className="text-gray-300 text-sm font-medium">
                                {feature.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Stats */}
                      <div className="stats-grid rounded-2xl p-6 mb-8">
                        <div className="grid grid-cols-3 gap-6 text-center">
                          {service.stats.map((stat, statIndex) => (
                            <div key={statIndex}>
                              <div
                                className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                              >
                                {stat.number}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="lg:w-1/2 lg:pl-8 lg:border-l lg:border-purple-500/20">
                        <h4 className="text-2xl font-bold mb-6 text-white">
                          Advanced Features
                        </h4>

                        <div className="space-y-4 mb-8">
                          {service.detailedFeatures.map(
                            (feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            )
                          )}
                        </div>

                        <div
                          className={`bg-gradient-to-r ${service.cardGradient} rounded-xl p-6 border border-${service.borderColor}`}
                        >
                          <div className="flex items-start gap-3">
                            <Shield
                              className={`w-6 h-6 text-${service.buttonColor} mt-1 flex-shrink-0`}
                            />
                            <div>
                              <h5
                                className={`font-bold text-${service.buttonColor} mb-3`}
                              >
                                Why Choose This Service?
                              </h5>
                              <p className="text-gray-300">
                                {service.benefits}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-8 flex gap-4 justify-center">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className={`learn-more-btn bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 cursor-pointer hover:shadow-2xl transition-all duration-300`}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                      <motion.div
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 chevron transition-transform duration-300"
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
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={staggeredFadeIn(1.0)} className="text-center mt-20">
            <div className="service-card rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that trust our proven
                strategies to drive growth and maximize ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="learn-more-btn bg-gradient-to-r from-purple-600 to-blue-600 text-white cursor-pointer px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Project Today
                </button>
                <a
                  href="https://wa.me/916350617334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more-btn bg-gradient-to-r from-purple-600 to-blue-600 text-white cursor-pointer px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 text-center"
                >
                  Direct Message
                </a>
              </div>
            </div>
          </div>
          <ConsultationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </section>
    </>
  );
}
