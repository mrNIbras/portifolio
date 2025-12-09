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
            I'm a passionate fullstack developer who loves creating elegant solutions to complex problems. 
            With expertise in HTML, CSS, Bootstrap, Tailwind, JavaScript, React on the frontend, and 
            Node.js, Express, MongoDB on the backend, I specialize in building complete, scalable 
            applications that deliver exceptional user experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new frontend technologies, contributing to 
            GitHub projects, and continuously improving my craft as a creative problem solver.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
