"use client";

import type { Product } from "@/types/product";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductVariantSelector } from "./ProductVariantSelector";
import { SpecTable } from "./SpecTable";
import { WhyThisPiece } from "./WhyThisPiece";
import { DeliveryInfo } from "./DeliveryInfo";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <ProductImageGallery images={product.images} productName={product.name} />

        <div className="lg:pt-4">
          <p className="text-label mb-2" style={{ color: "var(--warmstone)" }}>
            {product.materials.slice(0, 2).join(" · ")}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, var(--text-h2))",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--char)",
              marginBottom: "0.5rem",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-h4)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--slate)",
              marginBottom: "1.25rem",
            }}
          >
            {product.tagline}
          </p>
          <p
            style={{
              fontSize: "var(--text-lead)",
              fontWeight: 500,
              color: "var(--char)",
              marginBottom: "1.5rem",
            }}
          >
            {formatPrice(product.price)}
          </p>

          <p
            className="mb-8"
            style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}
          >
            {product.description}
          </p>

          {product.variants.length > 0 && (
            <div className="mb-8">
              <ProductVariantSelector variants={product.variants} />
            </div>
          )}

          <div className="flex flex-col gap-3 mb-8">
            <Button size="lg" className="w-full justify-center">
              {product.inStock ? "Add to Cart" : "Request a Quote"}
            </Button>
            <Button href="/trade" variant="text" size="sm" className="justify-center">
              Trade professional? Apply for 20% off →
            </Button>
          </div>

          <DeliveryInfo inStock={product.inStock} leadTimeWeeks={product.leadTimeWeeks} />

          {product.whyThisPiece && product.whyThisPiece.length > 0 && (
            <div className="mt-10">
              <WhyThisPiece points={product.whyThisPiece} />
            </div>
          )}

          <div className="mt-10">
            <SpecTable specs={product.specifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
