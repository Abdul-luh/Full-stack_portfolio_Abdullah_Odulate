import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines" id="home">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        {/* Terminal Header */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-terminal border border-primary/30 rounded-lg glow-border">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-primary">~/portfolio</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-foreground">Hi, I'm</span>
          <br />
          <span className="text-primary glow-text font-mono">
            {text}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Crafting elegant solutions to complex problems.<br />
          <span className="text-primary font-mono">Building the future, one line of code at a time.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-mono text-lg px-8 py-6"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 font-mono text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
