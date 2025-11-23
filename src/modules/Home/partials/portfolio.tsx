"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@components/Button";
import GlassCard from "@components/Card";
import Image from "next/image";

const categories = [
  "All",
  "E-commerce & Retail",
  "Enterprise & SaaS",
  "Service Websites",
  "Full-Stack Development",
];

const projects = [
  {
    title: "Brooklyn E-commerce Platform (Full-Stack)",
    category: "E-commerce & Retail",
    description:
      "High-performance online retail store built with **Next.js** and **Node.js/Stripe** integration. Achieved a **35% speed increase** and improved conversion rates.",
    image:
      "https://images.unsplash.com/photo-1612831455547-df8471677c24?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manhattan Law Firm Service Website",
    category: "Service Websites",
    description:
      "Professional, **SEO-optimized** service website for a Manhattan law firm, built with strong focus on **lead generation** (increased by 40%).",
    image:
      "https://images.unsplash.com/photo-1601582581248-bc8b4b69fc0e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Enterprise Analytics Dashboard (React/MongoDB)",
    category: "Enterprise & SaaS",
    description:
      "**React**-based business analytics **SaaS dashboard** providing real-time data insights using a scalable **MongoDB** architecture.",
    image:
      "https://images.unsplash.com/photo-1591696205602-3a4d0cdde6b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Queens Local Restaurant Site (Next.js)",
    category: "Service Websites",
    description:
      "Mobile-first, fully responsive website for a Queens restaurant leveraging **Next.js** for fast load times and implementing online reservations.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Custom ERP System API (NestJS Microservices)",
    category: "Enterprise & SaaS",
    description:
      "Backend architecture development for a custom **ERP system** utilizing **NestJS Microservices** and optimized for high-volume data handling.",
    image:
      "https://images.unsplash.com/photo-1612831455548-8b0e12d89c0f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Services Marketing Page",
    category: "Service Websites",
    description:
      "High-converting marketing landing page focused on speed and call-to-action optimization for a financial firm, backed by a simple **Node.js** API.",
    image:
      "https://images.unsplash.com/photo-1556740765-90f8a2e3cf7b?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Work Delivered for NYC Businesses
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Real Full-Stack Projects Built with Modern Web Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore selected work built with **Next.js, React, TypeScript,
            Node.js, NestJS, and MongoDB**. These projects helped local
            businesses improve performance, search rankings, automation, and
            customer conversions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <GlassCard
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-smooth animate-fade-in"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>

                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">{project.description}</p>

                <Button className="group/btn text-primary hover:text-primary p-0 h-auto">
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
