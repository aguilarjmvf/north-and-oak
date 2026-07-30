import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArticleCard } from "@/components/journal/ArticleCard";
import type { Article } from "@/types/article";

interface JournalTeaserProps {
  heading: string;
  subheading?: string;
  articles: Article[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function JournalTeaser({
  heading,
  subheading,
  articles,
  ctaLabel = "Read the Journal",
  ctaHref = "/journal",
}: JournalTeaserProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container-brand">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading heading={heading} subheading={subheading} />
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 flex-shrink-0 transition-colors duration-200 hover:text-oak-dark"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "var(--oak)",
            }}
          >
            {ctaLabel}
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.slice(0, 3).map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.1}>
              <ArticleCard article={article} priority={i === 0} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
