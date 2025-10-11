"use client";

import Image from "next/image";
import Link from "next/link";

const caseStudies = {
  nextrade: {
    slug: "nextrade",
    title: "Nextrade",
    tagline: "Scaling a B2B trading platform with modern design & dev.",
    badge: "70% More Leads",
    category: "B2B Trading Platform",
    challenge:
      "Nextrade had a strong product but struggled with user adoption. Their platform lacked a modern, scalable design that inspired trust and was optimized for lead generation.",
    approach: [
      "Built a scalable B2B web app with Next.js.",
      "Redesigned UI with a focus on clarity and trust.",
      "Optimized onboarding & lead generation funnel.",
      "Integrated SEO best practices for organic reach."
    ],
    solution:
      "We developed a responsive, future-ready platform for Nextrade. With a clean interface, scalable architecture, and optimized funnel, they could onboard users faster and improve trust at scale.",
    results: [
      "📈 70% increase in leads",
      "⚡ Load speed improved from 6s → 2.1s",
      "🎯 Higher engagement and retention"
    ],
    testimonial:
      "“DigiExperts helped us modernize our platform and attract new users with a fresh look.” — Nextrade Team",
    image: "/images/nextrade.png",
  },
  vijay: {
    slug: "vijay",
    title: "Vijay Restaurant",
    tagline: "Bringing modern branding & a user-friendly website to local dining.",
    badge: "Brand Awareness",
    category: "Restaurant Branding",
    challenge:
      "Vijay Restaurant needed a digital identity to attract new customers. Their online presence was minimal, making it hard for people to find and trust them.",
    approach: [
      "Designed a modern, visually appealing restaurant website.",
      "Integrated Google Business for local SEO visibility.",
      "Created a mobile-first experience for customers.",
      "Focused on branding consistency across digital channels."
    ],
    solution:
      "We helped Vijay Restaurant build a modern and user-friendly site with branding that reflected their cuisine. By combining design with local SEO, they reached more customers organically.",
    results: [
      "📍 Google Business ranking in top 3 for local searches",
      "📈 45% more online reservations",
      "🌟 Stronger local brand identity"
    ],
    testimonial:
      "“Working with DigiExperts gave our restaurant a digital makeover. Now customers can easily find and connect with us.” — Vijay Restaurant",
    image: "/images/vr.png",
  },
};

export default function CaseStudyPage({ params }) {
  const data = caseStudies[params.slug];

  if (!data) return <div className="text-center text-white py-40">Case Study Not Found</div>;

  return (
    <div className="bg-[#000617] text-white min-h-screen py-20 font-inter">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <span className="px-4 py-1 rounded-full bg-blue-900 text-sm font-semibold">
          {data.badge}
        </span>
        <h1 className="text-6xl font-outfit font-bold mt-6">{data.title}</h1>
        <p className="text-lg mt-4 text-gray-300">{data.tagline}</p>
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={450}
          className="mx-auto mt-10 rounded-xl shadow-lg"
        />
      </div>

      {/* Challenge */}
      <section className="w-10/12 mx-auto mb-16">
        <h2 className="text-3xl font-outfit font-semibold mb-4">The Challenge</h2>
        <p className="text-gray-300">{data.challenge}</p>
      </section>

      {/* Approach */}
      <section className="w-10/12 mx-auto mb-16">
        <h2 className="text-3xl font-outfit font-semibold mb-4">Our Approach</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {data.approach.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Solution */}
      <section className="w-10/12 mx-auto mb-16">
        <h2 className="text-3xl font-outfit font-semibold mb-4">The Solution</h2>
        <p className="text-gray-300">{data.solution}</p>
      </section>

      {/* Results */}
      <section className="w-10/12 mx-auto mb-16">
        <h2 className="text-3xl text-center sm:text-left font-outfit font-semibold mb-4">The Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.results.map((result, i) => (
            <div
              key={i}
              className="bg-white/5 p-10 rounded-xl shadow-md text-center text-lg font-semibold"
            >
              {result}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {data.testimonial && (
        <section className="w-10/12 mx-auto mb-16 italic text-gray-400 text-center">
          {data.testimonial}
        </section>
      )}

      {/* CTA */}
      <section className="w-10/12 mx-auto mt-20 text-center">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Ready to scale your business?</h2>
        <div className="w-full flex items-center justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center text-center text-lg px-10 py-2 mt-5 rounded-md font-inter font-semibold text-white bg-gradient-to-tr from-[#2896fe] to-[#601ee4] shadow-xl hover:shadow-md transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
