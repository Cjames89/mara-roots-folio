import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Revenue Operations",
    company: "MARA (Marathon Digital Holdings)",
    period: "2025 - Present",
    description: "Leading revenue operations and strategy at one of the largest publicly traded Bitcoin mining companies. Building data-driven processes and automation to scale commercial operations.",
    achievements: [
      "Streamlined GTM workflows and CRM processes to improve sales cycle efficiency",
      "Delivered key performance insights to senior leadership and external stakeholders",
      "Led cross-functional initiatives bridging operations, finance, and business development",
    ],
    tags: ["AI Infrastructure", "RevOps", "Data Analytics"],
    current: true,
  },
  {
    title: "Blockchain Research",
    company: "Shield3",
    period: "2024",
    description: "Conducted in-depth research on DeFi protocols, on-chain security, and tokenomics for a Web3 security startup. Published analysis on emerging blockchain trends and smart contract risk.",
    achievements: [
      "Authored 5+ research reports on DeFi protocols and on-chain security vulnerabilities",
      "Developed proprietary analytics frameworks used by key institutional stakeholders",
      "Prepared and presented investment pitch decks for 10+ VC portfolio opportunities",
    ],
    tags: ["DeFi", "Research", "Tokenomics"],
    current: false,
  },
  {
    title: "Stablecoin Development",
    company: "Jewel Bank",
    period: "2023",
    description: "Supported operational and technical buildout for a fintech startup developing stablecoin infrastructure for regulated banking. Focused on systems integration and business development.",
    achievements: [
      "Implemented and validated stablecoin integration with core banking platform",
      "Grew customer pipeline by 25% through outbound strategy and partnerships",
      "Built analytics dashboards to track KPIs for the executive team",
    ],
    tags: ["Operations", "Automation", "Analytics"],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through innovation and operational excellence
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-0 w-4 h-4 rounded-full border-2 border-primary bg-background ${
                  index % 2 === 0 ? "left-0 md:-right-2 md:left-auto" : "left-0 md:-left-2"
                } ${exp.current ? "glow" : ""}`}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              <div className="ml-8 md:ml-0 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  {exp.current && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">Current</Badge>
                  )}
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary font-mono text-sm mb-4">{exp.company}</p>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
