import { Code2, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Kubernetes",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimization, Scalability, Best Practices",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono">01.</span> About Me
            </h2>
            <div className="w-20 h-1 bg-primary glow-border" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in building exceptional digital experiences. 
                My journey in software development began with a fascination for creating things that live on the internet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in building scalable web applications, architecting robust backend systems, 
                and creating intuitive user interfaces that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-8 glow-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">const</span> developer <span className="text-primary">=</span> {"{"}
              </div>
              <div className="pl-4 space-y-2 font-mono text-sm">
                <div><span className="text-accent">name:</span> <span className="text-foreground">"Abdullah Odulate"</span>,</div>
                <div><span className="text-accent">role:</span> <span className="text-foreground">"Full Stack Developer"</span>,</div>
                <div><span className="text-accent">experience:</span> <span className="text-foreground">"5+ years"</span>,</div>
                {/* <div><span className="text-accent">location:</span> <span className="text-foreground">"San Francisco, CA"</span>,</div> */}
                <div><span className="text-accent">available:</span> <span className="text-primary">true</span></div>
              </div>
              <div className="font-mono text-sm text-muted-foreground mt-4">{"}"}</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-border animate-slide-up group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
