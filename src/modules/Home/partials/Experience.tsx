import GlassCard from "@components/Card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2017-2020",
    title: "IT Director",
    description: "Led technology strategy and infrastructure development for enterprise solutions.",
  },
  {
    period: "2014-2016",
    title: "Design Assistant",
    description: "Worked with various clients, from startups to established companies, helping bring their visions to life.",
  },
  {
    period: "2010-2014",
    title: "Marketing Trainer",
    description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills and experience.",
  },
  {
    period: "2005-2009",
    title: "Early Career",
    description: "Foundation years building expertise in design and technology.",
  },
];

const positions = [
  {
    company: "Modern Tech",
    duration: "3 Years",
    role: "App Developer",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatur.",
  },
  {
    company: "Soft Tech",
    duration: "2 Years",
    role: "UI/UX Designer",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatur.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-charcoal-light/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Education & Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Empowering Creativity through Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Improve performance, efficiency, and organizational excellence through proven experience.
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
            <h3 className="text-2xl font-display font-semibold mb-8">Key Positions</h3>
            {positions.map((position, index) => (
              <GlassCard 
                key={index}
                className="bg-card border-border p-6 hover:border-primary/50 transition-smooth animate-fade-in"
                // style={{ animationDelay: `${(index + 2) * 0.1}s` }}
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