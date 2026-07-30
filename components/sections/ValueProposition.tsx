import { Leaf, Ruler, Package, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export interface ValueCard {
  icon: React.ReactNode;
  heading: string;
  body: string;
}

export const defaultValueCards: ValueCard[] = [
  {
    icon: <Leaf size={24} strokeWidth={1.5} />,
    heading: "Honest materials",
    body: "Every piece lists its materials — the wood species, where it was milled, the finish chemistry. No veneers described as solid. No mystery sourcing.",
  },
  {
    icon: <Ruler size={24} strokeWidth={1.5} />,
    heading: "Built to a standard",
    body: "Mortise-and-tenon joinery, hand-rubbed oil finishes, and tolerances measured in fractions of a millimeter. We can explain every decision.",
  },
  {
    icon: <Package size={24} strokeWidth={1.5} />,
    heading: "A 25-year warranty",
    body: "We warrant every North & Oak piece against structural defect for 25 years. It is not a marketing claim. It is confidence in the work.",
  },
  {
    icon: <Check size={24} strokeWidth={1.5} />,
    heading: "Sustainably sourced",
    body: "Reclaimed and FSC-certified materials first. New hardwood only when the piece demands it. We track our wood to the forest.",
  },
];

interface ValuePropositionProps {
  heading: string;
  cards?: ValueCard[];
}

export function ValueProposition({ heading, cards = defaultValueCards }: ValuePropositionProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--linen)" }}>
      <div className="container-brand">
        <AnimatedSection>
          <SectionHeading heading={heading} className="mb-12 md:mb-16 max-w-lg" />
        </AnimatedSection>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "var(--border-subtle)" }}
        >
          {cards.map((card, i) => (
            <AnimatedSection key={card.heading} delay={i * 0.08}>
              <div
                className="flex flex-col gap-4 p-8 h-full"
                style={{ backgroundColor: "var(--fog)" }}
              >
                <span style={{ color: "var(--oak)" }}>{card.icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-h5)",
                    fontWeight: 500,
                    color: "var(--char)",
                    lineHeight: 1.3,
                  }}
                >
                  {card.heading}
                </h3>
                <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
