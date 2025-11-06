"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is microsuction safe?",
      answer:
        "Yes. Microsuction is considered the safest and most effective method of ear wax removal. It is a dry procedure performed under direct visual guidance, minimizing risks of infection or injury.",
    },
    {
      question: "How often should I have wax removed?",
      answer:
        "This varies from person to person. Most patients benefit from a cleaning every 6 to 12 months, depending on earwax production and personal comfort.",
    },
    {
      question: "Can you remove wax from children's ears?",
      answer:
        "Yes, we can safely perform microsuction for children, provided they are able to remain still and calm during the short procedure. Our clinicians ensure comfort throughout.",
    },
    {
      question: "Do you charge extra for home visits?",
      answer:
        "No. All of our prices already include the cost of the home visit — there are no hidden fees or additional travel charges.",
    },
    {
      question: "How long does the appointment take?",
      answer:
        "A typical home visit takes around 30 minutes, including consultation and treatment, ensuring thorough care without feeling rushed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0D1525] font-serif">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="w-full divide-y divide-[#EAF7F3] border border-[#EAF7F3] rounded-2xl shadow-sm bg-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all ${
                openIndex === index
                  ? "bg-[#EAF7F3]/50"
                  : "hover:bg-[#F8FAFC] hover:shadow-[0_0_10px_#43AA8B11]"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#0D1525] py-5 px-4 transition-colors duration-200"
              >
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === index ? "#43AA8B" : "#4B5563"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#43AA8B]" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-6 pb-5"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Decorative Gradient Line */}
        <div className="mt-12 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-[#9C79B3]/40 via-[#43AA8B] to-[#9C79B3]/40"></div>
      </div>
    </section>
  );
}
