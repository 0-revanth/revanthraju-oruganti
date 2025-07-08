import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/revanth-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Placeholder for resume download functionality
    alert("Resume download functionality will be implemented!");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative inline-block animate-float">
            <img 
              src={profileImage} 
              alt="Revanth Profile" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary-glow/30 shadow-glow hover-scale animate-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30"></div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hi, I'm <span className="text-primary-glow">Revanth</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Aspiring Software Engineer | Passionate Developer | Problem Solver
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through code. Currently pursuing my degree with a focus on web development, cybersecurity, and emerging technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="lg"
              onClick={downloadResume}
              className="w-full sm:w-auto hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;