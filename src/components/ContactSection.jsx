// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#374151] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to hear better? Contact us today for your same-day appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#374151] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.41 1.85.63 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Phone</h4>
                    <a
                      href="tel:08081371961"
                      className="text-lg text-[#15803d] font-semibold hover:underline"
                    >
                      0808 137 1961
                    </a>
                    <p className="text-sm text-gray-600">Available 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Email</h4>
                    <a
                      href="mailto:earwegosales@gmail.com"
                      className="text-lg text-[#15803d] hover:underline"
                    >
                      earwegosales@gmail.com
                    </a>
                    <p className="text-sm text-gray-600">We respond within 2 hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Address</h4>
                    <p className="text-gray-600">20 Osmaston Road</p>
                    <p className="text-gray-600">Derby, Derbyshire, DE1 2HR</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Service Areas</h4>
                    <p className="text-gray-600">Derby • Nottingham • Leicester</p>
                    <p className="text-gray-600">Lincolnshire • Staffordshire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Appointment Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100">
            <div className="px-6 pt-6 pb-4">
              <div className="font-semibold text-2xl font-serif text-[#374151]">
                Book Your Appointment
              </div>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours
              </p>
            </div>

            <div className="px-6 pb-6 space-y-4">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name">
                  <Input placeholder="John" />
                </Field>
                <Field label="Last Name">
                  <Input placeholder="Smith" />
                </Field>
              </div>

              {/* Phone */}
              <Field label="Phone Number">
                <Input placeholder="07123 456789" inputMode="tel" />
              </Field>

              {/* Email */}
              <Field label="Email Address">
                <Input placeholder="john.smith@email.com" type="email" />
              </Field>

              {/* Service */}
              <Field label="Preferred Service">
                <select className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400">
                  <option>Single Ear Treatment (£50)</option>
                  <option>Both Ears Treatment (£60)</option>
                </select>
              </Field>

              {/* Address */}
              <Field label="Your Address">
                <Input placeholder="Full address for home visit" />
              </Field>

              {/* Additional Info */}
              <Field label="Additional Information">
                <textarea
                  rows="4"
                  placeholder="Any symptoms, preferred appointment time, or special requirements..."
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400"
                />
              </Field>

              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-4 w-full bg-[#84cc16] hover:bg-[#65a30d] text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.41 1.85.63 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Request Appointment
              </button>

              <p className="text-sm text-gray-600 text-center">
                Same-day appointments often available • No obligation consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small helpers to keep inputs consistent */
const Field = ({ label, children }) => (
  <div>
    <label className="text-sm font-medium text-[#374151] mb-2 block">{label}</label>
    {children}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400"
  />
);

export default ContactSection;
