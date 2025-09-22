// src/components/Pricing.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="pricing" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#4B5563]">
            Home visits only – no hidden fees, no clinic charges
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Single Ear */}
          <div
            data-slot="card"
            className="bg-white flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-white hover:border-[#43AA8B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#43AA8B55]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="grid items-start gap-1.5 px-6 text-center pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Single Ear
                </div>
                <div className="text-4xl font-bold text-[#43AA8B] mt-4">£50</div>
                <p className="text-[#4B5563]">Per ear treatment</p>
              </div>

              <div className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#4B5563]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5 text-[#43AA8B] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 mt-auto">
              <a
                href="tel:+447989668752"
                className="inline-flex items-center justify-center w-full bg-[#43AA8B] hover:bg-[#318F6F] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Single Ear
              </a>
            </div>
          </div>

          {/* Both Ears */}
          <div
            data-slot="card"
            className="bg-white flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-[#43AA8B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#43AA8B55] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute top-0 right-0 bg-[#43AA8B] text-white px-3 py-1 text-sm font-semibold">
              POPULAR
            </div>

            <div>
              <div className="grid items-start gap-1.5 px-6 text-center pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Both Ears
                </div>
                <div className="text-4xl font-bold text-[#43AA8B] mt-4">£60</div>
                <p className="text-[#4B5563]">Complete treatment</p>
                <p className="text-sm text-[#43AA8B] font-semibold">Save £40!</p>
              </div>

              <div className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                    "Complete ear health check",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#4B5563]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5 text-[#43AA8B] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 mt-auto">
              <a
                href="tel:+447989668752"
                className="inline-flex items-center justify-center w-full bg-[#43AA8B] hover:bg-[#318F6F] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Both Ears
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <p className="text-lg text-[#0D1525] mb-4 font-semibold">
            All prices include home visit – no additional travel charges
          </p>
          <p className="text-[#4B5563]">
            Covering Derby, Nottingham, Leicestershire, Lincolnshire, and Staffordshire
          </p>
        </div>
      </div>
    </section>
  );
}
