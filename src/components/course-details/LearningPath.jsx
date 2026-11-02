import CourseModule from "./CourseModule";

export default function LearningPath({ modules = [] }) {
  return (
    <section className="mt-20 sm:mt-24">
      <span className="text-[12px] font-medium">02 / WHAT YOU’LL EXPLORE</span>

      <h2 className="mb-0 mt-5 text-[clamp(30px,3.5vw,38px)] font-normal leading-[1.3] tracking-[-0.045em]">
        A practical learning path.
      </h2>

      <p className="mt-3 text-[13px] leading-[1.8] text-[#77776f]">
        Illustrative curriculum — final modules and software to be confirmed.
      </p>

      <div className="mt-8">
        {modules.length > 0 ? (
          modules.map((module, index) => (
            <CourseModule key={module.number ?? index} module={module} />
          ))
        ) : (
          <p className="text-[11px] leading-[1.8] text-[#77776f]">
            Learning modules will be added soon.
          </p>
        )}
      </div>
    </section>
  );
}
