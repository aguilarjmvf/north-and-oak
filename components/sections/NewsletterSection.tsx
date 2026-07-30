import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

interface NewsletterSectionProps {
  heading: string;
  body: string;
  finePrint?: string;
}

export function NewsletterSection({ heading, body, finePrint }: NewsletterSectionProps) {
  return (
    <section
      className="section-padding border-t"
      style={{ backgroundColor: "var(--linen)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container-brand">
        <AnimatedSection className="max-w-xl">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, var(--text-h3))",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--char)",
              marginBottom: "1rem",
            }}
          >
            {heading}
          </h2>
          <p
            className="mb-8"
            style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7, maxWidth: "52ch" }}
          >
            {body}
          </p>

          <NewsletterForm />

          {finePrint && (
            <p
              className="mt-4"
              style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--warmstone)", letterSpacing: "0.06em" }}
            >
              {finePrint}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
