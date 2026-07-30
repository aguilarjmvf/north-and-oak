import Image from "next/image";
import type { Material } from "@/types/collection";

interface MaterialsSectionProps {
  materials: Material[];
  heading?: string;
}

export function MaterialsSection({
  materials,
  heading = "Materials",
}: MaterialsSectionProps) {
  return (
    <section
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--birch)" }}
    >
      <div className="container-brand">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((mat) => (
            <div key={mat.name}>
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: "3/2", backgroundColor: "var(--linen)" }}
              >
                <Image
                  src={mat.image}
                  alt={mat.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-h4)",
                  fontWeight: 400,
                  color: "var(--char)",
                  marginBottom: "0.5rem",
                }}
              >
                {mat.name}
              </h3>
              <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}>
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
