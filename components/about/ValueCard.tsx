interface ValueCardProps {
  number: string;
  heading: string;
  body: string;
}

export function ValueCard({ number, heading, body }: ValueCardProps) {
  return (
    <div className="flex gap-6">
      <span
        aria-hidden
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.1em",
          color: "var(--warmstone)",
          flexShrink: 0,
          paddingTop: "0.2rem",
        }}
      >
        {number}
      </span>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-h4)",
            fontWeight: 400,
            color: "var(--char)",
            marginBottom: "0.5rem",
          }}
        >
          {heading}
        </h3>
        <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}>
          {body}
        </p>
      </div>
    </div>
  );
}
