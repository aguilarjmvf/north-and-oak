"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NavLink } from "./NavLink";
import { CollectionsNav } from "./CollectionsNav";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Collections", href: "/collections", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Journal", href: "/journal", hasDropdown: false },
  { label: "Trade", href: "/trade", hasDropdown: false },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const collectionsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled
            ? "border-b"
            : "border-b border-transparent"
        )}
        style={{
          backgroundColor: scrolled ? "rgba(245, 240, 232, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderColor: scrolled ? "var(--border-subtle)" : "transparent",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        }}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo />

            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    ref={item.hasDropdown ? collectionsRef : undefined}
                    className={cn("relative", item.hasDropdown && "group")}
                    onMouseEnter={() => item.hasDropdown && setCollectionsOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setCollectionsOpen(false)}
                    onFocus={() => item.hasDropdown && setCollectionsOpen(true)}
                    onBlur={(e) => {
                      // Close only when focus leaves the entire li subtree
                      if (item.hasDropdown && !collectionsRef.current?.contains(e.relatedTarget as Node)) {
                        setCollectionsOpen(false);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (item.hasDropdown && e.key === "Escape") setCollectionsOpen(false);
                    }}
                  >
                    <NavLink href={item.href}>{item.label}</NavLink>
                    {item.hasDropdown && collectionsOpen && <CollectionsNav />}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Button href="/collections" size="sm" className="hidden md:inline-flex">
                Shop Now
              </Button>
              <button
                className="md:hidden p-1 transition-opacity hover:opacity-60"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
