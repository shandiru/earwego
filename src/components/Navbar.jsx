// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom"; // Add this import

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Custom scroll function that handles cross-page navigation
  const scrollWithOffset = (el) => {
    if (el) {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -100; // Offset for sticky navbar
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
  };

  // Enhanced scroll function that waits for page load if navigating from another page
  const enhancedScroll = (el) => {
    if (el) {
      // Small delay to ensure page has loaded when coming from another route
      setTimeout(() => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; // Offset for sticky navbar
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }, 100);
    }
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Why Us", href: "/#services" }, // Always use full path for cross-page navigation
    { label: "Pricing", href: "/#pricing" },
    { label: "Team", href: "/#team" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/#faq" },
    { label: "Recognising the Symptoms", href: "/symptoms" },
    { label: "What is Micro Suction", href: "/Earwaxremovalpage" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <img
              src="/LOGO2-removebg-preview.png"
              alt="EarWeGo Logo"
              className="h-18 sm:h-18 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <HashLink
                key={link.label}
                to={link.href}
                scroll={enhancedScroll}
                className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base whitespace-nowrap"
              >
                {link.label}
              </HashLink>
            ))}
          </nav>

          {/* Call Button (Desktop) */}
          <a
            href="tel: +448081371961"
            className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold shadow h-10 px-5
              bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
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
                <HashLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  scroll={enhancedScroll}
                  className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525]"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>

            <a
              href="tel: +448081371961"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold h-10 px-4
                bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
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