"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import type { PressItem } from "@/types/press";

interface PressBarProps {
  eyebrow: string;
  items: PressItem[];
}

function PressLogo({ item }: { item: PressItem }) {
  return (
    <span
      className="inline-flex items-center px-8 whitespace-nowrap select-none"
      style={{
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontSize: "1.125rem",
        fontWeight: 400,
        color: "var(--warmstone)",
        letterSpacing: "0.02em",
      }}
    >
      {item.publication}
    </span>
  );
}

export function PressBar({ eyebrow, items }: PressBarProps) {
  // Memoised — avoids re-creating the array on every render
  const duplicated = useMemo(() => [...items, ...items], [items]);

  return (
    <section
      className="py-10 border-y overflow-hidden"
      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--linen)" }}
    >
      <div className="container-brand mb-6">
        <p className="text-label" style={{ color: "var(--warmstone)" }}>
          {eyebrow}
        </p>
      </div>
      <div className="relative overflow-hidden" aria-hidden>
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {/* First set — visible to screen readers (already rendered above as text) */}
          {items.map((item) => (
            <PressLogo key={item.id} item={item} />
          ))}
          {/* Second set — decorative duplicate for seamless loop, hidden from SR */}
          {items.map((item) => (
            <PressLogo key={`${item.id}-dup`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
