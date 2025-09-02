// src/components/HeroMicroSuction.jsx
import React from "react";
import { FiCalendar, FiPhone } from "react-icons/fi";

export default function HeroMicroSuction() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100/60 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-6">
            Safe &amp; Professional
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Ear Wax Removal by{" "}
            <span className="text-blue-600">Micro Suction</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            The safest and most effective way to remove ear wax. Quick, clean,
            and completely safe when carried out by trained professionals.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md h-12 px-7 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FiCalendar className="w-5 h-5" />
              Book Your Appointment
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md h-12 px-7 text-lg font-medium border border-slate-300 text-slate-700 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FiPhone className="w-5 h-5" />
              Call Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
