import React from "react";

const FAQSection = () => {
  const faqs = [
    "Can ear wax cause tinnitus?",
    "Why do GP's no longer do ear wax removal?",
    "Is micro-suction safer than traditional syringing?",
    "Do you treat children?",
    "I have a perforation - is micro-suction safe?",
    "Do you only do home visits?",
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about our ear wax removal services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {question}
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
                  className="h-5 w-5 text-blue-600 flex-shrink-0"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Have more questions? We're here to help!
          </p>
          <a
            href="tel:08081371961"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Call Us: 0808 137 1961
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
