import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export interface StatItem {
  value: string;
  label: string;
}

interface SustainabilityStatsProps {
  heading: string;
  body?: string;
  stats: StatItem[];
  cta?: { label: string; href: string };
}

export function SustainabilityStats({ heading, body, stats, cta }: SustainabilityStatsProps) {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--char)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=40')" }}
        aria-hidden
      />

      <div className="container-brand relative z-10">
        <AnimatedSection>
          <SectionHeading
            heading={heading}
            subheading={body}
            align="center"
            className="mb-16 md:mb-20"
            eyebrowClassName="opacity-60"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "var(--birch)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </p>
              <p
                className="mt-3"
                style={{ fontSize: "var(--text-small)", color: "rgba(245,240,232,0.55)", lineHeight: 1.6 }}
              >
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {cta && (
          <AnimatedSection className="mt-14 flex justify-center" delay={0.4}>
            <Button
              href={cta.href}
              variant="secondary"
              className="border-birch/40 text-birch hover:bg-birch/10"
            >
              {cta.label}
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
