import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesBanner from "@/components/FeaturesBanner";
import CoursesSection from "@/components/CoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesBanner />
      <CoursesSection />
    </div>
  );
};

export default Index;
