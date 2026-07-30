import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Collection } from "@/types/collection";
import { formatPrice } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
  priority?: boolean;
  size?: "default" | "large";
}

export function CollectionCard({ collection, priority = false, size = "default" }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative block overflow-hidden rounded-[4px]"
      style={{ aspectRatio: "4/5" }}
      aria-label={`Explore ${collection.name}`}
    >
      <Image
        src={collection.thumbnailImage}
        alt={`${collection.name} — ${collection.categoryLabel}`}
        fill
        priority={priority}
        sizes={size === "large" ? "50vw" : "(max-width:768px) 100vw, 33vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(28,26,23,0.75) 0%, rgba(28,26,23,0.1) 55%, transparent 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-label mb-2" style={{ color: "rgba(245,240,232,0.65)" }}>
          {collection.categoryLabel}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--birch)",
          }}
        >
          {collection.shortName}
        </h3>
        <p
          className="mt-2 line-clamp-2"
          style={{ fontSize: "var(--text-small)", color: "rgba(245,240,232,0.70)", lineHeight: 1.6 }}
        >
          {collection.tagline}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span
            className="text-label"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            From {formatPrice(collection.startingPrice)}
          </span>
          <span
            className="flex items-center gap-1.5 text-label transition-all duration-200 translate-x-0 group-hover:translate-x-1"
            style={{ color: "rgba(245,240,232,0.8)" }}
          >
            Explore <ArrowRight size={12} strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
