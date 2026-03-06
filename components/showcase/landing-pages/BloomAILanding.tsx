"use client";

import React from "react";
import { motion } from "motion/react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const revealVariants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function BloomAILanding() {
  return (
    <div
      className={`${figtree.className} min-h-screen bg-[#FDF6F9] text-[#111111] selection:bg-[#F8B4C6] selection:text-white`}
    >
      <style jsx global>{`
        body {
          letter-spacing: -0.01em;
          line-height: 1.15;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <img
          src="/background.png"
          alt="Flower Field Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_20%,_rgba(253,246,249,0.3)_100%)] pointer-events-none" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 ">
        <div className="w-full max-w-7xl pl-8 pr-2 py-2 flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
          <div className="text-2xl font-bold tracking-tight">BloomAI</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#555555]">
            {["Features", "How It Works", "Pricing", "Testimonials"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#EC407A] text-lg font-medium transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <PrimaryButton label="Get Started" />
        </div>
      </nav>

      <main className="relative z-10 pt-40 pb-20 px-6">
        <section className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight"
          >
            Think Clearly.
            <br />
            Build Fearlessly.
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-lg md:text-xl text-[#555555] max-w-[600px]"
          >
            BloomAI transforms your scattered thoughts into structured action
            plans. Journal with AI, organize your ideas, and move forward with
            clarity.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-row gap-4 items-center">
              <PrimaryButton label="Get Started" />
              <button className="px-6 py-4 font-semibold underline decoration-[#F8B4C6] underline-offset-4 transition-all text-lg">
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mt-12 text-black text-sm font-semibold bg-white/60 backdrop-blur-xs rounded-full px-4 py-2"
          >
            Trusted by 12,000+ creators and founders
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="AI Thought Structuring"
            desc="Turn messy brain dumps into clean execution roadmaps."
          />
          <FeatureCard
            title="Focus Mode"
            desc="Remove distractions and work inside a calm, guided writing environment."
          />
          <FeatureCard
            title="Execution Planner"
            desc="Convert insights into tasks automatically with AI assistance."
          />
        </section>

        <section className="max-w-4xl mx-auto mt-40 text-center">
          <p className="text-3xl md:text-4xl font-semibold italic text-[#111111]">
            "BloomAI feels like thinking with a second brain."
          </p>
          <p className="mt-6 text-[#555555] uppercase tracking-widest text-sm">
            — Founder, YC-backed startup
          </p>
        </section>

        <section className="mt-40 mb-20 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Start thinking with clarity today.
          </h2>
          <PrimaryButton label="Get Started Free" />
        </section>
      </main>
    </div>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, filter: "brightness(1.05)" }}
      className="relative group px-10 py-4 bg-[#F8B4C6] text-white font-bold rounded-full border-[2px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#EC407A]/60 to-transparent blur-md pointer-events-none" />
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#555555] leading-relaxed">{desc}</p>
    </div>
  );
}
