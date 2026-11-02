import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Course", to: "/course" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Change the navbar button on individual course detail pages.
  const isCourseDetailPage =
    location.pathname.startsWith("/course/") && location.pathname !== "/course";

  const buttonLabel = isCourseDetailPage ? "Contact Us" : "Explore courses";
  const buttonLink = isCourseDetailPage ? "/contact" : "/course";

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[12px] transition-colors duration-200 hover:text-[#ff6a00] ${
      isActive
        ? "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-[#ff6a00]"
        : ""
    }`;

  return (
    <header className="relative z-50 w-full bg-[#f5f4f0] text-[#242424]">
      <nav className="mx-auto flex min-h-[90px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-[60px]">
        {/* Logo */}
        <Link to="/" aria-label="Artesano Academy home" className="flex shrink-0 items-center">
          <img
            src="/artesano.png"
            alt="Artesano Academy of Construction"
            className="h-auto w-[125px] object-contain sm:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex lg:gap-12">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to={buttonLink}
          className={`hidden min-h-[45px] items-center gap-3 px-6 text-[12px] transition-colors duration-200 hover:bg-[#ff6a00] sm:flex ${
            isCourseDetailPage
              ? "border border-[#242424] bg-transparent text-[#242424] hover:border-[#ff6a00] hover:text-white"
              : "bg-[#242424] text-white"
          }`}
        >
          {buttonLabel}
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#d8d7d0] text-xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#deddd6] bg-[#f5f4f0] px-6 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-[#deddd6] py-2 text-sm ${
                    isActive ? "text-[#ff6a00]" : "text-[#242424]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to={buttonLink}
              onClick={() => setMenuOpen(false)}
              className={`mt-1 flex items-center justify-between px-5 py-4 text-xs ${
                isCourseDetailPage
                  ? "border border-[#242424] text-[#242424]"
                  : "bg-[#242424] text-white"
              }`}
            >
              {buttonLabel}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
