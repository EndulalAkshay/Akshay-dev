import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe, Lightbulb } from "lucide-react";

const initiatives = [
  {
    icon: Users,
    title: "Coding Club",
    org: "CodeForAll NGO",
    description: "Helping 20+ students in programming fundamentals in College with Team.",
    image: "",
    accent: "primary",
  },
  {
    icon: Globe,
    title: "Hackothan Coordinator",
    org: "NextGen Hack",
    description: "Organizing the Hackothan is a very memorable event, Student participated from across the State Different colleges",
    image: "/DirectLab.png",
    accent: "accent",
  },
  {
    icon: Heart,
    title: "SD-DSA",
    org: "AccessNow Foundation",
    description: "Helping the Student to Learn DSA in a Structed Manner,Suggesting the Resources.",
    image: "",
    accent: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Python Workshop",
    org: "CMR Engineering College",
    description: "Organized 2+ workshops in College  for Students so that they can have hand-on Experince.",
    image: "",
    accent: "primary",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Impact & <span className="text-gradient-purple">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Giving back through technology — volunteering, mentoring, and building solutions that create real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass rounded-xl overflow-hidden neon-border group hover:glow-pink transition-all duration-300 hover:-translate-y-1"
              >
                {/* Warm accent strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-primary to-accent" />

                <div className="p-6 flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-primary">{item.org}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
