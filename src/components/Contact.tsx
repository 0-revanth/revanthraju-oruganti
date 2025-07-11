import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
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
      value: "revanth.oruganti1818@gmail.com",
      link: "mailto:revanth.oruganti1818@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9441537337",
      link: "tel:+919441537337"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/revanth-raju-oruganti",
      link: "https://www.linkedin.com/in/revanth-raju-oruganti-368975259"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/0-revanth",
      link: "https://github.com/0-revanth"
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .7 1.4 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.7 1-1.4 1.4-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.7-1.4-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.7-1 1.4-1.4.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .8 3.1 1.2 2.4 1.9 2 2.8.6 4.8.2 6.7.1 12s.1 7.2.5 9.2c.4.9 1.1 1.6 2 2 2 .4 3.9.6 9.2.6s7.2-.1 9.2-.5c.9-.4 1.6-1.1 2-2 .4-2 .6-3.9.6-9.2s-.1-7.2-.5-9.2c-.4-.9-1.1-1.6-2-2-2-.4-3.9-.6-9.2-.6zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM18.4 4.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
        </svg>
      ),
      label: "Instagram",
      value: "@revanth_raju__0",
      link: "https://www.instagram.com/revanth_raju__0"
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
