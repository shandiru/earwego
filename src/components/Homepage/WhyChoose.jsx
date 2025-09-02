// src/components/WhyChoose.jsx
import React from "react";
import {
  FiAward,
  FiClock,
  FiActivity,
  FiUsers,
  FiHome,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const items = [
  {
    title: "Over 8 Years Experience",
    desc:
      "Unrivalled micro suction experience. We often get cases where individuals have gone elsewhere but not received satisfactory results, but end up happy after visiting us.",
    img: "/images/experience.jpg",
    icon: <FiAward className="w-8 h-8" />,
  },
  {
    title: "Same Day Appointments",
    desc:
      "No waiting weeks for NHS appointments. We offer same-day service when you need it most, often within hours of your call.",
    img: "/images/appointments.jpg",
    icon: <FiClock className="w-8 h-8" />,
  },
  {
    title: "NHS Approved Equipment",
    desc:
      "We use the same superior equipment as NHS hospitals - far more efficient than high street alternatives for quicker, more comfortable procedures.",
    img: "/images/equipment.jpg",
    icon: <FiActivity className="w-8 h-8" />,
  },
  {
    title: "High Return Rate",
    desc:
      "Very high percentage of returning happy customers who we've treated over the last few years and trust us with their ongoing ear care needs.",
    img: "/images/return-rate.jpg",
    icon: <FiUsers className="w-8 h-8" />,
  },
  {
    title: "Convenient Home Visits",
    desc:
      "Professional, friendly service in your own home. No need to travel, park, or wait in clinics - we come to you.",
    img: "/images/home-visits.jpg",
    icon: <FiHome className="w-8 h-8" />,
  },
  {
    title: "Complete Care Package",
    desc:
      "Free hearing test after treatment if requested. We ensure your complete satisfaction and optimal hearing experience.",
    img: "/images/care-package.jpg",
    icon: <FiCheckCircle className="w-8 h-8" />,
  },
];

export default function WhyChoose() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e293b] mb-4">
            Why Choose Ear We Go?
          </h2>
          <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
            We've helped thousands of patients who couldn't get satisfactory results elsewhere.
            Our expertise and NHS-approved equipment ensure you leave happy and hearing clearly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-2xl overflow-hidden shadow-md group h-[380px]"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-teal-500 text-white rounded-xl p-5 shadow-lg flex flex-col h-[180px]">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                {/* Arrow button */}
                <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-teal-600 rounded-full p-2 shadow-md hover:scale-105 transition">
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
