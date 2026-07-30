"use client";

import { useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  onFilterChange: (value: string) => void;
  label?: string;
}

export function FilterBar({ options, onFilterChange, label = "Filter by" }: FilterBarProps) {
  const [active, setActive] = useState("all");

  const allOptions = [{ value: "all", label: "All" }, ...options];

  function handleClick(value: string) {
    setActive(value);
    onFilterChange(value);
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className="text-label mr-2"
        style={{ color: "var(--warmstone)" }}
      >
        {label}
      </span>
      {allOptions.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.06em",
            padding: "0.375rem 0.875rem",
            borderRadius: "2px",
            border: "1px solid",
            cursor: "pointer",
            transition: "all 0.2s ease",
            backgroundColor: active === opt.value ? "var(--char)" : "transparent",
            color: active === opt.value ? "var(--birch)" : "var(--slate)",
            borderColor: active === opt.value ? "var(--char)" : "var(--border-subtle)",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
