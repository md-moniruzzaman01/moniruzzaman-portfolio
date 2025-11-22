"use client"
import { useState } from "react";

import { ArrowRight } from "lucide-react";
import Button from "@components/Button";
import GlassCard from "@components/Card";

const categories = ["All", "Adobe", "Figma", "Webflow", "Javascript"];

const projects = [
  {
    title: "SaaS Website Design",
    category: "Adobe",
    description: "Modern SaaS platform design with intuitive user experience",
  },
  {
    title: "Business Analytics Dashboard",
    category: "Figma",
    description: "Comprehensive analytics dashboard for business intelligence",
  },
  {
    title: "E-commerce Platform",
    category: "Webflow",
    description: "Full-featured online store with seamless checkout experience",
  },
  {
    title: "Mobile Banking App",
    category: "Javascript",
    description: "Secure and user-friendly mobile banking application",
  },
  {
    title: "Portfolio Website",
    category: "Webflow",
    description: "Creative portfolio showcasing design work and projects",
  },
  {
    title: "Marketing Landing Page",
    category: "Adobe",
    description: "High-converting landing page for marketing campaigns",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Latest Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Transforming Ideas into Exceptional
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Business consulting consultants provide expert advice and guidance to help 
            businesses improve their performance, efficiency, and organizational success.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <GlassCard 
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-smooth animate-fade-in"
            //   style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-smooth">
                <div className="text-6xl font-display font-bold text-primary/30">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <Button
                //   variant="ghost" 
                //   size="sm"
                  className="group/btn text-primary hover:text-primary p-0 h-auto"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;