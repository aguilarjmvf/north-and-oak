import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface CTABlockProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "light" | "dark";
}

export function CTABlock({
  eyebrow,
  heading,
  body,
  primaryCTA,
  secondaryCTA,
  variant = "light",
}: CTABlockProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: isDark ? "var(--char)" : "var(--linen)",
        borderTop: isDark ? "none" : `1px solid var(--border-subtle)`,
      }}
    >
      <div className="container-brand">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          {eyebrow && (
            <p
              className="text-label mb-4"
              style={{ color: isDark ? "rgba(245,240,232,0.5)" : "var(--warmstone)" }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, var(--text-h2))",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: isDark ? "var(--birch)" : "var(--char)",
              marginBottom: body ? "1rem" : "2rem",
            }}
          >
            {heading}
          </h2>
          {body && (
            <p
              className="mb-8"
              style={{
                fontSize: "var(--text-small)",
                color: isDark ? "rgba(245,240,232,0.65)" : "var(--slate)",
                lineHeight: 1.7,
                maxWidth: "48ch",
                margin: "0 auto 2rem",
              }}
            >
              {body}
            </p>
          )}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={primaryCTA.href} variant={isDark ? "inverse" : "primary"} size="lg">
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="text" size="lg">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
