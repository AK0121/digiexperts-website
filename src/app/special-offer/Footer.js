import { MapPin, Phone, Mail, Globe, Instagram, Facebook, Linkedin, Twitter, Send, ArrowUpRight, Sparkles } from "lucide-react";

export default function FuturisticFooter() {
  const staggeredFadeIn = (delay) => ({
    animation: `fadeInUp 0.8s ease-out ${delay}s both`,
  });

  const contactItems = [
    {
      icon: MapPin,
      label: "Location",
      value: "Vidhyadhar Nagar, Jaipur, Rajasthan",
      subtext: "Serving businesses across India",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 6350617334",
      subtext: "Available 24/7",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "digiexperts121@gmail.com",
      subtext: "Quick response guaranteed",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.digiexperts.solutions",
      subtext: "Explore our portfolio",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", color: "from-pink-500 to-purple-600", handle: "digiexperts_info" , link: "https://www.instagram.com/digiexperts_info"},
    { icon: Facebook, name: "Facebook", color: "from-blue-600 to-blue-800", handle: "DigiExperts - Grow Digitally" , link: "https://www.facebook.com/profile.php?id=61577597884573"},
  ];

  const services = [
    "Landing Page Design",
    "Facebook Ads Management", 
    "Conversion Optimization",
    "Analytics & Reporting",
    "SEO Optimization",
    "Brand Strategy"
  ];

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
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .contact-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .contact-card:hover::before {
          left: 100%;
        }
        
        .contact-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(147, 51, 234, 0.4);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
        }
        
        .social-btn {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(30, 41, 59, 0.3) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .social-btn:hover {
          transform: translateY(-4px) scale(1.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .brand-text {
          background: linear-gradient(135deg, #9333ea, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .service-tag {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          transition: all 0.3s ease;
        }
        
        .service-tag:hover {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
          border-color: rgba(147, 51, 234, 0.4);
          transform: scale(1.05);
        }
        
        .main-footer-bg {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(30, 41, 59, 0.6) 100%);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-input {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .newsletter-input:focus {
          border-color: rgba(147, 51, 234, 0.5);
          background: rgba(255, 255, 255, 0.1);
          outline: none;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #9333ea, #ec4899);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(147, 51, 234, 0.4);
        }
      `}</style>

      <footer id="landinig-footer" className="main-footer-bg py-16 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5"></div>
          <div className="absolute top-10 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">

          {/* Contact Cards Grid */}
          <div style={staggeredFadeIn(0.4)} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="contact-card rounded-2xl p-6 text-center group">
                  <div className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-300 font-medium mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Services Section */}
            <div style={staggeredFadeIn(0.6)}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <span key={index} className="service-tag px-4 py-2 rounded-full text-sm font-medium text-gray-300">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div style={staggeredFadeIn(0.8)}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a href={social.link} target="_blank" key={index} className="cursor-pointer social-btn rounded-xl p-4 text-left group">
                      <div className={`bg-gradient-to-r ${social.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{social.name}</p>
                        <p className="text-gray-400 text-xs">{social.handle}</p>
                      </div>
                      </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={staggeredFadeIn(1.4)} className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DigiExperts</span>. 
              All rights reserved. Crafted with ❤️ in Jaipur
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}