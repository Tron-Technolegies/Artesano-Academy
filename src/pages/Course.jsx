import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = ["All courses", "Architecture", "Civil Engineering", "Digital Design"];

const courses = [
  {
    category: "Architecture",
    tag: "SPACE · FORM · FUNCTION",
    title: "Practical Architecture",
    description: "Connect design thinking with drawings, materials, and the way spaces are made.",
    path: "/course/practical-architecture",
    type: "architecture",
  },
  {
    category: "Civil Engineering",
    tag: "PLAN · EXECUTE · BUILD",
    title: "Applied Civil Engineering",
    description:
      "Bridge engineering fundamentals with construction methods and site understanding.",
    path: "/course/applied-civil-engineering",
    type: "civil",
  },
  {
    category: "Digital Design",
    tag: "MODEL · REFINE · CREATE",
    title: "Design & Automation",
    description: "Explore digital modelling and more considered, efficient design workflows.",
    path: "/course/design-automation",
    type: "digital",
  },
];

function Wireframe({ type }) {
  return (
    <svg
      viewBox="0 0 350 215"
      className={`w-full max-w-[350px] ${type === "civil" ? "text-[#e5e5d9]" : "text-[#454941]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {type === "architecture" && (
        <>
          <path d="M18 90 L175 42 L309 90 L175 135 Z" />
          <path d="M18 90 V155 L175 194 L309 155 V90" />
          <path d="M175 42 V135 V194" />
          <path d="M18 155 L175 115 L309 155" />
          <path d="M49 80 V151 L145 174 V107" />
          <path d="M274 80 V151 L201 171 V108" />
          <path d="M49 80 L175 115 L274 80" />
          <path d="M3 168 L175 207 L329 168" strokeDasharray="2 4" opacity=".4" />
          <path d="M18 90 L3 99 V168" opacity=".6" />
          <path d="M309 90 L329 99 V168" opacity=".6" />
          <path d="M175 32 V207" strokeDasharray="2 4" opacity=".4" />
        </>
      )}

      {type === "civil" && (
        <>
          <path d="M38 92 L175 48 L298 86 L175 129 Z" />
          <path d="M38 92 V148 L175 187 L298 148 V86" />
          <path d="M175 48 V129 V187" />
          <path d="M38 120 L175 160 L298 120" />
          <path d="M78 79 V161" />
          <path d="M117 66 V172" />
          <path d="M215 61 V170" />
          <path d="M257 73 V161" />
          <path d="M38 92 L78 104 L117 91 L175 108 L215 96 L257 108 L298 86" />
          <path d="M38 148 L78 135 L117 147 L175 160 L215 145 L257 135 L298 148" />
          <path d="M18 81 L175 31 L318 78" strokeDasharray="3 5" opacity=".4" />
          <path d="M18 158 L175 204 L318 158" strokeDasharray="3 5" opacity=".4" />
        </>
      )}

      {type === "digital" && (
        <>
          <path d="M30 91 L175 45 L305 91 L175 135 Z" />
          <path d="M30 91 V159 L175 199 L305 159 V91" />
          <path d="M175 45 V135 V199" />
          <path d="M30 113 L175 157 L305 113" />
          <path d="M30 136 L175 179 L305 136" />
          <path d="M30 91 L175 67 L305 91" strokeDasharray="2 4" opacity=".5" />
          <path d="M55 83 L175 51 L282 83" strokeDasharray="2 4" opacity=".5" />
          <path d="M55 106 L175 145 L282 106" strokeDasharray="2 4" opacity=".5" />
          <path d="M55 129 L175 169 L282 129" strokeDasharray="2 4" opacity=".5" />
          <path d="M10 185 H330" strokeDasharray="2 4" opacity=".5" />
          <path d="M175 30 V207" strokeDasharray="2 4" opacity=".4" />
        </>
      )}
    </svg>
  );
}

function CourseCard({ course }) {
  const visualBackground = {
    architecture: "bg-[#e9e9e2]",
    civil: "bg-[#242522]",
    digital: "bg-[#d8ca91]",
  };

  return (
    <Link to={course.path} className="group block min-w-0">
      <article className="flex min-w-0 flex-col border border-[#deddd5]">
        {/* Illustration */}
        <div
          className={`relative flex aspect-[1.58/1] items-center justify-center overflow-hidden p-3 ${visualBackground[course.type]}`}
        >
          <span
            className={`absolute left-[14px] top-[16px] text-[10px] uppercase ${
              course.type === "civil" ? "text-[#e5e5d9]" : "text-[#292a27]"
            }`}
          >
            {course.category}
          </span>

          <Wireframe type={course.type} />
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col px-[21px] pb-[18px] pt-[22px]">
          <span className="text-[10px] text-[#77776f]">{course.tag}</span>

          <h3 className="mb-[13px] mt-[18px] text-[20px] font-normal leading-[1.3] tracking-[-0.025em]">
            {course.title}
          </h3>

          <p className="mb-4 text-[14px] leading-[1.8] text-[#77776f]">{course.description}</p>

          <div className="mt-auto flex items-center justify-between border-t border-[#deddd5] pt-[14px] text-[11px] transition-opacity group-hover:opacity-60">
            <span>Explore pathway</span>
            <span className="text-[17px]">↗</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Course() {
  const [activeCategory, setActiveCategory] = useState("All courses");

  const filteredCourses =
    activeCategory === "All courses"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#292a27]">
      <Navbar />

      <main>
        {/* Orange hero */}
        <section className="bg-[#ff6900]">
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1440px] py-[55px] sm:w-[calc(100%-80px)] sm:py-[64px] lg:w-[calc(100%-120px)]">
            <div className="mb-[28px] flex items-center gap-[5px] text-[12px]">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Course</span>
            </div>

            <span className="text-[10px]">BUILD YOUR NEXT CHAPTER</span>

            <h1 className="mb-[22px] mt-[27px] text-[clamp(44px,5.4vw,68px)] font-normal leading-[1.05] tracking-[-0.065em]">
              Find your direction.
            </h1>

            <p className="text-[13px] leading-[1.8]">
              Explore practical learning in architecture, civil engineering, and digital design.
            </p>
          </div>
        </section>

        {/* Course section */}
        <section className="pb-[90px] pt-[60px] sm:pb-[110px]">
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1440px] sm:w-[calc(100%-80px)] lg:w-[calc(100%-120px)]">
            {/* Heading */}
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:gap-[60px]">
              <div>
                <span className="text-[11px]">01 / FIND YOUR DIRECTION</span>

                <h2 className="mb-0 mt-[31px] text-[clamp(30px,3.5vw,42px)] font-normal leading-[1.2] tracking-[-0.055em]">
                  Your ambition.
                  <br />A practical starting point.
                </h2>
              </div>

              <p className="mt-[38px] text-[13px] leading-[1.8] text-[#77776f] lg:w-[30%] lg:max-w-[360px]">
                Explore the skills that bring ideas to life.
                <br />
                Find a direction that fits the future you want to build.
              </p>
            </div>

            {/* Category buttons */}
            <div className="mb-[24px] mt-[25px] flex flex-wrap gap-[7px] sm:grid sm:max-w-[640px] sm:grid-cols-4 sm:gap-0">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] px-[14px] py-3 text-left text-[11px] transition-colors ${
                    activeCategory === category
                      ? "bg-[#242522] text-[#f5f4ef]"
                      : "text-[#292a27] hover:bg-[#e9e9e2]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Course cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.type} course={course} />
              ))}
            </div>

            {/* Note */}
            <p className="mt-[25px] text-[14px] leading-[1.8] text-[#77776f]">
              Illustrative learning pathways. Final curriculum, duration, and admissions details to
              be confirmed by Artesano Academy.
            </p>
          </div>
        </section>
      </main>

      {/* Common Footer */}
      <Footer />
    </div>
  );
}
