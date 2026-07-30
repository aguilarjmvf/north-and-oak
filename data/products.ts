import type { Product } from "@/types/product";

const UNS = "https://images.unsplash.com";

export const products: Product[] = [
  {
    slug: "havn-sofa-3-seat",
    collectionSlug: "havn",
    name: "Havn Sofa — 3 Seat",
    tagline: "The one you don't get up from.",
    price: 3200,
    description:
      "The Havn Sofa was designed around one question: what makes a sofa worth staying in? The frame is solid white oak with drawbored mortise-and-tenon joints. The cushions use a four-way webbing suspension under high-density foam. The cover is removable and washable.",
    images: [
      { src: `${UNS}/photo-1555041469-a586c61ea9bc?w=1000&q=80`, alt: "Havn Sofa in natural linen, three-quarter view", isPrimary: true },
      { src: `${UNS}/photo-1586023492125-27b2c045efd7?w=1000&q=80`, alt: "Havn Sofa side profile showing seat depth and back angle", isPrimary: false },
      { src: `${UNS}/photo-1558618666-fcd25c85cd64?w=1000&q=80`, alt: "Havn Sofa frame joinery detail", isPrimary: false },
    ],
    variants: [
      {
        type: "upholstery",
        label: "Upholstery",
        options: [
          { value: "natural", label: "Natural Linen", available: true },
          { value: "fog", label: "Fog Linen", available: true },
          { value: "slate", label: "Slate Linen", available: true },
        ],
      },
      {
        type: "frame",
        label: "Frame",
        options: [
          { value: "white-oak", label: "White Oak", available: true },
          { value: "dark-walnut", label: "Dark Walnut", available: false },
        ],
      },
    ],
    specifications: [
      { label: "Width", value: "220 cm" },
      { label: "Depth", value: "90 cm" },
      { label: "Height", value: "76 cm" },
      { label: "Seat height", value: "42 cm" },
      { label: "Weight", value: "48 kg" },
      { label: "Frame", value: "Solid white oak — FSC certified" },
      { label: "Upholstery", value: "Performance linen (58% linen / 42% recycled polyester)" },
      { label: "Suspension", value: "Four-way stretch webbing" },
      { label: "Finish", value: "Water-based hardwax oil — matte" },
      { label: "Warranty", value: "25 years structural, 5 years upholstery" },
      { label: "SKU", value: "HVN-SFA-003" },
    ],
    materials: ["White Oak", "Performance Linen"],
    relatedProductSlugs: ["havn-lounge-chair", "havn-coffee-table", "havn-side-table"],
    relatedArticleSlug: "havn-collection-process",
    inStock: true,
    sku: "HVN-SFA-003",
  },
  {
    slug: "havn-lounge-chair",
    collectionSlug: "havn",
    name: "Havn Lounge Chair",
    tagline: "Designed for one long evening.",
    price: 1480,
    description:
      "The Havn Lounge Chair began as a sketch of an angle — specifically, the angle at which a person reads without getting neck ache. Mara spent two months testing prototypes before the back tilt and seat depth reached the point where testers stopped adjusting their position.",
    images: [
      { src: `${UNS}/photo-1524758631624-e2822e304c36?w=1000&q=80`, alt: "Havn Lounge Chair in natural linen, three-quarter view", isPrimary: true },
      { src: `${UNS}/photo-1567016432779-094069958ea5?w=1000&q=80`, alt: "Havn Lounge Chair side profile showing 102° back recline", isPrimary: false },
      { src: `${UNS}/photo-1558618666-fcd25c85cd64?w=1000&q=80`, alt: "Havn Lounge Chair mortise-and-tenon joinery detail", isPrimary: false },
      { src: `${UNS}/photo-1555041469-a586c61ea9bc?w=1000&q=80`, alt: "Havn Lounge Chair in a reading corner with floor lamp", isPrimary: false },
    ],
    variants: [
      {
        type: "upholstery",
        label: "Upholstery",
        options: [
          { value: "natural", label: "Natural Linen", swatch: `${UNS}/photo-1555041469-a586c61ea9bc?w=100&h=100&fit=crop&q=80`, available: true },
          { value: "fog", label: "Fog Linen", swatch: `${UNS}/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&q=80`, available: true },
          { value: "slate", label: "Slate Linen", swatch: `${UNS}/photo-1567016432779-094069958ea5?w=100&h=100&fit=crop&q=80`, available: true },
        ],
      },
      {
        type: "frame",
        label: "Frame",
        options: [
          { value: "white-oak", label: "White Oak", available: true },
          { value: "dark-walnut", label: "Dark Walnut", available: true },
        ],
      },
    ],
    specifications: [
      { label: "Width", value: "76 cm" },
      { label: "Depth", value: "82 cm" },
      { label: "Height", value: "78 cm" },
      { label: "Seat height", value: "40 cm" },
      { label: "Seat depth", value: "55 cm" },
      { label: "Weight", value: "18 kg" },
      { label: "Frame", value: "Solid white oak — FSC certified, Willamette Valley OR" },
      { label: "Upholstery", value: "Performance linen (58% linen / 42% recycled polyester)" },
      { label: "Suspension", value: "Four-way stretch webbing" },
      { label: "Finish", value: "Water-based hardwax oil — matte" },
      { label: "Joinery", value: "Drawbored mortise and tenon" },
      { label: "Assembly", value: "Minimal — legs attach with included hardware (5 min)" },
      { label: "Warranty", value: "25 years structural, 5 years upholstery" },
      { label: "SKU", value: "HVN-CHR-001" },
    ],
    whyThisPiece: [
      {
        heading: "The angle",
        body: "The back reclines at 102° — the research-backed optimum for sustained reading. Not upright enough to feel like a desk chair. Not reclined enough to put you to sleep.",
      },
      {
        heading: "The suspension",
        body: "Most lounge chairs use a solid seat platform. The Havn uses a four-way stretch webbing that flexes under weight and returns fully. After five years in the same chair, the response is identical to day one.",
      },
      {
        heading: "The joint",
        body: "Drawbored mortise-and-tenon joints are cut slightly out of alignment, so when a hardwood peg is driven through, the joint pulls itself closed under tension. They do not loosen. They do not need glue.",
      },
    ],
    materials: ["White Oak", "Performance Linen"],
    relatedProductSlugs: ["havn-sofa-3-seat", "havn-coffee-table", "havn-side-table"],
    relatedArticleSlug: "how-to-buy-furniture-once",
    inStock: true,
    sku: "HVN-CHR-001",
  },
  {
    slug: "havn-coffee-table",
    collectionSlug: "havn",
    name: "Havn Coffee Table",
    tagline: "Lower than most. Intentionally so.",
    price: 880,
    description:
      "The Havn Coffee Table sits 36 cm off the ground — lower than convention, calibrated to the seat height of the Havn Sofa. Solid white oak top with a shelf in white oak veneer on birch ply.",
    images: [
      { src: `${UNS}/photo-1567016432779-094069958ea5?w=1000&q=80`, alt: "Havn Coffee Table in white oak, top view", isPrimary: true },
    ],
    variants: [],
    specifications: [
      { label: "Width", value: "120 cm" },
      { label: "Depth", value: "60 cm" },
      { label: "Height", value: "36 cm" },
      { label: "Top", value: "Solid white oak" },
      { label: "Shelf", value: "White oak veneer on birch ply" },
      { label: "Warranty", value: "25 years structural" },
      { label: "SKU", value: "HVN-TBL-002" },
    ],
    materials: ["White Oak"],
    relatedProductSlugs: ["havn-sofa-3-seat", "havn-side-table"],
    inStock: true,
    sku: "HVN-TBL-002",
  },
  {
    slug: "havn-side-table",
    collectionSlug: "havn",
    name: "Havn Side Table",
    tagline: "The table that was missing.",
    price: 380,
    description:
      "Solid white oak throughout. A table sized to sit beside the Havn Lounge Chair at exactly the right height — your cup at arm level, not a reach.",
    images: [
      { src: `${UNS}/photo-1524758631624-e2822e304c36?w=1000&q=80`, alt: "Havn Side Table in white oak beside a lounge chair", isPrimary: true },
    ],
    variants: [],
    specifications: [
      { label: "Diameter", value: "40 cm" },
      { label: "Height", value: "55 cm" },
      { label: "Material", value: "Solid white oak — FSC certified" },
      { label: "Warranty", value: "25 years structural" },
      { label: "SKU", value: "HVN-SDE-003" },
    ],
    materials: ["White Oak"],
    relatedProductSlugs: ["havn-lounge-chair", "havn-coffee-table"],
    inStock: true,
    sku: "HVN-SDE-003",
  },
  {
    slug: "strand-dining-table-200",
    collectionSlug: "strand",
    name: "Strand Dining Table — 200cm",
    tagline: "Built for long meals and longer conversations.",
    price: 2400,
    description:
      "Solid white oak top on a blackened cold-rolled steel base. The contrast between the warm grain and the dark base is the whole point of the Strand collection.",
    images: [
      { src: `${UNS}/photo-1617806118233-18e1de247200?w=1000&q=80`, alt: "Strand Dining Table in white oak with blackened steel base", isPrimary: true },
    ],
    variants: [
      {
        type: "size",
        label: "Size",
        options: [
          { value: "160", label: "160 cm — seats 6", available: true },
          { value: "200", label: "200 cm — seats 8", available: true },
          { value: "240", label: "240 cm — seats 10", available: true },
        ],
      },
    ],
    specifications: [
      { label: "Length", value: "200 cm" },
      { label: "Width", value: "90 cm" },
      { label: "Height", value: "75 cm" },
      { label: "Top", value: "Solid white oak — FSC certified" },
      { label: "Base", value: "Cold-rolled steel, matte black powder coat" },
      { label: "Warranty", value: "25 years structural" },
      { label: "SKU", value: "STR-DIN-200" },
    ],
    materials: ["White Oak", "Cold-rolled Steel"],
    relatedProductSlugs: ["strand-dining-chair", "strand-bench"],
    inStock: true,
    sku: "STR-DIN-200",
  },
  {
    slug: "voss-platform-bed-queen",
    collectionSlug: "voss",
    name: "Voss Platform Bed — Queen",
    tagline: "Low, considered, and exactly the right weight.",
    price: 1400,
    description:
      "The Voss Platform Bed sits 18 cm off the floor. No box spring required. Solid walnut frame with a slatted base and a headboard upholstered in natural linen.",
    images: [
      { src: `${UNS}/photo-1588046130717-0eb0c9a3ba15?w=1000&q=80`, alt: "Voss Platform Bed in walnut with linen headboard, morning light", isPrimary: true },
    ],
    variants: [
      {
        type: "size",
        label: "Size",
        options: [
          { value: "queen", label: "Queen (153 × 203 cm)", available: true },
          { value: "king", label: "King (193 × 203 cm)", available: true },
        ],
      },
    ],
    specifications: [
      { label: "External width", value: "175 cm (Queen)" },
      { label: "External length", value: "225 cm" },
      { label: "Height (bed)", value: "18 cm" },
      { label: "Height (headboard)", value: "80 cm" },
      { label: "Frame", value: "Solid walnut — FSC certified" },
      { label: "Headboard", value: "Performance linen, natural" },
      { label: "Warranty", value: "25 years structural" },
      { label: "SKU", value: "VSS-BED-QN" },
    ],
    materials: ["Walnut", "Performance Linen"],
    relatedProductSlugs: ["voss-bedside-table", "voss-dresser"],
    inStock: true,
    sku: "VSS-BED-QN",
  },
  {
    slug: "lykke-lounge-chair",
    collectionSlug: "lykke",
    name: "Lykke Lounge Chair",
    tagline: "The best light in the room.",
    price: 1100,
    description:
      "The Lykke is a reading chair with a slightly wider seat and a taller back than the Havn. It is designed for people who spend a serious amount of time in a chair.",
    images: [
      { src: `${UNS}/photo-1524758631624-e2822e304c36?w=1000&q=80`, alt: "Lykke Lounge Chair in ash with natural linen, reading corner", isPrimary: true },
    ],
    variants: [
      {
        type: "upholstery",
        label: "Upholstery",
        options: [
          { value: "natural", label: "Natural Linen", available: true },
          { value: "fog", label: "Fog Linen", available: true },
        ],
      },
    ],
    specifications: [
      { label: "Width", value: "80 cm" },
      { label: "Depth", value: "86 cm" },
      { label: "Height", value: "84 cm" },
      { label: "Seat height", value: "42 cm" },
      { label: "Frame", value: "Solid ash — FSC certified" },
      { label: "Warranty", value: "25 years structural, 5 years upholstery" },
      { label: "SKU", value: "LYK-CHR-001" },
    ],
    materials: ["Ash", "Performance Linen"],
    relatedProductSlugs: ["havn-lounge-chair"],
    inStock: true,
    sku: "LYK-CHR-001",
  },
];

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getProductBySlug(
  collectionSlug: string,
  productSlug: string
): Product | undefined {
  return products.find(
    (p) => p.collectionSlug === collectionSlug && p.slug === productSlug
  );
}
