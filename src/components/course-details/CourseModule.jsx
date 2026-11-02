export default function CourseModule({ module }) {
  return (
    <article className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-t border-[#d9d8d1] py-5 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-4 sm:py-6">
      <span className="pt-1 text-[12px] text-[#77776f]">{module.number}</span>

      <div>
        <h3 className="text-[17px] font-normal leading-[1.5] sm:text-[18px]">{module.title}</h3>

        <p className="mt-4 max-w-[600px] text-[12px] leading-[1.8] text-[#77776f] sm:text-[13px]">
          {module.description}
        </p>
      </div>
    </article>
  );
}
