import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionBySlug, collections } from "@/data/collections";
import { getProductsByCollection, getProductBySlug, products as allProducts } from "@/data/products";
import { ProductDetail } from "@/components/collections/ProductDetail";
import { ProductCard } from "@/components/collections/ProductCard";
import { CTABlock } from "@/components/sections/CTABlock";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface Props {
  params: Promise<{ slug: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const product = getProductBySlug(slug, productSlug);
  const collection = getCollectionBySlug(slug);
  if (!product || !collection) return {};
  return {
    title: `${product.name} — ${collection.shortName}`,
    description: product.description.slice(0, 155),
    openGraph: {
      title: `${product.name} — ${collection.shortName} | North & Oak`,
      description: product.description.slice(0, 155),
      images: product.images[0]
        ? [{ url: product.images[0].src, alt: product.images[0].alt }]
        : [],
    },
  };
}

export function generateStaticParams() {
  const params: { slug: string; product: string }[] = [];
  for (const collection of collections) {
    const products = getProductsByCollection(collection.slug);
    for (const product of products) {
      params.push({ slug: collection.slug, product: product.slug });
    }
  }
  return params;
}

export default async function ProductPage({ params }: Props) {
  const { slug, product: productSlug } = await params;
  const collection = getCollectionBySlug(slug);
  const product = getProductBySlug(slug, productSlug);

  if (!collection || !product) notFound();

  const relatedProducts = allProducts
    .filter((p) => product.relatedProductSlugs.includes(p.slug) && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection.shortName, href: `/collections/${slug}` },
          { label: product.name },
        ]}
      />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <ProductDetail product={product} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section
          className="section-padding border-t"
          style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--linen)" }}
        >
          <div className="container-brand">
            <h2
              className="mb-10"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 2.5vw, var(--text-h3))",
                fontWeight: 400,
                color: "var(--char)",
              }}
            >
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.slug} product={rp} collectionSlug={rp.collectionSlug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        heading="Questions about this piece?"
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore the collection", href: `/collections/${slug}` }}
      />
    </>
  );
}
