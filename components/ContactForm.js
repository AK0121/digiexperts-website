"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnnvpvdo");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center text-center bg-green-50 border border-green-200 text-green-700 py-4 px-6 rounded-lg shadow-sm"
      >
        <h2 className="text-5xl font-bold">Thank you for reaching out!</h2>
        <h3 className="text-3xl mt-4">We've received your message and will get back to you shortly.</h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Let&#8217;s Start Your Digital Journey
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
          Service
          </label>
          <select
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          >
            <option value="" disabled hidden>
              Select a service
            </option>
            <option value="Web design & development">
              Web design & development
            </option>
            <option value="Meta Marketing">Meta Marketing</option>
            <option value="SEO (Search Engine Optimization)">
              SEO (Search Engine Optimization)
            </option>
            <option value="Landing page + FB Ads">
              Landing page + FB Ads
            </option>
            <option value="Logo Design">Logo Design</option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="DigiExperts Pro Package">
              DigiExperts Pro Package
            </option>
          </select>
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:scale-102 hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Send size={20} />
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
