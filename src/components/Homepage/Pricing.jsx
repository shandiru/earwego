// src/components/Pricing.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // animate every time on scroll
      mirror: true,   // animate again when scrolling back up
    });
  }, []);

  return (
    <section id="pricing" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#374151] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Home visits only - no hidden fees, no clinic charges
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Single Ear */}
          <div
            data-slot="card"
            className="bg-white text-card-foreground flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-white hover:border-[#15803d] transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4"
              >
                <div
                  data-slot="card-title"
                  className="font-semibold text-2xl font-serif text-[#374151]"
                >
                  Single Ear
                </div>
                <div className="text-4xl font-bold text-[#15803d] mt-4">£50</div>
                <p className="text-gray-600">Per ear treatment</p>
              </div>

              <div data-slot="card-content" className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                  ].map((text) => (
                    <li key={text} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#84cc16] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button inside card, aligned bottom */}
            <div className="px-6 mt-auto">
              <a
                href="tel:+447989668752"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#15803d] hover:bg-[#166534] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Single Ear
              </a>
            </div>
          </div>

          {/* Both Ears (Popular) */}
          <div
            data-slot="card"
            className="bg-white text-card-foreground flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-[#15803d] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute top-0 right-0 bg-[#84cc16] text-white px-3 py-1 text-sm font-semibold">
              POPULAR
            </div>

            <div>
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4"
              >
                <div
                  data-slot="card-title"
                  className="font-semibold text-2xl font-serif text-[#374151]"
                >
                  Both Ears
                </div>
                <div className="text-4xl font-bold text-[#15803d] mt-4">£60</div>
                <p className="text-gray-600">Complete treatment</p>
                <p className="text-sm text-[#84cc16] font-semibold">Save £40!</p>
              </div>

              <div data-slot="card-content" className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                    "Complete ear health check",
                  ].map((text) => (
                    <li key={text} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#84cc16] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button inside card, aligned bottom */}
            <div className="px-6 mt-auto">
              <a
                href="tel:+447989668752"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#84cc16] hover:bg-[#65a30d] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Both Ears
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <p className="text-lg text-[#374151] mb-4">
            <strong>All prices include home visit - no additional travel charges</strong>
          </p>
          <p className="text-gray-600">
            Covering Derby, Nottingham, Leicestershire, Lincolnshire, and Staffordshire
          </p>
        </div>
      </div>
    </section>
  );
}
