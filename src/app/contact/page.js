"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

// FAQ Data
const faqs = [
  {
    q: "How long does it take to design and develop a website?",
    a: "For small and medium businesses, our typical timeline is 10–25 days depending on pages, features, and content. More advanced builds like e-commerce or custom dashboards can take 4–8 weeks. We follow a clear, structured process so you always know what’s happening.",
  },
  {
    q: "Do you work with small businesses, startups, and offline shop owners?",
    a: "Yes, that’s our specialty. We help small and growing businesses build their online presence—from a simple lead-gen website to full-scale online branding, marketing, and automations. You don’t need any technical knowledge; we handle everything end-to-end.",
  },
  {
    q: "What is your pricing and how do I know what package is right for me?",
    a: "We offer transparent, value-based pricing. Most projects for Indian small businesses start from ₹2,999 to ₹25,000 depending on features, design complexity, and marketing add-ons. After a short call, we recommend the best package based on your goals—no upselling, no confusion.",
  },
  {
    q: "Do you offer Google ranking, SEO, and Google Business Profile setup?",
    a: "Yes. We optimize your website for SEO, speed, and mobile responsiveness, and we also set up or improve your Google Business Profile so customers can find you easily. This is one of the most effective ways for Indian SMBs to get more local leads.",
  },
  {
    q: "Do you provide Meta (Facebook + Instagram) Ads and lead generation services?",
    a: "Absolutely. We run performance-focused Meta ad campaigns designed specifically for leads and sales. We also set up proper tracking, creatives, and landing pages so your ad money actually brings results—not just clicks.",
  },
  {
    q: "Can you handle everything after the website is launched?",
    a: "Yes, we offer affordable monthly maintenance plans covering updates, content changes, new features, hosting support, security checks, and performance optimization. You’ll never get stuck with a broken or outdated website.",
  },
  {
    q: "Will my website be fast, SEO-friendly, and mobile-optimized?",
    a: "100%. We build using modern tech like Next.js, optimized images, lazy loading, on-page SEO, mobile-first design, and blazing-fast hosting. You get a website that loads quickly, feels premium, and performs well on Google.",
  },
  {
    q: "Do you sign NDAs and keep my business information confidential?",
    a: "Yes. Whether you’re a startup, agency, or business owner, your ideas, strategies, and data stay confidential. We can sign an NDA before sharing project details.",
  },
];

// FAQ Item Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
      >
        <span className="text-lg font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 pb-6 leading-relaxed">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = new FormData(e.target);
  const body = {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
    phone: form.get("phone"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // important for API JSON parsing
    },
    body: JSON.stringify(body),
  });

  const result = await res.json();

  if (result.success) {
    setStatus("Message sent!");
    e.target.reset(); // ← BEST WAY TO CLEAR FORM (reliable & simple)
  } else {
    setStatus("Error sending message.");
  }

  setLoading(false);
};


  return (
    <div className="min-h-screen bg-[#010112] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010111] via-[#0f071d] to-[#19215c] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#010111]/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#19215c]/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                That Actually Works
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Transform your ideas into digital experiences that drive real
            results.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-10 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

            <div className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your Phone"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
              {status && <p className="text-sm opacity-80">{status}</p>}
            </div>
          </motion.form>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Choose your preferred way to connect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "WhatsApp",
                text: "Quick response guaranteed",
                link: "https://wa.me/6350617334",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email",
                text: "digiexperts121@gmail.com",
                link: "mailto:digiexperts121@gmail.com",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                icon: Phone,
                title: "Phone",
                text: "+91 6350617334",
                link: "tel:+916350617334",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((item, i) => (
              <motion.a
                target="_blank"
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked
            </h2>
            <p className="text-gray-400 text-lg">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-600/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r uppercase from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>
          <p className="text-2xl text-gray-400 mb-8">
            Let&apos;s create something extraordinary together.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
