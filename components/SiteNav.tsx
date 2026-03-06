"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hero-sections", label: "Hero Sections" },
  { href: "/landing-pages", label: "Landing Pages" },
] as const;

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 hover:text-neutral-600"
        >
          Free Pages
        </Link>
        <div className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
