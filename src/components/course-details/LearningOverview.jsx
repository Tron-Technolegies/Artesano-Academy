import { Link } from "react-router-dom";

export default function LearningOverview({ details = [] }) {
  return (
    <aside className="h-fit bg-[#e9e9e2] p-6 sm:p-7 lg:p-8">
      <span className="text-[9px] font-medium">YOUR LEARNING AT A GLANCE</span>

      <h2 className="mb-7 mt-4 text-[23px] font-normal leading-[1.3] tracking-[-0.035em] sm:text-[25px]">
        Make your next move.
      </h2>

      {details.map((detail) => (
        <div key={detail.label} className="border-b border-[#d9d8d1] py-5 first:pt-0">
          <span className="block text-[9px] font-medium">{detail.label}</span>

          <p className="mt-2 text-[14px] leading-[1.6]">{detail.value}</p>
        </div>
      ))}

      <Link
        to="/contact"
        className="mt-8 flex min-h-[48px] items-center justify-between bg-[#242522] px-4 text-[11px] text-[#f5f4ef] transition-opacity hover:opacity-80"
      >
        <span>Enquire now</span>
        <span className="text-[18px]">↗</span>
      </Link>

      <p className="mt-4 text-[10px] leading-[1.7] text-[#77776f]">
        Course concept preview. Availability, curriculum, fees and admission requirements await
        confirmation.
      </p>
    </aside>
  );
}
