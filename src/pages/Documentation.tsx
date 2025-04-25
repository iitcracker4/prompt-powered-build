
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Code, HelpCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <PageLayout title="Documentation">
      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Learn the basics of Ultimate AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick introduction to our platform features and capabilities.
                </p>
                <a href="#" className="text-primary text-sm hover:underline">Read guide →</a>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>User Manual</CardTitle>
                <CardDescription>Complete documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed explanations of all features and options.
                </p>
                <a href="#" className="text-primary text-sm hover:underline">Read guide →</a>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Developer Docs</CardTitle>
                <CardDescription>Technical documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  API references, SDKs, and integration guides.
                </p>
                <a href="#" className="text-primary text-sm hover:underline">Read guide →</a>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <HelpCircle className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>Common issues and solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Find solutions to common problems and edge cases.
                </p>
                <a href="#" className="text-primary text-sm hover:underline">Read guide →</a>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Comprehensive API documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Authentication</h3>
                <p className="text-sm text-muted-foreground">Learn how to authenticate with our API</p>
                <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
                  <code>GET /api/v1/auth/token</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Projects</h3>
                <p className="text-sm text-muted-foreground">Create and manage projects</p>
                <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
                  <code>GET /api/v1/projects</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Deployments</h3>
                <p className="text-sm text-muted-foreground">Deploy and manage applications</p>
                <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
                  <code>POST /api/v1/deployments</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="examples">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Example Projects</CardTitle>
                <CardDescription>Ready-to-use templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">E-commerce Store</h3>
                  <p className="text-sm text-muted-foreground">A complete store with cart functionality</p>
                  <a href="#" className="text-primary text-sm hover:underline block mt-2">View example</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Blog Platform</h3>
                  <p className="text-sm text-muted-foreground">Content management system</p>
                  <a href="#" className="text-primary text-sm hover:underline block mt-2">View example</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Dashboard App</h3>
                  <p className="text-sm text-muted-foreground">Analytics and reporting interface</p>
                  <a href="#" className="text-primary text-sm hover:underline block mt-2">View example</a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Code Snippets</CardTitle>
                <CardDescription>Common implementation patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Authentication</h3>
                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
                      <code>{`const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    email,
    password
  });
  return response.data;
}`}</code>
                    </pre>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Data Fetching</h3>
                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto">
                      <code>{`const fetchProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Documentation;
