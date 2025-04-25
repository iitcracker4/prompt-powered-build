
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Development as DevIcon, Code, GitBranch, Terminal, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Development = () => {
  return (
    <PageLayout title="Development">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" /> Code Editor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced code editor with syntax highlighting and IntelliSense.
            </p>
            <Button size="sm">Open Editor</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <GitBranch className="h-5 w-5 mr-2 text-primary" /> Version Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Integrated Git version control with branching and merging.
            </p>
            <Button size="sm">View Branches</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-primary" /> Terminal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Integrated terminal for running commands and scripts.
            </p>
            <Button size="sm">Open Terminal</Button>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="tools">Dev Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>Last updated 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {i % 2 === 0 ? 'React application with API integration' : 'Frontend application with Tailwind CSS'}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm">Open</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Blog', 'E-commerce', 'Dashboard', 'Portfolio', 'Landing Page'].map((template) => (
              <Card key={template}>
                <CardHeader>
                  <CardTitle>{template} Template</CardTitle>
                  <CardDescription>Ready-to-use starter</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fully-featured {template.toLowerCase()} starter template.
                  </p>
                  <Button size="sm">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-primary" /> CI/CD Pipeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configure automated testing and deployment pipelines.
                </p>
                <Button size="sm">Configure</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DevIcon className="h-5 w-5 mr-2 text-primary" /> API Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Test API endpoints and view responses.
                </p>
                <Button size="sm">Open Tester</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Development;
