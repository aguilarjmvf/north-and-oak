"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function AnimatedText({
  text,
  as: Tag = "p",
  className,
  style,
  delay = 0,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(Tag), [Tag]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: reduce ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
    >
      {text}
    </MotionTag>
  );
}
