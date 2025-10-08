"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEarListen, FaHeartPulse } from "react-icons/fa6";
import { MdHearing, MdOutlineMedicalServices } from "react-icons/md";

const ICONS_IMG = "icons.png";
const CORNER_IMG = "icons.png"; // bottom-right background image

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#EAF7F3] py-16 sm:py-20 overflow-hidden"
    >
      {/* === Floating icons + decorative background === */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute top-[8%] left-[10%] w-16 sm:w-20 animate-float-slow" />
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute top-[35%] left-[35%] w-20 sm:w-24 animate-float-fast" />
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute bottom-[25%] right-[25%] w-16 sm:w-20 animate-float-medium" />
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute bottom-[10%] left-[30%] w-16 sm:w-20 animate-float-slow" />
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute top-[25%] right-[10%] w-20 sm:w-24 animate-float-medium" />
        <img src={ICONS_IMG} alt="Decorative Icons" className="absolute bottom-[15%] right-[5%] w-20 sm:w-24 animate-float-fast" />

        {/* Vector icons 
        <div className="absolute top-[20%] right-[40%] text-[#43AA8B] text-5xl animate-float-slow drop-shadow-[0_0_6px_rgba(67,170,139,0.6)]">
          <MdHearing />
        </div>
        <div className="absolute bottom-[20%] left-[10%] text-[#9C79B3] text-5xl animate-float-medium drop-shadow-[0_0_6px_rgba(156,121,179,0.7)]">
          <FaEarListen />
        </div>
        <div className="absolute top-[10%] right-[20%] text-[#43AA8B] text-5xl animate-float-fast drop-shadow-[0_0_6px_rgba(67,170,139,0.7)]">
          <FaHeartPulse />
        </div>
        <div className="absolute bottom-[10%] left-[40%] text-[#9C79B3] text-5xl animate-float-medium drop-shadow-[0_0_6px_rgba(156,121,179,0.6)]">
          <MdOutlineMedicalServices />
        </div>
         */}
        {/* === New Corner Image to fill empty space === */}
        
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h1
              className="font-serif font-bold text-[#0D1525] leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 6vw, 48px)" }}
            >
              Hear Better, Live Better
            </h1>

            <p className="text-xl text-[#0D1525] mb-4">
              Professional Earwax Removal in the Comfort of Your Home
            </p>
            <p className="text-lg text-[#4B5563] mb-8">
              Safe, Compassionate Care Tailored for You
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+448081371961"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-md h-10 rounded-md px-6 bg-[#43AA8B] hover:bg-[#368A75] text-white"
              >
                📞 Book Your Appointment Today
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 border-[#9C79B3] text-[#9C79B3] hover:bg-[#9C79B3] hover:text-white"
              >
                Learn More
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center text-[#0D1525]">
                <span className="mr-2 text-[#9C79B3] text-lg">🏠</span> Home and Work
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className="flex items-center text-[#0D1525]">
                <span className="mr-2 text-[#43AA8B] text-lg">⚡</span> Same Day Appointments
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9C79B3]/30 to-[#43AA8B]/30 rounded-full blur-[120px] animate-pulse-slow"></div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full flex items-center justify-center group">
              <img
                src="/LOGO2.png"
                alt="EarWeGo Icons"
                className="mx-auto w-[260px] sm:w-[280px] h-[260px] sm:h-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4.5s ease-in-out infinite; }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
