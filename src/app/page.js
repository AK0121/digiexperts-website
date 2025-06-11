import Image from "next/image";
import { AnimatedTestimonials } from "../../components/AnimatesTestimonials";
import { HoverEffect } from "../../components/CardsHover";
import Link from "next/link";
import { Globe, Code, Laptop, Facebook, Target, Search } from "lucide-react";

export default function Home() {

  const testimonials = [
    {
      quote:
        "DigiExperts exceeded our expectations with their web development expertise and strategic approach to Meta marketing and Facebook Ads. Their team crafted a seamless user experience that drove conversions.",
      name: "Rahul Saini",
      designation: "Investment Manager",
      src: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "DigiExperts' web development services were a perfect fit for our business needs. Their team understood our requirements and delivered a solution that met our expectations.",
      name: "Abhay Saini",
      designation: "Restaurant Owner",
      src: "/images/testimonial-2.jpg",
    },
  ];
  
  const projects = [
    {
      title: "Website Design",
      icon: <Laptop />,
      description:
        "Modern, responsive website designs that capture your brand and engage your audience.",
    },
    {
      title: "Web Development",
      icon: <Code />,
      description:
        "Custom web applications built with latest technologies for optimal performance.",
    },
    {
      title: "Landing Pages",
      icon: <Target />,
      description:
        "High-converting landing pages designed to turn visitors into customers.",
    },
    {
      title: "Facebook Ads",
      icon: <Facebook />,
      description:
        "Strategic social media advertising campaigns to reach your target audience effectively.",
    },
    {
      title: "Ad Strategy & Funnel Planning",
      icon: <Search />,
      description:
        "	Building custom ad strategies and funnels based on business goals.",
    },
    {
      title: "SEO",
      icon: <Globe />,
      description:
        "Search engine optimization to improve your website&apos;s visibility and organic traffic.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">

      {/* Hero Section */}
      <section className="bg-[#10b140] w-full max-w-[120rem] mx-auto text-white py-20 lg:py-32 flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-0">
        <div className="max-w-xl text-center sm:text-left px-4">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Digital Solutions for Your Business
          </h2>
          <p className="text-xl lg:text-2xl text-gray-100 mb-8">
            Professional web development, design, and digital marketing services
            in Jaipur and online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link href="/contact" className="bg-blue-600 hover:scale-105 text-white px-8 py-3 rounded-lg font-semibold transition-transform duration-75 ease-in cursor-pointer">
              Get your website
            </Link>
            <Link href="/contact" className="bg-white border-2 border-white text-black hover:scale-105 px-8 py-3 rounded-lg font-semibold transition-all duration-75 ease-in cursor-pointer z-10">
              Start AD campaigns
            </Link>
          </div>
        </div>
        <div className="right-2.5 w-80 h-80 sm:w-96 sm:h-96 relative">
          <Image
            src="/images/hero-illustration.svg"
            alt="Hero Illustration"
            fill
            sizes="(max-width: 640px) 288px, 384px"
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute -bottom-60 sm:-bottom-52 left-1/2 transform -translate-x-1/2 w-[26rem] h-96 sm:w-3xl sm:h-[30rem]">
          <Image
            alt="Landing-pages-image"
            sizes="(max-width: 768px) 700, 1000"
            fill
            src="/images/landing-pages.png"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-green-50 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-8xl font-bold text-blue-600 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to grow your business online
            </p>
          </div>

          <HoverEffect key={projects.title} items={projects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
        </div>
      </section>

      {/* Hear From Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-8xl font-bold text-gray-900 mb-4">
              Hear From Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our satisfied clients have to say about our services
            </p>
          </div>

          <div>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
    </div>
  );
}
