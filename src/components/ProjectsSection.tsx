
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DirectLab – Health At Home Platform",
    description:
      "A full-stack healthcare platform connecting patients, diagnostic laboratories, and sample collectors for convenient home test booking. Features role-based authentication, secure payments, real-time test tracking, and automated medical report management.",
    image: "/DirectLab.png",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase"],
    github: "https://github.com/EndulalAkshay/DirectLab",
    demo: "https://directlab.vercel.app/",
    category: "Web",
  },
  {
    title: "ThinkBoard – Collaborative Idea Platform",
    description:
      "A collaborative platform where users can create, organize, manage, and share ideas. Includes authentication, dynamic user interfaces, real-time updates, and interactive idea management features.",
    image: "/ThinkBoard.png",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/EndulalAkshay/mern-thinkboard",
    demo: "",
    category: "Web",
  },
  {
    title: "FarmConnect – Farmer Marketplace",
    description:
      "A full-stack MERN marketplace that connects farmers directly with customers. Farmers can list agricultural products, while buyers can browse products and purchase fresh produce. Features JWT authentication, product management, and order tracking.",
    image: "/FarmConnect.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/EndulalAkshay/FarmConnect",
    demo: "demo: "https://farm-connect-dusky.vercel.app/",",
    category: "Full Stack",
  },
  {
    title: "PropVista – Real Estate Platform",
    description:
      "A responsive real estate platform for exploring houses, apartments, plots, and commercial properties. Features dynamic property search, location and price filtering, BHK configuration, detailed property pages, and wishlist functionality using LocalStorage.",
    image: "/PropVista.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "LocalStorage"],
    github: "",
    demo: "",
    category: "Full Stack",
  },
];

const categories = ["All", "Web", "Full Stack"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="section-padding relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my projects showcasing full-stack development,
            modern web technologies, problem-solving, and practical
            software engineering skills.
          </p>

          {/* Project Filters */}
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground glow-purple"
                    : "glass neon-border text-muted-foreground hover:text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className="glass rounded-xl overflow-hidden neon-border group hover:glow-purple transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-accent/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-5xl opacity-50">
                      🚀
                    </span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-5 space-y-4 flex flex-col flex-1">

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Category */}
                <div>
                  <span className="text-xs text-primary font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Technology Tags */}
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

                {/* Project Links */}
                <div className="flex gap-5 pt-3 border-t border-border/50">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="text-xs text-muted-foreground">
                      Project details coming soon
                    </span>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>

      </div>
    </section>
  );
};

export default ProjectsSection;
