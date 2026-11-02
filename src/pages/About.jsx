import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const approachItems = [
  {
    title: "Learn with purpose.",
    description:
      "Understand the principles behind a drawing, a design decision, and a built space.",
  },
  {
    title: "Build your understanding.",
    description:
      "Connect concepts to practical exercises, construction challenges, and design exploration.",
  },
  {
    title: "Experience the process.",
    description:
      "Think beyond the final result. Explore how an idea develops from first sketch to construction.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#242424]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#ff6a00] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[68px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[11px]">Home / About</p>

          <p className="mt-8 text-[10px] font-medium">ABOUT ARTESANO</p>

          <h1 className="mt-7 max-w-[1200px] text-[clamp(38px,5.5vw,68px)] font-normal leading-[1.12] tracking-[-0.055em]">
            Learning is just the beginning.
          </h1>

          <p className="mt-6 max-w-[600px] text-[12px] leading-[1.8]">
            An academy built around the connection between knowledge and experience.
          </p>
        </div>
      </section>

      {/* Artesano Approach */}
      <section className="bg-[#242424] px-6 py-16 text-[#f5f4f0] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[68px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[12%]">
          {/* Left */}
          <div>
            <p className="text-[10px] font-medium">02 / THE ARTESANO APPROACH</p>

            <h2 className="mt-7 max-w-[420px] text-[clamp(34px,4vw,44px)] font-normal leading-[1.25] tracking-[-0.05em]">
              Great builders don’t stop at the classroom.
            </h2>

            <p className="mt-6 max-w-[440px] text-[12px] leading-[1.8] text-[#d0d0ca]">
              Architecture and civil engineering education shouldn’t end in the classroom. Artesano
              brings the focus back to practical training, skill development, and the craft of
              construction.
            </p>

            <a
              href="/course"
              className="mt-6 inline-flex min-h-[44px] items-center gap-3 bg-[#f5f4f0] px-5 text-[10px] text-[#242424] transition-opacity hover:opacity-80"
            >
              Our learning philosophy
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          {/* Right */}
          <div>
            {approachItems.map((item, index) => (
              <div
                key={item.title}
                className={`py-6 first:pt-0 ${
                  index !== approachItems.length - 1 ? "border-b border-[#555550]" : ""
                }`}
              >
                <h3 className="text-[20px] font-normal tracking-[-0.025em]">{item.title}</h3>

                <p className="mt-6 text-[12px] leading-[1.8] text-[#d0d0ca]">{item.description}</p>
              </div>
            ))}

            <a
              href="/course"
              className="mt-7 inline-flex items-center gap-3 text-[10px] font-medium text-[#ff6a00]"
            >
              LEARN. BUILD. EXPERIENCE.
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
