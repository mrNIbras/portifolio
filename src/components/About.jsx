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
            I am a full-stack web developer with a strong focus on building reliable, maintainable, and performance-driven web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            On the frontend, I work with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React to create clean and responsive user interfaces. On the backend, I build RESTful APIs and application logic using Node.js, Express, and MongoDB.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy solving real-world problems through code, improving user experience, and continuously learning new technologies to deliver better results on every project.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I focus on writing clean, maintainable code and delivering solutions that are easy to scale and easy for clients to manage.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
