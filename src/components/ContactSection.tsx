import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4 z-10">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-primary text-xs mb-2 tracking-[0.2em]">04 // CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Open a <span className="text-gradient-holo">Channel</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Interested in collaborating or have an opportunity? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
              <Mail size={16} className="text-primary" />
              zaid.sayeed@email.com
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
              <MapPin size={16} className="text-holo-purple" />
              India
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg font-mono text-sm hover:bg-primary/20 transition-all"
            >
              <Send size={16} /> Transmit Message
            </button>
          </form>
        </motion.div>

        <div className="text-center mt-16 text-muted-foreground text-xs font-mono">
          <p>© 2026 Zaid Sayeed. Built with precision.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
