import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/shared/Badge";

interface ProductCardProps {
  product: Product;
  collectionSlug: string;
}

export function ProductCard({ product, collectionSlug }: ProductCardProps) {
  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];
  const href = `/collections/${collectionSlug}/${product.slug}`;

  return (
    <Link href={href} className="group block" aria-label={`View ${product.name}`}>
      <div
        className="relative overflow-hidden mb-4"
        style={{ aspectRatio: "4/5", backgroundColor: "var(--linen)" }}
      >
        {primaryImage && (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {!product.inStock && (
          <div
            className="absolute top-3 left-3"
          >
            <Badge label="Made to order" variant="muted" />
          </div>
        )}
      </div>

      <div>
        <p
          className="text-label mb-1"
          style={{ color: "var(--warmstone)" }}
        >
          {product.materials.slice(0, 2).join(" · ")}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-h4)",
            fontWeight: 400,
            color: "var(--char)",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          className="mt-1"
          style={{ fontSize: "var(--text-small)", color: "var(--slate)" }}
        >
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
