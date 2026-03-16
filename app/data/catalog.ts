import type { ComponentType } from "react";

export type CatalogCategory = "hero-sections" | "landing-pages";

export type CatalogEntry = {
  slug: string;
  title: string;
  image: string;
  description: string;
  category: CatalogCategory;
  /** Optional tags for filtering/display (e.g. "landing", "hero", "motion"). */
  tags?: string[];
  /** Path relative to project root for reading source (e.g. for code view). */
  codeFilePath: string;
};

export const catalog: CatalogEntry[] = [
  {
    slug: "bloom-ai",
    title: "BloomAI Landing",
    image:
      "https://pbs.twimg.com/media/HCnSZwcawAABrLj?format=jpg&name=4096x4096",
    description:
      "Full landing page with hero, feature grid, testimonial, and CTAs. Soft pink palette and motion animations.",
    category: "hero-sections",
    tags: ["landing", "hero", "motion", "tailwind"],
    codeFilePath: "components/showcase/hero-sections/BloomAILanding.tsx",
  },
  {
    slug: "escape-hero",
    title: "Escape Hero",
    image:
      "https://pbs.twimg.com/media/HCzclCsbcAEmua-?format=jpg&name=4096x4096",
    description:
      "Full landing page with hero, feature grid, testimonial, and CTAs. Soft pink palette and motion animations.",
    category: "hero-sections",
    tags: ["landing", "hero", "motion", "tailwind"],
    codeFilePath: "components/showcase/hero-sections/EscapeHero.tsx",
  },
  {
    slug: "builder-hero",
    title: "Builder Hero",
    image: "/ThirdHeroSection.png",
    description:
      "Minimal productized service hero with split layout, bold typography, and clean SaaS illustration card.",
    category: "hero-sections",
    tags: ["hero", "saas", "builder", "tailwind"],
    codeFilePath: "components/showcase/hero-sections/BuilderHero.tsx",
  },
  {
    slug: "train-hero",
    title: "Train Hero",
    image: "https://pbs.twimg.com/media/HDg9MGNakAECMrX?format=jpg&name=large",
    description:
      "Train hero section with a train window view and a form to join the waitlist.",
    category: "hero-sections",
    tags: ["hero", "saas", "builder", "tailwind"],
    codeFilePath: "components/showcase/hero-sections/TrainHero.tsx",
  }
];

export function getEntriesByCategory(
  category: CatalogCategory,
): CatalogEntry[] {
  return catalog.filter((e) => e.category === category);
}

export function getEntryBySlug(
  category: CatalogCategory,
  slug: string,
): CatalogEntry | undefined {
  return catalog.find((e) => e.category === category && e.slug === slug);
}
