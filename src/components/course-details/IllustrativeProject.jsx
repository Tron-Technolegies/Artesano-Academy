export default function IllustrativeProject({ project }) {
  return (
    <section className="mt-14 bg-[#e9e9e2] p-6 sm:mt-16 sm:p-7">
      <span className="text-[12px] font-medium">04 / ILLUSTRATIVE PROJECT</span>

      <h3 className="mb-0 mt-4 text-[21px] font-normal leading-[1.4]">{project.title}</h3>

      <p className="mt-3 text-[12px] leading-[1.8] text-[#77776f] sm:text-[13px]">
        {project.description}
      </p>
    </section>
  );
}
