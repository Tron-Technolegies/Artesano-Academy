function HeroIllustration({ type }) {
  return (
    <div className="relative flex aspect-[1.25/1] w-full items-center justify-center overflow-hidden bg-[#e5e4d9] p-6">
      <span className="absolute left-5 top-5 text-[8px] uppercase tracking-wide text-[#292a27]">
        {type === "architecture"
          ? "Architecture"
          : type === "civil"
            ? "Civil Engineering"
            : "Digital Design"}
      </span>

      <svg
        viewBox="0 0 350 250"
        className="w-full max-w-[400px] text-[#292a27]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {type === "architecture" && (
          <>
            <path d="M40 95 L175 35 L300 95 L175 145 Z" />
            <path d="M40 95 V175 L175 215 L300 175 V95" />
            <path d="M175 35 V145 V215" />
            <path d="M40 175 L175 130 L300 175" />
            <path d="M70 85 V155 L145 180 V115" />
            <path d="M270 85 V155 L205 180 V115" />
            <path d="M70 85 L175 130 L270 85" />
            <path d="M15 190 L175 235 L325 190" strokeDasharray="3 5" opacity=".4" />
            <path d="M175 25 V235" strokeDasharray="3 5" opacity=".4" />
          </>
        )}

        {type === "civil" && (
          <>
            <path d="M40 95 L175 40 L300 95 L175 150 Z" />
            <path d="M40 95 V175 L175 220 L300 175 V95" />
            <path d="M175 40 V150 V220" />
            <path d="M40 125 L175 175 L300 125" />
            <path d="M40 150 L175 195 L300 150" />
            <path d="M85 78 V190" />
            <path d="M125 62 V202" />
            <path d="M220 62 V202" />
            <path d="M260 78 V190" />
            <path d="M40 95 L85 110 L125 95 L175 115 L220 95 L260 110 L300 95" />
            <path d="M15 80 L175 20 L325 80" strokeDasharray="3 5" opacity=".4" />
            <path d="M15 190 L175 240 L325 190" strokeDasharray="3 5" opacity=".4" />
          </>
        )}

        {type === "digital" && (
          <>
            <path d="M40 95 L175 40 L300 95 L175 150 Z" />
            <path d="M40 95 V175 L175 220 L300 175 V95" />
            <path d="M175 40 V150 V220" />
            <path d="M40 120 L175 175 L300 120" />
            <path d="M40 145 L175 195 L300 145" />
            <path d="M65 85 L175 50 L275 85" strokeDasharray="3 5" opacity=".5" />
            <path d="M65 110 L175 155 L275 110" strokeDasharray="3 5" opacity=".5" />
            <path d="M65 135 L175 180 L275 135" strokeDasharray="3 5" opacity=".5" />
            <path d="M15 200 H325" strokeDasharray="3 5" opacity=".4" />
            <path d="M175 25 V235" strokeDasharray="3 5" opacity=".4" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function CourseHero({ course }) {
  return (
    <section className="bg-[#ff6900] px-[5%] pb-[50px] pt-[30px]">
      <p className="mb-10 text-[10px]">Home / Course / {course.title}</p>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-5 text-[9px] uppercase">{course.label}</p>

          <h1 className="mb-10 text-[clamp(44px,5vw,68px)] font-normal leading-[1.1] tracking-[-0.05em]">
            {course.title}
          </h1>

          <h2 className="mb-4 text-[20px] font-normal">{course.subtitle}</h2>

          <p className="max-w-[500px] text-[13px] leading-[1.8]">{course.description}</p>

          <button
            type="button"
            className="mt-10 flex items-center justify-between gap-10 bg-[#242522] px-5 py-4 text-[11px] text-white"
          >
            <span>Enquire about this course</span>
            <span className="text-[17px]">↗</span>
          </button>
        </div>

        <div className="relative">
          <HeroIllustration type={course.heroType} />

          <span className="absolute bottom-4 right-5 text-[10px]">{course.number}</span>
        </div>
      </div>
    </section>
  );
}
