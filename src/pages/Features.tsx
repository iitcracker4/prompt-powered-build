
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Code, Bot, LineChart, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresList = [
    {
      icon: Code,
      title: "Advanced Code Editor",
      description: "Powerful code editing capabilities with syntax highlighting, autocomplete, and real-time collaboration."
    },
    {
      icon: Bot,
      title: "AI Code Assistant",
      description: "Get intelligent code suggestions and autocompletion powered by advanced language models."
    },
    {
      icon: Layers,
      title: "Component Library",
      description: "Extensive collection of pre-built UI components to accelerate your development process."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Monitor your application performance with detailed metrics and insights."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Top-tier security features to keep your code and data protected."
    },
    {
      icon: Zap,
      title: "Instant Deployments",
      description: "Deploy your applications with a single click to our global infrastructure."
    }
  ];

  return (
    <PageLayout title="Features">
      <div className="space-y-10">
        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Development</h2>
            <p className="text-lg text-muted-foreground">
              Ultimate AI provides cutting-edge tools and features to enhance your development workflow and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feature, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="py-10">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2 flex flex-col">
              <div className="p-8 flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Ready to explore all features?</h2>
                <p className="text-muted-foreground">
                  Start building amazing applications with our powerful platform.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button>Get Started</Button>
                  <Button variant="outline">View Demo</Button>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Premium Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                    <span>Custom domains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                    <span>Team collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Features;
