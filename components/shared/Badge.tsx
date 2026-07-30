interface BadgeProps {
  label: string;
  variant?: "default" | "muted" | "accent";
  className?: string;
}

export function Badge({ label, variant = "default", className }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "var(--linen)",
      color: "var(--slate)",
      border: "1px solid var(--border-subtle)",
    },
    muted: {
      backgroundColor: "transparent",
      color: "var(--warmstone)",
      border: "1px solid var(--warmstone)",
    },
    accent: {
      backgroundColor: "var(--oak)",
      color: "var(--birch)",
      border: "none",
    },
  };

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.25rem 0.625rem",
        borderRadius: "2px",
        ...styles[variant],
      }}
    >
      {label}
    </span>
  );
}
