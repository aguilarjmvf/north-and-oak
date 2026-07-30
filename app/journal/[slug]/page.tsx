import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRecentArticles } from "@/data/articles";
import { ArticleHero } from "@/components/journal/ArticleHero";
import { ArticleBody } from "@/components/journal/ArticleBody";
import { RelatedArticles } from "@/components/journal/RelatedArticles";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      section: article.categoryLabel,
      images: [{ url: article.heroImage, alt: article.heroImageAlt }],
    },
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedArticleSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => a !== undefined)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : getRecentArticles(3).filter((a) => a.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
    publisher: { "@type": "Organization", name: "North & Oak", url: "https://northandoak.com" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: article.title },
        ]}
      />

      <article>
        <ArticleHero article={article} />
        {article.content ? (
          <ArticleBody content={article.content} />
        ) : (
          <div className="container-brand py-20 text-center">
            <p style={{ color: "var(--warmstone)", fontSize: "var(--text-small)" }}>
              Full article coming soon.
            </p>
          </div>
        )}
      </article>

      <RelatedArticles articles={fallbackRelated} />

      <NewsletterSection
        heading="Worth the inbox space."
        body="New essays, material stories, and collection launches — twice a month."
        finePrint="No frequency abuse. Unsubscribe in one click."
      />
    </>
  );
}
