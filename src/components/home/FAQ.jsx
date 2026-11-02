import React, { useState } from "react";

const questions = [
  {
    question: "What is Artesano Academy?",
    answer:
      "Artesano Academy focuses on practical learning across architecture, civil engineering, construction, and digital design.",
  },
  {
    question: "Which learning areas can I explore?",
    answer:
      "You can explore Practical Architecture, Applied Civil Engineering, and Design & Automation.",
  },
  {
    question: "Who can join a course?",
    answer:
      "Students, graduates, aspiring professionals, and anyone interested in developing practical skills can enquire about the available courses.",
  },
  {
    question: "What are the course duration and fees?",
    answer:
      "Course durations and fees will be confirmed by the academy. Please contact us for the latest details.",
  },
  {
    question: "Are courses online or in person?",
    answer: "Please contact the academy to confirm the available learning formats.",
  },
  {
    question: "Does the academy provide placement support?",
    answer:
      "Placement support and career guidance details can be confirmed directly with the academy.",
  },
  {
    question: "How can I enquire about a course?",
    answer:
      "Use the enquiry form on this page to prepare your enquiry and get in touch with the academy.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f5f4f0] text-[#242424]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 sm:px-8 sm:py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:px-[60px] lg:py-[72px]">
        <div>
          <p className="mb-7 text-[12px] uppercase">06 / Let’s make it clear</p>
          <h2 className="text-[36px] leading-[1.13] tracking-[-0.055em] sm:text-[44px]">
            Good questions.
            <br />
            Clear answers.
          </h2>
          <p className="mt-5 text-[13px] leading-[1.9] text-[#777777] sm:text-[12px]">
            Everything you need to take
            <br className="hidden sm:block" /> your next step with confidence.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block text-[12px] transition-colors hover:text-[#ff6a00]"
          >
            Have another question? ↗
          </a>
        </div>

        <div>
          <p className="border-b border-[#d9d8d1] pb-2 text-[15px] uppercase">
            Frequently asked questions
          </p>
          {questions.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={item.question} className="border-b border-[#d9d8d1]">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[55px] w-full items-center justify-between gap-5 px-3 py-4 text-left text-[11px] transition-colors hover:text-[#ff6a00] sm:min-h-[57px] sm:px-4 sm:text-[12px]"
                >
                  <span>{item.question}</span>
                  <span className="shrink-0 text-[17px]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-3 pb-5 text-[11px] leading-[1.9] text-[#777777] sm:px-4">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
