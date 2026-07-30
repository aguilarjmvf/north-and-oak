import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  asLink?: boolean;
}

export function Logo({ variant = "dark", className, asLink = true }: LogoProps) {
  const color = variant === "light" ? "var(--birch)" : "var(--char)";

  const wordmark = (
    <span
      className={cn("inline-block select-none", className)}
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "1.125rem",
        fontWeight: 400,
        letterSpacing: "0.08em",
        color,
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      North &amp; Oak
    </span>
  );

  if (!asLink) return wordmark;

  return (
    <Link href="/" aria-label="North & Oak — return to homepage">
      {wordmark}
    </Link>
  );
}
