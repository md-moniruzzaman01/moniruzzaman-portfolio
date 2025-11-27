"use client";
import { TrendingUp, Code, Zap, Terminal, Layers, Activity } from "lucide-react"; 
import React from "react";

// --- UPDATED SERVICES DATA: Now 5 stages for a comprehensive pipeline ---
const services = [
    {
        number: "01",
        title: "WEB STRATEGY & PLANNING",
        icon: TrendingUp, 
        description: "We define clear business objectives for your website, choose the optimal technology stack, and develop a detailed technical architecture focused on speed and future scalability. This is the essential foundational step.",
    },
    {
        number: "02",
        title: "FULL-STACK DEVELOPMENT",
        icon: Code, 
        description: "Building fast, secure, and custom web applications (E-commerce, SaaS, corporate sites) using modern full-stack frameworks (React, Next.js, Node.js). Code is treated as a robust, production-ready asset.",
    },
    {
        number: "03",
        title: "UI/UX ENGINEERING & DESIGN",
        icon: Layers, 
        description: "Translating architectural plans into highly refined, responsive user interfaces. Focused on conversion-optimized design systems, accessibility, and clean front-end implementation with effective state management.",
    },
    {
        number: "04",
        title: "PERFORMANCE & SCALING",
        icon: Zap, 
        description: "Focusing on maximizing your website's ROI through Core Web Vitals optimization, speed improvements, and integrating deep analytics to refine conversion funnels and support massive traffic growth.",
    },
    {
        number: "05",
        title: "CONTINUOUS DEPLOYMENT & MONITORING",
        icon: Activity, 
        description: "Implementing automated CI/CD pipelines for zero-downtime releases. Real-time application monitoring, incident response, and continuous iteration to ensure long-term stability and high availability.",
    },
];

const Services = () => {
    return (
        <section 
            id="services" 
            className="py-16 text-white px-4 sm:px-6 lg:px-8 transition-colors duration-500"
        >
            <div className="container mx-auto max-w-7xl">
                
                {/* Header: Professional and Focused */}
                <div className="text-center mb-16 space-y-3">
                    <p className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                        Our Process
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-normal leading-tight dark:text-white">
                        The Disciplined Execution Pipeline
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pt-4">
                        We deliver robust, scalable web solutions through a predictable, five-stage process designed for measurable business results and long-term success.
                    </p>
                </div>
                
                {/* Services Timeline/Pipeline: CLEANER, MODERN STAGGERED LAYOUT */}
                <div className="relative max-w-4xl mx-auto">
                    
                    {/* Vertical Pipeline Connector Line (Desktop Only) - Subtle gray line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden lg:block"></div>
                    
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;
                        
                        // Responsive Classes
                        const containerClasses = isEven 
                            ? "lg:flex-row" // Left side alignment
                            : "lg:flex-row-reverse"; // Right side alignment

                        const contentClasses = isEven 
                            ? "lg:mr-10 lg:text-right" 
                            : "lg:ml-10 lg:text-left"; 

                        return (
                            <div
                                key={index}
                                className={`
                                    flex flex-col lg:flex-row items-center my-10 relative
                                    ${containerClasses}
                                `}
                            >
                                {/* Mobile/Tablet: Icon Block (Always vertical) */}
                                <div className="flex justify-center w-full lg:hidden mb-4">
                                    <div className="p-3 bg-indigo-500 rounded-full shadow-md z-10 border-2 border-gray-900">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                
                                {/* Content Block */}
                                <div className={`lg:w-1/2 w-full flex justify-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                    <div 
                                        className={`
                                            p-6 rounded-lg shadow-xl
                                            bg-gray-800 border border-gray-700
                                            group transition-all duration-300 hover:border-indigo-500
                                            transform hover:scale-[1.02]
                                            w-full max-w-md space-y-3
                                            ${contentClasses}
                                        `}
                                    >
                                        
                                        <div className={`flex items-center ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''} space-x-3`}>
                                            {/* Number */}
                                            <span className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                                                {service.number}
                                            </span>
                                            
                                            {/* Title */}
                                            <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-indigo-600 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Desktop Center Marker & Icon (Hidden on mobile) */}
                                <div className="hidden lg:flex flex-col items-center justify-center w-20 h-20 absolute left-1/2 -translate-x-1/2 z-20">
                                    {/* Small circle on the pipeline line */}
                                    <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-500 shadow-lg">
                                        {/* Icon placed inside the dot for visual continuity */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-indigo-500 rounded-full shadow-md">
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
                
                {/* Call to Action: Professional Button */}
                <div className="text-center pt-16">
                    <a href="#contact" 
                        className="group inline-flex items-center text-lg font-semibold uppercase 
                                    bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 
                                    rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl">
                        Start Your Project Inquiry <Terminal className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;