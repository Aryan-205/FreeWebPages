"use client";

import Link from 'next/link';
import { Sparkles, ArrowUpRight, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white p-4 md:p-8 font-['Plus_Jakarta_Sans',_sans-serif] tracking-tight">
      <main 
        className="relative h-[calc(100vh-4rem)] w-full rounded-[2rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05), transparent), url('/HeroBackground.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* --- Navbar --- */}
        <nav className="absolute top-6 w-[90%] max-w-6xl flex items-center justify-between px-2 py-2 backdrop-blur-[24px] bg-white/20 border border-white/30 rounded-full z-50">
          <div className="flex items-center gap-2 pl-6">
            <div className="bg-[#FDE047] p-1.5 rounded-lg shadow-[0_0_15px_rgba(253,224,71,0.5)]">
              <Sparkles size={18} className="text-black fill-black" />
            </div>
            <span className="text-xl font-bold text-white drop-shadow-sm">evie</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Join as vendor</Link>
            <Link href="#" className="hover:text-white transition-colors">Vendors</Link>
            <Link href="#" className="hover:text-white transition-colors">AI Planner</Link>
          </div>

          <button className="flex items-center gap-2 bg-[#FDE047] hover:scale-105 transition-all duration-300 text-black px-6 py-3 rounded-full font-bold shadow-lg shadow-yellow-400/20">
            Get Started
            <div className="bg-white rounded-full p-1">
              <ArrowUpRight size={16} strokeWidth={3} />
            </div>
          </button>
        </nav>

        {/* --- Hero Content --- */}
        <div className="flex flex-col items-center text-center px-4 z-10 max-w-4xl space-y-8">
          
          {/* Announcement Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-white/50 shadow-sm animate-fade-in">
            <Sparkles size={16} className="text-[#EAB308]" />
            <span className="text-sm font-semibold text-gray-800">
              Recognized as a top Innovative AI event planner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tighter">
            Dreams don&apos;t happen by chance <br />
            they&apos;re planned with <span className="text-[#EAB308] italic font-serif tracking-normal">love.</span>
          </h1>

          {/* Search Input */}
          <div className="w-full max-w-xl relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Sparkles size={20} className="text-[#EAB308] opacity-80" />
            </div>
            <input 
              type="text"
              placeholder="Start your event planning with evie..."
              className="w-full bg-white/25 backdrop-blur-[20px] border border-white/40 rounded-3xl py-6 pl-14 pr-6 text-lg text-gray-900 placeholder:text-gray-700 outline-none focus:ring-2 ring-white/50 transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_transparent_60%,_rgba(0,0,0,0.05)_100%)]" />
      </main>
    </div>
  );
}