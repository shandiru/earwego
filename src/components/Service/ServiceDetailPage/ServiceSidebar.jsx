// src/components/services/ServiceSidebar.jsx
import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function ServiceSidebar({ items, activeId, onSelect }) {
  return (
    <aside className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
      <h3 className="text-slate-800 font-semibold mb-4">Other Services</h3>

      <div className="space-y-3">
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <button
              key={it.id}
              onClick={() => onSelect?.(it.id)}
              className={[
                "w-full rounded-lg border flex items-center gap-2 px-4 py-3 text-left transition",
                active
                  ? "bg-teal-500 text-white border-teal-500 shadow"
                  : "bg-white text-slate-700 border-slate-200 hover:border-teal-500",
              ].join(" ")}
            >
              <span
                className={[
                  "grid place-items-center h-6 w-6 rounded-full mr-1",
                  active ? "bg-white/20" : "bg-teal-50 text-teal-600",
                ].join(" ")}
              >
                <FiChevronRight className={active ? "text-white" : ""} />
              </span>
              <span className="font-medium">{it.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
