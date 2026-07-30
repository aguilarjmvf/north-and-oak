"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/collections";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [showCollections, setShowCollections] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleClose = () => {
    setShowCollections(false);
    onClose();
  };

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const nav = navRef.current;
    if (!nav) return;

    // Focus first focusable element when menu opens
    const focusable = Array.from(nav.querySelectorAll<HTMLElement>(FOCUSABLE));
    focusable[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      if (e.key !== "Tab") return;

      const elements = Array.from(nav!.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "var(--char)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden
          />
          <motion.nav
            ref={navRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
            style={{ backgroundColor: "var(--birch)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Logo />
              <button
                onClick={handleClose}
                aria-label="Close menu"
                className="p-1 transition-opacity hover:opacity-60"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden">
              {/* Main nav panel */}
              <motion.div
                className="absolute inset-0 flex flex-col py-6"
                animate={{ x: showCollections ? "-100%" : 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                <ul className="flex flex-col px-6">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Journal", href: "/journal" },
                    { label: "Trade", href: "/trade" },
                  ].map((item) => (
                    <li
                      key={item.href}
                      className="border-b"
                      style={{ borderColor: "var(--border-subtle)" }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="flex items-center py-5 transition-colors hover:text-oak"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.5rem",
                          fontWeight: 400,
                          color: "var(--char)",
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="border-b" style={{ borderColor: "var(--border-subtle)" }}>
                    <button
                      onClick={() => setShowCollections(true)}
                      className="flex items-center justify-between w-full py-5 transition-colors hover:text-oak"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "var(--char)",
                      }}
                    >
                      Collections
                      <ChevronRight size={18} strokeWidth={1.5} />
                    </button>
                  </li>
                </ul>
                <div
                  className="mt-auto px-6 pt-6 border-t"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <Button href="/collections" onClick={handleClose} className="w-full justify-center">
                    Shop Now
                  </Button>
                </div>
              </motion.div>

              {/* Collections sub-panel */}
              <motion.div
                className="absolute inset-0 flex flex-col py-6"
                initial={{ x: "100%" }}
                animate={{ x: showCollections ? 0 : "100%" }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                aria-hidden={!showCollections}
              >
                <div className="px-6 mb-4">
                  <button
                    onClick={() => setShowCollections(false)}
                    className="flex items-center gap-2 text-label transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-text-muted)" }}
                    tabIndex={showCollections ? 0 : -1}
                  >
                    <ChevronLeft size={14} strokeWidth={1.5} />
                    Back
                  </button>
                </div>
                <ul className="flex flex-col px-6">
                  {collections.map((c) => (
                    <li
                      key={c.slug}
                      className="border-b"
                      style={{ borderColor: "var(--border-subtle)" }}
                    >
                      <Link
                        href={`/collections/${c.slug}`}
                        onClick={handleClose}
                        className="flex items-center justify-between py-4"
                        tabIndex={showCollections ? 0 : -1}
                      >
                        <div>
                          <p className="text-label" style={{ color: "var(--color-text-muted)" }}>
                            {c.categoryLabel}
                          </p>
                          <p
                            className="mt-0.5 transition-colors hover:text-oak"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.25rem",
                              fontWeight: 400,
                              color: "var(--char)",
                            }}
                          >
                            {c.shortName}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="px-6 pt-4">
                  <Link
                    href="/collections"
                    onClick={handleClose}
                    className="text-label transition-colors hover:text-oak"
                    style={{ color: "var(--color-text-muted)" }}
                    tabIndex={showCollections ? 0 : -1}
                  >
                    View All Collections →
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
