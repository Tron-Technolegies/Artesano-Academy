import React from "react";

const quotes = [
  {
    quote:
      "A strong drawing communicates an idea. Practical understanding helps bring that idea to life.",
    field: "Architecture",
  },
  {
    quote: "The ability to ask the right questions is as valuable as knowing the tools.",
    field: "Construction",
  },
];

export default function IndustryExperts() {
  return (
    <section className="bg-[#ff6a00] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[64px]">
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div>
            <p className="mb-7 text-[12px] uppercase">05 / Perspectives from the field</p>
            <h2 className="max-w-[560px] text-[36px] leading-[1.12] tracking-[-0.055em] sm:text-[44px]">
              What our industry
              <br className="hidden sm:block" /> experts say.
            </h2>
          </div>
          <p className="max-w-[300px] text-[12px] leading-[1.9] md:mt-8 md:text-[12px]">
            Space for the voices that connect learning with the built environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {quotes.map((item) => (
            <article
              key={item.field}
              className="flex min-h-[245px] flex-col border border-[#242424] p-5 sm:min-h-[262px] sm:p-6 lg:p-[26px]"
            >
              <p className="mb-7 text-[10px] uppercase">Illustrative quote · Not a testimonial</p>
              <blockquote className="text-[22px] leading-[1.45] tracking-[-0.025em] sm:text-[25px] lg:text-[26px]">
                “{item.quote}”
              </blockquote>
              <div className="mt-auto border-t border-[#242424] pt-5">
                <p className="text-[11px] leading-relaxed">
                  ↗ Industry expert profile {item.field} · Details to be confirmed
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[12px] leading-relaxed">
          Sample editorial copy for the design. Replace with approved quotes and verified expert
          profiles before public launch.
        </p>
      </div>
    </section>
  );
}
