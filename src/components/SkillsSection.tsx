import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 70 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "ML / AI",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "NLP", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Jupyter", level: 90 },
      { name: "Docker", level: 55 },
      { name: "Tableau", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs mb-2 tracking-[0.2em]">03 // SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-10">
            System <span className="text-gradient-holo">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-mono text-primary text-sm mb-6 tracking-wider">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-mono text-xs">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(175 80% 50%), hsl(210 80% 55%))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
