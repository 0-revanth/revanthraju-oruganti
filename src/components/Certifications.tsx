import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
  title: "Responsive Web Design",
  platform: "freeCodeCamp",
  date: "July 2024",
  description: "certification covering HTML, CSS, Flexbox, Grid, and accessibility for responsive websites.",
  link: "https://www.freecodecamp.org/certification/fccfce8ce71-0218-46dc-964d-7c86cb3ea147/responsive-web-design"
}
,
     {
  title: "Introduction to Prompt Engineering",
  platform: "IBM via edX",
  date: "July 2024",
  description: "Fundamentals of prompt engineering for large language models, covering prompt design, tuning, and real-world applications.",
  link: "https://courses.edx.org/certificates/9986d3f3c1974a919f7650becb572130"
},
{
  title: "CCNAv7: Introduction to Networks",
  platform: "Cisco Networking Academy",
  date: "June 2024",
  description: "Hands-on training in configuring routers, switches, IPv4/IPv6 addressing, OSI model, and securing small networks.",
  link:"https://www.netacad.com/certificates?issuanceId=8dbe5964-b54e-4acb-8bfc-97882cb398e5"
}
,
{
  title: "Cloud Computing",
  platform: "NPTEL",
  date: "April 2025",
  description: "Comprehensive 12-week course on cloud models, virtualization, distributed systems, and cloud service management.",
  link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc25-cs11"
}
,
{
  title: "Introduction to Cybersecurity",
  platform: "Cisco Networking Academy",
  date: "March 2024",
  description: "Foundational knowledge of cybersecurity, including threat analysis, best practices, and network defense strategies.",
  link:"https://www.netacad.com/certificates?issuanceId=8dbe5964-b54e-4acb-8bfc-97882cb398e5"
} 
,
{
  title: "Python Essentials ",
  platform: "Cisco Networking Academy",
  date: "February 2024",
  description: "Core Python programming skills including data types, control structures, functions, and basic object-oriented concepts.",
  link: "https://www.netacad.com/certificates?issuanceId=d5c7cb84-f24f-406a-a6e8-dc231aa90bb6"
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
                   <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 text-primary hover:text-primary-foreground hover:bg-primary px-2 rounded-md flex items-center justify-center"
                    title="View Certificate"
                    >
                    <ExternalLink className="h-4 w-4" />
                  </a>

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