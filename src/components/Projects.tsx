import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "#",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      techStack: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "IoT Weather Monitor",
      description: "Arduino-based weather monitoring system with web dashboard for real-time data visualization and historical analysis.",
      techStack: ["Arduino", "Python", "Flask", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=400&h=250&fit=crop"
    },
    {
      title: "Personal Finance Tracker",
      description: "Web application for tracking personal expenses, budget planning, and financial goal setting with data visualization.",
      techStack: ["Vue.js", "Express.js", "PostgreSQL", "D3.js"],
      githubLink: "#",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Network security monitoring dashboard with threat detection, vulnerability assessment, and real-time alerts.",
      techStack: ["Python", "Django", "Redis", "Bootstrap"],
      githubLink: "#",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            IoT, and cybersecurity applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift overflow-hidden bg-gradient-card hover-neon animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground text-xl">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;