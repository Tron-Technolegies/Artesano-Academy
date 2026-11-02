import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#ff6a00] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-[60px] lg:pb-16 lg:pt-[62px]">
        <div className="mb-7 flex items-start justify-between gap-5 text-[9px] uppercase tracking-[0.02em] sm:mb-8">
          <p className="flex items-center gap-2 text-sm">
            <span className="h-[9px] w-[9px] rounded-full bg-[#242424]" />
            Learn beyond the classroom
          </p>
          <p className="hidden pr-[20%] text-right sm:block text-sm">
            Architecture / Engineering / Design
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.06fr] lg:gap-10">
          <div className="max-w-[560px]">
            <h1 className="text-[clamp(3.1rem,8vw,4.2rem)] leading-[0.99] tracking-[-0.065em] sm:text-[clamp(3.6rem,6vw,4.7rem)] lg:text-[clamp(3.8rem,5.5vw,5rem)]">
              A degree is
              <br />
              the beginning.
              <br />
              <span className="text-white">Experience</span>
              <br />
              builds you.
            </h1>

            <p className="mt-6 max-w-[355px] text-[12px] leading-[1.85] sm:text-[15px]">
              Turn what you know into what you can build. Practical learning for the next generation
              of architects, civil engineers, and creators.
            </p>

            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:gap-4">
              <Link
                to="/course"
                className="flex min-h-[46px] min-w-[180px] items-center justify-between bg-[#242424] px-5 text-[12px] text-white transition-colors hover:bg-white hover:text-[#242424]"
              >
                Find your course <span>↗</span>
              </Link>
              <Link
                to="/about"
                className="flex min-h-[46px] min-w-[180px] items-center justify-between bg-white px-5 text-[12px] text-[#242424] transition-colors hover:bg-[#242424] hover:text-white"
              >
                Discover Artesano <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-right text-[9px] uppercase sm:hidden">
              Architecture / Engineering / Design
            </p>
            <div className="h-[300px] overflow-hidden rounded-tl-[105px] sm:h-[390px] sm:rounded-tl-[125px] lg:h-[455px] lg:rounded-tl-[145px]">
              <img
                src="/hero.png"
                alt="Modern geometric architectural building"
                className="h-full w-full object-cover object-center grayscale"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[12px] uppercase">
              <span>01 / The art of building</span>
              <span className="mr-[58%] hidden sm:inline">↗</span>
              <span className="sm:hidden">↗</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#242424]/80 pt-6 sm:mt-9 sm:pt-7">
          <p className="text-[12px] uppercase">From knowing, to doing.</p>
        </div>
      </div>
    </section>
  );
}
