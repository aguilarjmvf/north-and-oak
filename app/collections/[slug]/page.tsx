import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionBySlug, collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { CollectionHero } from "@/components/collections/CollectionHero";
import { ProductGrid } from "@/components/collections/ProductGrid";
import { MaterialsSection } from "@/components/collections/MaterialsSection";
import { DesignerNote } from "@/components/collections/DesignerNote";
import { CTABlock } from "@/components/sections/CTABlock";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
  };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);

  return (
    <>
      <CollectionHero collection={collection} />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection.shortName },
        ]}
      />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <AnimatedSection className="max-w-2xl mb-16">
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--slate)",
                lineHeight: 1.75,
              }}
            >
              {collection.description}
            </p>
          </AnimatedSection>

          {products.length > 0 ? (
            <ProductGrid products={products} collectionSlug={slug} />
          ) : (
            <p
              className="py-20 text-center"
              style={{ color: "var(--warmstone)", fontSize: "var(--text-small)" }}
            >
              Products coming soon.
            </p>
          )}
        </div>
      </section>

      {collection.materials && collection.materials.length > 0 && (
        <MaterialsSection materials={collection.materials} />
      )}

      {collection.designerNote && (
        <DesignerNote note={collection.designerNote} />
      )}

      <CTABlock
        heading="Questions about this collection?"
        body="Our team is available to help with material samples, custom sizing, and trade pricing."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Trade Program", href: "/trade" }}
      />
    </>
  );
}
