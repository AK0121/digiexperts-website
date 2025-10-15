"use client"

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import PackageCard from "./PackageCard"
import { forwardRef } from "react";
import { useLeadForm } from "../../../hooks/useLeadsForm"

const Packages = forwardRef(function Packages(props, ref) {
    const {openLeadForm} = useLeadForm();

    const packages = [
        {
          title: "Landing Page",
          price: "₹4,999",
          features: [
            "Single page responsive design",
            "Mobile-optimized layout",
            "Fast loading speed",
            "2 revisions included",
            "Delivery in 5-7 days"
          ]
        },
        {
          title: "Business Website",
          price: "₹11,000",
          features: [
            "3-5 pages custom design",
            "SEO-ready structure",
            "Contact form integration",
            "3 revisions included",
            "WhatsApp support",
            "Delivery in 10-14 days"
          ],
          isPopular: true
        },
        {
          title: "E-Commerce Site",
          price: "₹25,000+",
          features: [
            "Full online store setup",
            "Product management system",
            "Payment gateway integration",
            "Inventory management",
            "Unlimited revisions",
            "Priority support"
          ]
        }
      ];

  return <>
   <section ref={ref} id="packages" className="py-20 px-4 relative bg-gradient-to-t from-[#2a2463] to-[#020101]">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Diwali Special Website Packages
        </h2>
        <p className="text-xl text-gray-300">
          Choose the perfect package to grow your business this festive season
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} delay={idx * 0.2} />
        ))}
      </div>
    </div>
  </section>;

  {
    /* Bonus Combo */
  }
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <Gift className="absolute top-4 right-4 w-16 h-16 text-white/20" />
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          🎁 Bundle & Save Big
        </h3>
        <p className="text-xl mb-6">
          Get{" "}
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="font-bold text-yellow-300"
          >
            20% OFF
          </motion.span>{" "}
          when you combine Website Design + Social Media Marketing Setup
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openLeadForm}
          className="px-8 py-4 cursor-pointer bg-white text-pink-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Claim This Limited Offer
        </motion.button>
      </motion.div>
    </div>
  </section>;
  </>
});

export default Packages;