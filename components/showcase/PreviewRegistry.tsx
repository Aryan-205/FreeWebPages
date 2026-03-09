"use client";

import React, { lazy, Suspense } from "react";
import type { ComponentType } from "react";

const BloomAILanding = lazy(
  () => import("@/components/showcase/hero-sections/BloomAILanding")
);

const registry: Record<string, ComponentType> = {
  "bloom-ai": BloomAILanding,
};

type PreviewLoaderProps = {
  slug: string;
  fallback?: React.ReactNode;
};

export function PreviewLoader({ slug, fallback }: PreviewLoaderProps) {
  const Component = registry[slug];
  if (!Component) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-neutral-400">
        Preview not found.
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        fallback ?? (
          <div className="flex min-h-[400px] items-center justify-center text-neutral-400">
            Loading…
          </div>
        )
      }
    >
      <Component />
    </Suspense>
  );
}
