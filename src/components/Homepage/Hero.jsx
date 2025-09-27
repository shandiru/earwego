// src/components/Hero.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HERO_IMG = "news-logo-removebg-preview.png";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#F8FAFC] to-white py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div data-aos="fade-right">
            <h1
              className="font-serif font-bold text-[#0D1525] leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 6vw, 48px)" }}
            >
              Hear Better, Live Better
            </h1>

            <p className="text-xl text-[#0D1525] mb-4">
              Professional Earwax Removal in the Comfort of Your Home
            </p>
            <p className="text-lg text-[#4B5563] mb-8">
              Safe, Compassionate Care Tailored for You
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+448081371961"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 bg-[#43AA8B] hover:bg-[#368A75] text-white"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
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
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 border-[#9C79B3] text-[#9C79B3] hover:bg-[#9C79B3] hover:text-white bg-transparent"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Learn More
              </a>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div
                className="flex items-center text-[#0D1525]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-[#9C79B3]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Home and Work
              </div>

              <div
                className="flex items-center text-[#0D1525]"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-[#9C79B3]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Same Day Appointments
              </div>
            </div>
          </div>

          {/* Right column: image card with working hover glow */}
          <div
            className="relative flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="group relative z-10 bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full
                after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:z-[-1]
                after:blur-[100px] after:opacity-0 after:transition-opacity after:duration-300
                group-hover:after:opacity-70
                after:bg-[radial-gradient(circle,_#9C79B3_0%,_#43AA8B_100%)]"
            >
              <img
                src={HERO_IMG}
                alt="Ear We Go Professional Earwax Removal"
                className="mx-auto w-[280px] sm:w-[300px] h-[300px] sm:h-[320px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
