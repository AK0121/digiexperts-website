"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal.js";
import Link from "next/link.js";

// Move servicesData here or import from a separate data file
export const servicesData = {
  web: {
    id: 'web',
    title: 'Web Development',
    icon: '🌐',
    color: 'blue',
    shortDesc: 'Modern, responsive websites that convert visitors into customers',
    features: [
      'Mobile-First Design',
      'Lightning Fast Loading',
      'SEO Optimized'
    ],
    fullContent: {
      description: 'Transform your digital presence with cutting-edge web development solutions tailored for Jaipur businesses.',
      keyPoints: [
        'Custom responsive websites that look stunning on all devices',
        'Advanced e-commerce solutions with secure payment gateways',
        'Progressive Web Apps (PWA) for app-like experience',
        'Content Management Systems for easy updates',
        'Speed optimization for better user experience'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      timeline: '2-6 weeks',
      startingPrice: '₹20,000'
    }
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: '📱',
    color: 'green',
    shortDesc: 'Native and cross-platform apps that engage your users',
    features: [
      'iOS & Android',
      'User-Friendly Interface',
      'App Store Deployment'
    ],
    fullContent: {
      description: 'Build powerful mobile applications that connect with your customers on-the-go.',
      keyPoints: [
        'Native iOS and Android app development',
        'Cross-platform solutions using React Native',
        'Custom UI/UX design for maximum engagement',
        'App Store and Play Store optimization',
        'Push notifications and real-time features'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      timeline: '3-8 weeks',
      startingPrice: '₹40,000'
    }
  },
  marketing: {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: '📈',
    color: 'purple',
    shortDesc: 'Data-driven marketing strategies that grow your business',
    features: [
      'Social Media Management',
      'Google Ads Expert',
      'ROI Focused'
    ],
    fullContent: {
      description: 'Accelerate your business growth with proven digital marketing strategies.',
      keyPoints: [
        'Comprehensive social media marketing campaigns',
        'Google Ads and Facebook Ads management',
        'Search Engine Optimization (SEO)',
        'Content marketing and blog management',
        'Email marketing automation'
      ],
      technologies: ['Google Analytics', 'Facebook Business', 'SEMrush', 'Mailchimp'],
      timeline: 'Ongoing campaigns',
      startingPrice: '₹15,000/month'
    }
  },
  design: {
    id: 'design',
    title: 'UI/UX Design',
    icon: '🎨',
    color: 'red',
    shortDesc: 'Beautiful designs that create memorable user experiences',
    features: [
      'User Research',
      'Prototype Testing',
      'Brand Identity'
    ],
    fullContent: {
      description: 'Create stunning visual experiences that captivate your audience and drive conversions.',
      keyPoints: [
        'Complete brand identity and logo design',
        'User experience research and wireframing',
        'Interactive prototypes and user testing',
        'Website and app interface design',
        'Print and digital marketing materials'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
      timeline: '1-4 weeks',
      startingPrice: '₹20,000'
    }
  }
};

// ServiceCard Component
export const ServiceCard = ({ service, setCurrentPage }) => (

  <motion.div 
    className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden group"
  >
    <div className={`h-2 bg-gradient-to-r ${
      service.color === 'blue' ? 'from-blue-400 to-blue-600' :
      service.color === 'green' ? 'from-green-400 to-green-600' :
      service.color === 'purple' ? 'from-purple-400 to-purple-600' :
      'from-red-400 to-red-600'
    }`}></div>
    
    <div className="p-8">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>
      
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            {feature}
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setCurrentPage(service.id)}
        className={`w-full py-3 px-6 rounded-lg font-semibold cursor-pointer transition-all ease-in-out duration-300 ${
          service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
          service.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
          service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
          'bg-red-600 hover:bg-red-700 text-white'
        }`}
      >
        Learn More
      </button>
    </div>
  </motion.div>
);

// Service Detail Page Component
export const ServiceDetailPage = ({ serviceId, onBack }) => {
  const service = servicesData[serviceId];
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  if (!service) return null;

  return (
    <>
    <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors hover:scale-105 ease-in-out"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Back to Services
        </motion.button>

        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.fullContent.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Key Features */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Deliver</h2>
            <div className="space-y-4">
              {service.fullContent.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm mt-0.5 ${
                    service.color === 'blue' ? 'bg-blue-600' :
                    service.color === 'green' ? 'bg-green-600' :
                    service.color === 'purple' ? 'bg-purple-600' :
                    'bg-red-600'
                  }`}>
                    ✓
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            
            {/* Technologies */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {service.fullContent.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {tech}
                  </span>
                ))} 
              </div>
            </div>

            {/* Timeline & Pricing */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-medium text-gray-900">{service.fullContent.timeline}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-medium text-gray-900">{service.fullContent.startingPrice}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`bg-gradient-to-r ${
            service.color === 'blue' ? 'from-blue-600 to-blue-700' :
            service.color === 'green' ? 'from-green-600 to-green-700' :
            service.color === 'purple' ? 'from-purple-600 to-purple-700' :
            'from-red-600 to-red-700'
          } rounded-2xl p-8 text-center text-white`}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 opacity-90">Let&apos;s discuss your project and bring your vision to life&apos;</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-white cursor-pointer text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all ease-in-out hover:scale-105"
            >
              Get Free Quote
            </Link>
            <motion.button
            onClick={() => setIsModalOpen(true)}
              className="border-2 relative z-50 border-white cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all ease-in-out"
            >
              Schedule Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};