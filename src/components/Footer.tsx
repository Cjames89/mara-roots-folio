import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground font-mono"
          >
            © {currentYear} Connor Selfridge. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            <a href="https://connorselfridge.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Substack
            </a>
            <span className="mx-2">·</span>
            <a href="https://www.linkedin.com/in/connor-selfridge/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <span className="mx-2">·</span>
            <a href="https://x.com/ConnorSelfridge" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              X
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
