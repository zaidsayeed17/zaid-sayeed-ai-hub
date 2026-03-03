import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import TypingText from "./TypingText";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-[0.3em] uppercase">
            // initializing system
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6">
            <span className="text-foreground">Zaid</span>{" "}
            <span className="text-gradient-holo">Sayeed</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-10">
            <TypingText
              texts={[
                "AI & Data Science Student",
                "Machine Learning Engineer",
                "Data Analyst",
                "Problem Solver",
              ]}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 flex items-center gap-2 text-sm font-mono text-foreground hover:text-holo-blue hover:border-holo-blue/50 transition-all"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="#"
            className="glass-card px-6 py-3 flex items-center gap-2 text-sm font-mono bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all"
          >
            <FileText size={18} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} className="animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
