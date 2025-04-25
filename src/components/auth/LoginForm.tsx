
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useUser } from "@/store/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, LucideIcon } from "lucide-react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo, we'll use hardcoded credentials
      if (email === "user@example.com" && password === "password") {
        login({ id: crypto.randomUUID(), name: "Demo User", email: "user@example.com" });
        toast({
          title: "Login successful",
          description: "Welcome back to Ultimate AI!",
        });
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
    
    setIsLoading(false);
  };
  
  const handleGithubLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login({ id: crypto.randomUUID(), name: "Github User", email: "github@example.com" });
      toast({
        title: "Login successful",
        description: "Welcome back to Ultimate AI!",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };
  
  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login({ id: crypto.randomUUID(), name: "Google User", email: "google@example.com" });
      toast({
        title: "Login successful",
        description: "Welcome back to Ultimate AI!",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-codebase-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
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
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-codebase-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
