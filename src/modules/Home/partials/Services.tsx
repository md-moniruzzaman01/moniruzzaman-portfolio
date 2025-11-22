
import GlassCard from "@components/Card";
import { Palette, Code, Lightbulb } from "lucide-react";

const services = [
  {
    number: "01",
    title: "A Portfolio of Creativity",
    description: "Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance and efficiency.",
    icon: Palette,
  },
  {
    number: "02",
    title: "My Portfolio of Innovation",
    description: "Creating cutting-edge solutions that push boundaries and transform ideas into reality with modern technologies and best practices.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "A Showcase of My Projects",
    description: "In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design and user experience.",
    icon: Code,
  },
];

const Services = () => {
  return (
<section id="services" className="py-24 px-6 bg-charcoal-light/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Latest Service
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Inspiring The World One Project
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Business consulting consultants provide expert advice and guidance to businesses 
            to help them improve their performance, efficiency, and organizational excellence.
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
                    <span className="text-6xl font-display font-bold text-primary/20">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
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
      </div>
    </section>
  );
};

export default Services