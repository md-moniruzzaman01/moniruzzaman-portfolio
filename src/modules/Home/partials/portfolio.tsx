"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@components/Button";
import GlassCard from "@components/Card";
import Image from "next/image";
import ecommarceImg from "../../../assets/Ecommerce Website.png";
import ecommarceDashboardImg from "../../../assets/ecommerce dashboard.png";
import swiftEducation from "../../../assets/swift education.png";
import faithfullTree from "../../../assets/faithfull tree.png";
import tarminalImage from "../../../assets/tarminal.png";
import Link from "next/link";

const categories = [
  "All",
  "E-commerce & Retail",
  "Enterprise & SaaS",
  "Service Websites",
  "Full-Stack Development",
];

const projects = [
  {
    title: "PC Store E-commerce Platform (Full-Stack)",
    category: "E-commerce & Retail",
    description:
      "A fully custom online PC store built with **Next.js**, **MongoDB**, and **Stripe** payments. Features include advanced product filtering, secure checkout flow, and server-optimized pages that improved loading speed by **35%**, resulting in higher conversions.",
    image: ecommarceImg,
    preview: "https://pc-store-nu.vercel.app/",
    github: "",
  },
  {
    title: "E-commerce Admin Dashboard",
    category: "E-commerce & Retail",
    description:
      "A complete **e-commerce management dashboard** built using **Next.js**, **API Routes**, and **Prisma**. Includes product management, category control, inventory tracking, order monitoring, and real-time analytics for business owners.",
    image: ecommarceDashboardImg,
    preview: "https://ecommerce-dashboard-lac-two.vercel.app/",
    github: "",
  },
  {
    title: "IT Agency / Service Company Website",
    category: "Service Websites",
    description:
      "A modern and SEO-optimized website for an IT service agency. Fully responsive, fast, and conversion-focused—built using **Next.js** with animated UI sections, service showcase, and lead-capture optimization.",
    image: tarminalImage,
    preview: "https://tarminal.vercel.app/",
    github: "",
  },
  {
    title: "RPL Education Platform (Next.js)",
    category: "Full-Stack Development",
    description:
      "Education service website built with **Next.js** featuring course pages, dynamic routing, contact automation, and optimized page performance. Designed with a clean, modern UI and mobile-first approach.",
    image: swiftEducation,
    preview: "https://swift-education.vercel.app/",
    github: "",
  },
  {
    title: "Custom ERP – Warehouse Management System",
    category: "Enterprise & SaaS",
    description:
      "A scalable backend system built with **NestJS Microservices**, **RabbitMQ**, and **PostgreSQL**. Handles warehouse inventory, user roles, stock movement logs, and automated operational workflows for enterprise-level usage.",
    image: "",
    preview: "",
    github: "",
  },
  {
    title: "Tree Removal / Landscaping Service Platform",
    category: "Full-Stack Development",
    description:
      "A high-conversion business website designed for local SEO and service booking. Built with **Next.js**, optimized for Google ranking, fast load time, and strong call-to-action structure to increase leads.",
    image: faithfullTree,
    preview: "https://faithfultrees.com/",
    github: "",
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
          <p className="text-primary text-sm font-display tracking-wider uppercase ">
            Work Delivered for NYC Businesses
          </p>
          <h2 className="text-2xl md:text-5xl font-display font-bold textZoom">
            Real Full-Stack Projects Built with Modern Web Technologies
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto textZoom">
            Explore selected work built with **Next.js, React, TypeScript,
            Node.js, NestJS, and MongoDB**. These projects helped local
            businesses improve performance, search rankings, automation, and
            customer conversions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-smooth text-xs md:text-md ${
                  isActive
                    ? "bg-primary text-gradient"
                    : "bg-secondary text-foreground  hover:bg-secondary/80"
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
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-smooth fade-on-scroll"
            >
              <div className="relative w-full h-64">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className=" rounded-xl transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full flex justify-center items-center text-2xl text-gray-600">
                    <p>No Image</p>
                  </div>
                )}
              </div>

              <div className="p-2 space-y-4">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>

                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex justify-end">
                  {project.preview && (
                    <Button className="group/btn text-primary hover:text-primary p-0 h-auto">
                      <Link target="blank" href={project.preview}>
                        View
                      </Link>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
