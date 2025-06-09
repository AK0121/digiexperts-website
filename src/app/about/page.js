"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "3+", label: "Years Experience", icon: Target },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of digital trends to deliver cutting-edge solutions that drive your business forward.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships through transparent communication and exceptional results.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every strategy we implement is designed to deliver measurable outcomes and maximize your ROI.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "From local startups to international brands, we help businesses succeed across all markets.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description:
        "Digital strategist with 10+ years of experience in transforming businesses through technology.",
    },
    {
      name: "Mike Chen",
      role: "CTO",
      description:
        "Full-stack developer and tech architect passionate about building scalable digital solutions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      description:
        "Award-winning designer who brings brands to life through compelling visual storytelling.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                DigiExperts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&rsquo;re a passionate team of digital innovators dedicated to
              helping businesses thrive in the digital age. Since 2023,
              we&rsquo;ve been transforming ideas into powerful digital
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, DigiExperts began as a small team of passionate
                developers and designers who believed that every business
                deserves exceptional digital solutions. What started as a vision
                to bridge the gap between technology and business success has
                grown into a trusted partner for companies worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we&#8217;re proud to have helped over 150 businesses
                transform their digital presence, increase their online
                visibility, and achieve sustainable growth through innovative
                web solutions and digital marketing strategies.
              </p>
              <motion.div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all cursor-pointer"
              >
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance customer experiences, and create lasting
                  competitive advantages in the digital marketplace.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we serve
              our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the 150+ businesses that have already transformed their
              digital presence with DigiExperts&#8217;.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div className="cursor-pointer">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </Link>
              </motion.div>
              <motion.div className="cursor-pointer">
                <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
