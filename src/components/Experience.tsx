import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response time by 60% through optimization",
        "Mentored junior developers and conducted code reviews",
      ],
      tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: [
        "Built and deployed 15+ client projects from scratch",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Collaborated with designers to create pixel-perfect UIs",
      ],
      tech: ["Vue.js", "Python", "Docker", "MongoDB"],
    },
    {
      title: "Frontend Developer",
      company: "Startup Labs",
      period: "2019 - 2020",
      description: [
        "Developed responsive web applications using modern frameworks",
        "Improved website performance metrics by 45%",
        "Integrated third-party APIs and payment gateways",
      ],
      tech: ["React", "TypeScript", "Redux", "Tailwind"],
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
