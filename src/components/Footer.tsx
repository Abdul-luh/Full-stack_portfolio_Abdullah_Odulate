import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground font-mono">
              Built with <Heart className="w-4 h-4 inline text-primary animate-glow-pulse" /> using React & TypeScript
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Full Stack Developer. All rights reserved.
            </p>
          </div>

          {/* Terminal Style Note */}
          <div className="mt-8 text-center">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> echo "Thanks for visiting!"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
