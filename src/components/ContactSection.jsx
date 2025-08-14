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
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#374151] mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-card rounded-xl py-6 shadow-sm border-2 border-white">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    {/* Phone icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Phone</h4>
                    <p className="text-lg text-[#15803d] font-semibold">
                      0808 137 1961
                    </p>
                    <p className="text-sm text-gray-600">
                      Available 7 days a week
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl py-6 shadow-sm border-2 border-white">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    {/* Mail icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Email</h4>
                    <p className="text-lg text-[#15803d]">
                      earwegosales@gmail.com
                    </p>
                    <p className="text-sm text-gray-600">
                      We respond within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl py-6 shadow-sm border-2 border-white">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    {/* Map pin icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Address</h4>
                    <p className="text-gray-600">20 Osmaston Road</p>
                    <p className="text-gray-600">
                      Derby, Derbyshire, DE1 2HR
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card rounded-xl py-6 shadow-sm border-2 border-white">
                <div className="p-6 flex items-center">
                  <div className="bg-[#15803d] p-3 rounded-lg mr-4">
                    {/* Clock icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">
                      Service Areas
                    </h4>
                    <p className="text-gray-600">
                      Derby • Nottingham • Leicester
                    </p>
                    <p className="text-gray-600">
                      Lincolnshire • Staffordshire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-card rounded-xl py-6 shadow-sm border-2 border-white">
            <div className="px-6 pb-4">
              <div className="font-semibold text-2xl font-serif text-[#374151]">
                Book Your Appointment
              </div>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours
              </p>
            </div>
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#374151] mb-2 block">
                    First Name
                  </label>
                  <input
                    placeholder="John"
                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#374151] mb-2 block">
                    Last Name
                  </label>
                  <input
                    placeholder="Smith"
                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Phone Number
                </label>
                <input
                  placeholder="07123 456789"
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john.smith@email.com"
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Preferred Service
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Single Ear Treatment (£50)</option>
                  <option>Both Ears Treatment (£60)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Your Address
                </label>
                <input
                  placeholder="Full address for home visit"
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Additional Information
                </label>
                <textarea
                  rows="4"
                  placeholder="Any symptoms, preferred appointment time, or special requirements..."
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                ></textarea>
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 w-full bg-[#84cc16] hover:bg-[#65a30d] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Request Appointment
              </button>
              <p className="text-sm text-gray-600 text-center">
                Same-day appointments often available • No obligation
                consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
