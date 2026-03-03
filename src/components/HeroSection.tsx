import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import TypewriterText from "./TypewriterText";
import Robot3D from "./Robot3D";

const socialLinks = [
  { icon: Github, href: "https://github.com/EndulalAkshay", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-endulal-3157a1293/", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" }, 
  { icon: Twitter, href: "https://x.com/AkshayEndulal", label: "Twitter" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full glass neon-border text-sm text-primary"
          >
            ✦ Available for opportunities
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
            Hi, I'm{""}
            <span className="text-gradient"> Akshay</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground h-8">
            <TypewriterText
              texts={[
                "Full Stack Developer",
                "AI Engineer",
              ]}
            />
          </div>

          <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed">
            Crafting intelligent, elegant digital experiences at the intersection of AI and design. 
            Passionate about building the future with code and creativity.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 bg-primary text-primary-foreground glow-purple hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 glass neon-border hover:scale-105 text-foreground"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
  {socialLinks.map(({ icon: Icon, href, label }) => {
    const isExternal = href.startsWith("http");

    return (
      <a
        key={label}
        href={href}
        aria-label={label}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="w-10 h-10 rounded-lg glass neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-purple transition-all duration-200"
      >
        <Icon size={18} />
      </a>
    );
  })}
</div>
        </motion.div>

        {/* Right - 3D Robot */}
        <motion.div
          initial={{ opacity: 10, scale: 0.8 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Robot3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
