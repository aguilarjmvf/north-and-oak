import type { Article } from "@/types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  columns?: 2 | 3;
}

export function ArticleGrid({ articles, columns = 3 }: ArticleGridProps) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-10"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10";

  return (
    <div className={gridClass}>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
