export type CollectionSlug =
  | "havn"
  | "strand"
  | "voss"
  | "lykke"
  | "uterom"
  | "lys";

export type RoomCategory =
  | "living"
  | "dining"
  | "bedroom"
  | "lounge"
  | "outdoor"
  | "lighting";

export interface Material {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface DesignerNote {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface Collection {
  slug: CollectionSlug;
  name: string;
  shortName: string;
  category: RoomCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  heroImage: string;
  thumbnailImage: string;
  productCount: number;
  startingPrice: number;
  designerNote?: DesignerNote;
  materials?: Material[];
  featuredProductSlugs: string[];
}
