import Image from "next/image";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/utils";

interface ArticleMetaProps {
  article: Article;
}

export function ArticleMeta({ article }: ArticleMetaProps) {
  return (
    <div className="flex items-center gap-4">
      {article.author.image && (
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--linen)",
          }}
        >
          <Image
            src={article.author.image}
            alt={article.author.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      )}
      <div>
        <p style={{ fontSize: "var(--text-small)", fontWeight: 500, color: "var(--char)" }}>
          {article.author.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.06em",
            color: "var(--warmstone)",
          }}
        >
          {article.author.role} · {formatDate(article.publishedAt)} · {article.readTimeMinutes} min read
        </p>
      </div>
    </div>
  );
}
