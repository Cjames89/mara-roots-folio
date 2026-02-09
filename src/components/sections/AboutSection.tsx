import { AnimatedSection, SlideInLeft, SlideInRight } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Blockchain", items: ["Bitcoin", "Ethereum", "DeFi", "Mining Operations", "Tokenomics"] },
  { category: "RevOps", items: ["Salesforce", "HubSpot", "Data Analytics", "Process Automation", "Revenue Forecasting"] },
  { category: "Technical", items: ["Python", "SQL", "Tableau", "Power BI", "API Integrations"] },
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
            Bridging the gap between cutting-edge blockchain technology and operational excellence
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            {/* Photo placeholder with glow effect */}
            <div className="relative group mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-2xl bg-card border border-border overflow-hidden">
            <img 
  src="https://media.licdn.com/dms/image/v2/D5603AQHvZJqvxLkCdg/profile-displayphoto-shrink_200_200/B56ZlfIwN1IAAY-/0/1758237754528?e=2147483647&v=beta&t=Uz1ZCPxWv6l4XAGOimAYpSXsMYHmD2omz2bV6j9T3K4" 
  alt="Connor Selfridge" 
  className="w-full h-full object-cover" 
/>

              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/30 rounded-lg" />
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-sm font-mono text-primary">Revenue Operations @ MARA</span>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a blockchain enthusiast and revenue operations professional with a passion for 
                building scalable systems. At MARA, I lead initiatives that bridge technical 
                infrastructure with strategic business operations.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My research focuses on the intersection of Bitcoin mining economics, decentralized 
                finance protocols, and enterprise-grade operational frameworks. I believe in the 
                transformative power of blockchain technology to reshape industries.
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
