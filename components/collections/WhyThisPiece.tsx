import type { WhyPoint } from "@/types/product";

interface WhyThisPieceProps {
  points: WhyPoint[];
  heading?: string;
}

export function WhyThisPiece({ points, heading = "Why this piece" }: WhyThisPieceProps) {
  return (
    <div>
      <h3
        className="mb-6"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "var(--text-h4)",
          fontWeight: 400,
          color: "var(--char)",
        }}
      >
        {heading}
      </h3>
      <ul className="flex flex-col gap-5">
        {points.map((point) => (
          <li key={point.heading} className="flex gap-4">
            <span
              aria-hidden
              style={{
                display: "block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "var(--oak)",
                marginTop: "0.55rem",
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--oak)",
                  marginBottom: "0.25rem",
                }}
              >
                {point.heading}
              </p>
              <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}>
                {point.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
