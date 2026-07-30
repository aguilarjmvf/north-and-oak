import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { articles } from "@/data/articles";

const BASE = "https://northandoak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/collections`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/journal`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/trade`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: new Date(), priority: 0.5 },
  ];

  const collectionRoutes: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${BASE}/collections/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/collections/${p.collectionSlug}/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/journal/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    priority: 0.6,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes, ...articleRoutes];
}
