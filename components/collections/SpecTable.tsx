import type { ProductSpec } from "@/types/product";

interface SpecTableProps {
  specs: ProductSpec[];
  heading?: string;
}

export function SpecTable({ specs, heading = "Specifications" }: SpecTableProps) {
  return (
    <div>
      <h3
        className="mb-5"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "var(--text-h4)",
          fontWeight: 400,
          color: "var(--char)",
        }}
      >
        {heading}
      </h3>
      <dl
        style={{
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between gap-6 py-3"
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
          >
            <dt
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.06em",
                color: "var(--warmstone)",
                flexShrink: 0,
              }}
            >
              {spec.label}
            </dt>
            <dd
              style={{
                fontSize: "var(--text-small)",
                color: "var(--char)",
                textAlign: "right",
              }}
            >
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
