import { cn } from "@/lib/utils";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

const spacingMap = {
  sm: "my-8",
  md: "my-12",
  lg: "my-16",
};

export function Divider({
  orientation = "horizontal",
  spacing = "md",
  className,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <span
        className={cn("inline-block w-px self-stretch", className)}
        style={{ backgroundColor: "var(--color-border-subtle)" }}
        aria-hidden
      />
    );
  }

  return (
    <hr
      className={cn(spacingMap[spacing], "border-0 border-t", className)}
      style={{ borderColor: "var(--color-border-subtle)" }}
      aria-hidden
    />
  );
}
