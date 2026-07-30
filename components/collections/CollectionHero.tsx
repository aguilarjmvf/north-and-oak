"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Collection } from "@/types/collection";
import { formatPrice } from "@/lib/utils";

interface CollectionHeroProps {
  collection: Collection;
}

export function CollectionHero({ collection }: CollectionHeroProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section className="-mt-16 md:-mt-20 relative flex items-end overflow-hidden" style={{ minHeight: "70vh" }}>
      <div className="absolute inset-0">
        <Image
          src={collection.heroImage}
          alt={`${collection.name} — ${collection.categoryLabel} furniture`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,26,23,0.7) 0%, rgba(28,26,23,0.2) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container-brand pb-16 md:pb-20 pt-32 w-full">
        <motion.div className="max-w-2xl" variants={container} initial="hidden" animate="show">
          <motion.p
            className="text-label mb-4"
            style={{ color: "rgba(245,240,232,0.6)" }}
            variants={item}
          >
            {collection.categoryLabel}
          </motion.p>
          <motion.h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, var(--text-display))",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--birch)",
            }}
            variants={item}
          >
            {collection.name}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-lg"
            style={{
              fontSize: "var(--text-lead)",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(245,240,232,0.75)",
            }}
            variants={item}
          >
            {collection.tagline}
          </motion.p>
          <motion.p
            className="mt-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.08em",
              color: "rgba(245,240,232,0.45)",
            }}
            variants={item}
          >
            {collection.productCount} pieces · Starting from {formatPrice(collection.startingPrice)}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
