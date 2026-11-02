import React from "react";

const students = [
  {
    category: "ARCHITECTURE",
    image: "stu1.png",
    position: "center 35%",
  },
  {
    category: "CIVIL ENGINEERING",
    image: "stu2.png",
    position: "center 35%",
  },
  {
    category: "DIGITAL DESIGN",
    image: "stu3.png",
    position: "center 35%",
  },
];

export default function StudentPlacement() {
  return (
    <section className="bg-[#e9e9e1] text-[#242424]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-[60px] lg:pb-[76px] lg:pt-[64px]">
        <p className="mb-5 text-[12px] uppercase">Student placement / The next chapter</p>
        <h2 className="mb-9 text-[36px] leading-[1.08] tracking-[-0.055em] sm:text-[44px]">
          Placed &amp; thriving.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <article key={student.category} className="min-w-0 bg-[#f5f4f0]">
              <div className="relative h-[300px] overflow-hidden sm:h-[375px]">
                <img
                  src={student.image}
                  alt="Illustrative student portrait"
                  style={{ objectPosition: student.position }}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-3 bg-[#f5f4f0] px-4 py-3 text-[8px]">
                  SAMPLE PROFILE
                </span>
              </div>
              <div className="p-5 sm:p-[18px]">
                <p className="mb-3 text-[10px]">{student.category}</p>
                <h3 className="mb-2 text-[22px] leading-tight">Student name</h3>
                <p className="text-[14px] text-[#777777]">Role &amp; employer to be added</p>
                <p className="mt-6 text-[12px] text-[#777777]">Placement details pending</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[12px] leading-relaxed text-[#777777]">
          Design preview with illustrative stock portraits. Replace with verified student photos,
          names, roles, and employers.
        </p>
      </div>
    </section>
  );
}
