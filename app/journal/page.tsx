import type { Metadata } from "next";
import { articles, getFeaturedArticle } from "@/data/articles";
import { ArticleGrid } from "@/components/journal/ArticleGrid";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The North & Oak Journal — essays on design, material stories, and the habit of living well.",
};

export default function JournalPage() {
  const featured = getFeaturedArticle();
  const rest = articles.filter((a) => a.slug !== featured?.slug);

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <AnimatedSection className="max-w-2xl mb-14">
            <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
              The Journal
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
              On design, materials, and the habit of living well.
            </h1>
          </AnimatedSection>

          {featured && (
            <div className="mb-16 pb-16 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <ArticleCard article={featured} size="featured" priority />
            </div>
          )}

          <ArticleGrid articles={rest} />
        </div>
      </section>

      <NewsletterSection
        heading="In your inbox, when it matters."
        body="New material stories, collection launches, and the occasional long read on why good design is worth paying for."
        finePrint="Twice a month. Unsubscribe in one click."
      />
    </>
  );
}
