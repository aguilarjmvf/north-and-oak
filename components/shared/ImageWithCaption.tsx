import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  className,
  fill = false,
}: ImageWithCaptionProps) {
  return (
    <figure className={cn("group", className)}>
      <div className={cn("overflow-hidden", fill && "relative")}>
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className="object-cover w-full"
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.08em",
            color: "var(--color-text-muted)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
