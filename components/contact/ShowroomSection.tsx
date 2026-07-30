interface ShowroomSectionProps {
  address: string;
  hours: { day: string; time: string }[];
  note?: string;
}

export function ShowroomSection({ address, hours, note }: ShowroomSectionProps) {
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
          marginBottom: "1rem",
        }}
      >
        Visit Our Showroom
      </h3>
      <p
        className="mb-6"
        style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.7 }}
      >
        {address}
      </p>

      <h4
        className="text-label mb-3"
        style={{ color: "var(--warmstone)" }}
      >
        Hours
      </h4>
      <dl className="flex flex-col gap-2 mb-5">
        {hours.map(({ day, time }) => (
          <div key={day} className="flex justify-between gap-4">
            <dt style={{ fontSize: "var(--text-small)", color: "var(--slate)" }}>{day}</dt>
            <dd
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.04em",
                color: "var(--char)",
              }}
            >
              {time}
            </dd>
          </div>
        ))}
      </dl>

      {note && (
        <p
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
