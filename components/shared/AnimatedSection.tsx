"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  as?: React.ElementType;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  once = true,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  // motion.create() must not be called inside the render path on every render
  const MotionTag = useMemo(() => motion.create(Tag as "div"), [Tag]);

  const offset = shouldReduce
    ? {}
    : {
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      };

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
