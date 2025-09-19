// src/components/Hero.jsx
import React from "react";

const HERO_IMG =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%286%29-Ak7Z5ppjywHX6EHegNL2tftxTGYdRC.png"; // replace with your file if you host locally

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-[#f8fafc] to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Heading with fluid size that never overflows */}
            <h1
              className="font-serif font-bold text-[#1e293b] leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 6vw, 48px)" }}
            >
              Hear Better, Live Better
            </h1>

            <p className="text-xl text-[#1e293b] mb-4">
              Professional Earwax Removal in the Comfort of Your Home
            </p>
            <p className="text-lg text-[#64748b] mb-8">Safe, Compassionate Care Tailored for You</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+447989668752"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-[#059669] hover:bg-[#047857] text-white"
              >
                {/* Phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Your Appointment Today
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white bg-transparent"
              >
                Learn More
              </a>
            </div>

            {/* Feature bullets 
                - 1 column on mobile, 3 columns from md
                - consistent icon sizing and spacing
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center text-[#1e293b]">
                {/* Map pin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-[#2563eb]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Home and Work
              </div>

              <div className="flex items-center text-[#1e293b]">
                {/* Clock */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-[#2563eb]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Same Day Appointments
              </div>

             
            </div>
          </div>

          {/* Right column: image card */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
              <img
                src={HERO_IMG}
                alt="Ear We Go Professional Earwax Removal"
                className="mx-auto w-[280px] sm:w-[300px] h-[300px] sm:h-[320px] object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="text-center mt-6">
                <p className="text-[#64748b] text-sm font-medium">
                  Professional • Trusted • Experienced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
