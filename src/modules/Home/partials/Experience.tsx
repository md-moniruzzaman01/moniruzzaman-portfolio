import GlassCard from "@components/Card";
import { Briefcase } from "lucide-react";

// --- UPGRADED EXPERIENCES (Clean, professional, SEO-friendly) ---
const experiences = [
  {
    period: "2017 — Present",
    title: "Freelance Full-Stack Developer (NYC)",
    description:
      "Building high-performance, SEO-optimized applications using Next.js, React, and modern backend stacks for NYC small businesses and startups.",
  },
  {
    period: "2014 — 2017",
    title: "Lead Front-End Engineer",
    description:
      "Led engineering teams delivering scalable UI systems, API-driven dashboards, and enterprise-grade front-end architecture.",
  },
  {
    period: "2010 — 2014",
    title: "Web Strategy Consultant",
    description:
      "Improved businesses' digital presence by advising on performance, UX, and e-commerce flows, directly contributing to measurable revenue growth.",
  },
  {
    period: "2005 — 2009",
    title: "Digital Design & UX Prototyping",
    description:
      "Developed a strong foundation in UX/UI, rapid prototyping, and translating design systems into functional HTML/CSS/JS interfaces.",
  },
];

// --- PROJECT & CONTRACT ROLES (More concise + impact focused) ---
const positions = [
  {
    company: "NYC Tech Solutions (Contract)",
    duration: "2 Years",
    role: "Next.js & React Specialist",
    description:
      "Migrated legacy systems to modern Next.js architectures, improving Core Web Vitals by an average of 40%.",
  },
  {
    company: "Digital Innovations Inc.",
    duration: "3 Years",
    role: "Full-Stack Developer",
    description:
      "Built and maintained full-stack applications using the MERN stack with a strong focus on backend scalability and database design.",
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
