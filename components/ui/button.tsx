import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "text" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: undefined;
  disabled?: undefined;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-[52px] px-8 text-[15px]",
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--oak)",
    color: "var(--birch)",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--char)",
    border: "1px solid var(--char)",
  },
  text: {
    backgroundColor: "transparent",
    color: "var(--oak)",
    border: "none",
    padding: 0,
    height: "auto",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
  inverse: {
    backgroundColor: "var(--birch)",
    color: "var(--char)",
    border: "none",
  },
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.06em] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variant !== "text" && sizeClasses[size],
    variant !== "text" && "rounded-[2px]",
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...linkRest } = rest;
    return (
      <Link
        href={href}
        className={classes}
        style={variantStyles[variant]}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...(linkRest as object)}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick, ...btnRest } = rest as ButtonAsButton;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      style={variantStyles[variant]}
      {...(btnRest as object)}
    >
      {children}
    </button>
  );
}
