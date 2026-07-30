interface DeliveryInfoProps {
  inStock: boolean;
  leadTimeWeeks?: number;
}

export function DeliveryInfo({ inStock, leadTimeWeeks }: DeliveryInfoProps) {
  return (
    <div
      className="p-5"
      style={{
        border: "1px solid var(--border-subtle)",
        backgroundColor: "var(--birch)",
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        <span
          aria-hidden
          style={{
            display: "block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: inStock ? "#4a7c59" : "var(--warmstone)",
            marginTop: "0.35rem",
            flexShrink: 0,
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.06em",
              color: "var(--char)",
              marginBottom: "0.25rem",
            }}
          >
            {inStock ? "In stock" : "Made to order"}
          </p>
          <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.6 }}>
            {inStock
              ? "Ships within 2–5 business days. White glove delivery available."
              : `${leadTimeWeeks ?? 8}–${(leadTimeWeeks ?? 8) + 2} week lead time. We'll confirm your order within 24 hours.`}
          </p>
        </div>
      </div>

      <div
        className="pt-4 flex flex-col gap-2"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        {[
          "Free white glove delivery",
          "30-day return window",
          "25-year structural warranty",
        ].map((item) => (
          <p
            key={item}
            className="flex items-center gap-2"
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
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
