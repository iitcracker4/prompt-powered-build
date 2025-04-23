
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-grid py-20 md:py-32">
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="block">AI that</span>
          <span className="text-gradient mt-2 block font-extrabold">
            Builds Codebases
          </span>
          <span className="block">from Scratch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Turn your ideas into functional code with AI. Describe what you want,
          and watch as we build, update, and deploy your codebase in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600 text-white gap-2"
            asChild
          >
            <Link to="/prompt">
              Start Building Now <ArrowRight size={16} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/features">See How It Works</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mt-16 flex flex-col justify-center"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl border bg-card/50 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-muted-foreground">
                AI-Generated Codebase
              </div>
            </div>
            <div className="flex">
              <div className="w-56 border-r bg-muted/30 p-4 hidden md:block">
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 rounded bg-muted animate-pulse-slow"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        width: `${Math.max(70, Math.random() * 100)}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 p-4 text-left">
                <pre className="text-xs md:text-sm overflow-x-auto">
                  <code className="language-jsx">
                    <span className="text-blue-600">import</span>{" "}
                    <span className="text-codebase-600">React</span>{" "}
                    <span className="text-blue-600">from</span>{" "}
                    <span className="text-green-600">'react'</span>;<br />
                    <br />
                    <span className="text-blue-600">function</span>{" "}
                    <span className="text-yellow-600">App</span>() {"{"}
                    <br />
                    {"  "}
                    <span className="text-blue-600">return</span> (<br />
                    {"    "}
                    <span className="text-codebase-500">{"<"}</span>
                    <span className="text-codebase-600">div</span>
                    <span className="text-purple-500">{" className"}</span>
                    <span className="text-codebase-500">="</span>
                    <span className="text-green-600">app</span>
                    <span className="text-codebase-500">"</span>
                    <span className="text-codebase-500">{">"}</span>
                    <br />
                    {"      "}
                    <span className="text-codebase-500">{"<"}</span>
                    <span className="text-codebase-600">h1</span>
                    <span className="text-codebase-500">{">"}</span>
                    <span className="animate-pulse">Your AI-powered app is ready!</span>
                    <span className="text-codebase-500">{"</"}</span>
                    <span className="text-codebase-600">h1</span>
                    <span className="text-codebase-500">{">"}</span>
                    <br />
                    {"      "}
                    <span className="text-codebase-500">{"<"}</span>
                    <span className="text-codebase-600">p</span>
                    <span className="text-codebase-500">{">"}</span>
                    Edit this code or add new features with AI
                    <span className="text-codebase-500">{"</"}</span>
                    <span className="text-codebase-600">p</span>
                    <span className="text-codebase-500">{">"}</span>
                    <br />
                    {"    "}
                    <span className="text-codebase-500">{"</"}</span>
                    <span className="text-codebase-600">div</span>
                    <span className="text-codebase-500">{">"}</span>
                    <br />
                    {"  }"};
                    <br />
                    <br />
                    <span className="text-blue-600">export</span>{" "}
                    <span className="text-blue-600">default</span> App;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
