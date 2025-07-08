import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      platform: "Coursera",
      date: "January 2024",
      description: "Comprehensive course covering React, Node.js, MongoDB, and deployment strategies",
      link: "#"
    },
    {
      title: "Python for Data Science",
      platform: "NPTEL",
      date: "November 2023",
      description: "Advanced Python programming for data analysis, visualization, and machine learning",
      link: "#"
    },
    {
      title: "Cybersecurity Fundamentals",
      platform: "Cisco Networking Academy",
      date: "September 2023",
      description: "Introduction to cybersecurity principles, threat detection, and network security",
      link: "#"
    },
    {
      title: "Cloud Computing Basics",
      platform: "AWS Academy",
      date: "July 2023",
      description: "Fundamentals of cloud computing, AWS services, and cloud architecture",
      link: "#"
    },
    {
      title: "Data Structures and Algorithms",
      platform: "GeeksforGeeks",
      date: "May 2023",
      description: "Comprehensive understanding of DSA concepts with practical implementations",
      link: "#"
    },
    {
      title: "IoT Application Development",
      platform: "Arduino",
      date: "March 2023",
      description: "Building IoT applications using Arduino, sensors, and wireless communication",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{cert.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {cert.platform}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">{cert.date}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="h-8 text-primary hover:text-primary-foreground hover:bg-primary">
                    <ExternalLink className="h-4 w-4" />
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

export default Certifications;