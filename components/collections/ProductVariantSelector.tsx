"use client";

import { useState } from "react";
import type { ProductVariant } from "@/types/product";

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  onVariantChange?: (type: string, value: string) => void;
}

export function ProductVariantSelector({ variants, onVariantChange }: ProductVariantSelectorProps) {
  const [selected, setSelected] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    for (const v of variants) {
      const first = v.options.find((o) => o.available);
      if (first) defaults[v.type] = first.value;
    }
    return defaults;
  });

  function handleSelect(type: string, value: string) {
    setSelected((prev) => ({ ...prev, [type]: value }));
    onVariantChange?.(type, value);
  }

  return (
    <div className="flex flex-col gap-6">
      {variants.map((variant) => (
        <div key={variant.type}>
          <p
            className="text-label mb-3"
            style={{ color: "var(--slate)" }}
          >
            {variant.label}:{" "}
            <span style={{ color: "var(--char)", textTransform: "none", letterSpacing: "normal" }}>
              {variant.options.find((o) => o.value === selected[variant.type])?.label}
            </span>
          </p>

          {variant.options[0]?.swatch ? (
            <div className="flex gap-2 flex-wrap">
              {variant.options.map((opt) => (
                <button
                  key={opt.value}
                  disabled={!opt.available}
                  onClick={() => opt.available && handleSelect(variant.type, opt.value)}
                  aria-label={opt.label}
                  title={opt.label}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: selected[variant.type] === opt.value ? "2px solid var(--char)" : "2px solid transparent",
                    outline: "2px solid var(--border-subtle)",
                    outlineOffset: "2px",
                    backgroundImage: opt.swatch ? `url(${opt.swatch})` : undefined,
                    backgroundColor: opt.swatch ? undefined : "var(--warmstone)",
                    backgroundSize: "cover",
                    cursor: opt.available ? "pointer" : "not-allowed",
                    opacity: opt.available ? 1 : 0.35,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {variant.options.map((opt) => (
                <button
                  key={opt.value}
                  disabled={!opt.available}
                  onClick={() => opt.available && handleSelect(variant.type, opt.value)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.06em",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "2px",
                    border: "1px solid",
                    cursor: opt.available ? "pointer" : "not-allowed",
                    transition: "all 0.2s ease",
                    backgroundColor:
                      selected[variant.type] === opt.value ? "var(--char)" : "transparent",
                    color:
                      selected[variant.type] === opt.value ? "var(--birch)" : "var(--slate)",
                    borderColor:
                      selected[variant.type] === opt.value
                        ? "var(--char)"
                        : "var(--border-subtle)",
                    opacity: opt.available ? 1 : 0.35,
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
