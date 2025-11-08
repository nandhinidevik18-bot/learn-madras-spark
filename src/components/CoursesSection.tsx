import CourseCard from "./CourseCard";
import cseImage from "@/assets/course-cse.jpg";
import aidsImage from "@/assets/course-aids.jpg";
import itImage from "@/assets/course-it.jpg";
import futureImage from "@/assets/course-future.jpg";

const CoursesSection = () => {
  const courses = [
    {
      title: "B.E. in Computer Science & Engineering",
      description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
      buttonText: "Let's Start",
      variant: "success" as const,
      image: cseImage,
    },
    {
      title: "B.Tech. in Artificial Intelligence & Data Science (AIDS)",
      description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
      buttonText: "Let's Chat",
      variant: "danger" as const,
      image: aidsImage,
    },
    {
      title: "B.Tech. in Information Technology (IT)",
      description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      buttonText: "Let's Chat",
      variant: "primary" as const,
      image: itImage,
    },
    {
      title: "Explore More Programs",
      description: "Discover additional specialized programs and courses tailored to shape your future in technology.",
      buttonText: "Coming Soon",
      variant: "success" as const,
      image: futureImage,
    },
  ];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
