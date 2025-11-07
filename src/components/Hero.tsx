import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
          Your Tech Journey Begins
        </h2>
        <p className="text-xl lg:text-2xl text-primary font-semibold">
          @MADRAS ENGINEERING COLLEGE
        </p>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
          India's 1st Engineering College specialising in IT, Computer Science, Data Science, 
          Artificial Intelligence, Machine Learning, Cyber Security & Business Systems.
        </p>
        <div className="pt-6">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-6 text-lg font-semibold shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
