import type { Metadata } from "next";
import { collections } from "@/data/collections";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse all North & Oak furniture collections — living room, dining room, bedroom, outdoor, and lighting. Sustainably sourced, built to last.",
};

export default function CollectionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Collections" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <AnimatedSection className="max-w-2xl">
            <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
              All collections
            </p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, var(--text-display))",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--char)",
                marginBottom: "1rem",
              }}
            >
              Designed to work together.
            </h1>
            <p
              style={{
                fontSize: "var(--text-lead)",
                fontWeight: 300,
                color: "var(--slate)",
                lineHeight: 1.6,
              }}
            >
              Each North & Oak collection begins with a room — what it asks of the furniture, how the
              light moves through it, what the person living there actually does in that space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CollectionGrid collections={collections} />
    </>
  );
}
