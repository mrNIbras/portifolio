import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a full-stack developer focused on building practical web solutions that solve real business problems. I work across the full development lifecycle — from responsive frontend interfaces to RESTful backend APIs and database design.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My experience includes developing dashboards, management systems, and interactive applications using React, Node.js, Express, and MongoDB. I prioritize clean code, performance, and usability to ensure applications are both maintainable and effective.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I enjoy turning ideas into functional systems and continuously improving my skills by building real-world projects and refining best practices.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
