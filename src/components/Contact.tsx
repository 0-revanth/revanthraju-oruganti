import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "revanth.student@example.com",
      link: "mailto:revanth.student@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/revanth",
      link: "https://linkedin.com/in/revanth"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/revanth",
      link: "https://github.com/revanth"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      value: "Village Virals GVP",
      link: "https://youtube.com/@villageviralsgvp"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation 
            about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a recruiter looking for fresh talent, a fellow developer interested in collaboration, 
                or someone who wants to discuss technology, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={contact.link}
                      className="flex items-center space-x-4 hover:text-primary transition-colors"
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg text-white">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.label}</p>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-elegant bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Available for Opportunities</h4>
                <p className="text-white/90 text-sm">
                  Currently seeking internship and full-time opportunities in software development, 
                  web development, and cybersecurity roles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;