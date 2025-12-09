import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mr.nibras33@gmail.com",
    link: "mailto:mr.nibras33@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mrNibras",
    link: "https://github.com/mrNibras",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/Mr.Nibras",
    link: "https://linkedin.com/in/Mr.Nibras",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@MrNibras3",
    link: "https://twitter.com/MrNibras3",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
          <p className="text-lg text-muted-foreground text-center mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 h-auto py-4 justify-start"
                asChild
              >
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="w-5 h-5 mr-3 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
