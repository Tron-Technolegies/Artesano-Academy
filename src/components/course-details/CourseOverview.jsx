import LearningOverview from "./LearningOverview";
import LearningPath from "./LearningPath";
import SkillsSection from "./SkillsSection";
import IllustrativeProject from "./IllustrativeProject";

export default function CourseOverview({ course }) {
  return (
    <section className="py-14 sm:py-16 lg:py-[68px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[1.65fr_0.95fr] lg:gap-[7%] lg:px-[60px]">
        <div>
          <span className="text-[9px] font-medium">01 / COURSE OVERVIEW</span>

          <h2 className="mb-0 mt-5 text-[clamp(34px,4vw,44px)] font-normal leading-[1.35] tracking-[-0.05em]">
            {course.overviewTitle}
          </h2>

          <p className="mt-8 max-w-[620px] text-[13px] leading-[1.8] text-[#77776f]">
            {course.overviewDescription}
          </p>

          <div className="mt-14 sm:mt-16">
            <h3 className="text-[20px] font-normal">Who is this for?</h3>

            <p className="mt-4 max-w-[600px] text-[13px] leading-[1.8] text-[#77776f]">
              {course.whoIsThisFor}
            </p>
          </div>

          <LearningPath modules={course.modules} />

          <SkillsSection skills={course.skills} />

          <IllustrativeProject project={course.project} />
        </div>

        <div>
          <LearningOverview details={course.details} />
        </div>
      </div>
    </section>
  );
}
