import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articles = [
  {
    category: "PERSPECTIVES",
    readTime: "3 MIN READ",
    title: "From classroom to construction: connecting knowledge with practice.",
    image: "/blog1.png",
    alt: "Contemporary architectural building",
    slug: "classroom-to-construction",
  },
  {
    category: "DESIGN FUNDAMENTALS",
    readTime: "3 MIN READ",
    title: "Reading between the lines: understanding an architectural plan.",
    image: "/blog2.png",
    alt: "Architectural drawings and construction plans",
    slug: "understanding-an-architectural-plan",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#242424]">
      <Navbar />

      {/* Blog Hero */}
      <section className="bg-[#ff6a00]">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-[60px]">
          <p className="text-[12px] leading-[1.6]">Home / Blog</p>

          <p className="mt-7 text-[10px] leading-[1.6]">THE ARTESANO JOURNAL</p>

          <h1 className="mt-7 max-w-[1000px] text-[clamp(38px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.055em]">
            Ideas worth building on.
          </h1>

          <p className="mt-6 max-w-[600px] text-[12px] leading-[1.8] sm:text-[13px]">
            Perspectives on design, construction, and learning through practice.
          </p>
        </div>
      </section>

      {/* Journal Articles */}
      <main className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[60px]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[12px] leading-[1.6]">03 / THE ARTESANO JOURNAL</p>

            <h2 className="mt-7 text-[clamp(30px,4vw,40px)] font-normal leading-[1.2] tracking-[-0.045em]">
              A fresh perspective.
            </h2>
          </div>

          <p className="max-w-[300px] text-[13px] leading-[1.8] text-[#77776f]">
            Short reads on design, construction, and becoming a better practitioner.
          </p>
        </div>

        {/* Article Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
          {articles.map((article) => (
            <article key={article.slug} className="group">
              <Link
                to={`/blog/${article.slug}`}
                className="block"
                aria-label={`Read ${article.title}`}
              >
                <div className="overflow-hidden bg-[#e5e4de]">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="aspect-[1.65/1] w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-[10px] leading-[1.6] text-[#77776f]">
                  {article.category} {article.readTime}
                </p>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <h3 className="max-w-[500px] text-[clamp(17px,2vw,21px)] font-normal leading-[1.4] tracking-[-0.025em]">
                    {article.title}
                  </h3>

                  <span aria-hidden="true" className="shrink-0 text-[23px] leading-none">
                    ↗
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
