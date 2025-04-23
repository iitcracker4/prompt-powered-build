
import { Navbar } from "@/components/common/Navbar";
import { PromptForm } from "@/components/prompt/PromptForm";
import { useEffect } from "react";
import { useUser } from "@/store/store";
import { Navigate } from "react-router-dom";

const Prompt = () => {
  const { isLoggedIn } = useUser();
  
  // For demo, let's simulate a user being logged in
  useEffect(() => {
    if (!isLoggedIn) {
      // In a real app, we would redirect to login
      // For demo purposes, we'll continue as if logged in
    }
  }, [isLoggedIn]);
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Your New Project</h1>
        <PromptForm />
      </main>
    </div>
  );
};

export default Prompt;
