// src/components/TeamSection.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Rab",
    role: "Founder",
    avatar: "/img-right.jpeg",
    bio: `With over a decade of experience in professional earwax removal, Rab has built a reputation for his steady hands, expert knowledge, and friendly approach. His dedication ensures every client receives safe, effective treatment in a comfortable environment.`,
  },
  {
    name: "Rhegan",
    role: "Digital & Operations Support",
    avatar: "/img-left.jpeg",
    bio: `Rhegan plays a key role in running the business day to day, from managing our social media presence to helping clients connect with us online. He brings a modern digital perspective, making sure our family business is easy to reach and continues to grow in today’s world.`,
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[#f8fafc]" id="team">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <header
          className="mx-auto mb-12 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-serif font-bold tracking-tight text-[#0d1525] sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4b5563] sm:text-lg">
            Get to know the people at the heart of our family business. Together,
            we blend years of hands-on experience with a fresh digital approach
            to deliver trusted, professional care.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((m, idx) => (
            <article
              key={m.name}
              className="flex flex-col justify-start rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_0_25px_rgba(21,128,61,0.2)] sm:p-8 min-h-[420px]"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 200}
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <img
                    src={m.avatar}
                    alt={`${m.name} headshot`}
                    className="h-full w-full rounded-full object-cover ring-4 ring-white"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#15803d]/30" />
                </div>
              </div>

              {/* Name + Role */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-semibold text-[#0d1525]">
                  {m.name}
                </h3>
                <p className="mt-1 text-[#15803d] font-medium">{m.role}</p>
              </div>

              {/* Bio */}
              <p className="mx-auto mt-4 max-w-prose text-sm leading-6 text-[#4b5563] sm:text-base">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
