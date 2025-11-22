
import Button from "@components/Button";
import GlassCard from "@components/Card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
<section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-sm font-display tracking-wider uppercase">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind? Let's discuss how we can bring your vision to life 
                with exceptional design and development.
              </p>
            </div>
            
            <div className="space-y-4">
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">jane.cooper@example.com</p>
                </div>
              </GlassCard>
              
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </GlassCard>
              
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </GlassCard>
            </div>
          </div>
          
          {/* Right - CTA */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <GlassCard className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-12 text-center space-y-6 w-full">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">
                  Ready to Start?
                </h3>
                <p className="text-muted-foreground">
                  Let's create something amazing together. Reach out and let's discuss your next project.
                </p>
              </div>
              
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full"
              >
                Send Message
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;