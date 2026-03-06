import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  getEntryBySlug,
  getEntriesByCategory,
  type CatalogCategory,
} from "@/app/data/catalog";
import ComponentDetail from "@/components/ComponentDetail";

const category: CatalogCategory = "hero-sections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getEntriesByCategory(category).map((e) => ({ slug: e.slug }));
}

export default async function HeroSectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(category, slug);
  if (!entry) notFound();

  const fullPath = join(process.cwd(), entry.codeFilePath);
  let code: string;
  try {
    code = readFileSync(fullPath, "utf-8");
  } catch {
    code = "// Source file not found.";
  }

  return <ComponentDetail entry={entry} code={code} />;
}
