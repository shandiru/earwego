// src/components/TeamSection.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Rab",
    role: "Founder",
    avatar: "/img-right.jpeg", // Replace with real image
    bio: `With over a decade of experience in professional earwax removal, Rab has built a reputation for his steady hands, expert knowledge, and friendly approach. His dedication ensures every client receives safe, effective treatment in a comfortable environment.`,
  },
  {
    name: "Rhegan",
    role: "Digital & Operations Support",
    avatar: "/img-left.jpeg", // Replace with real image
    bio: `Rhegan plays a key role in running the business day to day, from managing our social media presence to helping clients connect with us online. He brings a modern digital perspective, making sure our family business is easy to reach and continues to grow in today’s world.`,
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // trigger every scroll
      mirror: true, // also animate when scrolling back up
    });
  }, []);

  return (
    <section className="bg-[#e9f6f4]" id="team">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <header
          className="mx-auto mb-12 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-800 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
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
              className="flex flex-col justify-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 min-h-[420px]"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 200} // stagger effect
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
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-slate-200/70" />
                </div>
              </div>

              {/* Name + Role */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-semibold text-slate-800">
                  {m.name}
                </h3>
                <p className="mt-1 text-indigo-600 font-medium">{m.role}</p>
              </div>

              {/* Bio */}
              <p className="mx-auto mt-4 max-w-prose text-sm leading-6 text-slate-600 sm:text-base">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
