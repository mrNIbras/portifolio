import { Card } from "./ui/card";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["HTML, CSS, JavaScript", "React", "Responsive and mobile-first design"],
  },
  {
    icon: Database,
    title: "Backend Development",
    items: ["Node.js, Express", "MongoDB", "RESTful APIs"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    items: ["Tailwind CSS, Bootstrap", "Git, GitHub"],
  },
  {
    icon: Lightbulb,
    title: "Design & Problem Solving",
    items: ["UI/UX fundamentals", "Debugging and optimization", "Clean and maintainable code"],
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
