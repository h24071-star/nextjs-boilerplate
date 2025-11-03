"use client";

import Image from "next/image";
import { useState } from "react";

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
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-rose-50 p-10 shadow-sm">
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
        </div>

        {/* 2️⃣ The Moment of Realization */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 rounded-3xl bg-blue-50 p-10 shadow-sm">
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
        </div>

        {/* 3️⃣ The New Way Forward */}
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-green-50 p-10 shadow-sm">
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
        </div>
      </section>
    </main>
  );
}