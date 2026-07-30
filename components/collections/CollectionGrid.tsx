import type { Collection } from "@/types/collection";
import { CollectionCard } from "./CollectionCard";

interface CollectionGridProps {
  collections: Collection[];
  heading?: string;
}

export function CollectionGrid({ collections, heading }: CollectionGridProps) {
  return (
    <section className="section-padding">
      <div className="container-brand">
        {heading && (
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3vw, var(--text-h2))",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--char)",
            }}
          >
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
