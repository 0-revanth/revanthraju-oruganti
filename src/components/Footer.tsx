import { Linkedin, Github, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/revanth",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/revanth",
      label: "GitHub"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://youtube.com/@villageviralsgvp",
      label: "YouTube"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:revanth.student@example.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Revanth</h3>
            <p className="text-background/80 leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions 
              through code and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-background/80 hover:text-background transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-background/80 text-sm">
              Follow my journey in technology and development
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm">
              © {currentYear} Revanth. All rights reserved.
            </p>
            <p className="text-background/80 text-sm">
              Made with ❤️ by Revanth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;