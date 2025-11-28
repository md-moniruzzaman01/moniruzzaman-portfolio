"use client";
import {
  TrendingUp,
  Code,
  Zap,
  Terminal,
  Layers,
  Activity,
} from "lucide-react";
import React from "react";

// --- PROFESSIONAL SERVICES PIPELINE ---
const services = [
  {
    number: "01",
    title: "WEB STRATEGY & PLANNING",
    icon: TrendingUp,
    description:
      "Define clear business objectives, select optimal technology stacks, and craft a scalable architecture to ensure your project starts strong and future-proof.",
  },
  {
    number: "02",
    title: "FULL-STACK DEVELOPMENT",
    icon: Code,
    description:
      "Develop fast, secure, and custom web applications (SaaS, e-commerce, corporate sites) using modern frameworks like React, Next.js, and Node.js. Every line of code is production-ready.",
  },
  {
    number: "03",
    title: "UI/UX ENGINEERING & DESIGN",
    icon: Layers,
    description:
      "Transform plans into intuitive, responsive, and conversion-optimized interfaces. Focused on accessibility, visual consistency, and smooth user interactions.",
  },
  {
    number: "04",
    title: "PERFORMANCE & SCALING",
    icon: Zap,
    description:
      "Optimize speed, Core Web Vitals, and analytics integration to maximize ROI. Ensure your applications handle high traffic efficiently without compromising user experience.",
  },
  {
    number: "05",
    title: "CONTINUOUS DEPLOYMENT & MONITORING",
    icon: Activity,
    description:
      "Implement CI/CD pipelines for seamless releases, real-time monitoring, and proactive maintenance to guarantee long-term stability and availability.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 text-white px-4 sm:px-6 lg:px-8 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3 fade-on-scroll">
          <p className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            My Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight dark:text-white textZoom">
            The Five-Step Execution Pipeline
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-300 max-w-3xl mx-auto pt-4 textZoom">
            I deliver scalable, secure, and high-performance web solutions
            through a structured, five-stage process built for tangible results
            and long-term growth.
          </p>
        </div>

        {/* Services Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute vertical-line left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden lg:block"></div>

          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            const containerClasses = isEven
              ? "lg:flex-row"
              : "lg:flex-row-reverse";
            const contentClasses = isEven
              ? "lg:mr-10 lg:text-right"
              : "lg:ml-10 lg:text-left";

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center my-10 relative  ${containerClasses}`}
              >
                {/* Mobile Icon */}
                <div className="flex justify-center w-full lg:hidden mb-4">
                  <div className="p-3 bg-indigo-500 rounded-full shadow-md z-10 border-2 border-gray-900">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:w-1/2 w-full flex justify-center ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div
                    className={`fade-on-scroll p-6 rounded-lg shadow-xl bg-gray-800 border border-gray-700 group transition-all duration-300 hover:border-indigo-500 transform hover:scale-[1.02] w-full max-w-md space-y-3 fade-on-scroll ${contentClasses}`}
                  >
                    <div
                      className={`flex items-center space-x-3 ${
                        isEven ? "lg:flex-row-reverse lg:space-x-reverse" : ""
                      }`}
                    >
                      <span className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                        {service.number}
                      </span>
                      <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-indigo-600 transition-colors textZoom">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Pipeline Icon */}
                <div className="hidden lg:flex flex-col items-center justify-center w-20 h-20 absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-500 shadow-lg">
                    <div className="timeline-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-indigo-500 rounded-full shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-16">
          <a
            href="#contact"
            className="group inline-flex items-center text-lg font-semibold uppercase bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl"
          >
            Start Your Project{" "}
            <Terminal className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
