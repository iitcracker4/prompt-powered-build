
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog = () => {
  const featuredPosts = [
    {
      title: "Building Next-Gen Applications with AI",
      excerpt: "Explore how AI is revolutionizing the way we build and interact with applications.",
      image: "/placeholder.svg",
      date: "April 15, 2023",
      author: "Alex Johnson",
      category: "AI",
      readTime: "5 min read"
    },
    {
      title: "The Future of Development: No-Code Solutions",
      excerpt: "Discover how no-code platforms are changing the landscape of software development.",
      image: "/placeholder.svg",
      date: "March 22, 2023",
      author: "Sarah Chen",
      category: "Development",
      readTime: "8 min read"
    },
    {
      title: "Optimizing React Applications for Performance",
      excerpt: "Learn best practices for building high-performance React applications that scale.",
      image: "/placeholder.svg",
      date: "February 10, 2023",
      author: "Michael Rodriguez",
      category: "Development",
      readTime: "10 min read"
    }
  ];
  
  const recentPosts = [
    {
      title: "Getting Started with Ultimate AI",
      excerpt: "A comprehensive guide to using our platform for beginners.",
      date: "April 20, 2023",
      category: "Tutorial",
      readTime: "7 min read"
    },
    {
      title: "5 Tips for Efficient Development Workflows",
      excerpt: "Improve your productivity with these proven development strategies.",
      date: "April 18, 2023",
      category: "Productivity",
      readTime: "4 min read"
    },
    {
      title: "Case Study: How Company X Built an AI-Powered App in 2 Days",
      excerpt: "Learn how a startup used our platform to launch their product in record time.",
      date: "April 12, 2023",
      category: "Case Study",
      readTime: "6 min read"
    },
    {
      title: "Understanding API Integration Best Practices",
      excerpt: "Essential guidelines for seamless API integrations in your applications.",
      date: "April 8, 2023",
      category: "Development",
      readTime: "9 min read"
    },
    {
      title: "The Role of Design Systems in Modern Applications",
      excerpt: "How consistent design systems improve user experience and development speed.",
      date: "April 5, 2023",
      category: "Design",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Development", "AI", "Design", "Tutorials", "Case Studies", "News"];

  return (
    <PageLayout title="Blog">
      <div className="space-y-8">
        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          
          <div className="overflow-x-auto w-full md:w-auto pb-2">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span>{post.date}</span> • <span>{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm">Read more</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* All posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">{post.date}</div>
                      <Button variant="ghost" size="sm">Read more</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="development">
              <div className="space-y-6">
                {recentPosts
                  .filter(post => post.category === "Development" || post.category === "Productivity")
                  .map((post, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-muted-foreground">{post.date}</div>
                        <Button variant="ghost" size="sm">Read more</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tutorials">
              <div className="space-y-6">
                {recentPosts
                  .filter(post => post.category === "Tutorial")
                  .map((post, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-muted-foreground">{post.date}</div>
                        <Button variant="ghost" size="sm">Read more</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="news">
              <div className="p-4 text-center">
                <p className="text-muted-foreground">No news articles available yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Newsletter */}
        <section className="bg-muted rounded-lg p-8 mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest articles, tutorials, and news from Ultimate AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Blog;
