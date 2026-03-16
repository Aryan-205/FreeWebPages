"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import {motion} from "motion/react";

export default function TrainHero() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Head>
        <title>Train Hero | Focus in a Distracted World</title>
        <meta name="description" content="Tools for deep work and clarity." />
      </Head>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 ">
        <div className="text-2xl font-bold tracking-tight">Train Hero</div>
        
        <div className="hidden md:flex items-center gap-8 px-6 py-2 glass-card rounded-full">
          {['Features', 'Docs', 'News', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-gray-300 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
          Join waitlist
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <motion.main 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-red-500"
        style={{
          backgroundImage: `url('/background31.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >

        {/* Content Container (Simulating the Window Frame) */}
        <div className="relative z-10 max-w-4xl px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-black rounded-full text-xs font-medium tracking-wide glass-card">
              7000+ people already subscribed
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Focus in a <br /> Distracted World
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Tools for deep work and clarity. Say goodbye to constant pings and endless tabs. Say hello to productivity.
          </p>

          {/* Email CTA Form */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto border p-2 rounded-full glass-card">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-2 outline-none placeholder:text-gray-800 text-lg"
              />
            </div>
            <button className="w-full md:w-auto whitespace-nowrap bg-white text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition-transform text-xs">
              Join waitlist
            </button>
          </div>
        </div>
      </motion.main>

      {/* --- Simple Footer --- */}
      <footer className="absolute bottom-8 w-full text-center z-20">
        <p className="text-white/40 text-xs tracking-widest uppercase">
          © 2026 Bola Systems Inc.
        </p>
      </footer>
    </div>
  );
}