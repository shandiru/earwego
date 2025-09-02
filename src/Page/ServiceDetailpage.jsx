// src/pages/ServiceDetail.jsx
import React, { useState, useMemo } from "react";
import ServiceSidebar from "../components/Service/ServiceDetailPage/ServiceSidebar";
import PromoCard from "../components/Service/ServiceDetailPage/PromoCard";
import ServiceContent from "../components/Service/ServiceDetailPage/ServiceContent";

// Sidebar items (left column)
const SERVICES = [
  { id: "braces", label: "Braces & Aligners" },
  { id: "whitening", label: "Teeth Whitening" },
  { id: "implant", label: "Dental Implant" },
  { id: "floss", label: "Dental Floss" },
  { id: "wisdom", label: "Wisdom Teeth" },
  { id: "crown", label: "Molar Crown" },
];

// Content for each service (right column)
// Replace image paths with your real files in /public/images/...
const SERVICE_CONTENT = {
  braces: {
    title: "Braces & Aligners",
    image: "/images/service-hero-braces.jpg",
    intro: [
      "Modern orthodontics offers subtle, comfortable options to align your teeth and improve your bite.",
      "From clear aligners to modern brackets, we tailor a treatment that fits your lifestyle.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Healthier bite alignment and jaw comfort",
      "Easier brushing and flossing between teeth",
      "Clear aligners available for a near-invisible look",
      "Custom plan and close monitoring by our specialists",
      "Improved smile aesthetics and confidence",
      "Flexible appointment times",
      "Finance options available",
    ],
  },
  whitening: {
    title: "Teeth Whitening",
    image: "/images/service-hero-whitening.jpg",
    intro: [
      "Professional whitening brightens your smile safely with clinically tested gels and lamps.",
      "We customize shade goals and protect your enamel throughout the process.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Noticeable results in a single visit",
      "Safe on enamel with dentist supervision",
      "Even whitening across all visible teeth",
      "Custom take-home kits available",
    ],
  },
  implant: {
    title: "Dental Implant",
    image: "/images/service-hero-implant.jpg", // ← the large image like your screenshot
    intro: [
      "Dental implants replace missing teeth with a strong, natural-looking solution that protects bone and restores function.",
      "Our team plans your treatment precisely for comfort, longevity, and a seamless smile.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Eat and speak with confidence again",
      "Prevents bone loss in the jaw",
      "Looks and feels like a natural tooth",
      "Durable titanium post for long-term stability",
      "Protects neighbouring teeth",
      "High success rate with proper care",
      "Easy day-to-day maintenance",
    ],
  },
  floss: {
    title: "Dental Floss",
    image: "/images/service-hero-floss.jpg",
    intro: [
      "Guided flossing techniques and tools to help you keep gums healthier between professional cleanings.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Reduces plaque and bleeding",
      "Protects against gum disease",
      "Personalised tool recommendations",
    ],
  },
  wisdom: {
    title: "Wisdom Teeth",
    image: "/images/service-hero-wisdom.jpg",
    intro: [
      "Assessment and treatment plans for impacted or symptomatic wisdom teeth with gentle techniques.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Less crowding and bite issues",
      "Prevent recurrent infections",
      "Comfort-focused care and aftercare",
    ],
  },
  crown: {
    title: "Molar Crown",
    image: "/images/service-hero-crown.jpg",
    intro: [
      "Crowns restore cracked or heavily filled teeth with durable, natural-looking materials.",
    ],
    benefitsTitle: "The benefits :",
    benefits: [
      "Protects weakened tooth structure",
      "Improves function and appearance",
      "Custom shade-matching for a seamless smile",
    ],
  },
};

export default function ServiceDetail() {
  // Default to "Dental Implant" to mirror the screenshot
  const [activeId, setActiveId] = useState("implant");

  const active = useMemo(() => {
    // Fallback to the first item if an unknown id is passed
    return SERVICE_CONTENT[activeId] ?? SERVICE_CONTENT[SERVICES[0].id];
  }, [activeId]);

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Left column: sidebar + promo */}
        <div className="space-y-6">
          <ServiceSidebar
            items={SERVICES}
            activeId={activeId}
            onSelect={setActiveId}
          />

          <PromoCard
            tag="Online Appointment"
            title="Enhance Your Smile with Professional Whitening"
            cta="Make Appointment"
            image="/images/promo-whitening.jpg"
          />
        </div>

        {/* Right column: service content */}
        <ServiceContent
          title={active.title}
          image={active.image}
          intro={active.intro}
          benefitsTitle={active.benefitsTitle}
          benefits={active.benefits}
        />
      </div>
    </main>
  );
}
