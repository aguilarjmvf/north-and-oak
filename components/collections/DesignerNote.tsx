import Image from "next/image";
import type { DesignerNote as DesignerNoteType } from "@/types/collection";

interface DesignerNoteProps {
  note: DesignerNoteType;
}

export function DesignerNote({ note }: DesignerNoteProps) {
  return (
    <section
      className="section-padding border-t"
      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--linen)" }}
    >
      <div className="container-brand">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-label mb-8"
            style={{ color: "var(--warmstone)" }}
          >
            Designer Note
          </p>
          <blockquote
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.25rem, 2.5vw, var(--text-h3))",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.45,
              color: "var(--char)",
              marginBottom: "2rem",
            }}
          >
            &ldquo;{note.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {note.image && (
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "var(--warmstone)" }}
              >
                <Image
                  src={note.image}
                  alt={note.author}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            )}
            <div className="text-left">
              <p style={{ fontSize: "var(--text-small)", fontWeight: 500, color: "var(--char)" }}>
                {note.author}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.06em",
                  color: "var(--warmstone)",
                }}
              >
                {note.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
