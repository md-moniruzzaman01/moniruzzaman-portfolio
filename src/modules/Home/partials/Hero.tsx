import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/hero-portrait.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal-light opacity-50" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-lg font-display tracking-wider uppercase">
                Hello
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                I'm <span className="text-gradient">Jane Cooper</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-display text-muted-foreground">
                A Creative Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth.
            </p>
            
            <button 
              // size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full transition-smooth"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden border border-border/50">
              <Image 
                src={heroImage} 
                alt="Jane Cooper - Creative Designer" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
