import type { Metadata } from "next";
import { ContactCard } from "@/components/contact/ContactCard";
import { ShowroomSection } from "@/components/contact/ShowroomSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with North & Oak — product questions, trade inquiries, showroom visits, and press. We respond to all messages within one business day.",
};

const contactCards = [
  {
    heading: "General inquiries",
    body: "Product questions, order status, and anything else. One business day response, always.",
    detail: "hello@northandoak.com",
    detailHref: "mailto:hello@northandoak.com",
  },
  {
    heading: "Trade program",
    body: "Questions about our trade discount, order process, or material samples.",
    detail: "trade@northandoak.com",
    detailHref: "mailto:trade@northandoak.com",
  },
  {
    heading: "Press",
    body: "Editorial requests, photography, or product loans for publication.",
    detail: "press@northandoak.com",
    detailHref: "mailto:press@northandoak.com",
  },
];

const showroomHours = [
  { day: "Monday – Friday", time: "10:00 am – 6:00 pm" },
  { day: "Saturday", time: "10:00 am – 5:00 pm" },
  { day: "Sunday", time: "By appointment" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="section-padding" style={{ backgroundColor: "var(--birch)" }}>
        <div className="container-brand">
          <AnimatedSection className="max-w-xl mb-14">
            <p className="text-label mb-4" style={{ color: "var(--warmstone)" }}>
              Contact
            </p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, var(--text-h1))",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--char)",
                marginBottom: "1rem",
              }}
            >
              We answer every message.
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "var(--slate)", lineHeight: 1.75 }}>
              One business day response. Not an automated reply — an actual answer from a person who
              knows the products.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {contactCards.map((card) => (
                  <ContactCard key={card.heading} {...card} />
                ))}
              </div>

              <ShowroomSection
                address="1204 NW Glisan St, Portland, OR 97209"
                hours={showroomHours}
                note="Appointments recommended for trade visits and large-order consultations."
              />
            </div>

            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 2.5vw, var(--text-h3))",
                  fontWeight: 400,
                  color: "var(--char)",
                }}
              >
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
