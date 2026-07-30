import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about North & Oak furniture — ordering, materials, delivery, returns, warranty, and care.",
};

const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "lead-time",
    question: "How long does it take to receive my order?",
    answer:
      "In-stock pieces ship within 2–5 business days. Made-to-order pieces carry an 8–12 week lead time — confirmed at checkout. White glove delivery is included on all orders over $1,500.",
  },
  {
    id: "materials-quality",
    question: "What materials do you use?",
    answer:
      "We use solid hardwoods (primarily white oak, walnut, and ash) sourced from FSC-certified or reclaimed sources. Upholstery fabrics are performance linen (58% linen, 42% recycled polyester) unless otherwise noted. Every product page lists the full material breakdown.",
  },
  {
    id: "returns-warranty",
    question: "What is your return and warranty policy?",
    answer:
      "We offer a 30-day return window on in-stock items in original condition. Made-to-order pieces are non-returnable unless defective. Every North & Oak piece carries a 25-year structural warranty — we repair or replace any piece that fails due to a manufacturing defect, no questions asked.",
  },
  {
    id: "care",
    question: "How do I care for my furniture?",
    answer:
      "For hardwood surfaces: wipe clean with a damp cloth, dry immediately. Re-oil with a food-safe hardwax oil every 12–18 months, or when the wood looks dry. For upholstery: spot-clean with cold water and mild soap. Covers on the Havn Sofa and Voss Collection pieces are machine washable on cold.",
  },
  {
    id: "custom-sizing",
    question: "Do you offer custom sizing?",
    answer:
      "We offer custom sizing on a selection of pieces — contact us to discuss. Lead time for custom orders is typically 12–16 weeks. Custom dimensions are quoted individually and are non-returnable.",
  },
  {
    id: "trade-discount",
    question: "Do you offer a trade discount?",
    answer:
      "Yes. Our trade program offers 20% off the full catalog for interior designers, architects, home stagers, and hospitality designers. Apply on our Trade Program page — we review all applications within 2–3 business days.",
  },
  {
    id: "delivery",
    question: "What does white glove delivery include?",
    answer:
      "White glove delivery means two-person delivery to the room of your choice, assembly, packaging removal, and a brief walkthrough of care instructions. It is included on all orders over $1,500 and available for a flat fee on smaller orders.",
  },
  {
    id: "samples",
    question: "Can I see material samples before ordering?",
    answer:
      "Yes. We offer a complimentary sample kit with wood finish chips and fabric swatches. Request one through our contact page or by emailing hello@northandoak.com — ships within 3 business days.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <AnimatedSection className="max-w-xl mb-14">
            <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
              Frequently asked
            </p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, var(--text-h1))",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--char)",
                marginBottom: "1rem",
              }}
            >
              Honest answers.
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "var(--slate)", lineHeight: 1.75 }}>
              If you don&apos;t find what you need here, email us at{" "}
              <a
                href="mailto:hello@northandoak.com"
                style={{ color: "var(--oak)", textDecoration: "underline" }}
              >
                hello@northandoak.com
              </a>{" "}
              — we respond within one business day.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl">
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                id={faq.id}
                className="py-8"
                style={{
                  borderTop: idx === 0 ? "1px solid var(--border-subtle)" : "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-h4)",
                    fontWeight: 400,
                    color: "var(--char)",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.question}
                </h2>
                <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Still have questions?"
        body="Our team responds to every inquiry within one business day."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Trade Program", href: "/trade" }}
      />
    </>
  );
}
