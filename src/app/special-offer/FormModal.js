"use client";

import { useEffect, useState } from 'react';

export default function Contact({ isOpen, onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event) {
    if (!isOpen) return;
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "983dda17-b4e5-46d5-b84c-5074cb92d2ac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    }
  }

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-3xl px-4">
      {/* Success Toast */}
      {showSuccess && (
        <div className="absolute top-6 bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow-xl animate-bounce z-50">
          Form submitted successfully!
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fadeIn relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-1 right-2 cursor-pointer text-gray-500 hover:text-gray-800 text-4xl font-bold">&times;</button>

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-2">
          Get a Free Consultation
        </h2>
        <p className="text-gray-600 text-center mb-6">Tell us what you need and we&rsquo;ll get back to you ASAP.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your project</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
