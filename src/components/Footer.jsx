import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Course", to: "/course" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-[60px]">
        <div className="flex flex-col justify-between gap-8 py-12 sm:py-14 md:flex-row md:items-center">
          <Link to="/" aria-label="Artesano Academy home" className="flex shrink-0 items-center">
            <img
              src="/artesano.png"
              alt="Artesano Academy of Construction"
              className="h-auto w-[125px] object-contain sm:w-[140px]"
            />
          </Link>

          <p className="text-[11px] leading-[1.9] text-[#777777] sm:text-[14px]">
            For the minds that imagine.
            <br />
            And the hands that build.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-3 text-[12px]"
          >
            {footerLinks.map((item) => (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-[#ff6a00]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-[#d9d8d1] py-6 text-[12px] text-[#777777] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Artesano Academy</span>
          <span>LEARN / BUILD / EXPERIENCE</span>
        </div>
      </div>
    </footer>
  );
}
