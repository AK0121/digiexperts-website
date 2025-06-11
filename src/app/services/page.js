"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData, ServiceCard, ServiceDetailPage } from "../../../components/ServiceCard.js";

export default function ServicesMainPage() {
  const [currentPage, setCurrentPage] = useState(null);

  if (currentPage) {
    return (
      <ServiceDetailPage 
        serviceId={currentPage} 
        onBack={() => setCurrentPage(null)} 
      />
    );
  }

  // Otherwise show the main services page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0051c3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: 'easeInOut' }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and accelerate growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600 px-4 py-2 rounded-full">Custom Solutions</span>
              <span className="bg-green-600 px-4 py-2 rounded-full">Expert Team</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Proven Results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: [0.17, 0.67, 0.83, 0.67], duration: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is crafted with expertise and tailored to your specific business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.values(servicesData).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, ease: "easeInOut", duration: 0.6 }}
                whileHover={{ y: -15, transition: { ease: "easeInOut", duration: 0.1 } }}
                className=""
              >
                <ServiceCard service={service} setCurrentPage={setCurrentPage} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: [0.17, 0.67, 0.83, 0.67], duration: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DigiExperts?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality' },
              { icon: '🏆', title: 'Expert Team', desc: 'Experienced professionals with proven track records' },
              { icon: '💎', title: 'Premium Quality', desc: 'High-quality solutions tailored to your needs' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1), ease: [0.17, 0.67, 0.83, 0.67], duration: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
