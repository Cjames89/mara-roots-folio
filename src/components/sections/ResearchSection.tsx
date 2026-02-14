import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const categories = ["All", "Blockchain", "RevOps", "Mining"];

const publications = [
  {
    title: "Bitcoin Mining in the Quantum-era",
    abstract: "An in-depth analysis of Bitcoin mining in a quantum-era, will the network be at risk, or more secure?",
    date: "February 2026",
    category: "Mining",
    link: "#",
    type: "Research Paper",
  },
  {
    title: "Financial Analysis of AI Infrastructure",
    abstract: "An overview of the AI infrastrucutre markets, key players and market positioning.",
    date: "March 20263",
    category: "Financial Anlaysis",
    link: "#",
    type: "Article",
  },
  {
    title: "DeFi Protocol Analysis: Yield Optimization Strategies",
    abstract: "Comparative analysis of yield farming strategies across major DeFi protocols with risk-adjusted return metrics.",
    date: "September 2023",
    category: "Blockchain",
    link: "#",
    type: "Research Paper",
  },
  {
    title: "Scaling Operations in Crypto Mining Enterprises",
    abstract: "Best practices for scaling operational infrastructure in large-scale cryptocurrency mining operations.",
    date: "July 2023",
    category: "Mining",
    link: "#",
    type: "White Paper",
  },
  {
    title: "Data-Driven Decision Making in Blockchain Organizations",
    abstract: "How blockchain companies can leverage analytics and automation to drive strategic growth.",
    date: "May 2023",
    category: "RevOps",
    link: "#",
    type: "Article",
  },
  {
    title: "Layer 2 Solutions: A Technical Overview",
    abstract: "Exploring scaling solutions for Ethereum and their implications for the future of decentralized applications.",
    date: "March 2023",
    category: "Blockchain",
    link: "#",
    type: "Research Paper",
  },
];

export const ResearchSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPublications = publications.filter(
    (pub) => activeCategory === "All" || pub.category === activeCategory
  );

  return (
    <section id="research" className="py-24 relative bg-surface/50">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of blockchain technology and operational innovation
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "glow-sm" : "border-border hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </AnimatedSection>

        {/* Publications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((pub, index) => (
            <ScaleIn key={pub.title} delay={index * 0.1}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group hover:glow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {pub.type}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">{pub.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {pub.abstract}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {pub.category}
                    </Badge>
                    <motion.a
                      href={pub.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Read More
                      <ExternalLink className="h-3 w-3" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};
