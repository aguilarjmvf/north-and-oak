import type { Article } from "@/types/article";

const UNS = "https://images.unsplash.com";

export const articles: Article[] = [
  {
    slug: "havn-collection-process",
    title: "What we learned building the Havn Collection from scratch",
    excerpt:
      "Three years, eleven prototypes, and one argument about arm height that turned out to matter more than anyone expected.",
    category: "studio-notes",
    categoryLabel: "Studio Notes",
    author: { name: "Mara Voss", role: "Design Director" },
    publishedAt: "2026-05-12",
    readTimeMinutes: 8,
    heroImage: `${UNS}/photo-1481627834876-b7833e8f5570?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "Design sketches and prototype pieces for the Havn Collection spread across a studio worktable",
    content: "",
    relatedArticleSlugs: ["white-oak-why-we-keep-coming-back", "how-to-buy-furniture-once"],
    relatedCollectionSlug: "havn",
    featured: true,
  },
  {
    slug: "white-oak-why-we-keep-coming-back",
    title: "White oak: why we keep coming back",
    excerpt:
      "It is not the most dramatic hardwood. It is not the rarest or the most expensive. It is the one that gets better every year you live with it.",
    category: "material-stories",
    categoryLabel: "Material Stories",
    author: { name: "Emil Strand", role: "Creative Director" },
    publishedAt: "2026-04-03",
    readTimeMinutes: 6,
    heroImage: `${UNS}/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "A white oak plank with visible ray fleck grain in workshop light",
    content: "",
    relatedArticleSlugs: ["the-honest-truth-about-reclaimed-wood", "havn-collection-process"],
    relatedCollectionSlug: "havn",
  },
  {
    slug: "the-case-against-the-accent-wall",
    title: "The case against the accent wall",
    excerpt:
      "What a single statement wall actually says about the room around it — and what a quieter approach offers instead.",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    author: { name: "Emil Strand", role: "Creative Director" },
    publishedAt: "2026-03-18",
    readTimeMinutes: 4,
    heroImage: `${UNS}/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "A minimal living room with a single painted feature wall in warm grey",
    content: "",
    relatedArticleSlugs: ["how-to-buy-furniture-once"],
  },
  {
    slug: "how-to-buy-furniture-once",
    title: "How to buy furniture once",
    excerpt:
      "The habits, questions, and slow thinking that separate a purchase from an investment.",
    category: "living-well",
    categoryLabel: "Living Well",
    author: { name: "Mara Voss", role: "Design Director" },
    publishedAt: "2026-02-07",
    readTimeMinutes: 10,
    heroImage: `${UNS}/photo-1493809842364-78817add7ffb?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "An unfinished living room with a single piece of furniture and natural light",
    content: "",
    relatedArticleSlugs: ["white-oak-why-we-keep-coming-back", "havn-collection-process"],
    relatedProductSlug: "havn-lounge-chair",
  },
  {
    slug: "kenji-watanabe-maker-profile",
    title: "Kenji Watanabe makes joints that outlast everything else",
    excerpt:
      "A visit to the joinery workshop where every North & Oak frame begins.",
    category: "maker-profiles",
    categoryLabel: "Maker Profiles",
    author: { name: "Emil Strand", role: "Creative Director" },
    publishedAt: "2026-01-14",
    readTimeMinutes: 7,
    heroImage: `${UNS}/photo-1541123437800-1bb1317badc2?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "A woodworker at a bench in a timber workshop, examining a joint",
    content: "",
    relatedArticleSlugs: ["havn-collection-process"],
    relatedCollectionSlug: "havn",
  },
  {
    slug: "the-honest-truth-about-reclaimed-wood",
    title: "The honest truth about reclaimed wood",
    excerpt:
      "What it actually means for a piece of furniture to use reclaimed material — and what the industry gets wrong about it.",
    category: "material-stories",
    categoryLabel: "Material Stories",
    author: { name: "Emil Strand", role: "Creative Director" },
    publishedAt: "2025-12-09",
    readTimeMinutes: 6,
    heroImage: `${UNS}/photo-1567016432779-094069958ea5?w=1600&h=900&fit=crop&q=80`,
    heroImageAlt: "Stacked reclaimed timber boards with varied grain tones and natural weathering",
    content: "",
    relatedArticleSlugs: ["white-oak-why-we-keep-coming-back"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getRecentArticles(count = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}
