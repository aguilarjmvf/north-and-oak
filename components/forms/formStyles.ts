import type { CSSProperties } from "react";

export const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "var(--text-small)",
  color: "var(--char)",
  backgroundColor: "var(--birch)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "2px",
  outline: "none",
};

export const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--slate)",
  marginBottom: "0.5rem",
};

export const errorStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  color: "#b91c1c",
  marginTop: "0.25rem",
};
