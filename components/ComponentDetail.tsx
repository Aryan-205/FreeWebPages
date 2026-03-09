"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { CatalogEntry } from "@/app/data/catalog";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from "next/image";

type ComponentDetailProps = {
  entry: CatalogEntry;
  code: string;
};

export default function ComponentDetail({ entry, code }: ComponentDetailProps) {

  const [height, setHeight] = useState(true);


  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Link
          href={`/${entry.category}`}
          className="mb-6 inline-block text-sm font-medium text-neutral-400 hover:text-neutral-200"
        >
          ← Back to {entry.category === "hero-sections" ? "Hero Sections" : "Landing Pages"}
        </Link>

        <div className="rounded-xl shadow-[0_0_10px_1px_rgba(255,255,255,0.2)] bg-neutral-900/50 p-4 md:p-6">
          {/* preview section */}
          <section className="w-full flex justify-center items-center">
            <div className="overflow-hidden rounded-lg border">
              <div className={`w-full h-full}`}
              >
                <Image src={entry.image} alt={entry.title} width={800} height={1000} className="w-full h-full object-cover" unoptimized />
              </div>
            </div>
          </section>

          <div className="flex flex-col justify-center w-full gap-8 mt-8">
            {/* Left: metadata (Title, Tags, Description) — aligns to bottom on large screens */}
            <div className="flex flex-col justify-end">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Title
                  </span>
                  <h1 className="mt-1 text-2xl font-bold text-white">
                    {entry.title}
                  </h1>
                </div>
                {entry.tags && entry.tags.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Tags
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-neutral-700/80 px-2.5 py-1 text-sm text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Description
                  </span>
                  <p className="mt-2 text-neutral-300">{entry.description}</p>
                </div>
              </div>
            </div>

            {/* Right: Preview (top) + Code (bottom) */}
            <div className="flex min-h-0 flex-col gap-6">

              {/* code section */}
              <section className="flex min-h-0 shrink">
                <div className="flex w-full flex-col overflow-hidden rounded-lg border border-neutral-600 bg-neutral-950">
                  <div className="flex shrink-0 items-center justify-between border-b border-neutral-700/50 px-4 py-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Code
                    </span>
                    <CopyButton code={code} />
                  </div>
                  <div 
                    className="overflow-auto text-sm relative"
                    style={{
                      height: height ? "200px" : "100%",
                      flexGrow: height ? "0" : "1" 
                    }}
                    >
                    <SyntaxHighlighter
                      language="tsx"
                      style={vscDarkPlus}
                      showLineNumbers
                      customStyle={{
                        padding: '25px',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)', // Adds depth
                        background: '#1e1e1e', // Match this to your theme's background
                      }}
                    >
                      {code}
                    </SyntaxHighlighter>
                    {
                      height && (
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-neutral-900 to-transparent p-2 flex justify-center items-center">
                          <button 
                            className="rounded-md border border-neutral-600 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:bg-neutral-700 cursor-pointer" 
                            onClick={() => setHeight(false)}
                          >
                            Show more
                          </button>
                        </div>
                      ) 
                    }
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md border border-neutral-600 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:bg-neutral-700 cursor-pointer"
    >
      {copied ? "Copied!" : "Copy code"}
    </button>
  );
}
