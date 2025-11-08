import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  buttonText: string;
  variant: "success" | "danger" | "primary" | "default";
  image: string;
  subCourses?: Array<{
    title: string;
    description: string;
  }>;
}

const CourseCard = ({ title, description, buttonText, variant, image, subCourses }: CourseCardProps) => {
  const gradientClass = 
    variant === "success" ? "bg-gradient-green" :
    variant === "danger" ? "bg-gradient-red" :
    variant === "primary" ? "bg-gradient-purple" :
    "bg-secondary";

  const buttonVariant = 
    variant === "success" ? "default" :
    variant === "danger" ? "default" :
    variant === "primary" ? "default" :
    "secondary";

  return (
    <Card className={`${gradientClass} border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 aspect-square flex flex-col overflow-hidden`}>
      {/* Course Image */}
      <div className="relative w-full h-24 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <CardHeader className="p-3">
        <CardTitle className="text-sm font-bold text-white leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-white/90 text-xs mt-1 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      {subCourses && (
        <CardContent className="space-y-2 flex-grow p-3">
          {subCourses.map((course, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded p-2 border border-white/20">
              <h4 className="font-semibold text-white text-xs mb-0.5 line-clamp-1">{course.title}</h4>
              <p className="text-[10px] text-white/80 line-clamp-2">{course.description}</p>
            </div>
          ))}
        </CardContent>
      )}
      
      <CardFooter className="mt-auto p-3">
        <Button 
          variant={buttonVariant}
          className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-full font-semibold py-2 text-xs"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
