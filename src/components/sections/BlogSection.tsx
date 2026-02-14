import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Rss, Mail } from "lucide-react";

// Configure your Substack URL here
const SUBSTACK_URL = "your-substack"; // Change this to your Substack username

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

// Demo posts for when RSS is not configured or fails
const demoPosts: BlogPost[] = [
  {
    title: "The Future of Bitcoin Mining: A 2024 Perspective",
    link: "#",
    pubDate: "2024-01-15",
    description: "An exploration of emerging trends in Bitcoin mining, from sustainable energy initiatives to next-generation ASIC technology.",
  },
  {
    title: "Building Scalable RevOps in Web3",
    link: "#",
    pubDate: "2024-01-08",
    description: "How traditional revenue operations principles adapt—and transform—in the decentralized world.",
  },
  {
    title: "Understanding the Halving: Economic Implications",
    link: "#",
    pubDate: "2024-01-01",
    description: "A deep dive into Bitcoin's halving mechanism and its far-reaching effects on miners, investors, and the broader ecosystem.",
  },
];

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Attempt to fetch RSS feed
        // Note: In production, you'd use a CORS proxy or backend to fetch the RSS
        // For now, we'll use demo posts
        if (SUBSTACK_URL === "your-substack") {
          // No Substack configured, use demo posts
          setPosts(demoPosts);
          setLoading(false);
          return;
        }

        // In a real implementation, you'd fetch from:
        // `https://${SUBSTACK_URL}.substack.com/feed`
        // Using a CORS proxy or edge function
        
        // For now, fallback to demo posts
        setPosts(demoPosts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError(true);
        setPosts(demoPosts);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const substackFullUrl = SUBSTACK_URL === "connorselfridge" 
    ? "#" 
    : `https://${SUBSTACK_URL}.substack.com`;

  return (
    <section id="blog" className="py-24 relative bg-surface/50">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rss className="h-5 w-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Powered by Substack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on blockchain, operations, and building the future of finance
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card/50 border-border">
                <CardHeader>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {posts.map((post, index) => (
                <ScaleIn key={post.title} delay={index * 0.1}>
                  <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group hover:glow-sm">
                    <CardHeader>
                      <span className="text-xs font-mono text-muted-foreground mb-2">
                        {formatDate(post.pubDate)}
                      </span>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                      <motion.a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        Read on Substack
                        <ExternalLink className="h-3 w-3" />
                      </motion.a>
                    </CardContent>
                  </Card>
                </ScaleIn>
              ))}
            </div>

            {/* Subscribe CTA */}
            <AnimatedSection>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Subscribe to my Substack for weekly insights on blockchain, RevOps, and the future of decentralized systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="glow" asChild>
                    <a href={substackFullUrl} target="_blank" rel="noopener noreferrer">
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe on Substack
                    </a>
                  </Button>
                  <Button variant="outline" className="border-border" asChild>
                    <a href={substackFullUrl} target="_blank" rel="noopener noreferrer">
                      View All Posts
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
};
