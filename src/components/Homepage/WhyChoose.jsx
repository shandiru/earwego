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
    img: "/dental.png",
    icon: <FiAward className="w-6 h-6 text-white" />,
  },
  {
    title: "Same Day Appointments",
    desc:
      "No waiting weeks for NHS appointments. We offer same-day service when you need it most, often within hours of your call.",
    img: "/dental.png",
    icon: <FiClock className="w-6 h-6 text-white" />,
  },
  {
    title: "NHS Approved Equipment",
    desc:
      "We use the same superior equipment as NHS hospitals - far more efficient than high street alternatives for quicker, more comfortable procedures.",
    img: "/dental.png",
    icon: <FiActivity className="w-6 h-6 text-white" />,
  },
  {
    title: "High Return Rate",
    desc:
      "Very high percentage of returning happy customers who we've treated over the last few years and trust us with their ongoing ear care needs.",
    img: "/dental.png",
    icon: <FiUsers className="w-6 h-6 text-white" />,
  },
  {
    title: "Convenient Home Visits",
    desc:
      "Professional, friendly service in your own home. No need to travel, park, or wait in clinics - we come to you.",
    img: "/dental.png",
    icon: <FiHome className="w-6 h-6 text-white" />,
  },
  {
    title: "Complete Care Package",
    desc:
      "Free hearing test after treatment if requested. We ensure your complete satisfaction and optimal hearing experience.",
    img: "/dental.png",
    icon: <FiCheckCircle className="w-6 h-6 text-white" />,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-md group">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              {/* Bottom Card (like reference) */}
              <div className="bg-[#00c2b3] text-white p-5 flex flex-col justify-between h-[180px] relative">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                {/* Arrow Button */}
                <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-[#00c2b3] rounded-full p-2 shadow-md hover:scale-105 transition">
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
