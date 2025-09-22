// src/components/WhyChoose.jsx
"use client";
import React, { useEffect } from "react";
import {
  FiAward,
  FiClock,
  FiActivity,
  FiUsers,
  FiHome,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    title: "Over 10 Years Experience",
    desc:
      "Unrivalled micro suction experience. We often get cases where individuals have gone elsewhere but not received satisfactory results, but end up happy after visiting us.",
    img: "/dental.png",
    icon: <FiAward className="w-6 h-6 text-white" />,
  },
  {
    title: "Medical Grade Approved Equipment",
    desc:
      "We use the same superior equipment as Medical Grade Equipment hospitals - far more efficient than high street alternatives for quicker, more comfortable procedures.",
    img: "/dental.png",
    icon: <FiActivity className="w-6 h-6 text-white" />,
  },
  {
    title: "Same Day Appointments",
    desc:
      "No waiting weeks for Medical Grade Equipment appointments. We offer same-day service when you need it most, often within hours of your call.",
    img: "/dental.png",
    icon: <FiClock className="w-6 h-6 text-white" />,
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
    desc: "We ensure your complete satisfaction and optimal hearing experience.",
    img: "/dental.png",
    icon: <FiCheckCircle className="w-6 h-6 text-white" />,
  },
];

export default function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false, // animate every scroll
      mirror: true, // animate on scroll up as well
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e293b] mb-4">
            Why Choose Ear We Go?
          </h2>
          <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
            We've helped thousands of patients who couldn't get satisfactory results elsewhere.
            Our expertise and Medical Grade Equipment ensure you leave happy and hearing clearly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={idx * 150} // staggered delay
            >
              {/* Image */}
              <div className="w-full h-[280px] rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Box */}
              <div className="-mt-10 w-[90%] bg-[#00c2b3] text-white rounded-2xl shadow-md p-6 relative h-[200px] flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-end">
                  <button className="w-10 h-10 rounded-full bg-white text-[#00c2b3] flex items-center justify-center shadow-md hover:scale-110 transition">
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
