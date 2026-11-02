export default function SkillsSection({ skills = [] }) {
  return (
    <section className="mt-20 sm:mt-24">
      <span className="text-[9px] font-medium">03 / BUILD YOUR UNDERSTANDING</span>

      <h2 className="mb-0 mt-5 text-[clamp(30px,3.5vw,38px)] font-normal leading-[1.3] tracking-[-0.045em]">
        Skills to work towards.
      </h2>

      <div className="mt-8 space-y-5">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <p key={`${skill}-${index}`} className="text-[15px] leading-[1.6] sm:text-[16px]">
              <span className="mr-1">↗</span>
              {skill}
            </p>
          ))
        ) : (
          <p className="text-[12px] leading-[1.8] text-[#77776f]">
            Course skills will be added soon.
          </p>
        )}
      </div>
    </section>
  );
}
