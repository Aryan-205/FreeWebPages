import Link from "next/link";
import { getEntriesByCategory } from "@/app/data/catalog";
import Image from "next/image";

export default function LandingPagesPage() {
  const entries = getEntriesByCategory("landing-pages");

  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-neutral-900">
          Landing Pages
        </h1>
        <p className="mt-2 text-neutral-600">
          Full-page templates with hero, features, and CTAs. Copy the code and
          customize.
        </p>

        {entries.length === 0 ? (
          <p className="mt-12 text-neutral-500">
            No landing pages yet. Check back soon.
          </p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/landing-pages/${entry.slug}`}
                  className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-neutral-300 hover:shadow-md"
                >
                  <div>
                    <Image src={entry.image} alt={entry.title} width={1000} height={1000} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <div className="p-5">
                    <h2 className="font-semibold text-neutral-900">
                      {entry.title}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                      {entry.description}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-neutral-500 hover:text-neutral-900">
                      View & get code →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
