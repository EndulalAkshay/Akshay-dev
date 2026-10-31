import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DirectLab – Health At Home Platform",
    description:
      "A full-stack healthcare platform that connects patients, labs, and sample collectors for seamless home test booking. Features role-based authentication, secure payments, real-time test tracking, and automated report management.",
    image: "/DirectLab.png",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase"],
    github: "https://github.com/EndulalAkshay/DirectLab",
    demo: "https://directlab.vercel.app/",
    category: "Web",
  },
  {
    title: "ThinkBoard – Collaborative Idea Platform",
    description:
      "A modern web-based collaborative board where users can create, manage, and share ideas in real-time. Includes authentication, dynamic UI updates, and interactive task management features.",
    image: "/ThinkBoard.png",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/EndulalAkshay/mern-thinkboard",
    demo: "https://github.com/EndulalAkshay/mern-thinkboard",
    category: "Web",
  },
  {
    title: "FarmConnect – Farmer Marketplace",
  description:
    "A full-stack MERN marketplace that connects farmers directly with buyers. Farmers can list agricultural products, while customers can browse products, place orders, and purchase fresh produce directly from farmers. Features include JWT authentication, product management, and order tracking.",
  image: "/farmconnect.png",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  github: "https://github.com/EndulalAkshay/FarmConnect",
  demo: "#",
  category: "Full Stack",
  },
  {
    title: "PropVista – Real Estate Property Listing Platform",
  description:
    "A responsive real estate platform for browsing houses, apartments, plots, and commercial properties. Features dynamic property search and filtering based on location, price, property type, and BHK configuration. Includes reusable React components, detailed property pages, and wishlist functionality using LocalStorage.",
  image: "/propvista.png",
  tags: ["HTML", "CSS", "JavaScript", "React.js", "LocalStorage"],
  github: "#",
  demo: "#",
  category: "Full Stack",
  },
];

const categories = ["All", "Web", "AI", "Data"];
const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of projects showcasing AI engineering, full-stack development, and creative problem solving.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground glow-purple"
                    : "glass neon-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden neon-border group hover:glow-purple transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image placeholder */}
              {/* Project Image */}
<div className="h-44 overflow-hidden">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="h-full bg-gradient-to-br from-primary/20 via-muted to-accent/10 flex items-center justify-center">
      <span className="text-4xl opacity-50">🚀</span>
    </div>
  )}
</div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold font-display text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
