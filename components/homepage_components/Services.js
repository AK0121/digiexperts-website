"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Animation variants
const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 5 },
  },
};

const headingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const subheadingContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

// Single Service Card Component
const ServiceCard = ({ title, desc, img, btn, className }) => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  return (
    <motion.div
      ref={sectionRef}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        y,
        opacity,
        scale,
      }}
      className={`flex h-[36rem] w-[28rem] will-change-transform will-change-opacity py-4 flex-col bg-[#01061f] rounded-[20px] text-[#ffffffe7] ${className}`}
    >
      {/* bg-[#000917] */}
      {/* Image */}
      <div className="service-card-visual-content py-4 rounded-[14px] bg-cover">
        <Image
          src={img}
          alt={`${title} image`}
          className="w-11/12 mx-auto rounded-[14px] object-cover"
          height={200}
          width={200}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-grow items-center justify-between px-4 py-6">
        <p className="text-lg w-11/12 mx-auto text-center font-inter">{desc}</p>

        {/* Button always pinned at bottom */}
        <Link
          href="/contact"
          className="w-full text-2xl h-12 mt-3 text-[14px] lg:text-xl font-inter px-8 py-6 rounded-[7px] bg-gradient-to-br from-[#000f52] to-[#2b005c] font-semibold text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:opacity-90"
        >
          {btn}
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const heading = "Digital solutions designed to grow your brand";
  const subheading = [
    "From web design to marketing, we blend creativity and technology to help businesses stand out. Partner with us to build powerful websites, campaigns, and strategies that deliver measurable results.",
  ];

  // All services data
  const services = [
    {
      title: "Website Design",
      desc: "Custom website design tailored for startups, small businesses, and established brands — modern, creative, and user-focused.",
      img: "/images/web-design-service.png",
      btn: "Get Your Web Design",
      className: "mt-0 lg:mt-10",
    },
    {
      title: "Website Development",
      desc: "Responsive, fast, and scalable web development solutions — from business websites to full-stack web applications.",
      img: "/images/web-dev-service.png",
      btn: "Build Your Website",
      className: "mt-0 lg:mt-60",
    },
    {
      title: "Meta Marketing",
      desc: "ROI-driven Meta ads on Facebook & Instagram to grow traffic, increase engagement, and convert leads into customers.",
      img: "/images/meta-marketing-service.png",
      btn: "Run Meta Ads",
      className: "mt-0 lg:mb-0",
    },
    {
      title: "SEO & Google Business",
      desc: "Boost your search engine rankings, optimize your Google Business profile, and get discovered by local & global audiences.",
      img: "/images/seo-service.png",
      btn: "Boost Visibility",
      className: "mt-0 lg:mt-60",
    },
    {
      title: "Google Ads",
      desc: "Targeted Google Ads campaigns designed to drive quality traffic, maximize ROI, and grow your online presence.",
      img: "/images/google-ads-service.png",
      btn: "Run Google Ads",
      className: "mt-0 lg:mt-0",
    },
    {
      title: "Digiexperts Package",
      desc: "All-in-one growth package combining web design, development, SEO, and digital marketing for complete brand success.",
      img: "/images/digiexperts-package-service.png",
      btn: "Get The Package",
      className: "mt-0 lg:mt-60",
    },
  ];

  return (
    <section id="services" className="font-outfit pb-20 md:pb-40 pt-20 lg:pt-40 bg-[#9ccfff] overflow-hidden">
      <div className="text-content flex flex-col gap-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl lg:text-9xl font-bebas-neue text-[#000000] w-11/12 md:w-10/12 mx-auto text-center flex flex-wrap justify-center gap-x-3 lg:gap-x-8"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {heading.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block overflow-hidden"
              variants={textVariant}
            >
              <span className={`inline-block uppercase font-medium`}>
                {word}
              </span>
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg lg:text-xl w-11/12 lg:w-6/12 mx-auto font-inter text-[#1d1c1c] text-center pb-10"
          variants={subheadingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {subheading.map((line, i) => (
            <motion.span
              key={i}
              className="block font-semibold"
              variants={textVariant}
            >
              <span className="block">{line}</span>
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Services Grid (Flexbox, 2 cards per row) */}
      <motion.div
        id="services-section"
        className="w-11/12 lg:w-10/12 mx-auto flex flex-wrap gap-x-36 gap-y-2 sm:gap-y-20 justify-center"
      >
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
