// src/components/services/PromoCard.jsx
import React from "react";

export default function PromoCard({ image, title, tag, cta, onClick }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-100">
      {/* background image */}
      <img
        src="/dental.png"
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* gradient mask for readability */}
      <div className="absolute inset-0 bg-slate-900/20" />
      <div className="relative p-6">
        {tag && (
          <p className="text-center text-teal-400 font-medium mb-2 drop-shadow">
            {tag}
          </p>
        )}
        <h4 className="text-white text-center font-semibold text-lg leading-snug drop-shadow">
          {title}
        </h4>

        <div className="mt-4 flex justify-center">
          <button
            onClick={onClick}
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow"
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}
