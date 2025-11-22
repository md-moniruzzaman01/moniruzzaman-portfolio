// ABOUT SECTION (Updating text and tags for web focus)
import Button from "@components/Button";
import GlassCard from "@components/Card";
import { ArrowRight, Briefcase, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats Cards (No changes) */}
          <div className="space-y-6 animate-fade-in">
            {/* 2. Successful Projects */}
            <GlassCard className="bg-card border-border p-8 hover:border-primary/50 transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-5xl font-display font-bold text-primary mb-2">241+</h3>
                  <p className="text-muted-foreground text-lg">Successful Projects Delivered</p>
                </div>
              </div>
            </GlassCard>

            {/* 3. Client Satisfaction */}
            <GlassCard className="bg-card border-border p-8 hover:border-primary/50 transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-5xl font-display font-bold text-primary mb-2">98%</h3>
                  <p className="text-muted-foreground text-lg">Client Satisfaction Rating</p>
                </div>
              </div>
            </GlassCard>

            <div className="pt-4">
              <p className="text-muted-foreground text-sm italic">
                Trusted by high-growth startups and established brands in **New York**.
              </p>
            </div>
          </div>


          {/* Right - Content */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <p className="text-primary text-sm font-display tracking-wider uppercase">
                My Mission for the NYC Market
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Driving Web Performance &{" "}
                <span className="text-gradient">Measurable ROI</span>.
              </h2>
            </div>

            {/* UPDATED MAIN PARAGRAPH: Focus on local context, performance, and conversion */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a results-focused **NYC developer** dedicated to building digital
              assets that provide **tangible ROI** for local small businesses. I use the power of **Next.js and React** to enhance website speed, optimize **Local SEO**, and deliver high-performing web experiences that turn visitors into paying customers.
            </p>
          
            {/* UPDATED SKILL TAGS: Focusing on core SEO/business keywords */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">**Next.js & React Development**</p>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">**Local SEO Optimization**</p>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <p className="text-foreground font-medium">**Conversion-Driven Websites**</p>
              </div>
            </div>

            <Button 
              className="font-semibold transition-smooth"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;