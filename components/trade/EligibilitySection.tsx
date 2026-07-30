interface EligibilitySectionProps {
  heading?: string;
  roles: string[];
  note?: string;
}

export function EligibilitySection({
  heading = "Who qualifies",
  roles,
  note,
}: EligibilitySectionProps) {
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
      <ul className="flex flex-col gap-3">
        {roles.map((role) => (
          <li
            key={role}
            className="flex items-center gap-3"
            style={{ fontSize: "var(--text-small)", color: "var(--slate)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7l3.5 3.5L12 3.5"
                stroke="var(--oak)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {role}
          </li>
        ))}
      </ul>
      {note && (
        <p
          className="mt-5"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.05em",
            color: "var(--warmstone)",
            lineHeight: 1.6,
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}
