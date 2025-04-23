
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Laptop, Database, Shield, CreditCard } from "lucide-react";

export const AISidebar = () => {
  const [prompt, setPrompt] = useState("");
  
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
  
  return (
    <div className="w-80 border-l flex flex-col h-full bg-card">
      <div className="p-4 border-b">
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
            <Button className="w-full bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600">
              Generate Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
