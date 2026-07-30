import type { Metadata } from "next";
import { BenefitCard } from "@/components/trade/BenefitCard";
import { EligibilitySection } from "@/components/trade/EligibilitySection";
import { TradeApplicationForm } from "@/components/forms/TradeApplicationForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Trade Program",
  description:
    "The North & Oak Trade Program offers interior designers, architects, and home stagers 20% off our full catalog, dedicated account support, and early access to new collections.",
};

const benefits = [
  {
    eyebrow: "Pricing",
    heading: "20% off everything",
    body: "Your discount applies to the full North & Oak catalog — furniture, lighting, and accessories. No minimums, no exclusions, no expiry.",
  },
  {
    eyebrow: "Support",
    heading: "Dedicated trade account",
    body: "A single point of contact for quotes, lead time questions, and order tracking. Response time: within one business day.",
  },
  {
    eyebrow: "Sampling",
    heading: "Material samples on request",
    body: "Request finish, fabric, and wood samples for client presentations. We ship them at no charge, with no obligation.",
  },
  {
    eyebrow: "Access",
    heading: "Early collection previews",
    body: "See new collections six weeks before public announcement. Order before launch at trade pricing.",
  },
];

const eligibleRoles = [
  "Interior designers (ASID, IIDA, or equivalent credential)",
  "Architects with residential or commercial portfolios",
  "Home stagers with a professional portfolio",
  "Hospitality designers",
  "Design students (limited discount — 10%)",
];

export default function TradePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trade Program" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
                Trade Program
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, var(--text-h1))",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--char)",
                  marginBottom: "1.25rem",
                }}
              >
                Built for people who build rooms for a living.
              </h1>
              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--slate)",
                  lineHeight: 1.75,
                  marginBottom: "3rem",
                }}
              >
                The North & Oak Trade Program exists because designers and architects understand what
                we&apos;re doing. We want to make it easier to specify our pieces, present them to
                clients, and get orders delivered cleanly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                {benefits.map((b) => (
                  <BenefitCard key={b.eyebrow} {...b} />
                ))}
              </div>

              <EligibilitySection
                roles={eligibleRoles}
                note="We review all applications within 2–3 business days. If you&apos;re unsure whether you qualify, apply anyway and we&apos;ll be in touch."
              />
            </AnimatedSection>

            <div className="lg:sticky lg:top-24">
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 2.5vw, var(--text-h3))",
                  fontWeight: 400,
                  color: "var(--char)",
                }}
              >
                Apply for trade access
              </h2>
              <TradeApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
