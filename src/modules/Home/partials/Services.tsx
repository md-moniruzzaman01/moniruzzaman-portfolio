// SERVICES SECTION (Reflecting the pure web development focus)
import GlassCard from "@components/Card";
// Icons: TrendingUp (Strategy), Code (Building), Zap (Performance/Scaling)
import { TrendingUp, Code, Zap, ArrowRight } from "lucide-react"; 
import Button from "@components/Button"; 

// --- UPDATED SERVICES DATA: Focused on Web Development Lifecycle ---
const services = [
  {
    number: "01",
    // Focus: The foundational planning for the website
    title: "Web Strategy & Planning",
    icon: TrendingUp, 
    // Description: Emphasize goal setting, technology choice, and technical planning
    description: "We define clear business objectives for your website, choose the optimal technology stack, and develop a detailed technical architecture focused on speed and future scalability.",
  },
  {
    number: "02",
    // Focus: Building high-performance, custom web assets
    title: "Full-Stack Development",
    icon: Code, 
    // Description: Emphasize custom code, modern frameworks, and robust back-end
    description: "Building fast, secure, and custom web applications (e-commerce, SaaS, corporate sites) using modern full-stack frameworks (React, Next.js, Node.js). Robust and ready for production.",
  },
  {
    number: "03",
    // Focus: Performance, Conversion, and Ongoing Growth
    title: "Performance & Scaling",
    icon: Zap, 
    // Description: Emphasize post-launch optimization and continuous growth
    description: "I focus on maximizing your website's ROI through Core Web Vitals optimization, speed improvements, and integrating analytics to refine conversion funnels and support massive traffic growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-charcoal-light/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Stays relevant to Web Growth */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            My Core Offerings
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            **High-Performance Solutions** for Your Web Presence
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I deliver full-stack web solutions designed not just to look good, but to perform flawlessly and achieve measurable business results.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard
                key={index}
                className="bg-card border-border p-8 hover:border-primary/50 transition-smooth group animate-fade-in"
                // style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-5xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-smooth">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 pt-4">
                    <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
        
        {/* Call to Action at the bottom of the section */}
        <div className="text-center pt-16">
          <Button
            className="group button-gradient hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth"
          >
            Get a Quote for Your Project
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;