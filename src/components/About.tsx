import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const softSkills = [
    {
      title: "Communication",
      description: "Effective verbal and written communication with technical and non-technical stakeholders"
    },
    {
      title: "Leadership",
      description: "Experience leading team projects and mentoring junior developers"
    },
    {
      title: "Teamwork",
      description: "Collaborative approach to problem-solving and project development"
    },
    {
      title: "Adaptability",
      description: "Quick learner who adapts to new technologies and changing requirements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate computer science student with a deep love for technology and innovation. 
                My journey in software development began with curiosity about how things work, and has evolved 
                into a strong foundation in multiple programming languages and frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <strong className="text-primary">web development</strong>, with growing expertise in 
                <strong className="text-primary"> cybersecurity</strong> and <strong className="text-primary">IoT applications</strong>. 
                My goal is to create meaningful software solutions that solve real-world problems while 
                contributing to innovative projects that make a positive impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, participating in hackathons, 
                or sharing knowledge through technical content creation on my YouTube channel.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Core Strengths</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;