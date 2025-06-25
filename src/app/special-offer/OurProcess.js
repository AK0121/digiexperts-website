import { useState } from "react";
import {
  ChevronDown,
  Target,
  Palette,
  Rocket,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState(null);

  const staggeredFadeIn = (delay) => ({
    animation: `fadeInUp 0.8s ease-out ${delay}s both`,
  });

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

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .service-card {
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.1) 0%,
            rgba(79, 70, 229, 0.1) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.15) 0%,
            rgba(79, 70, 229, 0.15) 100%
          );
          border-color: rgba(147, 51, 234, 0.4);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.3);
        }

        .step-number {
          background: linear-gradient(135deg, #9333ea, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .service-card:hover .step-number {
          animation: pulse 2s infinite;
        }

        .icon-container {
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.2),
            rgba(79, 70, 229, 0.2)
          );
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .icon-container {
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.3),
            rgba(79, 70, 229, 0.3)
          );
          transform: scale(1.1);
        }

        .expand-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expand-content.expanded {
          max-height: 800px;
        }

        .learn-more-btn {
          background: linear-gradient(135deg, #9333ea, #4f46e5);
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          background: linear-gradient(135deg, #7c3aed, #3730a3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }
      `}</style>

      <section className="py-20 px-6 bg-black/20 relative z-0 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div style={staggeredFadeIn(0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent, and results-driven approach to transform your
              business
            </p>
          </div>

          <div className="flex flex-col gap-8 justify-center max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCard === index;

              return (
                <div
                  key={index}
                  style={staggeredFadeIn(0.3 + index * 0.2)}
                  className={`service-card rounded-2xl p-8 group relative transition-all duration-500 w-full justify-center items-center max-w-5xl mx-auto ${
                    isExpanded ? "w-full" : ""
                  }`}
                >
                  <div
                    className={`${
                      isExpanded ? "flex flex-col gap-8" : ""
                    }`}
                  >
                    <div>
                      {/* Step Number */}
                      <div className="text-6xl text-center md:text-7xl font-black step-number mb-6 leading-none text-purple-200">
                        {service.step}
                      </div>

                      {/* Icon */}
                      <div className="icon-container rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 bg-purple-900/20">
                        <IconComponent className="text-center w-8 h-8 text-purple-300" />
                      </div>

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
                      <button
                        onClick={() => toggleExpand(index)}
                        className="learn-more-btn cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 w-full justify-center mb-4 bg-purple-700 hover:bg-purple-600 transition-all"
                      >
                        {isExpanded ? "Show Less" : "Learn More"}
                        <ChevronDown
                          className={`w-5 h-5 chevron ${
                            isExpanded ? "rotated" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="w-full">
                        <div className="border-t border-purple-500/20 pt-6 space-y-6">
                          <h4 className="text-xl font-bold text-purple-200">
                            {service.details.subtitle}
                          </h4>

                          <div className="space-y-3">
                            {service.details.content.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center gap-3"
                              >
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300">{item}</p>
                              </div>
                            ))}
                          </div>

                          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20">
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
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
