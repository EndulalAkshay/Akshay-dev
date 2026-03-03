import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass glow-purple flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={20} className="text-neon-cyan" /> : <Sun size={20} className="text-neon-purple" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
