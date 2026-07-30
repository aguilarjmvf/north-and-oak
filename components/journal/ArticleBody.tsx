interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="container-brand">
      <div
        className="max-w-2xl mx-auto py-14"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-body)",
          lineHeight: 1.8,
          color: "var(--char)",
        }}
      >
        {content.split("\n\n").map((paragraph, idx) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2
                key={idx}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.4rem, 2.5vw, var(--text-h3))",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--char)",
                  marginTop: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3
                key={idx}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-h4)",
                  fontWeight: 400,
                  color: "var(--char)",
                  marginTop: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("---")) {
            return (
              <hr
                key={idx}
                style={{ border: "none", borderTop: "1px solid var(--border-subtle)", margin: "2.5rem 0" }}
              />
            );
          }
          return (
            <p key={idx} style={{ marginBottom: "1.5rem", color: "var(--slate)" }}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
