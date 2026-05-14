import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer (Contract)",
      company: "SK Projects",
      period: "2025 - Present",
      description: [
        "Leading frontend development for Klukoo, a specialized medical staffing platform",
        "Developing the ORR platform for streamlined logistics and transportation management",
        "Implementing high-performance, responsive UIs using React, TypeScript, and Tailwind CSS",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Full Stack Developer (Self-employed)",
      company: "Key Projects",
      period: "2023 - 2024",
      description: [
        "Architected and deployed 'My Gym Planner', an AI-powered fitness SaaS platform",
        "Built 'Best Eats', a multi-vendor food commerce platform with Stripe integration",
        "Engineered real-time analytics dashboards and robust backend systems using Prisma and PostgreSQL",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "Mistral AI"],
    },
    {
      title: "Frontend Developer",
      company: "Freelance / Learning",
      period: "2021 - 2022",
      description: [
        "Started professional journey by building custom web solutions for local clients",
        "Earned certifications in Frontend Web Development and Computer Studies",
        "Mastered the fundamentals of HTML, CSS, JavaScript, and modern UI design principles",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30" id="experience">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono">02.</span> Work Experience
            </h2>
            <div className="w-20 h-1 bg-primary glow-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 glow-border hidden md:block" />

                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                    <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-border group">
                      {/* Icon */}
                      <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm font-mono text-primary">{exp.period}</span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-primary mb-4">{exp.company}</h4>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "text-left" : "md:text-right"}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
