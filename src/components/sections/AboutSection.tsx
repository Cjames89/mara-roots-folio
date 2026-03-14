import { AnimatedSection, SlideInLeft, SlideInRight } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "AI Infrastructure", items: ["GPU Compute Economics", "Data Center Operations", "High-Performance Compute", "Digital Infrastructure"] },
  { category: "Blockchain", items: ["Bitcoin Mining Economics", "Hashrate Optimization", "Tokenomics", "Energy Markets"] },
  { category: "RevOps", items: ["Salesforce", "HubSpot", "Data Analytics", "Process Automation", "Revenue Forecasting"] },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Optimizing the intersection of high-performance compute and decentralized energy
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div className="relative group mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-2xl bg-card border border-border overflow-hidden">
                <img 
                  src="/IMG_6723.jpeg" 
                  alt="Connor Selfridge - RevOps Specialist focusing on AI Infrastructure and Blockchain Research" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/30 rounded-lg" />
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-sm font-mono text-primary">RevOps & Infrastructure @ MARA Holdings</span>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-medium">
                I build the operational systems that scale digital asset infrastructure. At MARA Holdings,
                I sit at the center of revenue strategy, GTM execution, and the economics of large-scale
                Bitcoin mining — translating raw compute into business outcomes.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My focus is the convergence of Bitcoin mining economics, AI data center infrastructure,
                and energy markets. I'm drawn to the problems that sit at the edges of finance and
                technology — where the right operations framework can unlock real economic value at scale.
              </p>

              <div className="pt-6 space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-mono text-primary mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="border-border hover:border-primary hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
