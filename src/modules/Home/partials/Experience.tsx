import GlassCard from "@components/Card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2020 — Present",
    title: "Full-Stack Developer & Technical Lead (Freelance)",
    description:
      "Building high-performance, SEO-optimized applications using Next.js, React, TypeScript, and Node.js for NYC businesses and global clients. Focused on scalable systems, automation, and conversion-driven UI/UX.",
  },
  {
    period: "2024 — 2025",
    title: "Web Strategy & System Architecture Consultant",
    description:
      "Advised businesses on digital strategy, performance improvements, backend architecture, SEO, and automation. Helped companies reduce operational cost and scale through optimized technical solutions.",
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Software Engineer",
    description:
      "Developed full-stack platforms using Next.js, NestJS, REST APIs, and MySQL. Delivered dashboards, authentication systems, microservices, and custom automation tools for SMEs and startup teams.",
  },
  {
    period: "2020 — 2022",
    title: "Front-End Engineer (React Ecosystem)",
    description:
      "Built responsive UI systems, component libraries, and dashboard interfaces using React, Tailwind CSS, and TypeScript. Collaborated with backend teams to ship scalable, API-driven applications.",
  },
];


// --- PROJECT & CONTRACT ROLES (More concise + impact focused) ---
const positions = [
  {
    company: "Task Technology Ltd",
    duration: "2 Years",
    role: "Next.js & React Consultant",
    description:
      "Modernized legacy web applications using **Next.js, React, and TypeScript**, improving Core Web Vitals by **40%+** and boosting client site performance and SEO rankings.",
  },
  {
    company: "NEC Group (Contract)",
    duration: "3 Years",
    role: "Full-Stack Engineer",
    description:
      "Designed and developed **scalable full-stack applications** using **MERN stack** and **NestJS microservices**, optimizing backend performance, database architecture, and automation workflows.",
  },
];


const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-charcoal-light/30">
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Proven Development Background
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            10+ Years of Web Development Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I specialize in designing, developing, and deploying robust{" "}
            <span className="text-gradient font-semibold">
              Next.js and React applications
            </span>
            , helping businesses scale through clean architecture and
            performance-driven engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* TIMELINE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold mb-8">
              Career Timeline
            </h3>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-l-0 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full" />

                <div className="space-y-2">
                  <span className="text-primary font-display font-semibold">
                    {exp.period}
                  </span>

                  <h4 className="text-xl font-display font-semibold">
                    {exp.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* POSITIONS / CONTRACTS */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-8">
              Key Projects & Contract Roles
            </h3>

            {positions.map((position, index) => (
              <GlassCard
                key={index}
                className="bg-card border-border p-6 hover:border-primary/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  
                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-display font-semibold">
                        {position.company}
                      </h4>
                      <span className="text-sm text-primary">
                        {position.duration}
                      </span>
                    </div>

                    <p className="text-foreground font-medium">
                      {position.role}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {position.description}
                    </p>
                  </div>

                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
