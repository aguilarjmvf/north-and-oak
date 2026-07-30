import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

const columns = [
  {
    heading: "Collections",
    links: [
      { label: "Living Room", href: "/collections/havn" },
      { label: "Dining Room", href: "/collections/strand" },
      { label: "Bedroom", href: "/collections/voss" },
      { label: "Outdoor", href: "/collections/uterom" },
      { label: "Lighting", href: "/collections/lys" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Trade Program", href: "/trade" },
      { label: "Sustainability", href: "/about#sustainability" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Returns & Warranty", href: "/faq#returns-warranty" },
      { label: "Care Instructions", href: "/faq#materials-quality" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--iron)" }}>
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p
              className="mt-4 text-sm leading-relaxed max-w-[220px]"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Designed in Portland.
              <br />
              Built to last.
            </p>
            <a
              href="mailto:hello@northandoak.com"
              className="block mt-4 text-sm transition-opacity hover:opacity-80"
              style={{ color: "rgba(245,240,232,0.6)", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.06em" }}
            >
              hello@northandoak.com
            </a>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="North & Oak on Instagram"
                className="transition-opacity hover:opacity-60"
                style={{ color: "rgba(245,240,232,0.6)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-label mb-5"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80"
                      style={{ color: "rgba(245,240,232,0.65)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(245,240,232,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(245,240,232,0.3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
          >
            © 2026 North & Oak. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs transition-opacity hover:opacity-80"
                style={{ color: "rgba(245,240,232,0.3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
