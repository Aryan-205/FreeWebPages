import React from "react";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] antialiased">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-6 md:px-12 md:pt-8">
        {/* Navbar */}
        <header className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm shadow-black/5">
              <div className="h-4 w-4 rotate-45 rounded-[6px] border border-black/60 bg-black" />
            </div>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">
              acme
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-500 md:flex">
            <button className="transition hover:text-neutral-900">
              Services
            </button>
            <button className="transition hover:text-neutral-900">Plans</button>
            <button className="transition hover:text-neutral-900">
              Case Studies
            </button>
            <button className="transition hover:text-neutral-900">
              How it Works
            </button>
          </nav>

          {/* CTA pill */}
          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-sm shadow-black/20 transition hover:bg-neutral-900">
            See plans
          </button>
        </header>

        {/* Hero */}
        <main className="grid items-center gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Copy */}
          <section className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-black px-3 py-1">
              <span className="text-[10px] font-medium tracking-[0.18em] text-white">
                THE LEADING PRODUCT DESIGN AGENCY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-semibold tracking-[-0.02em] text-[#1A1A1A] md:text-6xl lg:text-7xl">
              We make AI-built prototypes{" "}
              <span className="block">
                <span className="font-serif italic font-semibold">
                  reliable
                </span>{" "}
                and production ready.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-base text-[#666666] md:text-lg">
              We bridge the gap between AI-built code and real-world
              reliability, so you can ship and grow your business without
              worrying about the tech.
            </p>

            {/* CTA group */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <button className="rounded-full bg-[#3B82F6] px-8 py-3 text-sm font-medium text-white shadow-sm shadow-blue-500/30 transition hover:bg-[#2563EB]">
                Book a call
              </button>
              <button className="rounded-full border border-neutral-200 bg-white px-8 py-3 text-sm font-medium text-black shadow-sm shadow-black/5 transition hover:bg-neutral-50">
                See plans
              </button>
            </div>
          </section>

          {/* Visual diagram */}
          <section className="relative flex items-center justify-center">
            <div className="relative h-[320px] w-full max-w-[360px] rounded-[32px] border border-white/40 bg-[radial-gradient(circle_at_0_0,#ffffff_0,transparent_55%),radial-gradient(circle_at_100%_0,#e0e7ff_0,transparent_45%)] bg-[#F9F7F2]/80 shadow-[0_40px_80px_rgba(15,23,42,0.18)]">
              {/* Grid background */}
              <div className="pointer-events-none absolute inset-6 rounded-3xl bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[32px_32px]" />

              <div className="relative flex h-full items-center justify-center">
                {/* Center disk */}
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-linear-to-b from-white to-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.30)]" />
                  <div className="absolute inset-[18%] rounded-full border border-black/80 bg-black flex items-center justify-center text-3xl font-semibold text-white">
                    K
                  </div>
                  <div className="absolute -inset-4 rounded-[999px] border border-white/50 bg-blue-100/30 blur-lg" />
                </div>

                {/* Connector lines */}
                <div className="pointer-events-none absolute inset-0">
                  <svg
                    viewBox="0 0 360 320"
                    className="h-full w-full text-slate-200"
                  >
                    <g stroke="currentColor" strokeWidth="1.2" fill="none">
                      <line x1="180" y1="152" x2="90" y2="90" />
                      <line x1="180" y1="152" x2="270" y2="90" />
                      <line x1="180" y1="168" x2="96" y2="230" />
                      <line x1="180" y1="168" x2="268" y2="230" />
                    </g>
                  </svg>
                </div>

                {/* Top-left pill */}
                <div className="absolute left-4 top-6">
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md shadow-black/15">
                    Lovable
                  </div>
                </div>

                {/* Top-right pill */}
                <div className="absolute right-4 top-4">
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md shadow-black/15">
                    bolt
                  </div>
                </div>

                {/* Bottom-left pill */}
                <div className="absolute bottom-6 left-3">
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-md shadow-black/15">
                    Replit
                  </div>
                </div>

                {/* Bottom-right browser card */}
                <div className="absolute bottom-6 right-3">
                  <div className="w-36 rounded-2xl border border-neutral-200 bg-white/95 p-3 shadow-lg shadow-black/20 backdrop-blur">
                    <div className="mb-2 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="h-14 rounded-xl bg-linear-to-br from-slate-50 to-slate-100" />
                    <p className="mt-2 text-[10px] font-medium tracking-[0.18em] text-neutral-700">
                      READY FOR LAUNCH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
