"use client";

import Link from "next/link";
import { collections } from "@/data/collections";
import { formatPrice } from "@/lib/utils";

export function CollectionsNav() {
  const cols = [
    collections.filter((c) => ["living", "dining", "bedroom"].includes(c.category)),
    collections.filter((c) => ["lounge", "outdoor", "lighting"].includes(c.category)),
  ];

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-[4px] p-8 grid grid-cols-2 gap-8 shadow-[var(--shadow-modal)] border border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--fog)" }}
    >
      {cols.map((group, gi) => (
        <ul key={gi} className="flex flex-col gap-4">
          {group.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/collections/${c.slug}`}
                className="group flex flex-col gap-0.5"
              >
                <span
                  className="text-label transition-colors duration-150"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {c.categoryLabel}
                </span>
                <span
                  className="font-heading text-lg transition-colors duration-150 group-hover:text-oak"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "var(--char)",
                  }}
                >
                  {c.shortName}
                </span>
                <span
                  className="text-xs transition-opacity duration-150"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  From {formatPrice(c.startingPrice)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
      <div className="col-span-2 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <Link
          href="/collections"
          className="text-label transition-colors duration-150 hover:text-oak"
          style={{ color: "var(--color-text-muted)" }}
        >
          View All Collections →
        </Link>
      </div>
    </div>
  );
}
