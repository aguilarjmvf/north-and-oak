import { CollectionCard } from "@/components/collections/CollectionCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { Collection } from "@/types/collection";

interface FeaturedCollectionsProps {
  heading: string;
  subheading?: string;
  collections: Collection[];
}

export function FeaturedCollections({ heading, subheading, collections }: FeaturedCollectionsProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container-brand">
        <AnimatedSection>
          <SectionHeading heading={heading} subheading={subheading} className="mb-12 md:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {collections.map((col, i) => (
            <AnimatedSection key={col.slug} delay={i * 0.1}>
              <CollectionCard collection={col} priority={i < 2} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
