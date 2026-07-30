interface BenefitCardProps {
  eyebrow: string;
  heading: string;
  body: string;
}

export function BenefitCard({ eyebrow, heading, body }: BenefitCardProps) {
  return (
    <div
      className="p-8"
      style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--birch)" }}
    >
      <p className="text-label mb-3" style={{ color: "var(--oak)" }}>
        {eyebrow}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "var(--text-h4)",
          fontWeight: 400,
          color: "var(--char)",
          marginBottom: "0.75rem",
        }}
      >
        {heading}
      </h3>
      <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}>
        {body}
      </p>
    </div>
  );
}
