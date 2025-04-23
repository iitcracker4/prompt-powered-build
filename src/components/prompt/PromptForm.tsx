
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useProjects } from "@/store/store";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState<"web" | "mobile" | "both">("web");
  const [scope, setScope] = useState<"frontend" | "backend" | "fullstack">("fullstack");
  const [includeAuth, setIncludeAuth] = useState(false);
  const [includePayments, setIncludePayments] = useState(false);
  const { createProject } = useProjects();
  const navigate = useNavigate();
  
  const examplePrompts = [
    "Build a project management app with task boards and user assignments.",
    "Create an e-commerce site with product listings and a shopping cart.",
    "Make a social media app where users can post photos and follow each other.",
  ];
  
  const handleExamplePrompt = (example: string) => {
    setPrompt(example);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (prompt.trim()) {
      createProject({
        name: `Project ${new Date().toLocaleString()}`,
        description: prompt.substring(0, 100) + (prompt.length > 100 ? "..." : ""),
        prompt: prompt,
        type: type,
        scope: scope,
        includeAuth: includeAuth,
        includePayments: includePayments,
      });
      
      navigate("/workspace");
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-lg">
              Describe the app you want to build
            </Label>
            <Textarea
              id="prompt"
              placeholder="I want to build a..."
              className="h-40 text-lg"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">
              Be as detailed as possible. Include features, pages, data models, and anything else that will help us understand your vision.
            </p>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-4 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Application Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="app-type">Platform</Label>
                  <Select value={type} onValueChange={(value: any) => setType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Platform</SelectLabel>
                        <SelectItem value="web">Web App</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="both">Web & Mobile</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="app-scope">Scope</Label>
                  <Select value={scope} onValueChange={(value: any) => setScope(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scope" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Scope</SelectLabel>
                        <SelectItem value="frontend">Frontend Only</SelectItem>
                        <SelectItem value="backend">Backend Only</SelectItem>
                        <SelectItem value="fullstack">Full Stack</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Features</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auth">Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Include user login and registration
                    </p>
                  </div>
                  <Switch
                    id="auth"
                    checked={includeAuth}
                    onCheckedChange={setIncludeAuth}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="payments">Payment Processing</Label>
                    <p className="text-sm text-muted-foreground">
                      Add payment gateway and checkout flow
                    </p>
                  </div>
                  <Switch
                    id="payments"
                    checked={includePayments}
                    onCheckedChange={setIncludePayments}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600 gap-2"
              size="lg"
            >
              Generate Project <ArrowRight size={16} />
            </Button>
          </div>
        </form>
      </motion.div>
      
      <div className="mt-12">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Sparkles size={20} className="text-codebase-600" />
          Need inspiration? Try these examples
        </h3>
        <div className="space-y-3">
          {examplePrompts.map((example, index) => (
            <div
              key={index}
              className="p-3 border rounded-md cursor-pointer hover:bg-secondary transition-colors"
              onClick={() => handleExamplePrompt(example)}
            >
              <p>{example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
