import type { CollectionSlug } from "./collection";

export type ArticleCategory =
  | "studio-notes"
  | "material-stories"
  | "design-thinking"
  | "living-well"
  | "maker-profiles";

export interface Author {
  name: string;
  role: string;
  image?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  author: Author;
  publishedAt: string;
  readTimeMinutes: number;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  relatedArticleSlugs: string[];
  relatedProductSlug?: string;
  relatedCollectionSlug?: CollectionSlug;
  featured?: boolean;
}
