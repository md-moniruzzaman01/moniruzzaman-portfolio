import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/monirzzaman.png";
import Image from "next/image";
import Button from "@components/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient - Subtle and atmospheric */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal-light opacity-50" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: Text and CTA */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              {/* Refined greeting */}
              <p className="text-primary text-xl font-display tracking-widest uppercase">
                Hello, I'm
              </p>
              {/* IMPACT: Clear, bold, and uses the text-gradient */}
              <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-tight">
                Md <span className="text-gradient">Yousuf</span>
              </h1>
              {/* VALUE PROPOSITION: Focuses on the outcome */}
              <h2 className="text-3xl md:text-5xl font-display text-muted-foreground pt-1">
                A Full-Stack Web Developer
              </h2>
            </div>

            {/* PUNCHY DESCRIPTION: Shortened and outcome-focused */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I specialize in building high-performing, user-centric web applications and digital experiences that drive measurable business growth.
            </p>

            {/* CALL TO ACTION (CTA) */}
            <Button
              primary
              className="group button-gradient hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth"
            >
              Explore My Work
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image with Visual Accents */}
          <div
            className="relative lg:block hidden animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Image container: Increased border radius for a modern look */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                // IMPROVED ALT: Specific and descriptive for accessibility/SEO
                alt="Professional portrait of Md Yousuf, a Full-Stack Web Developer"
                className="w-full h-[600px] object-cover"
                // Added a subtle border for definition
              />
              {/* Darker overlay for text contrast if text were on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>

            {/* Floating accent - positioned better for depth */}
            <div className="absolute -top-6 left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50 animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;