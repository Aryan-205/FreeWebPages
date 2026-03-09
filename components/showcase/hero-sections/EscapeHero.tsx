import React from 'react';
import { Compass, Search, Trophy, ChevronDown } from 'lucide-react';

// Note: Ensure you have a serif font available in your tailwind config 
// or import one like 'Playfair Display' for the "Inner Peace" highlight.

const EscapeLandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('/background2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} 
      >
        {/* Top-to-bottom subtle dark gradient for nav legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-60" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 flex h-[100px] items-center justify-between px-[60px]">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Compass className="text-white w-6 h-6 transition-transform group-hover:rotate-45" />
          <span className="text-white text-2xl font-medium tracking-tight">Escape</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium tracking-tight">
          {["Locations", "Pricing", "FAQ", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors text-xl">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95">
          Get early access
        </button>
      </nav>

      {/* HERO SECTION */}
      <main className="relative z-10 flex flex-col items-center text-center mt-[12vh] px-6">
        
        {/* Award Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium mb-8 animate-fade-in">
          <Trophy className="w-3 h-3 text-yellow-300 fill-yellow-300" />
          <span>Voted best peaceful place in the world</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-[#111111] text-6xl md:text-8xl font-medium leading-[1.1] tracking-[-0.03em] mb-6">
          The best place to find your <br />
          <span className="italic font-serif text-[#7c745d] drop-shadow-sm">Inner Peace</span>
        </h1>

        {/* Sub-description */}
        <p className="max-w-[500px] text-[#444444] text-lg leading-relaxed mb-10">
          Feeling ready to relax? Find the best location to reconnect with nature and find inner calm.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-[600px] group">
          <div className="flex items-center p-2 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/50 focus-within:ring-2 ring-black/5 transition-all">
            <div className="pl-6 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for a location..." 
              className="w-full px-4 py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
            />
            <button className="bg-[#333333] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors whitespace-nowrap">
              Search Now
            </button>
          </div>
        </div>
      </main>

      {/* SOCIAL PROOF (Bottom of Fold) */}
      <div className="absolute bottom-16 w-full flex flex-col items-center gap-6">
        <span className="text-[#444444]/60 text-xs font-semibold uppercase tracking-widest">
          Featured as the safest place to go in
        </span>
        <div className="flex items-center justify-center gap-12 grayscale opacity-60">
          {["Forbes", "Bloomberg", "The Washington Post", "Men's Health"].map((logo) => (
            <span key={logo} className="text-[#111111] font-bold text-xl tracking-tighter italic">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER TAB */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="bg-white px-8 py-3 rounded-t-3xl shadow-lg flex items-center gap-2 cursor-pointer hover:pt-5 transition-all group">
          <span className="text-sm font-semibold text-[#111111]">Discover more</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </div>
      </div>

    </div>
  );
};

export default EscapeLandingPage;