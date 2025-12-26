import { Card } from "./ui/card";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React (Hooks, state management)", "Tailwind CSS & Bootstrap", "Responsive and mobile-first design", "UI/UX implementation"],
  },
  {
    icon: Database,
    title: "Backend Development",
    items: ["Node.js & Express", "REST API design", "Authentication & authorization", "MongoDB (schema design, CRUD operations)"],
  },
  {
    icon: Wrench,
    title: "Frameworks & Tools",
    items: ["Git & GitHub", "API integration", "Deployment workflows", "Debugging & performance optimization"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    items: ["Translating requirements into working systems", "Designing scalable application structures", "Writing clean, maintainable code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
