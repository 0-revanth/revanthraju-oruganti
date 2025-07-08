import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Hackathons & Competitions",
      icon: <Trophy className="h-5 w-5" />,
      items: [
        {
          title: "Smart India Hackathon 2023",
          description: "Developed an IoT-based smart agriculture solution",
          achievement: "Finalist",
          date: "October 2023"
        },
        {
          title: "GeeksforGeeks Coding Contest",
          description: "Algorithm optimization and problem-solving challenge",
          achievement: "Top 50",
          date: "August 2023"
        },
        {
          title: "University Tech Fest",
          description: "Web development competition",
          achievement: "2nd Place",
          date: "March 2023"
        }
      ]
    },
    {
      category: "Leadership & Community",
      icon: <Users className="h-5 w-5" />,
      items: [
        {
          title: "Technical Club President",
          description: "Led a team of 30+ students, organized workshops and coding events",
          achievement: "2023-2024",
          date: "Academic Year"
        },
        {
          title: "Volunteer - NGO Tech Initiative",
          description: "Teaching basic computer skills to underprivileged children",
          achievement: "100+ Hours",
          date: "2022-2023"
        },
        {
          title: "YouTube Channel - Village Virals GVP",
          description: "Creating educational content on technology and programming",
          achievement: "5K+ Subscribers",
          date: "Ongoing"
        }
      ]
    },
    {
      category: "Academic Excellence",
      icon: <Award className="h-5 w-5" />,
      items: [
        {
          title: "Dean's List Recognition",
          description: "Consistent academic performance with high CGPA",
          achievement: "Semester 1-4",
          date: "2022-2024"
        },
        {
          title: "Best Project Award",
          description: "IoT-based home automation system project",
          achievement: "Department Level",
          date: "December 2023"
        },
        {
          title: "Merit Scholarship",
          description: "Academic excellence scholarship from university",
          achievement: "₹50,000",
          date: "2023-2024"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements & Activities</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition and contributions that demonstrate leadership, technical excellence, 
            and community involvement throughout my academic journey.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className="p-2 bg-gradient-primary rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-foreground text-lg leading-tight flex-1">
                          {item.title}
                        </h4>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {item.achievement}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-muted-foreground pt-2">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="text-xs">{item.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Hackathons Participated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground text-sm">Certifications Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5K+</div>
              <div className="text-muted-foreground text-sm">YouTube Subscribers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;