import React from "react";
import { Link } from "react-router-dom";

const courseAreas = [
  "Practical Architecture",
  "Civil Engineering",
  "Construction Design",
  "Design Automation",
];

const courses = [
  {
    category: "ARCHITECTURE",
    eyebrow: "SPACE · FORM · FUNCTION",
    title: "Practical Architecture",
    description: "Connect design thinking with drawings, materials, and the way spaces are made.",
    bg: "#e9e9e1",
    dark: false,
    type: 1,
    link: "/course/practical-architecture",
  },
  {
    category: "CIVIL ENGINEERING",
    eyebrow: "PLAN · EXECUTE · BUILD",
    title: "Applied Civil Engineering",
    description:
      "Bridge engineering fundamentals with construction methods and site understanding.",
    bg: "#242424",
    dark: true,
    type: 2,
    link: "/course/applied-civil-engineering",
  },
  {
    category: "DIGITAL DESIGN",
    eyebrow: "MODEL · REFINE · CREATE",
    title: "Design & Automation",
    description: "Explore digital modelling and more considered, efficient design workflows.",
    bg: "#d9cb91",
    dark: false,
    type: 3,
    link: "/course/design-automation",
  },
];

function CourseDiagram({ type, dark }) {
  const stroke = dark ? "#c8c8bc" : "#424b43";

  return (
    <svg viewBox="0 0 360 220" className="h-full w-full" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.2" strokeLinejoin="round">
        {type === 1 && (
          <>
            <path d="M20 105 180 55 340 105 180 160Z" />
            <path d="M20 105v75l160 35 160-35v-75" />
            <path d="M180 55v105 55" />
            <path d="M55 94v74l125 30M90 84v76l90 21M145 67v78l35 15" />
            <path d="m180 160 120-25v-30M220 148V85M260 136V95" />
            <path d="m20 180 160-40 160 40" strokeDasharray="3 5" opacity=".5" />
          </>
        )}

        {type === 2 && (
          <>
            <path d="M25 105 180 60 335 105 180 155Z" />
            <path d="M25 105v55l155 45 155-45v-55" />
            <path d="M180 60v95 50M70 92v82M110 80v105M250 80v105M290 92v82" />
            <path d="m25 132 155 48 155-48M70 92l110 33 110-33M110 80l70 20 70-20" />
            <path d="M5 95 180 40l175 55M5 175l175 45 175-45" strokeDasharray="3 5" opacity=".5" />
          </>
        )}

        {type === 3 && (
          <>
            <path d="M20 105 180 55 340 105 180 155Z" />
            <path d="M20 105v75l160 35 160-35v-75M180 55v100 60" />
            <path d="m20 130 160 50 160-50M20 155l160 50 160-50" />
            <path d="m75 88 160 49M125 72l160 49" strokeDasharray="3 5" />
            <path d="M180 45v175M0 205h360" strokeDasharray="3 5" opacity=".5" />
          </>
        )}
      </g>
    </svg>
  );
}

export default function TrendingCourses() {
  return (
    <section className="bg-[#f5f4f0] text-[#242424]">
      <div className="bg-[#242424] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-6 py-5 text-[11px] sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-[60px] lg:py-6">
          {courseAreas.map((area) => (
            <div key={area} className="flex items-center justify-between gap-4">
              <span>{area}</span>
              <span className="text-[#ff6a00]">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[64px]">
        <div className="mb-8 flex flex-col justify-between gap-5 md:mb-9 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[12px] uppercase">01 / Build in-demand skills</p>

            <h2 className="text-[34px] leading-[1.08] tracking-[-0.055em] sm:text-[42px] lg:text-[44px]">
              Our trending courses.
            </h2>
          </div>

          <div className="max-w-[285px] text-[13px] leading-[1.9] text-[#777777] md:pb-1">
            <Link
              to="/course"
              className="mb-5 block text-left text-[#242424] transition-colors hover:text-[#ff6a00] md:text-right"
            >
              View all courses ↗
            </Link>
            Find your starting point in the world of architecture, engineering, and design.
          </div>
        </div>

        <div className="grid cursor-pointer grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.title}
              to={course.link}
              className="block min-w-0 border border-[#d9d8d1] transition-colors hover:border-[#ff6a00]"
            >
              <article className="h-full">
                <div className="h-[210px] p-4 sm:h-[220px]" style={{ backgroundColor: course.bg }}>
                  <p className={`text-[10px] ${course.dark ? "text-white" : "text-[#242424]"}`}>
                    {course.category}
                  </p>

                  <div className="h-[175px] sm:h-[185px]">
                    <CourseDiagram type={course.type} dark={course.dark} />
                  </div>
                </div>

                <div className="p-5 sm:p-[22px]">
                  <p className="mb-4 text-[10px] text-[#777777]">{course.eyebrow}</p>

                  <h3 className="mb-3 text-[20px] leading-tight tracking-[-0.025em]">
                    {course.title}
                  </h3>

                  <p className="min-h-[48px] text-[13px] leading-[1.9] text-[#777777]">
                    {course.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#d9d8d1] pt-4 text-[12px] transition-colors hover:text-[#ff6a00]">
                    Explore pathway <span>↗</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="mt-7 text-[12px] leading-relaxed text-[#777777]">
          Featured course concepts for this website preview; curriculum and popularity data are
          pending confirmation.
        </p>
      </div>
    </section>
  );
}
