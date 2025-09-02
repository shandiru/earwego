// src/components/SafetySection.jsx
import React from "react";
import { FiShield, FiUsers, FiCheckCircle } from "react-icons/fi";

export default function SafetySection() {
  return (
    <section id="safety" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Is Micro Suction Safe?
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Yes — it's considered the gold standard in ear wax removal and is especially
            recommended for people with specific conditions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <article className="bg-white rounded-xl border border-slate-200 shadow-sm py-6 text-left">
            <div className="px-6">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <FiShield className="h-6 w-6 text-blue-600" />
                <span>Medically Approved</span>
              </div>
            </div>

            <div className="px-6 mt-4">
              <p className="text-slate-600 mb-4">
                Unlike syringing or ear candling, micro suction is controlled, precise,
                and medically approved by healthcare professionals worldwide.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-800">
                  <FiCheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">No water pressure risks</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <FiCheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Precise control</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800">
                  <FiCheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Medical grade equipment</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-xl border border-slate-200 shadow-sm py-6 text-left">
            <div className="px-6">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <FiUsers className="h-6 w-6 text-blue-600" />
                <span>Especially Recommended For</span>
              </div>
            </div>

            <div className="px-6 mt-4">
              <ul className="space-y-3">
                {[
                  "People with sensitive ears",
                  "History of ear infections",
                  "Hearing aid or earphone users",
                  "Narrow ear canals",
                  "Previous ear surgery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-800">
                    <FiCheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
