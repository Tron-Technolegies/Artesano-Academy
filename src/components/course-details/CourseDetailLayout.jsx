import Navbar from "../Navbar";
import Footer from "../Footer";

import CourseHero from "./CourseHero";
import CourseOverview from "./CourseOverview";
import CourseCTA from "./CourseCTA";

export default function CourseDetailLayout({ course }) {
  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#292a27]">
      <Navbar />

      <main>
        <CourseHero course={course} />
        <CourseOverview course={course} />
        <CourseCTA />
      </main>

      <Footer />
    </div>
  );
}
