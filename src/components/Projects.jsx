import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app using public APIs to display current weather, forecasts, and interactive maps.",
    tech: ["React", "JavaScript", "Node.js", "Express", "Tailwind"],
    link: "https://weather-dashboard-jeh1.onrender.com/",
    github: "https://github.com/mrNIbras/weather-Dashboard",
  },
  {
    title: "Interactive Todo App",
    description: "Feature-rich todo application with drag-and-drop, filters, and MongoDB persistence.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Quiz Game Platform",
    description: "Interactive quiz app with timer, score tracking, and REST API backend for questions.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    link: "https://quiz-master-sandy-two.vercel.app/",
    github: "https://github.com/mrNIbras/quiz_Master",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Project Ideas
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-primary text-foreground hover:bg-primary/10"
                  asChild 
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
