"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      {/* =================== NAVBAR =================== */}
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Fractional Consulting<span className="text-[#F8C57C]">.</span>
      </h1>
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#hero" className="hover:text-[#F8C57C] transition-colors">Home</a>
        <a href="#story" className="hover:text-[#F8C57C] transition-colors">Story</a>
        <a href="#social" className="hover:text-[#F8C57C] transition-colors">Social Proof</a>
        <a href="#ai" className="hover:text-[#F8C57C] transition-colors">AI Advantage</a>
        <a href="#pricing" className="hover:text-[#F8C57C] transition-colors">Pricing</a>
        <a href="#conversion" className="hover:text-[#F8C57C] transition-colors">Get Started</a>
      </div>
    </nav>
    <div className="pt-24" /> {/* Spacer to offset the fixed navbar height */}
      {/* Hero Section */}
      <section id="hero" className="max-w-4xl scroll-mt-24">
        {/* Headline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          The AI Strategy Partner for India’s Ambitious MSMEs
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

          <Link href="https://demo.chat-sdk.dev/">
          <button className="px-8 py-4 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all">
            Have a quick chat with our AI  →
          </button>
        </Link>
        </div>

        {/* Visual Placeholder */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <video
          src = "AI Chatbot Mock.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      </section>
      {/* =================== STORY SECTION =================== */}
      <section id="story" className="w-full py-24 px-6 flex flex-col gap-24 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
        Our Story — From Insight to Impact
      </h2>
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

          {/* Real Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/invisible wall.jpg"
                alt="Struggling MSME owner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
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

          {/* Real Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lightbulb.jpg"
                alt="Struggling MSME owner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
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
              strategy partner — offering tailored insights, action plans, distilling knowledge it has gained from expert
              consultants, top university professors and India’s brightest MBA minds when you need a human touch. Every conversation trains 
              the system to get better, for you and for every MSME that follows.
            </p>
          </div>

          {/* Real Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Smart way.jpg"
                alt="Struggling MSME owner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>
      <section id = "social" className="w-full py-24 px-6 bg-white text-center">
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
              image: "/Rajesh Kumar.jpg",
            },
            {
              name: "Ananya Shah",
              role: "Founder, Craft & Clay, Jaipur",
              quote:
                "I always thought consulting was only for big brands. This AI tool proved me wrong. It speaks my language — simple, clear, and actionable.",
              image: "/Ananya Shah.jpg",
            },
            {
              name: "Faiz Rahman",
              role: "Managing Partner, Rahman Textiles, Tiruppur",
              quote:
                "When I saw my MSME Health Score, it felt like someone finally understood my business. I didn’t need a 100-page report — just real steps that work.",
              image: "/Faiz Rahman.jpg",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="snap-center flex-shrink-0 bg-gray-50 p-8 rounded-3xl shadow-md w-80 text-left transition-transform"
            >
              <div className="w-24 h-24 mb-6 mx-auto relative rounded-full overflow-hidden shadow-lg ring-4 ring-[#F8C57C]/30">
              <Image
                src={t.image}
                alt={t.name}
                fill
                /*className="object-cover"*/
                sizes="96px"
              />
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
      <section id = "ai" className="w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
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
              After: Our AI Platform
            </h3>

            <ul className="space-y-5 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">⚡</span>
                Instant, AI-powered diagnosis through the MSME Health Tool, which is free.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">💡</span>
                Personalized, data-backed strategy recommendations generated in minutes.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">🌍</span>
                Customised AI — continuous learning from students, experts
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">💬</span>
                 Your 24x7 multilingual virtual strategy partner.
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
      {/* =================== PRICING SECTION =================== */}
      <section id = "pricing" className="w-full py-24 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Consulting That Doesn’t Cost a Fortune — Literally.
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Why should great strategy be a luxury? Here’s how we compare.
        </p>

        {/* Pricing Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          
          {/* Traditional Consulting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-10 shadow-sm border-t-4 border-gray-400"
          >
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Before: Traditional Consulting (Grant Thornton & Others)
            </h3>

            <ul className="space-y-5 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">💰</span>
                <span><strong>Cost:</strong> ₹5–10 lakh+ per engagement and further costs if project extended or scope change</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">⏳</span>
                <span><strong>Time:</strong> 8–12 weeks before first actionable output</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">👥</span>
                <span><strong>Approach:</strong> Human consultants, static reports, limited revisions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">🏢</span>
                <span><strong>Target:</strong> Organisations with big purses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-500 text-xl">⚠️</span>
                <span><strong>Limitation:</strong> Not accessible to 98% of India’s MSMEs</span>
              </li>
            </ul>

            <div className="mt-8 h-56 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-200 text-gray-600">
              [Visual Placeholder – “Consultant Reports / Invoices”]
            </div>
          </motion.div>

          {/* AI Platform Pricing */}
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
                <span><strong>Cost:</strong> Free starter diagnostic + ₹999/month pro insights</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">⏱️</span>
                <span><strong>Time:</strong> Real-time insights within 5 minutes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">🤖</span>
                <span><strong>Approach:</strong> Always-on AI partner, continuous improvement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">🌍</span>
                <span><strong>Target:</strong> 63 million+ Indian MSMEs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">💪</span>
                <span><strong>Advantage:</strong> Scales instantly, affordable, democratized access</span>
              </li>
            </ul>

            <div className="mt-8 h-56 rounded-2xl border-2 border-dashed border-blue-200 flex items-center justify-center bg-blue-100 text-blue-600">
              [Visual Placeholder – “AI Pricing Dashboard / Tier Comparison”]
            </div>
          </motion.div>
        </div>

        {/* Why Ours Is Better Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto bg-green-50 p-10 rounded-3xl shadow-sm border-l-8 border-green-400"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Ours Wins Every Time
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traditional consulting is like buying a vintage car — impressive, but expensive and hard to maintain.
            Our model is like switching to an electric vehicle — faster, smarter, and sustainable. You pay for value,
            not overheads.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Plus, your data stays yours. The more you use the platform, the more personalized and accurate it gets.
            You’re not buying a report — you’re building an evolving business brain.
          </p>
        </motion.div>
      </section>
      {/* =================== CONVERSION PATH SECTION =================== */}
      <section id = "conversion" className="w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Happens After You Sign Up
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          We’ve kept it simple, fast, and genuinely useful — no spam, no friction, just impact.
        </p>

        {/* Conversion Steps Timeline */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto text-left">
          {[
            {
              step: "Step 1",
              title: "Quick Sign-up",
              desc: "You share a few key details about your business — revenue range, sector, and top challenges. No lengthy forms or jargon.",
              icon: "📝",
              color: "bg-blue-50 border-blue-300",
            },
            {
              step: "Step 2",
              title: "Instant MSME Health Score",
              desc: "Our AI tool instantly benchmarks your business against industry peers, flagging red zones and quick wins in under 5 minutes.",
              icon: "⚡",
              color: "bg-green-50 border-green-300",
            },
            {
              step: "Step 3",
              title: "Personalized Action Plan",
              desc: "Based on your score, you receive a customized 30-day action plan and a strategy snapshot you can actually execute.",
              icon: "📈",
              color: "bg-yellow-50 border-yellow-300",
            },
            {
              step: "Step 4",
              title: "Community & Continuous Learning",
              desc: "You join a curated network of MSME founders and mentors — sharing insights and fueling our AI’s learning loop.",
              icon: "🤝",
              color: "bg-rose-50 border-rose-300",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex-1 rounded-3xl p-8 border-2 ${s.color} shadow-sm relative`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {s.step}: {s.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Example Welcome Email */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md text-left p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Welcome Email</h3>
          <p className="text-gray-700 mb-6">
            Here’s what you’ll see in your inbox minutes after signing up:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Subject: 🎉 Welcome to Your MSME Health Dashboard!</p>
            <p className="mb-4">Hi <span className="font-medium">[Your Name]</span>,</p>
            <p className="mb-4">
              We’re thrilled to have you onboard. Your personalized MSME Health Score and strategy snapshot are ready.
            </p>
            <p className="mb-4">
              <strong>👉 Step 1:</strong> Explore your dashboard<br />
              <strong>👉 Step 2:</strong> Save your first growth plan<br />
              <strong>👉 Step 3:</strong> Join our founder community to exchange insights
            </p>
            <p>Let’s make data your competitive edge — together.</p>
            <p className="mt-6 text-sm text-gray-500">— The Fractional Consulting Team</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to See Your MSME Health Score?
          </h3>
          <p className="text-gray-600 mb-8">Join 100+ founders already discovering smarter growth paths.</p>
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-2xl shadow-md transition-all transform hover:scale-105">
            Try the Free MSME Health Tool →
          </button>
        </motion.div>
      </section>
      <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
    `}</style>
    </main>
  );
}