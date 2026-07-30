import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { PressBar } from "@/components/sections/PressBar";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { SustainabilityStats, type StatItem } from "@/components/sections/SustainabilityStats";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JournalTeaser } from "@/components/sections/JournalTeaser";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { collections } from "@/data/collections";
import { testimonials } from "@/data/testimonials";
import { pressItems } from "@/data/press";
import { getRecentArticles } from "@/data/articles";

const sustainabilityStats: StatItem[] = [
  { value: "73%", label: "of wood used is reclaimed or FSC-certified" },
  { value: "12", label: "supplier partners, all within 800 miles of Portland" },
  { value: "Carbon neutral", label: "since 2023, verified by Climate Neutral" },
  { value: "25 years", label: "average lifespan of a North & Oak piece" },
];

export const metadata: Metadata = {
  title: "North & Oak — Furniture Built to Last",
  description:
    "Premium furniture and home décor rooted in Scandinavian design. Handcrafted from sustainably sourced materials. Designed in Portland, Oregon.",
};

export default function HomePage() {
  const featuredCollections = collections.filter((c) =>
    ["havn", "strand", "voss"].includes(c.slug)
  );
  const recentArticles = getRecentArticles(3);

  return (
    <>
      <HeroSection
        eyebrow="New Arrival — The Havn Collection"
        headline={"Furniture that asks\nnothing of you\nexcept time."}
        subheadline="Scandinavian design, sustainably sourced materials, and the kind of craftsmanship that gets quieter the longer you live with it."
        primaryCTA={{ label: "Explore the Collection", href: "/collections/havn" }}
        secondaryCTA={{ label: "Our Story", href: "/about" }}
        image={{
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
          alt: "A sunlit dining room with a solid oak table, morning light casting long shadows across the surface",
        }}
        caption="Havn Dining Table in natural white oak. Made in Portland, Oregon."
      />

      <PressBar eyebrow="As seen in" items={pressItems} />

      <FeaturedCollections
        heading="Designed for how you actually live"
        subheading="Every collection begins with a question: what does this room ask of furniture? The answers are in the details."
        collections={featuredCollections}
      />

      <ValueProposition heading="Why people choose North & Oak" />

      <SustainabilityStats
        heading="What we mean by sustainable"
        body="Numbers from our 2025 impact report. We publish it annually because accountability requires specificity."
        stats={sustainabilityStats}
        cta={{ label: "Read our impact report", href: "/about#sustainability" }}
      />

      <TestimonialsSection
        heading="From people who live with our furniture"
        testimonials={testimonials}
      />

      <JournalTeaser
        heading="From the North & Oak Journal"
        subheading="On design, materials, and the habit of living well."
        articles={recentArticles}
      />

      <NewsletterSection
        heading="Worth the inbox space."
        body="New collections, material stories, and the occasional essay on why good furniture matters. No frequency abuse. No promotional spam. Unsubscribe in one click."
        finePrint="We send roughly twice a month. Your address stays with us."
      />
    </>
  );
}
