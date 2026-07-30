import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialsSectionProps {
  heading: string;
  testimonials: Testimonial[];
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <figure
        className="flex flex-col gap-6 p-8 h-full rounded-[4px]"
        style={{ backgroundColor: "var(--fog)", border: "1px solid var(--border-subtle)" }}
      >
        <blockquote>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "var(--char)",
            }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-auto flex flex-col gap-1">
          <span
            style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-small)", color: "var(--char)" }}
          >
            {testimonial.author}
          </span>
          <span
            className="text-label"
            style={{ color: "var(--warmstone)" }}
          >
            {testimonial.location} — {testimonial.productName}
          </span>
        </figcaption>
      </figure>
    </AnimatedSection>
  );
}

export function TestimonialsSection({ heading, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--linen)" }}>
      <div className="container-brand">
        <AnimatedSection>
          <SectionHeading heading={heading} className="mb-12 md:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
