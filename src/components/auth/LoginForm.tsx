
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/store/store";
import { Github } from "lucide-react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Mock login
    if (email && password) {
      login({
        id: "1",
        name: "Demo User",
        email: email,
      });
      navigate("/dashboard");
    } else {
      setError("Please fill in all fields");
    }
  };
  
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      
      {error && (
        <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm border border-red-100">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="text-xs text-codebase-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600">
          Sign In
        </Button>
      </form>
      
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative bg-background px-4 text-xs text-muted-foreground">
          Or continue with
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <Button variant="outline" className="w-full">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
      
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-codebase-600 hover:underline">
          Sign up now
        </Link>
      </div>
    </div>
  );
};
