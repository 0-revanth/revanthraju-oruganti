import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "GITAM University",
      year: "2022 - 2026",
      cgpa: "8.5",
      status: "Pursuing"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      year: "2020 - 2022",
      cgpa: "9.2",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Vikas High School",
      year: "2019 - 2020",
      cgpa: "9.5",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Qualifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-elegant"></div>
                  
                  <Card className="w-full md:ml-16 border-none shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                            <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        </div>
                        
                        <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span className="text-sm">{edu.year}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="mr-2 h-4 w-4 text-primary" />
                            <span className="font-semibold text-primary">{edu.cgpa} CGPA</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Pursuing' 
                            ? 'bg-accent/20 text-accent-foreground' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;