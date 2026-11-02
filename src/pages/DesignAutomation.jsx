import CourseDetailLayout from "../components/course-details/CourseDetailLayout";
import courses from "../data/courses";

export default function DesignAutomation() {
  return <CourseDetailLayout course={courses.digital} />;
}
