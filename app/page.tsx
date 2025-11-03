"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      {/* Hero Section */}
      <section className="max-w-4xl">
        {/* Headline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your AI Strategy Partner for India’s MSMEs
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Instantly diagnose your business health, uncover growth opportunities, and
          get actionable consulting insights — at 1% the cost of traditional firms.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              hover
                ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                : "bg-blue-500 text-white"
            }`}
          >
            Try the Free MSME Health Tool
          </button>

          <button className="px-8 py-4 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all">
            See how it works →
          </button>
        </div>

        {/* Visual Placeholder */}
        <div className="w-full h-72 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
          [Product Demo or Dashboard Preview Placeholder]
        </div>
      </section>
      {/* =================== STORY SECTION =================== */}
      <section className="w-full py-24 px-6 flex flex-col gap-24">
        {/* 1️⃣ The Broken Experience */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} 
        className="flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-rose-50 p-10 shadow-sm">
          {/* Text */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              When great businesses hit invisible walls
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You’ve seen it before — a factory owner in Coimbatore running on thin margins,
              a boutique founder in Jaipur juggling GST filings and supply issues, a tech SME in Pune 
              wondering why growth suddenly plateaued. They aren’t doing anything wrong — they’re just
              flying blind. No real benchmarks, no expert guidance, and definitely no time to figure
              it all out alone. Traditional consulting? Out of reach. Every hour of advice costs what
              they earn in a week.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 rounded-2xl bg-rose-100 border-2 border-dashed border-rose-200 flex items-center justify-center text-gray-500">
              [Image Placeholder – “Struggling MSME owner”]
            </div>
          </div>
        </motion.div>

        {/* 2️⃣ The Moment of Realization */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
         className="flex flex-col md:flex-row-reverse items-center gap-10 rounded-3xl bg-blue-50 p-10 shadow-sm">
          {/* Text */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              The lightbulb moment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We realized that small business owners weren’t short on ambition — just access.
              What if AI could do what consultants do — diagnose, benchmark, and guide — but at 
              near-zero cost? What if insights that once lived inside expensive PowerPoints could
              be generated in seconds, personalized for every MSME in India? That was the moment
              the idea clicked. Consulting didn’t need to be elite. It needed to be empathetic, 
              accessible, and infinitely scalable.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 rounded-2xl bg-blue-100 border-2 border-dashed border-blue-200 flex items-center justify-center text-gray-500">
              [Image Placeholder – “AI consulting lightbulb moment”]
            </div>
          </div>
        </motion.div>

        {/* 3️⃣ The New Way Forward */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-green-50 p-10 shadow-sm">
          {/* Text */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Building a smarter way forward
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              That’s how our AI-powered fractional consulting platform was born.
              It starts with the <span className="font-semibold">MSME Health Tool</span> — a simple, free 
              diagnostic that understands your business in minutes. Then, it acts like a virtual
              strategy partner — offering tailored insights, action plans, and even connects you to
              India’s brightest MBA minds when you need a human touch. Every conversation trains 
              the system to get better, for you and for every MSME that follows.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 rounded-2xl bg-green-100 border-2 border-dashed border-green-200 flex items-center justify-center text-gray-500">
              [Image Placeholder – “AI platform helping MSME growth”]
            </div>
          </div>
        </motion.div>
      </section>
      <section className="w-full py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          What Early Users Are Saying
        </h2>

        {/* Testimonials Carousel */}
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
              className="snap-center flex-shrink-0 bg-gray-50 p-8 rounded-3xl shadow-md w-80 text-left transition-transform"
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

        {/* Logos Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Our early users hang out here
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {[
              "LinkedIn",
              "Khatabook",
              "FICCI MSME Forum",
              "Razorpay",
              "Startup India",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-28 h-14 bg-gray-100 rounded-xl border border-gray-200 text-gray-500 text-sm font-medium"
              >
                [{logo} Logo]
              </div>
            ))}
          </div>
        </div>

        {/* Insight Section */}
        <div className="mt-24 max-w-3xl mx-auto bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-2xl shadow-sm">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-bold text-yellow-600">Research Insight:</span> Only{" "}
            <span className="font-semibold">12% of Indian MSMEs</span> have ever used a
            consulting service — not because they don’t need it, but because it’s out of
            reach. We’re here to change that.
          </p>
        </div>
      </section>
      {/* =================== AI ADVANTAGE SECTION =================== */}
      <section className="w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How Our AI Changes the Game
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          What once took months, meetings, and lakhs — now takes minutes, insights, and empathy.
        </p>

        {/* Before vs After Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
          {/* BEFORE - Grant Thornton Bharat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-10 shadow-sm border-t-4 border-gray-400"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Before: Grant Thornton Bharat
            </h3>

            <ul className="space-y-5 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">📅</span>
                Weeks of meetings, reports, and approvals before action begins.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">💰</span>
                High-cost, partner-led consulting — inaccessible to most MSMEs.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">🧱</span>
                Rigid, human-dependent model that scales poorly.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">🔒</span>
                Closed, proprietary systems with limited knowledge sharing.
              </li>
            </ul>

            {/* Placeholder Visual */}
            <div className="mt-8 h-56 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-200 text-gray-600">
              [Visual Placeholder – “Traditional Consulting Office”]
            </div>
          </motion.div>

          {/* AFTER - AI Platform */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-3xl p-10 shadow-sm border-t-4 border-blue-400"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              After: Our AI Fractional Consulting Platform
            </h3>

            <ul className="space-y-5 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">⚡</span>
                Instant, AI-powered diagnosis through the MSME Health Tool.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">💡</span>
                Personalized, data-backed strategy recommendations generated in minutes.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">🌍</span>
                Community-trained AI — continuously learning from MSMEs, students, and experts.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">💬</span>
                Always available, multilingual, and scalable — your 24x7 virtual strategy partner.
              </li>
            </ul>

            {/* Placeholder Visual */}
            <div className="mt-8 h-56 rounded-2xl border-2 border-dashed border-blue-200 flex items-center justify-center bg-blue-100 text-blue-600">
              [Visual Placeholder – “AI Dashboard / Data Flywheel Graphic”]
            </div>
          </motion.div>
        </div>

        {/* Data Flywheel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-green-50 p-10 rounded-3xl shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            The Self-Learning Intelligence Flywheel
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every MSME that uses the platform strengthens it. Business data from users,
            insights from MBA students, and expert feedback from consultants all feed
            into the AI — creating a living, learning ecosystem that grows smarter with
            each interaction.
          </p>
          <div className="h-60 rounded-2xl border-2 border-dashed border-green-300 bg-green-100 flex items-center justify-center text-green-600">
            [Infographic Placeholder – “Data Flow: MSMEs → Students → Experts → AI → MSMEs”]
          </div>
        </motion.div>
      </section>
    </main>
  );
}