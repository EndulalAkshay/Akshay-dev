
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "neon-purple",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 50 },
    ],
  },
  {
    title: "Backend",
    color: "neon-cyan",
    skills: [
      { name: "Python / FastAPI", level: 90 },
      { name: "Java", level: 90 },
      { name: "Node.js", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "Docker / K8s", level: 50 },
    ],
  },
  {
    title: "Data & Analytics",
    color: "neon-pink",
    skills: [
      { name: "TensorFlow / PyTorch", level: 50 },
      { name: "Pandas / NumPy", level: 50 },
      { name: "Computer Vision", level: 50 },
      { name: "NLP / LLMs", level: 50 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "neon-blue",
    skills: [
      { name: "AWS / GCP", level: 50 },
      { name: "Git / CI-CD", level: 50 },
      { name: "Figma", level: 50 },
      { name: "Linux", level: 50 },
    ],
  },
];

const SkillCard = ({
  category,
  index,
  inView,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="glass rounded-xl p-6 neon-border group hover:glow-purple transition-all duration-300 hover:-translate-y-1"
  >
    <h3 className="text-lg font-bold font-display text-foreground mb-5">
      {category.title}
    </h3>

    <div className="space-y-4">
      {category.skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-foreground">
              {skill.name}
            </span>

            <span className="text-muted-foreground font-mono text-xs">
              {skill.level}%
            </span>
          </div>

          <div className="skill-meter">
            <motion.div
              className="skill-meter-fill"
              initial={{ width: 0 }}
              animate={{
                width: inView ? skill.level + "%" : "0%",
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.15 + 0.3,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Technical{" "}
            <span className="text-gradient">Skills</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning AI, full-stack development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              category={cat}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
