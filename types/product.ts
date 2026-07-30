import type { CollectionSlug } from "./collection";

export interface ProductImage {
  src: string;
  alt: string;
  isPrimary: boolean;
}

export interface VariantOption {
  value: string;
  label: string;
  swatch?: string;
  available: boolean;
}

export interface ProductVariant {
  type: "upholstery" | "frame" | "size" | "finish";
  label: string;
  options: VariantOption[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface WhyPoint {
  heading: string;
  body: string;
}

export interface Product {
  slug: string;
  collectionSlug: CollectionSlug;
  name: string;
  tagline: string;
  price: number;
  description: string;
  images: ProductImage[];
  variants: ProductVariant[];
  specifications: ProductSpec[];
  whyThisPiece?: WhyPoint[];
  materials: string[];
  relatedProductSlugs: string[];
  relatedArticleSlug?: string;
  inStock: boolean;
  leadTimeWeeks?: number;
  sku: string;
}
