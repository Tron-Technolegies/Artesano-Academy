import React from "react";

const mentors = [
  {
    number: "01",
    category: "Architecture & Spatial Design",
    description: "Design thinking, spatial planning, and architectural communication.",
    image: "mentor.png",
  },
  {
    number: "02",
    category: "Civil Engineering & Construction",
    description: "Construction processes, technical drawings, and site understanding.",
    image: "mentor.png",
  },
  {
    number: "03",
    category: "Digital Design & Automation",
    description: "Digital modelling, coordinated workflows, and design tools.",
    image: "mentor.png",
  },
];

function ProfilePlaceholder({ number }) {
  return (
    <div className="relative flex h-[260px] flex-col items-center justify-center bg-[#d8d8d0] sm:h-[275px] lg:h-[288px]">
      <span className="absolute left-5 top-5 text-[10px]">MENTOR PROFILE / {number}</span>
      <div className="h-[82px] w-[72px] rounded-full bg-[#bab9b1]" />
      <div className="mt-4 h-[90px] w-[164px] rounded-t-full bg-[#bab9b1]" />
      <span className="absolute bottom-5 left-5 text-[10px]">PROFILE COMING SOON</span>
    </div>
  );
}

export default function Mentors() {
  return (
    <section className="bg-[#e9e9e1] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[64px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-7 text-[12px] uppercase">04 / The people behind the learning</p>
            <h2 className="text-[36px] leading-[1.08] tracking-[-0.055em] sm:text-[44px]">
              Meet the mentors.
            </h2>
          </div>
          <p className="max-w-[225px] text-[11px] leading-[1.9] text-[#777777]">
            The perspectives that help turn curiosity into capability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <article key={mentor.number} className="mx-auto w-full max-w-[350px] bg-[#f5f4f0]">
              <div className="h-[280px] overflow-hidden">
                <img
                  src={mentor.image}
                  alt="Mentor portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <p className="mb-2 text-[10px]">{mentor.category}</p>
                <h3 className="mb-1 text-[20px] leading-tight">Meet your mentor.</h3>
                <p className="text-[13px] leading-[1.9] text-[#777777]">{mentor.description}</p>
                <p className="mt-3 text-[11px] text-[#777777]">
                  Name, portrait, and credentials to be added.
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[12px] leading-relaxed text-[#777777]">
          Profile placeholders. Confirmed mentor details will be added by Artesano Academy.
        </p>
      </div>
    </section>
  );
}
