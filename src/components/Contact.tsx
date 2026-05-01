import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30" id="contact">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse transform -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono">04.</span> Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary glow-border mx-auto" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-border">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  abdulluhodulate@gmail.com
                </a>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-border">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +234 703382 4496
                </a>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-mono text-lg px-12 py-6 mt-8"
              asChild
            >
              <a href="mailto:abdulluhodulate@gmail.com">
                Send a Message
              </a>
            </Button>

            {/* Terminal Style Note */}
            <div className="mt-12 bg-terminal border border-primary/30 rounded-lg p-6 glow-border max-w-2xl mx-auto">
              <div className="font-mono text-left">
                <div className="text-muted-foreground mb-2">
                  <span className="text-primary">$</span> cat message.txt
                </div>
                <div className="text-sm text-foreground pl-4">
                  "Let's build something amazing together. <br />
                  I bring ideas to life through clean code and elegant design."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
