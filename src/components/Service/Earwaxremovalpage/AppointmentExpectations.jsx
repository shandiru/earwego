// src/components/AppointmentExpectations.jsx
import React from "react";
import { FiUsers, FiInfo, FiClock, FiCheckCircle, FiCalendar } from "react-icons/fi";

const steps = [
  {
    title: "Consultation",
    desc: "A friendly consultation to check your ears and discuss your symptoms",
    Icon: FiUsers,
  },
  {
    title: "Explanation",
    desc: "A clear explanation of the procedure and what to expect",
    Icon: FiInfo, // <-- exists in Feather
  },
  {
    title: "Treatment",
    desc: "The micro suction treatment taking just 10–30 minutes",
    Icon: FiClock,
  },
  {
    title: "Aftercare",
    desc: "Advice on aftercare and keeping your ears healthy",
    Icon: FiCheckCircle,
  },
];

export default function AppointmentExpectations() {
  return (
    <section className="py-16 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What to Expect at Your Appointment
          </h2>
          <p className="text-lg text-slate-600">
            A comfortable and professional experience from start to finish
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="bg-white text-slate-900 rounded-xl border border-slate-200 shadow-sm text-center py-6"
            >
              <div className="px-6">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <div className="px-6 mt-2">
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">
            Most people feel relief immediately after the procedure.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 h-12 px-8 text-lg rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FiCalendar className="w-5 h-5" />
            Schedule Your Appointment Today
          </button>
        </div>
      </div>
    </section>
  );
}
