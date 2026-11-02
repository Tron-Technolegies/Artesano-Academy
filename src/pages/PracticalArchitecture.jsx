import CourseDetailLayout from "../components/course-details/CourseDetailLayout";
import courses from "../data/courses";

export default function PracticalArchitecture() {
  return <CourseDetailLayout course={courses.architecture} />;
}
