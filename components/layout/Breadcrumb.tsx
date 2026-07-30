import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Base URL for JSON-LD structured data. Defaults to production URL. */
  baseUrl?: string;
}

const SITE_URL = "https://northandoak.com";

export function Breadcrumb({ items, baseUrl = SITE_URL }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="container-brand pt-5 pb-2">
        <ol
          className="flex items-center gap-1.5 flex-wrap"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.08em",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
          }}
        >
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {items.indexOf(item) > 0 && (
                <ChevronRight size={10} aria-hidden strokeWidth={1.5} />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-150 hover:text-char"
                  style={{ color: "inherit" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" style={{ color: "var(--color-text-primary)" }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
