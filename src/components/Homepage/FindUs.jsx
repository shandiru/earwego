// src/components/FindUs.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-10"
          data-aos="fade-up"
        >
          Find Us
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg w-full h-[400px] border border-gray-200"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <iframe
            title="Google Map - Ear We Go"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.5093705817058!2d-1.491566!3d52.921259299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f13060e4201f%3A0x1d06502f6f1e422c!2sGreat%20Northern%20Rd%2C%20Derby%2C%20UK!5e0!3m2!1sen!2slk!4v1759292526907!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Get Directions button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://maps.app.goo.gl/9UQ4DpVbSdYuN5Fz7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#10B981] hover:bg-[#0D1525] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
