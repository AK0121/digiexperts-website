"use client "

import { motion, useInView } from "framer-motion";
import React from "react";
import { Check } from "lucide-react";
import { useLeadForm } from "../../../hooks/useLeadsForm"

export default function PackageCard({ title, price, features, delay, isPopular }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const {openLeadForm} = useLeadForm();
    
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
          className={`relative bg-gradient-to-br from-purple-950/80 to-blue-950/80 backdrop-blur-sm rounded-2xl p-8 border ${
            isPopular ? 'border-orange-400 shadow-2xl shadow-orange-500/20' : 'border-purple-500/30'
          } hover:border-orange-400/60 transition-all duration-300 group`}
        >
          {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          )}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openLeadForm}
            className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
          >
            Book This Package
          </motion.button>
        </motion.div>
      );
}
    