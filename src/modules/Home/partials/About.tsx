
import Button from "@components/Button";
import GlassCard from "@components/Card";
import { ArrowRight, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats Cards */}
          <div className="space-y-6 animate-fade-in">
            <GlassCard className="bg-card border-border p-8 hover:border-primary/50 transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-5xl font-display font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground text-lg">Years of Experience</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="bg-card border-border p-8 hover:border-primary/50 transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-5xl font-display font-bold text-primary mb-2">241</h3>
                  <p className="text-muted-foreground text-lg">UI/UX Design Projects</p>
                </div>
              </div>
            </GlassCard>
            
            <div className="pt-4">
              <p className="text-muted-foreground text-sm italic">
                Business CH Partners
              </p>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-primary text-sm font-display tracking-wider uppercase">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Boost Business Strategic Solutions
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each one showcases my approach to problem-solving and creativity. 
              I specialize in creating user-centered designs that combine aesthetics 
              with functionality to deliver exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">UI/UX Design</p>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">Web Development</p>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">Brand Identity</p>
              </div>
            </div>
            
            <Button
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
            >
              Read More About Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About