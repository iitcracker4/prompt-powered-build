
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bot, MessageCircle, Code, FileCheck, Settings, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AIAgents = () => {
  const agents = [
    {
      icon: Code,
      name: "Code Assistant",
      description: "Intelligent assistant that helps you write, debug, and optimize code.",
      capabilities: [
        "Code completion and suggestions",
        "Refactoring recommendations",
        "Bug detection and fixes",
        "Code optimization"
      ]
    },
    {
      icon: FileCheck,
      name: "QA Agent",
      description: "Automated testing agent that ensures your code meets quality standards.",
      capabilities: [
        "Test case generation",
        "Regression testing",
        "Performance testing",
        "Security vulnerability scanning"
      ]
    },
    {
      icon: Bot,
      name: "DevOps Agent",
      description: "Streamlines your deployment process and infrastructure management.",
      capabilities: [
        "Automated deployments",
        "Infrastructure monitoring",
        "Configuration management",
        "Incident response"
      ]
    },
    {
      icon: MessageCircle,
      name: "Support Agent",
      description: "Provides instant answers to user questions about your application.",
      capabilities: [
        "Natural language understanding",
        "Contextual help",
        "Issue prioritization",
        "Escalation management"
      ]
    },
    {
      icon: BarChart2,
      name: "Analytics Agent",
      description: "Analyzes your application data to provide actionable insights.",
      capabilities: [
        "Usage pattern detection",
        "Performance bottleneck identification",
        "User behavior analysis",
        "Growth opportunity recommendations"
      ]
    },
    {
      icon: Settings,
      name: "Workflow Agent",
      description: "Automates repetitive tasks and streamlines your development workflow.",
      capabilities: [
        "Task automation",
        "Process optimization",
        "Intelligent scheduling",
        "Resource allocation"
      ]
    }
  ];

  return (
    <PageLayout title="AI Agents">
      <div className="space-y-12">
        {/* Hero section */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="p-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <Activity className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Intelligent AI Agents</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our specialized AI agents work autonomously to help you build, test, deploy, and maintain your applications with unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Explore Agents
            </Button>
            <Button variant="outline">
              How It Works
            </Button>
          </div>
        </section>
        
        {/* Agents grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Meet Our AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card key={agent.name} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 p-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <agent.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="text-sm font-semibold mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {agent.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* How it works section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How AI Agents Work</CardTitle>
              <CardDescription>
                Our agents leverage advanced AI models to automate complex tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l border-dashed border-border">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Observation</h3>
                  <p className="text-muted-foreground">
                    Agents continuously monitor your project, codebase, and workflows to understand the context and requirements.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l border-dashed border-border">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                  <p className="text-muted-foreground">
                    Using specialized algorithms, agents analyze patterns, identify opportunities for improvement, and anticipate needs.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l border-dashed border-border">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Action</h3>
                  <p className="text-muted-foreground">
                    Agents take autonomous actions based on their analysis, whether it's generating code, running tests, or optimizing workflows.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Improvement</h3>
                  <p className="text-muted-foreground">
                    Agents learn from feedback and results, continuously improving their performance and recommendations over time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Use cases */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Agent Use Cases</h2>
          <Tabs defaultValue="development">
            <TabsList className="mb-6">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="development">
              <Card>
                <CardHeader>
                  <CardTitle>Development Automation</CardTitle>
                  <CardDescription>
                    Let AI agents handle routine coding tasks while you focus on creative problem-solving.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Boilerplate Generation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI agents can generate standard code structures, saving you hours of repetitive work.
                      </p>
                      <div className="bg-muted p-3 rounded text-xs overflow-x-auto">
                        <code>{`// User prompt: "Create a React component for a product card with image, title, price, and add-to-cart button"

// AI Agent generates:
import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title, price } = product;
  
  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(\`Added \${title} to cart\`);
  };
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-lg">\${price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;`}</code>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Code Refactoring</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Agents can identify and implement code improvements for better performance and maintainability.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs mb-2 font-medium">Before:</p>
                          <div className="bg-muted p-3 rounded text-xs overflow-x-auto">
                            <code>{`function fetchUserData(userId) {
  return fetch('/api/users/' + userId)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      return null;
    });
}`}</code>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs mb-2 font-medium">After AI Refactoring:</p>
                          <div className="bg-muted p-3 rounded text-xs overflow-x-auto">
                            <code>{`async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}`}</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testing">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Testing</CardTitle>
                  <CardDescription>
                    AI agents can create, execute, and maintain comprehensive test suites.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Test Generation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Agents analyze your code and automatically generate appropriate test cases.
                      </p>
                      <div className="bg-muted p-3 rounded text-xs overflow-x-auto">
                        <code>{`// Original function
function calculateDiscount(price, discountCode) {
  if (!discountCode) return price;
  
  if (discountCode === 'SUMMER10') {
    return price * 0.9;
  } else if (discountCode === 'WELCOME20') {
    return price * 0.8;
  }
  
  return price;
}

// AI-generated tests
describe('calculateDiscount', () => {
  test('returns original price when no discount code is provided', () => {
    expect(calculateDiscount(100)).toBe(100);
  });

  test('applies 10% discount for SUMMER10 code', () => {
    expect(calculateDiscount(100, 'SUMMER10')).toBe(90);
  });

  test('applies 20% discount for WELCOME20 code', () => {
    expect(calculateDiscount(100, 'WELCOME20')).toBe(80);
  });

  test('returns original price for invalid discount code', () => {
    expect(calculateDiscount(100, 'INVALID')).toBe(100);
  });
});`}</code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="operations">
              <Card>
                <CardHeader>
                  <CardTitle>Operations & DevOps</CardTitle>
                  <CardDescription>
                    Streamline deployment, monitoring, and infrastructure management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Infrastructure as Code</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Agents can generate and maintain infrastructure configurations based on your requirements.
                      </p>
                      <div className="bg-muted p-3 rounded text-xs overflow-x-auto">
                        <code>{`# User request: "Set up a containerized Node.js application with MongoDB"

# AI Agent generates Docker Compose configuration:
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/myapp
    depends_on:
      - mongo
    restart: always

  mongo:
    image: mongo:5.0
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

volumes:
  mongo-data:`}</code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle>User Support</CardTitle>
                  <CardDescription>
                    Provide instant help to users and gather valuable feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Intelligent Support Bot</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Support agents can answer questions, troubleshoot issues, and guide users through your application.
                      </p>
                      <div className="bg-muted p-3 rounded text-xs">
                        <div className="mb-2 pb-2 border-b border-border">
                          <span className="font-semibold">User:</span> How do I reset my password?
                        </div>
                        <div className="mb-2 pb-2 border-b border-border">
                          <span className="font-semibold">AI Agent:</span> You can reset your password by clicking on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password.
                        </div>
                        <div className="mb-2 pb-2 border-b border-border">
                          <span className="font-semibold">User:</span> I didn't receive the email
                        </div>
                        <div>
                          <span className="font-semibold">AI Agent:</span> I'm sorry to hear that. Here are a few suggestions:
                          <ol className="list-decimal ml-4 mt-1 space-y-1">
                            <li>Check your spam or junk folder</li>
                            <li>Verify that you used the correct email address</li>
                            <li>Try requesting the password reset again</li>
                            <li>If you still don't receive it, I can manually trigger a password reset for your account. Would you like me to do that?</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Add AI Agents to Your Workflow?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Supercharge your development process with intelligent automation.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Try AI Agents Now
          </Button>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIAgents;
