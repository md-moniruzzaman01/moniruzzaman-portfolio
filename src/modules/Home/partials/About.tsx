
import { ArrowRight } from "lucide-react";


import { SkillOrbit } from "./SkillOrbit";
import { professionalCommitments } from "../config/constaints";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-8 md:py-20 mb-32  text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND: SkillOrbit component */}
      <div className="absolute inset-0 z-0">
        <SkillOrbit isBackground={true} />
      </div>

      {/* FOREGROUND: About Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
     
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-extrabold leading-snug tracking-tight text-white">
            Crafting Digital <br />
            <span className="text-white bg-indigo-600 px-4 py-1 inline-block transform -rotate-1">
              Experiences
            </span>
          </h1>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">
      
          <div className="lg:col-span-7 space-y-8">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white"
              style={{
                textShadow: "0 0 5px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
              }}
            >
              I create web solutions that are{" "}
              <span className="text-indigo-400">
                reliable, secure, and high-performing.
              </span>
            </h2>

            <article>
              <p
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal max-w-xl"
                style={{ textShadow: "0 0 3px rgba(0,0,0,0.8)" }}
              >
                I’m Mohammad — a full-stack developer passionate about turning
                complex ideas into elegant, efficient, and scalable digital
                experiences. I specialize in building high-performance
                applications using modern technologies like{" "}
                <strong>Next.js, React, and Node.js</strong>.
                <br />
                <br />
              </p>
              <p className=" text-base text-primary/80 border-t border-primary/20 max-w-xl  tracking-wider">
                <span className="font-bold">Specializing in:</span> Portfolios,
                E-commerce, SaaS/ERPs, and Data-Driven Dashboards.
              </p>
            </article>
            
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-lg font-bold uppercase 
                     bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 
                     rounded-lg shadow-xl shadow-indigo-500/50 transition-all duration-300 transform hover:scale-[1.03] focus:ring-4 focus:ring-indigo-300"
              >
                Let’s Collaborate <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6 border-b border-indigo-700 pb-3">
              My Principles
            </h3>

            <div className="space-y-6">
              {professionalCommitments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group transition-all duration-200 p-3 -m-3 rounded-lg hover:bg-gray-800/50"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>

                    <div>
                      <h4 className="text-lg font-extrabold text-white uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed pt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
