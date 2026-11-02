import React from "react";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find your direction.",
    description: "Match your interests with architecture, civil engineering, or digital design.",
  },
  {
    number: "02",
    label: "LEARN",
    title: "Build the foundation.",
    description: "Develop your understanding of drawings, materials, tools, and workflows.",
  },
  {
    number: "03",
    label: "PRACTISE",
    title: "Put ideas to work.",
    description: "Apply your learning through exercises and document the decisions you make.",
  },
  {
    number: "04",
    label: "PROGRESS",
    title: "Show your potential.",
    description: "Shape a portfolio, reflect on your skills, and explore your next career step.",
  },
];

export default function CareerRoadmap() {
  return (
    <section className="bg-[#f5f4f0] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[64px]">
        <p className="mb-7 text-[12px] uppercase">03 / One step closer</p>
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-[36px] leading-[1.08] tracking-[-0.055em] sm:text-[44px]">
            Your career roadmap.
          </h2>
          <p className="max-w-[230px] text-[13px] leading-[1.9] text-[#777777]">
            From discovering your direction to showing what you can do.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <article key={step.number}>
              <span className="text-[19px] text-[#ff6a00]">{step.number}</span>
              <div className="mt-4 border-t border-[#d9d8d1] pt-4">
                <p className="mb-5 text-[10px] text-[#777777]">{step.label}</p>
                <h3 className="mb-4 text-[19px] leading-tight">{step.title}</h3>
                <p className="text-[13px] leading-[1.9] text-[#777777]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[12px] leading-relaxed text-[#777777]">
          A suggested progression, not a placement or employment guarantee.
        </p>
      </div>
    </section>
  );
}
