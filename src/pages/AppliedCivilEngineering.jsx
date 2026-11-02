import CourseDetailLayout from "../components/course-details/CourseDetailLayout";
import courses from "../data/courses";

export default function AppliedCivilEngineering() {
  return <CourseDetailLayout course={courses.civil} />;
}
