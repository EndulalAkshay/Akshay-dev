import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
      style={{
        background: "linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)), hsl(var(--neon-pink)))",
        scaleX: progress,
        transformOrigin: "left",
      }}
    />
  );
};

export default ScrollProgress;
