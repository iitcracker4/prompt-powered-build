
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useUser } from "@/store/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Terms and Conditions",
        description: "You must agree to the terms and conditions to register.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      login({ id: crypto.randomUUID(), name, email });
      toast({
        title: "Registration successful",
        description: "Welcome to Ultimate AI!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
      });
    }
    
    setIsLoading(false);
  };
  
  const handleGithubLogin = () => {
    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Terms and Conditions",
        description: "You must agree to the terms and conditions to register.",
      });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      login({ id: crypto.randomUUID(), name: "Github User", email: "github@example.com" });
      toast({
        title: "Registration successful",
        description: "Welcome to Ultimate AI!",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };
  
  const handleGoogleLogin = () => {
    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Terms and Conditions",
        description: "You must agree to the terms and conditions to register.",
      });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      login({ id: crypto.randomUUID(), name: "Google User", email: "google@example.com" });
      toast({
        title: "Registration successful",
        description: "Welcome to Ultimate AI!",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your information to get started
        </p>
      </div>
      
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="email@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms} 
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-codebase-600 hover:underline">
                terms and conditions
              </Link>
            </label>
          </div>
          
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid gap-2">
          <Button
            variant="outline"
            type="button"
            className="flex items-center justify-center gap-2"
            onClick={handleGithubLogin}
            disabled={isLoading}
          >
            <Github className="h-4 w-4" />
            <span>Github</span>
          </Button>
          
          <Button
            variant="outline"
            type="button"
            className="flex items-center justify-center gap-2"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <Mail className="h-4 w-4" />
            <span>Google</span>
          </Button>
        </div>
        
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-codebase-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
