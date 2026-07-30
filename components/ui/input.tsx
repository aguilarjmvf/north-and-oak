import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-label"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full h-11 px-4 bg-transparent border transition-colors duration-200",
          "placeholder:text-[var(--color-text-muted)] text-[var(--color-text-primary)]",
          "focus:outline-none focus:ring-0",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          "rounded-[2px]",
          error ? "border-[var(--clay)]" : "border-[var(--warmstone)] focus:border-[var(--char)]",
          className
        )}
        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-body)" }}
        {...props}
      />
      {error && (
        <p className="text-xs" style={{ color: "var(--clay)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
