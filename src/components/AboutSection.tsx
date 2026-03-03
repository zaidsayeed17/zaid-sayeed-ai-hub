import { motion } from "framer-motion";
import { Brain, Database, BarChart3, Code2 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", color: "text-primary" },
  { icon: Database, label: "Data Engineering", color: "text-holo-blue" },
  { icon: BarChart3, label: "Data Analysis", color: "text-holo-purple" },
  { icon: Code2, label: "Python / R", color: "text-holo-green" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs mb-2 tracking-[0.2em]">01 // ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
            System <span className="text-gradient-holo">Profile</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 scanline"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Zaid Sayeed, an AI & Data Science student passionate about transforming raw data 
              into actionable insights. I specialize in building machine learning models, designing 
              data pipelines, and creating intelligent systems that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans predictive modeling, deep learning, and data visualization. I believe 
              in the power of data-driven decision making and the transformative potential of 
              artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-colors"
              >
                <item.icon size={28} className={item.color} />
                <span className="text-sm font-mono text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
