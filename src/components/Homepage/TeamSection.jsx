// src/components/TeamSection.jsx
import React from "react";

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop",
    bio: `Sarah brings over 8 years of experience in user experience design and has led
design teams at several Fortune 500 companies. She's passionate about creating
intuitive interfaces that delight users.`,
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=640&auto=format&fit=crop",
    bio: `Michael is a full-stack developer with expertise in React, Node.js, and cloud
architecture. He loves solving complex technical challenges and mentoring junior
developers on the team.`,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#e9f6f4]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-800 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Get to know the talented individuals behind our success. Our team combines
            creativity, technical expertise, and passion to deliver exceptional results.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="flex flex-col justify-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 min-h-[420px]" // <-- added min-h
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
