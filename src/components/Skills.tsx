import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Vue.js", "Node.js", "Express.js", "Django", "Flask", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Arduino IDE", "Docker", "AWS", "Firebase"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Adaptability", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies 
            developed through academic projects and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift bg-gradient-card hover-neon animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-white">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Cybersecurity</h4>
                <p className="text-muted-foreground text-sm">Network Security, Ethical Hacking, Vulnerability Assessment</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-elegant">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">IoT Development</h4>
                <p className="text-muted-foreground text-sm">Arduino Programming, Sensor Integration, Wireless Communication</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-elegant">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Data Science</h4>
                <p className="text-muted-foreground text-sm">Data Analysis, Machine Learning, Data Visualization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;