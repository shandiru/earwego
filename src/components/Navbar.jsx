// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Why Us", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Recognising the Symptoms", href: "/symptoms" },
    { label: "What is Micro Suction", href: "/Earwaxremovalpage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <img
              src="/news-logo-removebg-preview.png"
              alt="Ear We Go Logo"
              className="h-24 sm:h-24 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-800 hover:text-[#0d1525] transition-colors font-medium text-base whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call Button (Desktop) */}
          <a
            href="tel:+447989668752"
            className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold shadow h-10 px-5
              bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#0d1525]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="tel:+447989668752"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold h-10 px-4
                bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
