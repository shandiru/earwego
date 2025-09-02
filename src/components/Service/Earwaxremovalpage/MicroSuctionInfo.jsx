// src/components/MicroSuctionInfo.jsx
import React from "react";
import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";

export default function MicroSuctionInfo({
  imageSrc = "/professional-medical-ear-examination-with-microsco.png", // <-- replace with your own file path
  imageAlt = "Professional ear examination with microscope",
}) {
  return (
    <section className="py-16 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What is Micro Suction Ear Wax Removal?
          </h2>
          <p className="text-lg text-slate-600">
            Micro suction is the safest and most effective way to remove ear wax. Instead of using
            water or cotton buds (which can push wax deeper), we use a gentle medical suction device
            to carefully remove the blockage.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Image - you control this file */}
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Points */}
          <div className="space-y-8">
            {/* Safe & Gentle */}
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 grid place-items-center h-8 w-8 rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <FiShield className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Safe &amp; Gentle</h3>
                <p className="text-slate-600">
                  No water, no syringing, no risk of damage to your ears.
                </p>
              </div>
            </div>

            {/* Quick Relief */}
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 grid place-items-center h-8 w-8 rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <FiClock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Quick Relief</h3>
                <p className="text-slate-600">
                  Appointments usually take just 15–30 minutes.
                </p>
              </div>
            </div>

            {/* Immediate Results */}
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 grid place-items-center h-8 w-8 rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <FiCheckCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Immediate Results</h3>
                <p className="text-slate-600">
                  Walk out hearing clearly again with instant relief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
