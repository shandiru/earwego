// src/components/FindUs.jsx
"use client"; // only needed if you’re mixing with Next.js, safe in React too
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // animate on every scroll
      mirror: true,   // animate again when scrolling back up
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#0d1525] mb-10"
          data-aos="fade-up"
        >
          Find Us
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <iframe
            title="Google Map - Ear We Go"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.620286763254!2d-1.490062!3d52.921063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e43286a4caa7%3A0x5e35d7f3113f10ab!2sWGC5%2BCX%20Derby!5e0!3m2!1sen!2suk!4v1695056273000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Optional Get Directions button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.google.com/maps/place/WGC5%2BCX,+Derby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
