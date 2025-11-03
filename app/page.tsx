"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [hover, setHover] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =================== NAVBAR =================== */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            <span className="text-[#F8C57C]">Fractional</span> Consulting
          </h1>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {[
              { id: "hero", label: "Home" },
              { id: "story", label: "Our Story" },
              { id: "social", label: "Testimonials" },
              { id: "advantage", label: "AI Advantage" },
              { id: "pricing", label: "Pricing" },
              { id: "conversion", label: "Get Started" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#F8C57C] font-semibold"
                    : "hover:text-[#F8C57C]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* =================== MAIN BODY =================== */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-gradient-to-b from-white to-gray-50 text-center">
        {/* HERO SECTION */}
        <section id="hero" className="max-w-4xl pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-gray-900 mb-6"
          >
            Your AI Strategy Partner for India’s MSMEs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Instantly diagnose your business health, uncover growth opportunities, and get actionable consulting insights — 
            at 1% the cost of traditional firms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all shadow-md ${
                hover
                  ? "bg-[#F8C57C] text-gray-900 scale-105"
                  : "bg-[#F8C57C]/90 text-gray-900"
              }`}
            >
              Try the Free MSME Health Tool
            </button>

            <Link href="https://demo.chat-sdk.dev/">
            <button className="px-8 py-4 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all">
              See how it works →
            </button>
          </Link>
          </motion.div>

          {/* Visual Placeholder */}
          <div className="w-full h-72 border border-dashed border-gray-300 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-500 shadow-inner">
            [Product Demo or Dashboard Preview Placeholder]
          </div>
        </section>

        {/* STORY SECTION */}
        <section id="story" className="w-full py-24 px-6 flex flex-col gap-24 max-w-6xl">
          {[
            {
              title: "When great businesses hit invisible walls",
              desc: "You’ve seen it before — a factory owner in Coimbatore running on thin margins, a boutique founder in Jaipur juggling GST filings and supply issues, a tech SME in Pune wondering why growth suddenly plateaued. They aren’t doing anything wrong — they’re just flying blind. No real benchmarks, no expert guidance, and definitely no time to figure it all out alone. Traditional consulting? Out of reach. Every hour of advice costs what they earn in a week.",
              color: "bg-amber-50",
              placeholder: "[Struggling MSME Owner Image]",
            },
            {
              title: "The lightbulb moment",
              desc: "We realized that small business owners weren’t short on ambition — just access. What if AI could do what consultants do — diagnose, benchmark, and guide — but at near-zero cost? What if insights that once lived inside expensive PowerPoints could be generated in seconds, personalized for every MSME in India? That was the moment the idea clicked. Consulting didn’t need to be elite. It needed to be empathetic, accessible, and infinitely scalable.",
              color: "bg-white",
              reverse: true,
              placeholder: "[AI Consulting Lightbulb Image]",
            },
            {
              title: "Building a smarter way forward",
              desc: "That’s how our AI-powered fractional consulting platform was born. It starts with the MSME Health Tool — a simple, free diagnostic that understands your business in minutes. Then, it acts like a virtual strategy partner — offering tailored insights, action plans, and even connects you to India’s brightest MBA minds when you need a human touch. Every conversation trains the system to get better, for you and for every MSME that follows.",
              color: "bg-amber-50",
              placeholder: "[AI Platform Growth Image]",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 rounded-3xl ${item.color} p-10 shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="md:w-1/2 text-left">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full h-72 rounded-2xl bg-white border border-dashed border-amber-200 flex items-center justify-center text-gray-500">
                  {item.placeholder}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SOCIAL PROOF */}
        <section id="social" className="w-full py-24 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What Early Users Are Saying
          </h2>

          <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory justify-start md:justify-center">
            {[
              {
                name: "Rajesh Kumar",
                role: "Owner, Precision Auto Parts, Pune",
                quote:
                  "Before this tool, we had no idea where we were losing money. Now, I can see exactly what’s going wrong — and fix it before it hurts us.",
              },
              {
                name: "Ananya Shah",
                role: "Founder, Craft & Clay, Jaipur",
                quote:
                  "I always thought consulting was only for big brands. This AI tool proved me wrong. It speaks my language — simple, clear, and actionable.",
              },
              {
                name: "Faiz Rahman",
                role: "Managing Partner, Rahman Textiles, Tiruppur",
                quote:
                  "When I saw my MSME Health Score, it felt like someone finally understood my business. I didn’t need a 100-page report — just real steps that work.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="snap-center flex-shrink-0 bg-amber-50 p-8 rounded-3xl shadow-md w-80 text-left transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-gray-200 mb-4 mx-auto flex items-center justify-center text-gray-500">
                  [User Img]
                </div>
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Logos */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Our early users hang out here
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
              {["LinkedIn", "Khatabook", "FICCI", "Razorpay", "Startup India"].map(
                (logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-28 h-14 bg-gray-50 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium shadow-sm hover:shadow-md transition-all"
                  >
                    [{logo}]
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* AI ADVANTAGE */}
        <section id="advantage" className="w-full py-24 px-6 bg-amber-50 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Our AI Changes the Game
          </h2>
          <p className="text-lg text-gray-700 mb-16">
            What once took months, meetings, and lakhs — now takes minutes, insights, and empathy.
          </p>

          {/* Before vs After Comparison */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
            <motion.div className="bg-white rounded-3xl p-10 shadow-md border-l-4 border-gray-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Before: Grant Thornton Bharat
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>💰 ₹5–10 lakh+ per project</li>
                <li>⏳ 8–12 weeks to first insight</li>
                <li>👥 Human-only model</li>
                <li>🔒 Closed systems</li>
              </ul>
            </motion.div>

            <motion.div className="bg-white rounded-3xl p-10 shadow-md border-l-4 border-[#F8C57C]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                After: Our AI Fractional Consulting Platform
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>⚡ Instant AI-driven health check</li>
                <li>💡 Actionable recommendations in 5 min</li>
                <li>🌍 Learns from 63M MSMEs & experts</li>
                <li>💬 24x7 accessible & affordable</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="w-full py-24 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Consulting That Doesn’t Cost a Fortune — Literally.
          </h2>
          <p className="text-lg text-gray-700 mb-16">
            Why should great strategy be a luxury? Here’s how we compare.
          </p>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            <div className="bg-gray-50 rounded-3xl p-10 shadow-md border-l-4 border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Traditional Consulting
              </h3>
              <p className="text-gray-700 mb-6">
                ₹5–10 lakh+ per engagement. Weeks of prep, limited access.
              </p>
            </div>
            <div className="bg-amber-50 rounded-3xl p-10 shadow-md border-l-4 border-[#F8C57C]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AI Consulting Model
              </h3>
              <p className="text-gray-700 mb-6">
                Free diagnostic + ₹999/month. Real-time insights in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSION PATH */}
        <section id="conversion" className="w-full py-24 px-6 bg-gradient-to-b from-white to-amber-50 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Happens After You Sign Up
          </h2>
          <p className="text-lg text-gray-700 mb-16">
            We’ve kept it simple, fast, and genuinely useful — no spam, no friction, just impact.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-md border-l-4 border-[#F8C57C] text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Journey</h3>
            <ol className="space-y-4 text-gray-700">
              <li>📝 Step 1: Quick signup — 2 minutes max.</li>
              <li>⚡ Step 2: Get your MSME Health Score instantly.</li>
              <li>📈 Step 3: Receive a 30-day personalized action plan.</li>
              <li>🤝 Step 4: Join our MSME founder community.</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <button className="px-10 py-4 bg-[#F8C57C] hover:bg-[#F8C57C]/90 text-gray-900 text-lg font-semibold rounded-2xl shadow-md transition-all transform hover:scale-105">
              Try the Free MSME Health Tool →
            </button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
