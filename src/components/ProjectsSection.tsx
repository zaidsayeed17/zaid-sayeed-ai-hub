import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Mobile Price Prediction",
    subtitle: "Random Forest Classifier",
    description:
      "Built a machine learning model using Random Forest to predict mobile phone price ranges based on hardware specifications. Achieved high accuracy through feature engineering and hyperparameter tuning.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Pandas", "EDA"],
    featured: true,
    github: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    subtitle: "NLP Pipeline",
    description:
      "Developed a sentiment analysis pipeline using NLP techniques to classify text data. Integrated preprocessing, vectorization, and model evaluation.",
    tags: ["Python", "NLTK", "TF-IDF", "Logistic Regression"],
    featured: false,
    github: "#",
  },
  {
    title: "Data Dashboard",
    subtitle: "Interactive Visualization",
    description:
      "Created an interactive analytics dashboard for exploring datasets with dynamic filters, charts, and export capabilities.",
    tags: ["Python", "Plotly", "Dash", "SQL"],
    featured: false,
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs mb-2 tracking-[0.2em]">02 // PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-10">
            Mission <span className="text-gradient-holo">Logs</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group hover:border-primary/40 transition-all ${
                project.featured ? "border-primary/30" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-primary text-xs font-mono">
                  <Star size={14} className="fill-primary" /> FEATURED
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary font-mono text-sm mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <Github size={16} /> View Code <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
