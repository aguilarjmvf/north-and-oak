import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  size?: "default" | "featured";
  priority?: boolean;
}

export function ArticleCard({ article, size = "default", priority = false }: ArticleCardProps) {
  const isFeatured = size === "featured";

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group flex flex-col gap-0"
      aria-label={`Read: ${article.title}`}
    >
      <div
        className="relative overflow-hidden rounded-[4px]"
        style={{ aspectRatio: isFeatured ? "16/9" : "16/9" }}
      >
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority={priority}
          sizes={isFeatured ? "100vw" : "(max-width:768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-5 flex flex-col gap-3">
        <span
          className="text-label"
          style={{ color: "var(--oak)" }}
        >
          {article.categoryLabel}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: isFeatured ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.2rem, 1.8vw, 1.5rem)",
            fontWeight: 400,
            lineHeight: 1.25,
            color: "var(--char)",
          }}
          className="transition-colors duration-200 group-hover:text-oak"
        >
          {article.title}
        </h3>

        <p
          className="line-clamp-2"
          style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}
        >
          {article.excerpt}
        </p>

        <div
          className="flex items-center gap-3 text-label"
          style={{ color: "var(--warmstone)" }}
        >
          <span>{article.readTimeMinutes} min read</span>
          <span aria-hidden>·</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
