"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types/product";

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const primaryIndex = images.findIndex((img) => img.isPrimary);
  const [activeIndex, setActiveIndex] = useState(primaryIndex >= 0 ? primaryIndex : 0);

  const activeImage = images[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative overflow-hidden w-full"
        style={{ aspectRatio: "4/5", backgroundColor: "var(--linen)" }}
      >
        {activeImage && (
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1} of ${productName}`}
              className="flex-shrink-0 relative overflow-hidden transition-opacity"
              style={{
                width: 72,
                height: 90,
                border: idx === activeIndex ? "2px solid var(--char)" : "2px solid transparent",
                opacity: idx === activeIndex ? 1 : 0.55,
                cursor: "pointer",
                backgroundColor: "var(--linen)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="72px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
