
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MachineLearning as MLIcon, Layers, Zap, Code, Database, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const MachineLearning = () => {
  const features = [
    {
      icon: Code,
      title: "Smart Code Generation",
      description: "Our ML models can generate code based on natural language descriptions, saving you hours of coding time."
    },
    {
      icon: Layers,
      title: "Pattern Recognition",
      description: "Identify patterns in your codebase to improve code quality and catch potential bugs before they happen."
    },
    {
      icon: Database,
      title: "Intelligent Data Processing",
      description: "Process and transform large datasets with ML-powered tools that understand your data structures."
    },
    {
      icon: BarChart2,
      title: "Predictive Analytics",
      description: "Use ML to forecast user behavior, system performance, and other key metrics for your application."
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "Let ML optimize your application's performance, resource usage, and user experience automatically."
    }
  ];

  return (
    <PageLayout title="Machine Learning">
      <div className="space-y-12">
        {/* Hero section */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="p-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <MLIcon className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Future of Development with Machine Learning</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our advanced Machine Learning capabilities are transforming how applications are built, optimized, and maintained.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Explore ML Features
            </Button>
            <Button variant="outline">
              View Documentation
            </Button>
          </div>
        </section>
        
        {/* Features grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">ML-Powered Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 p-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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
        
        {/* How it works */}
        <section>
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl">How Our ML Works</CardTitle>
                  <CardDescription>
                    Built on cutting-edge technology and trained on millions of code samples
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Learning from Quality Code</h3>
                    <p className="text-muted-foreground">
                      Our models are trained on high-quality, production-grade code from thousands of successful projects.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Understanding Context</h3>
                    <p className="text-muted-foreground">
                      The ML engine analyzes your entire project to understand the context and specific requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Generating & Optimizing</h3>
                    <p className="text-muted-foreground">
                      Based on the analysis, it generates code that is not only functional but also optimized for performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. Continuous Improvement</h3>
                    <p className="text-muted-foreground">
                      Our models continuously learn from user feedback to improve accuracy and code quality.
                    </p>
                  </div>
                  <Button className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </div>
              <div className="bg-muted flex items-center justify-center p-8">
                <div className="h-full w-full bg-background/50 rounded-lg border flex items-center justify-center">
                  <p className="text-muted-foreground">ML visualization placeholder</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        
        {/* Use cases */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Code Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our ML models can analyze your codebase to identify potential bugs, security vulnerabilities, and performance issues before they impact your users.
                </p>
                <div className="p-4 bg-muted rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Example of ML-detected issue
function processData(userData) {
  // ML Warning: Potential security vulnerability
  // Direct use of user input without validation
  const query = "SELECT * FROM users WHERE id = " + userData.id;
  return executeQuery(query);
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Code Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get context-aware code suggestions that understand your project structure, coding style, and intentions.
                </p>
                <div className="p-4 bg-muted rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// As you type:
function calculate

// ML suggests:
function calculateTotalPrice(items, taxRate) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0) * (1 + taxRate);
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Automated Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ML-powered tools can generate comprehensive test cases based on your application's behavior and edge cases.
                </p>
                <div className="p-4 bg-muted rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Function to test
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ML-generated tests
test('validates correct email format', () => {
  expect(validateEmail('user@example.com')).toBe(true);
});

test('rejects email without @ symbol', () => {
  expect(validateEmail('user.example.com')).toBe(false);
});

test('rejects email without domain', () => {
  expect(validateEmail('user@')).toBe(false);
});`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Future of Development?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Start building smarter applications with our ML-powered platform today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Get Started Free
            </Button>
            <Button variant="outline">
              Schedule Demo
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default MachineLearning;
