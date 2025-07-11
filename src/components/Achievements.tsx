import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const InternshipExperience = () => {
  const experiences = [
  {
  title: "Salesforce Developer Virtual Internship",
  company: "SmartBridge & SmartInternz (AICTE NEAT)",
  date: "November 2024 – January 2025",
  description: "Completed 8-week Salesforce internship covering Apex, LWC, Process Automation, Super Badges, and API integrations.",
  link: "https://skillwallet.smartinternz.com/internships/salesforce_certificates/3ea816621e0d8ecd5e534ec28051d4d5"
}
,
{
    title: "Google AI-ML Virtual Internship",
    company: "Eduskills",
    date: "May 2024 – July 2024",
    description: "Completed hands-on projects involving supervised and unsupervised learning, using Python, NumPy, pandas, and scikit-learn.",
    link: "#" 
  },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Internships & Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{exp.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {exp.company}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                <div className="flex items-center text-muted-foreground pt-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-xs">{exp.date}</span>
                </div>

                {exp.link !== "#" && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-foreground text-sm font-medium"
                  >
                    View Certificate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                    </svg>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipExperience;
