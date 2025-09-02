// src/components/ProcessSection.jsx
import React from "react";

const steps = [
  {
    title: "Examination",
    desc:
      "Your ear canal is examined using a specialist microscope for precise visualization.",
  },
  {
    title: "Gentle Suction",
    desc:
      "A fine suction device is used to gently remove the wax without any water or pressure.",
  },
  {
    title: "Precise & Hygienic",
    desc:
      "The process is controlled, precise, and completely hygienic with medical-grade equipment.",
  },
  {
    title: "Instant Relief",
    desc:
      "Once complete, you'll instantly notice the difference in your hearing clarity.",
  },
];

export default function ProcessSection({
  imageSrc = "/images/micro-suction-process.jpg", // <-- put your own image path here
  imageAlt = "Micro suction ear wax removal procedure",
}) {
  return (
    <section id="process" className="py-16 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            How Does It Work?
          </h2>
          <p className="text-lg text-slate-600">
            A simple, precise, and hygienic process
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Steps (left) */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image (right) — you control this file */}
          <div>
            <img
              src="/professional-medical-ear-examination-with-microsco.png"
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
