"use client"
import { useState } from "react";

import { ArrowRight } from "lucide-react";
import Button from "@components/Button";
import GlassCard from "@components/Card";

// UPDATED CATEGORIES: Focus on business-centric project types
const categories = ["All", "E-commerce Stores", "Service Websites", "SaaS & Dashboards", "Next.js Projects"];

const projects = [
  // Localized Project Examples
  {
    title: "Brooklyn E-commerce Platform",
    category: "E-commerce Stores",
    description: "High-performance online store built with Next.js/Stripe for a Brooklyn-based retailer. 35% speed increase.",
  },
  {
    title: "Manhattan Law Firm Website",
    category: "Service Websites",
    description: "Professional, SEO-optimized service website for a Manhattan law firm, increasing lead generation by 40%.",
  },
  {
    title: "SaaS Dashboard Redesign",
    category: "SaaS & Dashboards",
    description: "React-based business analytics dashboard providing real-time data insights for a growing tech startup.",
  },
  {
    title: "Queens Local Restaurant Site",
    category: "Service Websites",
    description: "Mobile-first, fully responsive website for a Queens restaurant, implementing online reservations and menu updates.",
  },
  {
    title: "Next.js Portfolio for Architect",
    category: "Next.js Projects",
    description: "Blazing fast, dynamic portfolio site for an NYC architect, achieving a perfect Lighthouse score.",
  },
  {
    title: "Financial Services Landing Page",
    category: "Service Websites",
    description: "High-converting marketing landing page focused on speed and call-to-action optimization for a financial firm.",
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
            Results for NYC Small Businesses
          </p>
          {/* H2: Explicitly mentions technology and audience */}
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Next.js Websites That Drive **Measurable ROI**
          </h2>
          {/* UPDATED DESCRIPTION: Clear value statement */}
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            View selected projects where strategic **Next.js and React development** helped small businesses in New York City achieve higher Google rankings, faster load times, and better conversion rates.
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
                  className="group/btn text-primary hover:text-primary p-0 h-auto"
                >
                  View Case Study
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