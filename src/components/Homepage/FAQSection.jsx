// src/components/FAQSection.jsx
"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can ear wax cause tinnitus?",
      answer: "The nearer to the eardrum the more likely this is.",
    },
    {
      question: "Why do GP's no longer do ear wax removal?",
      answer: "This is because the government legislate it as a non-essential service.",
    },
    {
      question: "Is micro-suction safer than traditional syringing?",
      answer: "It is safer less complications - less potential .... damage limitation.",
    },
    {
      question: "Do you treat children?",
      answer:
        "The answer to this depends on the child - if they are confident and able to sit still then yes. Obviously infants are not recommended.",
    },
    {
      question: "I have a perforation - is micro-suction safe?",
      answer:
        "Micro-suction is the only safe procedure for perforated or previously perforated eardrums.",
    },
    {
      question: "Do you only do home or work visits?",
      answer: "Yes, we only provide home visit appointments for your convenience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 bg-[#F8FAFC]" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto">
            Get answers to common questions about our ear wax removal services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F8FAFC] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#0D1525] pr-4">
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 text-[#10B981] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-slate-100">
                  <p className="text-[#334155] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="700">
          <p className="text-[#334155] mb-4">
            Have more questions? We're here to help!
          </p>
          <a
            href="tel:08081371961"
            className="inline-flex items-center px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#0D1525] transition-colors"
          >
            Call Us: 0808 137 1961
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
