import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Sovereign GPU as a Service Dashboard",
    description: "Data sovereignty-focused GPU rental platform with leaderboard tracking and security scores across compute providers.",
    problem: "GPU rental services lack transparency into how providers handle customer data and workloads.",
    solution: "Built a dashboard aggregating sovereign GPU sources with security ratings and compliance scoring.",
    impact: "Created a clear interface for researchers and enterprises to identify trustworthy, secure compute options.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "APIs"],
    liveUrl: "https://cjames89.github.io/sovereign-compute-marketplace",
    githubUrl: "https://github.com/Cjames89/sovereign-compute-marketplace.git",
    featured: true,
  },
  {
    title: "Commodities Trading Platform",
    description: "ML-powered commodities trading model for futures hedging strategies tailored to mining company revenue cycles.",
    problem: "Mining companies face highly volatile revenue due to commodity price swings and production variability.",
    solution: "Built a machine learning model incorporating futures curves, production data, and macro variables to generate hedging signals.",
    impact: "Partner reduced revenue volatility by ~25% through systematic, data-driven futures hedging.",
    image: "/placeholder.svg",
    tags: ["Python", "SQL", "PowerBI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "DeFi Portfolio Tracker",
    description: "Cross-protocol DeFi portfolio tracker with automated yield optimization and position management.",
    problem: "Managing positions across multiple DeFi protocols was fragmented and error-prone.",
    solution: "Built a unified dashboard pulling on-chain data across protocols with automated yield calculations.",
    impact: "Simplified active portfolio management and improved annualized yield by 15%.",
    image: "/placeholder.svg",
    tags: ["Web3.js", "React", "Node.js", "Ethers"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
 title: "Revenue Forecasting Model",
    description: "Bitcoin mining revenue forecasting model incorporating hashrate, difficulty adjustments, BTC price, and energy cost variables.",
    problem: "Mining revenue forecasts were manual, slow, and missed key market dynamics.",
    solution: "Trained an ML model on historical mining data, difficulty epochs, and spot BTC price to produce rolling revenue projections.",
    impact: "Improved forecast accuracy by 40% quarter-over-quarter, enabling better treasury and capex planning.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "SQL", "Tableau"],
    liveUrl: "#",
    githubUrl: null,
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on work at the intersection of crypto infrastructure, data, and operations
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {/* Featured projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ScaleIn key={project.title} delay={index * 0.1}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  {/* Project image */}
                  <div className="relative h-48 bg-surface overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Layers className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>{project.description}</CardDescription>
                    
                    <div className="space-y-2 text-sm">
                      <p><span className="text-primary font-mono">Problem:</span> <span className="text-muted-foreground">{project.problem}</span></p>
                      <p><span className="text-accent font-mono">Solution:</span> <span className="text-muted-foreground">{project.solution}</span></p>
                      <p><span className="text-primary font-mono">Impact:</span> <span className="text-muted-foreground">{project.impact}</span></p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-border">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.githubUrl}>
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>

          {/* Other projects */}
          <AnimatedSection>
            <h3 className="text-xl font-mono text-center text-muted-foreground mb-6">Other Projects</h3>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ScaleIn key={project.title} delay={index * 0.1}>
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.liveUrl} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </a>
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
