"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { Layers, X, ExternalLink, Hash, Github, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ecommarceImg from "../../../assets/Ecommerce Website.png";
import ecommarceDashboardImg from "../../../assets/ecommerce dashboard.png";
import swiftEducation from "../../../assets/swift education.png";
import faithfullTree from "../../../assets/faithfull tree.png";
import tarminalImage from "../../../assets/tarminal.png";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: "E-commerce & Retail" | "Full-Stack Development" | "Service Websites";
  description: string;

  image: StaticImageData;
  gallery?: StaticImageData[];

  preview: string;
  github?: string;

  tech: {
    frontend: string;
    backend: string;
    database: string;
    motion?: string;
  };

  details: {
    mission: string;
    challenges: string;
    summary: string;
  };

  initialPos: {
    top: string;
    left: string;
    rotate: number;
  };
}

// --- Project Data ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "PC Store E-commerce Platform",
    category: "E-commerce & Retail",
    description:
      "A production-grade custom PC e-commerce platform with secure payments and real-time inventory.",

    image: ecommarceImg,
    gallery: [ecommarceImg, ecommarceDashboardImg],

    preview: "https://pc-store-nu.vercel.app/",
    github: "",

    tech: {
      frontend: "Next.js / Tailwind CSS",
      backend: "Node.js / Stripe",
      database: "MongoDB",
      motion: "GSAP / Framer Motion",
    },

    details: {
      mission:
        "Build a fast, conversion-focused e-commerce experience capable of handling complex PC configurations and secure checkout flows.",
      challenges:
        "Managing dynamic pricing logic, Stripe integration, and maintaining high performance across configuration-heavy product pages.",
      summary:
        "The platform delivers a scalable, high-performance shopping experience with excellent speed and conversion reliability.",
    },

    initialPos: { top: "12%", left: "8%", rotate: -4 },
  },

  {
    id: 2,
    title: "E-commerce Admin Dashboard",
    category: "E-commerce & Retail",
    description:
      "An advanced admin dashboard for managing products, orders, and analytics.",

    image: ecommarceDashboardImg,
    gallery: [ecommarceDashboardImg],

    preview: "https://ecommerce-dashboard-lac-two.vercel.app/",
    github: "",

    tech: {
      frontend: "Next.js / Tailwind CSS",
      backend: "Node.js / Prisma",
      database: "PostgreSQL",
    },

    details: {
      mission:
        "Create a powerful yet simple dashboard for store owners to manage operations efficiently.",
      challenges:
        "Handling large datasets, real-time UI updates, and scalable data relationships without performance drops.",
      summary:
        "The dashboard improved operational efficiency and provided clear visibility into sales and inventory.",
    },

    initialPos: { top: "18%", left: "48%", rotate: 3 },
  },

  {
    id: 3,
    title: "IT Agency Website",
    category: "Service Websites",
    description:
      "A modern IT agency website focused on SEO, performance, and strong branding.",

    image: tarminalImage,
    gallery: [tarminalImage],

    preview: "https://tarminal.vercel.app/",
    github: "",

    tech: {
      frontend: "Next.js / Tailwind CSS",
      backend: "Static / Server Components",
      database: "—",
      motion: "GSAP",
    },

    details: {
      mission:
        "Establish a strong online presence for an IT agency with modern visuals and SEO optimization.",
      challenges:
        "Balancing advanced animations with performance, accessibility, and Core Web Vitals requirements.",
      summary:
        "The website combines strong branding with speed and SEO, increasing engagement and credibility.",
    },

    initialPos: { top: "52%", left: "12%", rotate: -2 },
  },

  {
    id: 4,
    title: "RPL Education Platform",
    category: "Full-Stack Development",
    description:
      "An education service platform with dynamic routing and scalable backend.",

    image: swiftEducation,
    gallery: [swiftEducation],

    preview: "https://swift-education.vercel.app/",
    github: "",

    tech: {
      frontend: "Next.js",
      backend: "Node.js",
      database: "MongoDB",
    },

    details: {
      mission:
        "Deliver fast, accessible educational content through a scalable architecture.",
      challenges:
        "Managing dynamic routes and server rendering while keeping bundle size minimal.",
      summary:
        "The platform provides a smooth learning experience and is ready for future expansion.",
    },

    initialPos: { top: "48%", left: "38%", rotate: 5 },
  },

  {
    id: 5,
    title: "Faithful Tree Service Platform",
    category: "Service Websites",
    description:
      "A local SEO-focused service platform designed to convert visitors into leads.",

    image: faithfullTree,
    gallery: [faithfullTree],

    preview: "https://faithfultrees.com/",
    github: "",

    tech: {
      frontend: "Next.js / Tailwind CSS",
      backend: "Server Actions",
      database: "—",
    },

    details: {
      mission:
        "Help a local service business generate consistent leads through SEO and performance.",
      challenges:
        "Optimizing for local search visibility while keeping the site fast and conversion-focused.",
      summary:
        "The website improved local rankings and lead generation with a clean, scalable structure.",
    },

    initialPos: { top: "48%", left: "68%", rotate: 4 },
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Prevent Hydration Errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);
  }, [filter]);

  // 2. GSAP Animation Logic
  useEffect(() => {
    if (!isMounted || selectedProject || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const onMouseMove = (e: MouseEvent) => {
        cardRefs.current.forEach((card, i) => {
          if (!card || !filteredProjects[i]) return;
          const rect = card.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const bottomY = rect.bottom;
          const distX = e.clientX - centerX;
          const distY = e.clientY - bottomY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < 400) {
            const power = (400 - distance) / 400;
            gsap.to(card, {
              rotation:
                (filteredProjects[i].initialPos.rotate || 0) +
                distX * 0.04 * power,
              x: distX * 0.08 * power,
              y: distY * 0.04 * power,
              duration: 0.4,
              ease: "power2.out",
            });
          } else {
            gsap.to(card, {
              rotation: filteredProjects[i].initialPos.rotate || 0,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.3)",
            });
          }
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    });

    return () => ctx.revert();
  }, [selectedProject, filteredProjects, isMounted]);

  if (!isMounted) return null; // Prevent flicker on load

  return (
    <section id="projects" className="relative min-h-screen bg-background text-foreground py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar / Header */}
          <div className="lg:col-span-3 space-y-8">
            <div className="0">
              <h1 className="  font-extrabold leading-snug tracking-tight text-white textZoom text-base">
                Real Full-Stack <br />
                <span className="text-white text-3xl mt-2 bg-indigo-600 px-4 py-1 inline-block transform -rotate-1">
                  PROJECTS
                </span>
              </h1>
              <p className="text-zinc-600 handwritten text-xl mt-2">
                "Built with Modern Web Technologies"
              </p>
            </div>

            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {[
                "All",
                "E-commerce & Retail",
                "Full-Stack Development",
                "Service Websites",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap text-left px-4 py-2 font-mono text-[10px] lg:text-xs transition-colors ${
                    filter === cat
                      ? "bg-red-800 text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {filter === cat ? "● " : "○ "} {cat.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          {/* Corkboard Stage */}
          <div className="lg:col-span-9 relative min-h-[600px]">
            <div className="absolute -inset-2 lg:-inset-4 bg-white/5 rounded-xl border-t border-white/5 shadow-2xl" />

            <div
              ref={stageRef}
              className="relative min-h-[800px]  rounded-lg shadow-[inset_0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden border-2 border-black/50"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    onClick={() => setSelectedProject(project)}
                    className="relative lg:absolute cursor-pointer w-full lg:w-[260px] group"
                    style={{
                      top:
                        window.innerWidth >= 1024
                          ? project.initialPos.top
                          : "auto",
                      left:
                        window.innerWidth >= 1024
                          ? project.initialPos.left
                          : "auto",
                      rotate:
                        window.innerWidth >= 1024
                          ? project.initialPos.rotate
                          : 0,
                    }}
                  >
                    {/* Visual Pin */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-[100] drop-shadow-[0_8px_4px_rgba(0,0,0,0.6)]">
                      <div className="w-5 h-5 bg-red-600 rounded-full bg-gradient-to-br from-red-400 via-red-600 to-red-900 shadow-inner border border-red-700" />

                      <div className="w-[1.5px] h-4 bg-zinc-400 mx-auto -mt-1 opacity-90" />
                    </div>

                    {/* Paper Card */}
                    <div
                      className="bg-zinc-100 p-3 pb-8 shadow-xl border-r border-b border-black/10 
                /* 1. Fix jagged edges during transform */
                will-change-transform transform-gpu 
                transition-transform duration-300 ease-out
                group-hover:scale-[1.02] 
                /* 2. Improve sub-pixel font rendering */
                antialiased backface-hidden"
                    >
                      <div className="aspect-video bg-zinc-300 relative mb-3 overflow-hidden shadow-inner">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            /* 3. Increase quality and prevent blurry scaling */
                            quality={90}
                            sizes="(max-width: 768px) 100vw, 280px"
                            className="object-cover transform-gpu transition-all duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <Layers size={32} strokeWidth={1.5} />
                          </div>
                        )}
                      </div>

                      {/* 4. Text Quality Fixes */}
                      <h4
                        className="text-zinc-900 font-bold text-xl  leading-tight tracking-tight 
                 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]"
                      >
                        {project.title}
                      </h4>

                      <p className="text-[10px] font-mono mt-2 text-indigo-600 font-bold uppercase tracking-widest opacity-80">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Drawer (Future Tech Reveal) */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0B141F] text-gray-300 overflow-y-auto selection:bg-zinc-900 selection:text-white"
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-[120] bg-black backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
            Project Live Status
          </span>
        </div>

        <button
          onClick={() => setSelectedProject(null)}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors"
        >
          Close <X size={18} />
        </button>
      </div>

      <div className="container mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          {/* LEFT */}
          <div className="lg:w-3/5 lg:sticky lg:top-32 space-y-8">
            {/* Laptop */}
            <div className="relative mx-auto max-w-[800px]">
              <div className="relative rounded-2xl border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800 z-10" />
                <div className="relative w-full h-full bg-white overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-top object-fit"
                    quality={100}
                    priority
                  />
                </div>
              </div>

              <div className="relative h-4 w-[110%] -left-[5%] bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-b-xl" />
              <div className="mx-auto h-2 w-32 bg-zinc-900 rounded-b-xl shadow-md" />
            </div>

            {/* Gallery */}
            {selectedProject.gallery && (
              <div className="flex flex-wrap gap-3">
                {selectedProject.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="h-32 w-32 relative bg-zinc-100 border border-zinc-200 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-zinc-900 transition-all shadow-sm"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="lg:w-2/5 space-y-16 lg:pb-32">
            {/* Header */}
            <div className="space-y-6">
              <span className="text-yellow-400 font-mono text-xs font-bold tracking-[0.3em] uppercase">
                {selectedProject.category}
              </span>
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                {selectedProject.title}
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Mission */}
              <section className="space-y-4">
                <h4 className="text-xs font-mono uppercase font-bold tracking-widest border-b border-zinc-800 pb-2">
                  The Mission
                </h4>
                <p className="text-lg text-zinc-300 leading-relaxed font-light">
                  {selectedProject.details.mission}
                </p>
              </section>

              {/* Tech */}
              <section className="space-y-4">
                <h4 className="text-xs font-mono uppercase font-bold tracking-widest border-b border-zinc-800 pb-2">
                  Tech Architecture
                </h4>

                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">
                      Frontend
                    </p>
                    <p className="text-sm font-bold">
                      {selectedProject.tech.frontend}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">
                      Backend
                    </p>
                    <p className="text-sm font-bold">
                      {selectedProject.tech.backend}
                    </p>
                  </div>

                  {selectedProject.tech.motion && (
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase">
                        Motion
                      </p>
                      <p className="text-sm font-bold">
                        {selectedProject.tech.motion}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">
                      Database
                    </p>
                    <p className="text-sm font-bold">
                      {selectedProject.tech.database}
                    </p>
                  </div>
                </div>
              </section>

              {/* Challenges */}
              <section className="space-y-4">
                <h4 className="text-xs font-mono uppercase font-bold tracking-widest border-b border-zinc-800 pb-2">
                  Key Challenges
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.details.challenges}
                </p>
              </section>

              {/* Summary */}
              <section className="space-y-4">
                <h4 className="text-xs font-mono uppercase font-bold tracking-widest border-b border-zinc-800 pb-2">
                  Final Outcome
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.details.summary}
                </p>
              </section>

              {/* Actions */}
              <div className="flex flex-col gap-4 pt-8">
                <a
                  href={selectedProject.preview}
                  target="_blank"
                  className="w-full bg-indigo-600 text-white text-center py-5 font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all rounded-sm"
                >
                  Explore Live Experience
                </a>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="w-full border border-zinc-200 text-zinc-200 text-center py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Portfolio;
