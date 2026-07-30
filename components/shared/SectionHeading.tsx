import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  eyebrowClassName?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  as: Tag = "h2",
  className,
  eyebrowClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-label mb-4",
            eyebrowClassName
          )}
          style={{ color: "var(--color-accent)" }}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, var(--text-h2))",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
        }}
      >
        {heading}
      </Tag>
      {subheading && (
        <p
          className="mt-4 max-w-2xl"
          style={{
            fontSize: "var(--text-lead)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
