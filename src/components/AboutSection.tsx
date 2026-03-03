import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 0, icon: Briefcase },
  { label: "Projects Completed", value: 2, icon: Code },
  { label: "Certifications", value: 5, icon: Award },
];

const timeline = [
  { year: "2027", title: "B.tech in computer science with a specialization in data Science", org: "CMR Engineering College", type: "Education" },
  { year: "2023", title: "MPC(Maths,Physics,Chemistry)", org: "Gurukrupa Junior College", type: "Education" },
  { year: "2021", title: "School", org: "Brillant Grammar High School", type: "Education" },
];

const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}+</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate AI engineer and full-stack developer dedicated to creating impactful digital solutions 
            that push the boundaries of technology.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 text-center neon-border hover:glow-purple transition-shadow duration-300"
            >
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-3xl md:text-4xl font-bold text-foreground font-display mb-1">
                <AnimatedCounter value={value} />
              </div>
              <p className="text-muted-foreground text-sm">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className={`relative flex items-start gap-4 mb-8 pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-purple top-1.5" />
              <div className="glass rounded-lg p-4 neon-border w-full">
                <span className="text-xs text-primary font-mono">{item.year}</span>
                <h4 className="font-semibold text-foreground text-sm mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                  {item.type === "edu" ? <GraduationCap size={12} /> : <Briefcase size={12} />}
                  {item.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
