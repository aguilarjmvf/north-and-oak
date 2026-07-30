import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section
      className="flex items-center justify-center"
      style={{ minHeight: "80vh", backgroundColor: "var(--birch)" }}
    >
      <div className="text-center max-w-lg px-6">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.12em",
            color: "var(--warmstone)",
            marginBottom: "1.5rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, var(--text-h1))",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--char)",
            marginBottom: "1.25rem",
          }}
        >
          That page doesn&apos;t exist.
        </h1>
        <p
          className="mb-10"
          style={{ fontSize: "var(--text-body)", color: "var(--slate)", lineHeight: 1.75 }}
        >
          It may have moved, or you may have followed an outdated link. Try navigating from the
          home page.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" size="lg">Go home</Button>
          <Button href="/collections" variant="secondary" size="lg">Browse collections</Button>
        </div>
      </div>
    </section>
  );
}
