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
    </main>
  );
}