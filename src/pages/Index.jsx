import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          © 2025 Ramadan. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;
