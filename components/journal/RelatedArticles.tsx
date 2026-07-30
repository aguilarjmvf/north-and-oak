import type { Article } from "@/types/article";
import { ArticleCard } from "./ArticleCard";

interface RelatedArticlesProps {
  articles: Article[];
  heading?: string;
}

export function RelatedArticles({
  articles,
  heading = "You might also like",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--birch)" }}
    >
      <div className="container-brand">
        <h2
          className="mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 2.5vw, var(--text-h3))",
            fontWeight: 400,
            color: "var(--char)",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
