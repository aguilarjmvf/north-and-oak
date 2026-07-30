import Image from "next/image";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  imageAlt?: string;
}

export function FounderCard({ name, role, bio, image, imageAlt }: FounderCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4", backgroundColor: "var(--linen)" }}
      >
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
      <div>
        <p
          className="text-label mb-1"
          style={{ color: "var(--oak)" }}
        >
          {role}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-h3)",
            fontWeight: 400,
            color: "var(--char)",
            marginBottom: "1rem",
          }}
        >
          {name}
        </h3>
        <p style={{ fontSize: "var(--text-small)", color: "var(--slate)", lineHeight: 1.75 }}>
          {bio}
        </p>
      </div>
    </div>
  );
}
