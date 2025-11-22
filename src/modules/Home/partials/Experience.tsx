import GlassCard from "@components/Card";
import { Briefcase } from "lucide-react";

// --- UPDATED EXPERIENCES DATA: Focused on Web/Tech Progression ---
const experiences = [
  {
    period: "2017-Present", // Updated to "Present" to show current freelance/consulting
    title: "Freelance Full-Stack Developer (NYC)",
    // Description: Highlight Next.js, React, and small business focus
    description: "Architecting and developing custom, high-performance web applications using **Next.js and React** specifically for **NYC small businesses**, focusing on SEO and conversion optimization.",
  },
  {
    period: "2014-2017",
    title: "Lead Front-End Engineer",
    // Description: Highlight technical leadership and core development skills
    description: "Led development teams in building robust, scalable user interfaces and integrating complex APIs for high-traffic enterprise solutions.",
  },
  {
    period: "2010-2014",
    title: "Web Strategy Consultant",
    // Description: Focus on the strategic, business-driven side of development
    description: "Provided strategic consulting on digital presence, performance auditing, and e-commerce platform implementation, driving measurable business growth for clients.",
  },
  {
    period: "2005-2009",
    title: "Digital Design & Prototyping",
    // Description: Show foundational skills in the design-to-code pipeline
    description: "Foundation years focusing on modern UX/UI design principles, rapid prototyping, and translating design into functional HTML/CSS/JavaScript.",
  },
];

const positions = [
  {
    company: "NYC Tech Solutions (Contract)",
    duration: "2 Years",
    role: "Next.js & React Specialist",
    description: "Focused exclusively on migrating legacy sites to modern Next.js architecture, leading to an average 40% improvement in Core Web Vitals.",
  },
  {
    company: "Digital Innovations Inc.",
    duration: "3 Years",
    role: "Full-Stack Developer",
    description: "Developed and maintained full-stack applications using the MERN stack, with a strong emphasis on database design and back-end scalability.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-charcoal-light/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Updated H2 to be more development-centric */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Proven Development Background
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            **10+ Years** of Strategic Web Development
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My experience is rooted in the full development lifecycle, translating business goals into robust, high-performance **Next.js and React applications**.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold mb-8">Career Timeline</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full" />
                <div className="space-y-2">
                  <span className="text-primary font-display font-semibold">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-display font-semibold">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Positions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-8">Key Project & Contract Roles</h3>
            {positions.map((position, index) => (
              <GlassCard 
                key={index}
                className="bg-card border-border p-6 hover:border-primary/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
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
                    <p className="text-muted-foreground text-sm">
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