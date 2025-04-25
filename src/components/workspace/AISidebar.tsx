
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Laptop, Database, Shield, CreditCard, History } from "lucide-react";
import { PromptHistory } from "@/components/ai/PromptHistory";

interface PromptHistoryEntry {
  prompt: string;
  response: string;
  timestamp: Date;
}

export const AISidebar = () => {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState<PromptHistoryEntry[]>([
    {
      prompt: "Add a login form",
      response: "Created a new login form component...",
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    },
    {
      prompt: "Implement dark mode",
      response: "Added dark mode functionality...",
      timestamp: new Date(Date.now() - 1000 * 60 * 10)
    }
  ]);
  
  const aiActions = [
    {
      title: "Edit UI/UX",
      description: "Enhance visual design or layout",
      icon: <Laptop size={18} />,
    },
    {
      title: "Add DB Logic",
      description: "Create or modify data models",
      icon: <Database size={18} />,
    },
    {
      title: "Add Authentication",
      description: "Implement secure login/registration",
      icon: <Shield size={18} />,
    },
    {
      title: "Add Payment Processing",
      description: "Integrate payment gateway",
      icon: <CreditCard size={18} />,
    },
  ];
  
  const handlePromptSubmit = () => {
    if (prompt.trim()) {
      setHistory(prev => [{
        prompt: prompt,
        response: "Processing your request...",
        timestamp: new Date()
      }, ...prev]);
      setPrompt("");
    }
  };

  const handleRollback = (entry: PromptHistoryEntry) => {
    // Here you would implement the rollback logic
    console.log("Rolling back to:", entry);
  };
  
  return (
    <div className="w-80 border-l flex flex-col h-full bg-card">
      <Tabs defaultValue="assistant" className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <TabsList className="w-full">
            <TabsTrigger value="assistant" className="flex-1">Assistant</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="assistant" className="flex-1 flex flex-col p-0 m-0">
          <div className="p-4">
            <h2 className="font-semibold">AI Assistant</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Ask AI to modify or enhance your project
            </p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <h3 className="font-medium text-sm mb-2">Common Actions</h3>
            <div className="grid grid-cols-1 gap-2">
              {aiActions.map((action) => (
                <Button
                  key={action.title}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-3">
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">{action.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="pt-4 border-t mt-6">
              <h3 className="font-medium text-sm mb-3">Custom Instructions</h3>
              <div className="space-y-3">
                <Textarea
                  placeholder="Describe what changes you want to make..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="h-32 resize-none"
                />
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  onClick={handlePromptSubmit}
                >
                  Generate Changes
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="flex-1 p-0 m-0">
          <PromptHistory history={history} onRollback={handleRollback} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
