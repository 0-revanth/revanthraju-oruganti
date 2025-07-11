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
  <p className="text-muted-foreground leading-relaxed text-justify">
    I'm a passionate Computer Science student with a strong interest in technology and innovation.
    My journey in software development began with a curiosity to understand how things work, and has 
    grown into a solid foundation in multiple programming languages and frameworks.
  </p>

  <p className="text-muted-foreground leading-relaxed text-justify">
    I specialize in <strong className="text-primary">web development</strong>, with growing expertise in 
    <strong className="text-primary"> cybersecurity</strong> and <strong className="text-primary">IoT-based systems</strong>.
    I'm focused on building meaningful software solutions that solve real-world problems and contribute 
    to impactful, tech-driven innovations.
  </p>

  <p className="text-muted-foreground leading-relaxed text-justify">
    Some of the projects I've worked on include 
    <strong className="text-primary"> Cliknock</strong>, an eCommerce platform; 
    <strong className="text-primary"> Smart Street Light System</strong>, an IoT-based automation solution; and 
    <strong className="text-primary"> Tomato Leaf Disease Detection</strong>, an AI-powered system for smart agriculture.
  </p>

  <p className="text-muted-foreground leading-relaxed text-justify">
    When I'm not coding, I enjoy exploring emerging technologies like 
    <strong className="text-primary"> artificial intelligence</strong>, cybersecurity tools, and IoT concepts 
    to stay ahead in the evolving tech landscape.
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