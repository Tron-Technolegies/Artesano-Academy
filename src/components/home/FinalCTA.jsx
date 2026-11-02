import React from "react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#ff6a00] text-[#242424]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-8 px-6 py-16 sm:px-8 sm:py-20 lg:px-[60px] lg:py-[88px]">
        <div>
          <p className="mb-7 text-[12px] uppercase">Your next chapter starts with a skill.</p>
          <h2 className="text-[38px] leading-[1.06] tracking-[-0.06em] sm:text-[54px] lg:text-[68px]">
            Don’t just imagine it.
            <br />
            Learn to build it.
          </h2>
          <p className="mt-7 text-[14px] sm:text-[12px]">
            Not sure where to start? Let’s find your direction.
          </p>
          <Link
            to="/course"
            className="mt-7 inline-flex min-h-[44px] items-center gap-3 bg-[#242424] px-5 text-[10px] text-white transition-colors hover:bg-white hover:text-[#242424] md:hidden"
          >
            Explore courses <span>↗</span>
          </Link>
        </div>

        <Link
          to="/course"
          aria-label="Explore courses"
          className="hidden h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full border border-[#242424] text-[78px] font-light leading-none transition-colors duration-300 hover:bg-[#242424] hover:text-[#ff6a00] md:flex lg:h-[175px] lg:w-[175px] lg:text-[90px]"
        >
          ↗
        </Link>
      </div>
    </section>
  );
}
