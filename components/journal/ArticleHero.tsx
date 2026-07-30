import Image from "next/image";
import type { Article } from "@/types/article";
import { ArticleMeta } from "./ArticleMeta";

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <div>
      <div className="container-brand pt-12 pb-10 max-w-3xl">
        <p className="text-label mb-4" style={{ color: "var(--oak)" }}>
          {article.categoryLabel}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, var(--text-h1))",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--char)",
            marginBottom: "1.25rem",
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontSize: "var(--text-lead)",
            fontWeight: 300,
            color: "var(--slate)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          {article.excerpt}
        </p>
        <ArticleMeta article={article} />
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "21/9", backgroundColor: "var(--linen)" }}
      >
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
