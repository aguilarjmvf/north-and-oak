"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light";
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  className,
  variant = "default",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center text-sm font-medium tracking-wide transition-colors duration-200",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
        "hover:after:scale-x-100",
        variant === "light"
          ? "text-birch/70 hover:text-birch after:bg-birch"
          : "text-slate-brand hover:text-char after:bg-oak",
        isActive && (variant === "light" ? "text-birch after:scale-x-100" : "text-char after:scale-x-100"),
        className
      )}
    >
      {children}
    </Link>
  );
}
