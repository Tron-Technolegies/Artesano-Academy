import { Link } from "react-router-dom";

export default function CourseCTA() {
  return (
    <section className="bg-[#ff6900]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-[60px] lg:py-[48px]">
        <span className="text-[9px] font-medium">NOT SURE IF THIS IS YOUR DIRECTION?</span>

        <h2 className="mb-0 mt-5 text-[clamp(36px,4.5vw,48px)] font-normal leading-[1.25] tracking-[-0.055em]">
          Let’s figure it out together.
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
          <Link
            to="/contact"
            className="flex min-h-[48px] min-w-[195px] items-center justify-between gap-8 bg-[#242522] px-4 text-[11px] text-[#f5f4ef] transition-opacity hover:opacity-80"
          >
            <span>Contact Us</span>
            <span className="text-[18px]">↗</span>
          </Link>

          <Link to="/course" className="text-[12px] transition-opacity hover:opacity-60">
            Explore all courses ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
