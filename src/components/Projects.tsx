import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import NovaCartImage from "../../public/Screenshot from 2026-05-02 05-08-19.png";
import EcommerceImage from "../../public/Screenshot from 2026-05-03 05-30-35.png"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability and performance.",
      image: EcommerceImage,
      tech: ["React", "Next.js", "PostgreSQL", "Stripe", "Redis"],
      github: "https://github.com/Abdul-luh/Food-website",
      live: "https://food-website-tau-seven.vercel.app/",
      featured: true,
    },
    {
      title: "AI Code Assistant",
      description:
        "VS Code extension powered by machine learning that provides intelligent code suggestions and automated refactoring capabilities.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tech: ["TypeScript", "Python", "TensorFlow", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Enterprise analytics platform processing millions of events daily with interactive visualizations and custom reporting.",
      image: NovaCartImage,
      tech: ["vite", "react", "tailwindcss", "recharts", "typescript"],
      github: "https://github.com/Abdul-luh/nova-cart.git",
      live: "https://nova-cart-plum.vercel.app/",
      featured: true,
    },
    {
      title: "DevOps Automation Suite",
      description:
        "CLI tool and web interface for automating deployment pipelines, infrastructure provisioning, and monitoring.",
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&=crop",
      tech: ["Go", "Kubernetes", "Terraform", "React"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono">03.</span> Featured
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary glow-border" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center animate-slide-up ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div
                  className={`relative group ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-lg border border-primary/20 glow-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }
                >
                  <div className="space-y-4">
                    {project.featured && (
                      <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded">
                        Featured Project
                      </span>
                    )}

                    <h3 className="text-3xl font-bold">{project.title}</h3>

                    <div className="bg-card border border-primary/20 rounded-lg p-6 glow-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
