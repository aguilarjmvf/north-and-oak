import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  collectionSlug: string;
}

export function ProductGrid({ products, collectionSlug }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p
        className="py-16 text-center"
        style={{ color: "var(--warmstone)", fontSize: "var(--text-small)" }}
      >
        No products match your current filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          collectionSlug={collectionSlug}
        />
      ))}
    </div>
  );
}
