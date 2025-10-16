"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-purple-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">Last Updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
        >
          <div className="space-y-8">
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-b border-purple-500/30 pb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">Personal Information:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact details</li>
                    <li>Email address and phone number</li>
                    <li>Company/business information</li>
                    <li>Project requirements and preferences</li>
                    <li>Any information provided in contact forms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">Automatic Information:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-b border-purple-500/30 pb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Provide web design and digital marketing services</li>
                <li>Respond to inquiries and provide quotes</li>
                <li>Communicate project updates and progress</li>
                <li>Improve our services and user experience</li>
                <li>Send marketing communications (with consent)</li>
                <li>Process payments and manage accounts</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-b border-purple-500/30 pb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Data Protection & Security</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div className="bg-black/20 rounded-lg p-4 border border-orange-400/20">
                  <h3 className="font-semibold text-orange-300 mb-2">Security Measures:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure cloud storage with Supabase</li>
                    <li>Limited access to personal information</li>
                    <li>Regular security updates and monitoring</li>
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-orange-400/20">
                  <h3 className="font-semibold text-orange-300 mb-2">Third-Party Services:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Supabase - Secure data storage</li>
                    <li>Email providers - Communication</li>
                    <li>Analytics tools - Service improvement</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-b border-purple-500/30 pb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Access your personal data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Correct inaccurate information</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Request data deletion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Opt-out of marketing communications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Data portability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Withdraw consent</span>
                </div>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-b border-purple-500/30 pb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300">
                We retain your personal information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2 ml-4">
                <li>Provide the services you requested</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business operations and records</li>
              </ul>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-xl p-6 border border-orange-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  For any privacy-related questions or concerns, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-orange-300">
                    <Mail className="w-5 h-5" />
                    <span>digiexperts121@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <Phone className="w-5 h-5" />
                    <span>+91 6350617334</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center pt-6 border-t border-purple-500/30"
            >
              <p className="text-gray-400 text-sm">
                We may update this privacy policy from time to time. Continued use of our services 
                constitutes acceptance of any changes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}