import type { Metadata } from "next";
import Image from "next/image";
import { FounderCard } from "@/components/about/FounderCard";
import { ValueCard } from "@/components/about/ValueCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SustainabilityStats, type StatItem } from "@/components/sections/SustainabilityStats";
import { CTABlock } from "@/components/sections/CTABlock";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const sustainabilityStats: StatItem[] = [
  { value: "73%", label: "of wood used is reclaimed or FSC-certified" },
  { value: "12", label: "supplier partners, all within 800 miles of Portland" },
  { value: "Carbon neutral", label: "since 2023, verified by Climate Neutral" },
  { value: "25 years", label: "average lifespan of a North & Oak piece" },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "North & Oak was founded in 2017 by Mara Voss and Emil Strand in Portland, Oregon. We make furniture that is worth keeping.",
};

const founders = [
  {
    name: "Mara Voss",
    role: "Co-founder & Design Director",
    bio: "Mara studied industrial design at RISD and spent five years at a Copenhagen furniture studio before moving to Portland. She leads every collection from initial brief through final production approval. Her obsession with arm height and seat depth has caused more than one heated conversation at North & Oak.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=960&fit=crop&q=80",
    imageAlt: "Mara Voss, Design Director, in the North & Oak workshop",
  },
  {
    name: "Emil Strand",
    role: "Co-founder & Creative Director",
    bio: "Emil's background is in photography and editorial design, which shows up in how he thinks about collections — as a body of work, not a product catalog. He runs brand strategy, narrative, and the journal. He cares about words as much as materials.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=960&fit=crop&q=80",
    imageAlt: "Emil Strand, Creative Director, at his desk in the North & Oak studio",
  },
];

const values = [
  {
    number: "01",
    heading: "Honest materials",
    body: "Every piece lists its materials — wood species, where it was milled, finish chemistry. No 'solid wood' euphemisms.",
  },
  {
    number: "02",
    heading: "Built to a standard",
    body: "Mortise-and-tenon joinery, hand-rubbed finishes, and tolerances measured in fractions of a millimeter. We enforce these because they matter in ten years.",
  },
  {
    number: "03",
    heading: "Sustainability as constraint",
    body: "We treat it as an engineering problem — reclaimed and FSC-certified materials first, new hardwood only when the piece demands it.",
  },
  {
    number: "04",
    heading: "A 25-year warranty",
    body: "We warrant every piece against structural defect for 25 years. It is not a marketing claim. We have paid it out.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
                Our story
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 5vw, var(--text-display))",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--char)",
                  marginBottom: "1.5rem",
                }}
              >
                Furniture worth keeping.
              </h1>
              <p
                style={{
                  fontSize: "var(--text-lead)",
                  fontWeight: 300,
                  color: "var(--slate)",
                  lineHeight: 1.7,
                  maxWidth: "58ch",
                }}
              >
                North & Oak was founded in Portland, Oregon in 2017 by Mara Voss and Emil Strand.
                The premise was simple and probably naive at the time: make furniture that doesn&apos;t
                need to be replaced. Every decision we&apos;ve made since flows from that.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{ aspectRatio: "21/9", backgroundColor: "var(--linen)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80"
          alt="The North & Oak design studio in Portland, Oregon — wide view showing work tables, material samples, and a prototype sofa"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section
        className="section-padding border-t"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--birch)" }}
      >
        <div className="container-brand">
          <AnimatedSection className="mb-14">
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3vw, var(--text-h2))",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--char)",
              }}
            >
              The people behind the work
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sustainability"
        className="section-padding border-t"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--linen)" }}
      >
        <div className="container-brand">
          <AnimatedSection className="max-w-2xl mb-14">
            <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
              How we build
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3vw, var(--text-h2))",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--char)",
                marginBottom: "1rem",
              }}
            >
              What we believe
            </h2>
            <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}>
              Every decision we make is governed by four principles. They are not aspirational. They
              are the filters through which we approve or reject a material, a construction method, a
              supplier relationship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
            {values.map((v) => (
              <ValueCard key={v.number} {...v} />
            ))}
          </div>
        </div>
      </section>

      <SustainabilityStats
        heading="By the numbers"
        body="From our 2025 impact report, published annually."
        stats={sustainabilityStats}
        cta={{ label: "Download the full report", href: "#" }}
      />

      <CTABlock
        heading="Work that speaks for itself."
        body="Browse the collections — every material choice, joinery method, and finish is documented."
        primaryCTA={{ label: "Explore the Collections", href: "/collections" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
