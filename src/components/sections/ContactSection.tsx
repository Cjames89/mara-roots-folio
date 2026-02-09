import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, FileText, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "#",
    color: "hover:text-foreground",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "#",
    color: "hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your@email.com",
    color: "hover:text-primary",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-6">
            Get In Touch
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're interested in blockchain research, RevOps optimization, or just want to connect — 
            I'm always open to new conversations and opportunities.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group ${link.color}`}
              >
                <link.icon className="h-5 w-5 transition-colors" />
                <span className="font-medium">{link.name}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Resume download */}
          <AnimatedSection delay={0.3}>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold mb-2">Download My Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive overview of my experience and skills
              </p>
              <Button size="lg" className="glow group">
                <FileText className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume (PDF)
              </Button>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};
