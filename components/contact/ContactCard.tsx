interface ContactCardProps {
  heading: string;
  body: string;
  detail: string;
  detailHref?: string;
}

export function ContactCard({ heading, body, detail, detailHref }: ContactCardProps) {
  return (
    <div
      className="p-8"
      style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--birch)" }}
    >
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
      <p
        className="mb-4"
        style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}
      >
        {body}
      </p>
      {detailHref ? (
        <a
          href={detailHref}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.06em",
            color: "var(--oak)",
          }}
        >
          {detail}
        </a>
      ) : (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.06em",
            color: "var(--oak)",
          }}
        >
          {detail}
        </p>
      )}
    </div>
  );
}
