"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroCTA {
  label: string;
  href: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  image: { src: string; alt: string };
  caption?: string;
  minHeight?: "screen" | "large";
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image,
  caption,
  minHeight = "screen",
}: HeroSectionProps) {
  const reduce = useReducedMotion();

  const lines = headline.split("\n");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.34, 1.06, 0.64, 1] as [number, number, number, number] } },
  };

  return (
    <section
      className="-mt-16 md:-mt-20 relative flex items-end overflow-hidden"
      style={{ minHeight: minHeight === "screen" ? "100svh" : "70vh" }}
    >
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,26,23,0.65) 0%, rgba(28,26,23,0.15) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container-brand pb-16 md:pb-24 pt-32 w-full">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {eyebrow && (
            <motion.p className="text-label mb-6" style={{ color: "rgba(245,240,232,0.75)" }} variants={item}>
              {eyebrow}
            </motion.p>
          )}

          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {lines.map((line, i) => (
              <motion.span key={i} className="block" variants={item}
                style={{ fontSize: "clamp(3rem, 7vw, var(--text-display))", color: "var(--birch)" }}>
                {line}
              </motion.span>
            ))}
          </h1>

          {subheadline && (
            <motion.p
              className="mt-6 max-w-xl"
              variants={item}
              style={{ fontSize: "var(--text-lead)", fontWeight: 300, lineHeight: 1.6, color: "rgba(245,240,232,0.80)" }}
            >
              {subheadline}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div className="flex flex-wrap gap-4 mt-10" variants={item}>
              {primaryCTA && <Button href={primaryCTA.href} size="lg">{primaryCTA.label}</Button>}
              {secondaryCTA && <Button href={secondaryCTA.href} size="lg" variant="secondary" className="border-birch/60 text-birch hover:bg-birch/10">{secondaryCTA.label}</Button>}
            </motion.div>
          )}
        </motion.div>

        {caption && (
          <p
            className="mt-10 md:mt-0 md:absolute md:bottom-8 md:right-[clamp(1.5rem,5vw,5rem)]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.08em", color: "rgba(245,240,232,0.45)" }}
          >
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
