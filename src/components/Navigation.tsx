import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold font-mono text-primary hover:glow-text transition-all"
          >
            {"<A.O />"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-mono text-sm hover:text-primary transition-colors"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="/Abdullah Odulate fullstack CV.pdf" download>
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-primary/20 animate-slide-down">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left font-mono text-lg hover:text-primary transition-colors py-2"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full bg-transparent border border-primary text-primary hover:bg-primary/10 font-mono mt-4"
              asChild
            >
              <a href="/resume.pdf" download>
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
