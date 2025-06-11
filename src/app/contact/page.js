'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Calendar, Facebook, X , Instagram, Linkedin } from 'lucide-react'
import BookingModal from '../../../components/BookingModal'
import ContactForm from '../../../components/ContactForm' 

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-500 bg-clip-text text-transparent">
              Welcome to the Digital Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            जुड़िए Jaipur के सबसे trusted digital experts के साथ। Your success, our mission!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">+91 6350617334</p>
                    <p className="text-sm text-gray-600">Mon-Sat, 10 AM - 10 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">hello@digiexpert.in</p>
                    <p className="text-sm text-gray-600">We reply within 2 - 3 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Jaipur, Rajasthan</p>
                    <p className="text-sm text-gray-600">Pink City, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Meeting */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
              <p className="mb-4 opacity-90">
                30-minute strategy session to discuss your digital goals
              </p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 cursor-pointer px-6 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Schedule Meeting
              </motion.button>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  className="bg-blue-100 p-3 rounded-lg hover:scale-110 hover:bg-blue-200 transition-all"
                >
                  <Facebook className="text-blue-600" size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-blue-100 p-3 rounded-lg hover:scale-110 hover:bg-blue-200 transition-all"
                >
                  <X className="text-blue-600" size={24} />
                </motion.a>
                <motion.a
                    href="#"
                  className="bg-pink-100 p-3 rounded-lg hover:scale-110 hover:bg-pink-200 transition-all"
                >
                  <Instagram className="text-pink-600" size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-blue-100 p-3 rounded-lg hover:scale-110 hover:bg-blue-200 transition-all"
                >
                  <Linkedin className="text-blue-600" size={24} />
                </motion.a>
              </div> 
              <p className="text-sm text-gray-600 mt-4">
                Stay updated with latest digital trends and tips!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 500+ businesses in Jaipur who trust Digiexpert for their digital transformation journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Website Development
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Meta Marketing
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Web Design
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              SEO Services
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}