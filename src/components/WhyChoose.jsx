// src/components/WhyChoose.jsx
import React from "react";

export default function WhyChoose() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e293b] mb-4">
            Why Choose Ear We Go?
          </h2>
          <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
            We've helped thousands of patients who couldn't get satisfactory results elsewhere.
            Our expertise and NHS-approved equipment ensure you leave happy and hearing clearly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  {/* Award */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#2563eb]"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">Over 8 Years Experience</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                Unrivalled micro suction experience. We often get cases where individuals have gone
                elsewhere but not received satisfactory results, but end up happy after visiting us.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-50 p-3 rounded-lg mr-4">
                  {/* Clock */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#059669]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">Same Day Appointments</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                No waiting weeks for NHS appointments. We offer same-day service when you need it
                most, often within hours of your call.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  {/* Stethoscope */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#dc2626]"
                  >
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">NHS Approved Equipment</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                We use the same superior equipment as NHS hospitals - far more efficient than high
                street alternatives for quicker, more comfortable procedures.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-50 p-3 rounded-lg mr-4">
                  {/* Users */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#7c3aed]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">High Return Rate</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                Very high percentage of returning happy customers who we've treated over the last few
                years and trust us with their ongoing ear care needs.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-50 p-3 rounded-lg mr-4">
                  {/* Home */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#ea580c]"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">Convenient Home Visits</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                Professional, friendly service in your own home. No need to travel, park, or wait in
                clinics - we come to you.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
                  {/* Circle check big */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#059669]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1e293b]">Complete Care Package</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                Free hearing test after treatment if requested. We ensure your complete satisfaction
                and optimal hearing experience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-gradient-to-r from-[#f8fafc] to-blue-50 rounded-lg p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-[#1e293b] mb-4">
              Trusted by Thousands of Patients
            </h3>
            <p className="text-lg text-[#64748b] max-w-4xl mx-auto">
              Over the years we've seen patients in distress with pain, balance and tinnitus issues.
              They've been in a sorry state for weeks waiting for NHS appointments, only to be told
              they no longer do the procedure. After contacting us, we can have your ears free of wax
              and leave you happy and smiling again!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
