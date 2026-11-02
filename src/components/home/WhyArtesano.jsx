import React from "react";
import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    title: "Practice at the centre.",
    description:
      "A focus on practical training that connects academic knowledge with the work of construction and design.",
  },
  {
    number: "02",
    title: "Skills with a purpose.",
    description:
      "Explore the thinking, tools, and processes behind clearer drawings and better design decisions.",
  },
  {
    number: "03",
    title: "See the bigger picture.",
    description:
      "Connect architecture, civil engineering, and construction design instead of viewing them in isolation.",
  },
  {
    number: "04",
    title: "Build your confidence.",
    description:
      "Move from understanding concepts to explaining your process and developing your own ideas.",
  },
];

export default function WhyArtesano() {
  return (
    <section className="bg-[#242424] text-[#f5f4f0]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-[60px] lg:py-[76px]">
        <div>
          <p className="mb-7 text-[11px] uppercase">02 / A different way to learn</p>
          <h2 className="mb-5 text-[36px] leading-[1.08] tracking-[-0.055em] sm:text-[44px]">
            Why Artesano?
          </h2>
          <p className="max-w-[380px] text-[11px] leading-[1.9] text-[#d0d0d0] sm:text-[12px]">
            Because knowing how it works is only the beginning. Understanding how to build it makes
            the difference.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex min-h-[44px] items-center gap-3 bg-white px-5 text-[11px] text-[#242424] transition-colors hover:bg-[#ff6a00]"
          >
            Get to know Artesano <span>↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-7">
          {reasons.map((item) => (
            <article key={item.number} className="border-t border-[#555555] pt-5">
              <span className="text-[9px] text-[#ff6a00]">{item.number} /</span>
              <h3 className="mb-4 mt-5 text-[19px] leading-tight sm:text-[20px]">{item.title}</h3>
              <p className="text-[12px] leading-[1.9] text-[#d0d0d0]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
