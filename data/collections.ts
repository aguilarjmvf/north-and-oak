import type { Collection } from "@/types/collection";

const UNS = "https://images.unsplash.com";

export const collections: Collection[] = [
  {
    slug: "havn",
    name: "The Havn Collection",
    shortName: "Havn",
    category: "living",
    categoryLabel: "Living Room",
    tagline: "Softer profiles for rooms that hold more than one kind of moment.",
    description:
      "Designed around the idea that a living room should feel like an arrival. Softer curves, upholstery chosen for texture, and a palette that holds its quiet across seasons.",
    heroImage: `${UNS}/photo-1555041469-a586c61ea9bc?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1555041469-a586c61ea9bc?w=800&h=1000&fit=crop&q=80`,
    productCount: 14,
    startingPrice: 680,
    designerNote: {
      quote:
        "The brief we gave ourselves was: what does a room look like when it knows what it's for? The Havn pieces are heavier-feeling than they are heavy. That was deliberate.",
      author: "Mara Voss",
      role: "Design Director",
    },
    materials: [
      {
        name: "White Oak",
        description:
          "Sourced from a certified mill in the Willamette Valley, Oregon. Air-dried 18 months before milling. Hand-finished with a water-based hardwax oil.",
        image: `${UNS}/photo-1558618666-fcd25c85cd64?w=800&h=533&fit=crop&q=80`,
        alt: "Close-up of white oak grain with hardwax oil finish",
      },
      {
        name: "Performance Linen",
        description:
          "58% linen, 42% recycled polyester. Stain-resistant without chemical treatment. Available in Natural, Fog, and Slate.",
        image: `${UNS}/photo-1586023492125-27b2c045efd7?w=800&h=533&fit=crop&q=80`,
        alt: "Natural linen upholstery weave close-up",
      },
      {
        name: "Cold-rolled Steel",
        description:
          "CNC-formed in our Troutdale workshop. Finished with a matte black powder coat rated for 10 years of indoor use.",
        image: `${UNS}/photo-1493809842364-78817add7ffb?w=800&h=533&fit=crop&q=80`,
        alt: "Matte black powder-coated steel surface detail",
      },
    ],
    featuredProductSlugs: [
      "havn-sofa-3-seat",
      "havn-lounge-chair",
      "havn-coffee-table",
      "havn-side-table",
    ],
  },
  {
    slug: "strand",
    name: "The Strand Collection",
    shortName: "Strand",
    category: "dining",
    categoryLabel: "Dining Room",
    tagline: "White oak and blackened steel. Tables that earn their place.",
    description:
      "Solid white oak and blackened steel. Tables built for long meals and longer conversations.",
    heroImage: `${UNS}/photo-1617806118233-18e1de247200?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1617806118233-18e1de247200?w=800&h=1000&fit=crop&q=80`,
    productCount: 9,
    startingPrice: 1240,
    featuredProductSlugs: [
      "strand-dining-table-200",
      "strand-dining-chair",
      "strand-bench",
    ],
  },
  {
    slug: "voss",
    name: "The Voss Collection",
    shortName: "Voss",
    category: "bedroom",
    categoryLabel: "Bedroom",
    tagline: "Linen, walnut, and studied stillness.",
    description:
      "Linen, walnut, and a studied stillness. Furniture that knows when to disappear.",
    heroImage: `${UNS}/photo-1588046130717-0eb0c9a3ba15?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1588046130717-0eb0c9a3ba15?w=800&h=1000&fit=crop&q=80`,
    productCount: 11,
    startingPrice: 890,
    featuredProductSlugs: [
      "voss-platform-bed-queen",
      "voss-bedside-table",
      "voss-dresser",
    ],
  },
  {
    slug: "lykke",
    name: "The Lykke Collection",
    shortName: "Lykke",
    category: "lounge",
    categoryLabel: "Lounge & Study",
    tagline: "Chairs designed for reading, thinking, and staying longer than planned.",
    description:
      "Chairs designed for reading, thinking, and staying longer than planned.",
    heroImage: `${UNS}/photo-1524758631624-e2822e304c36?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1524758631624-e2822e304c36?w=800&h=1000&fit=crop&q=80`,
    productCount: 6,
    startingPrice: 1100,
    featuredProductSlugs: ["lykke-lounge-chair"],
  },
  {
    slug: "uterom",
    name: "The Uterom Collection",
    shortName: "Uterom",
    category: "outdoor",
    categoryLabel: "Outdoor",
    tagline: "Teak and powder-coated steel. Built for Pacific Northwest winters.",
    description:
      "Teak and powder-coated steel. Built for Pacific Northwest winters.",
    heroImage: `${UNS}/photo-1600585154340-be6161a56a0c?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&q=80`,
    productCount: 8,
    startingPrice: 520,
    featuredProductSlugs: ["uterom-dining-table", "uterom-lounge-chair"],
  },
  {
    slug: "lys",
    name: "The Lys Collection",
    shortName: "Lys",
    category: "lighting",
    categoryLabel: "Lighting",
    tagline: "Warm light, minimal form. Pendants and sconces for every room.",
    description:
      "Warm light, minimal form. Pendants and sconces for every room in the house.",
    heroImage: `${UNS}/photo-1507473885765-e6ed057f782c?w=1920&q=80`,
    thumbnailImage: `${UNS}/photo-1507473885765-e6ed057f782c?w=800&h=1000&fit=crop&q=80`,
    productCount: 10,
    startingPrice: 290,
    featuredProductSlugs: ["lys-pendant-small", "lys-pendant-large"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
