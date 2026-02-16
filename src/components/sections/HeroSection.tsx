import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowDown, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono">
              Blockchain Research & RevOps
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Connor{" "}
            <span className="text-gradient">Selfridge</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Revenue Operations at MARA. Exploring the Intersection of Blockchain Technology, 
           Artifical Intelligence and High Performance Computing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
           <Button size="lg" className="glow group" asChild>
           <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
            </a>
            </Button>
            <a href="#experience">
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/connor-selfridge/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/ConnorSelfridge", label: "Twitter" },
              { icon: Github, href: "https://github.com/Cjames89", label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-border hover:border-primary bg-card hover:bg-primary/10 transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

   {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="cursor-pointer group"> {/* 👈 Wrap in anchor link */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">SCROLL</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
