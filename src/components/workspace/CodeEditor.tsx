
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const mockCode = `// Welcome to Ultimate AI Code Editor
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Your AI-powered app is ready!</h1>
      <p>Edit this code or add new features with AI</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;`;

export const CodeEditor = () => {
  const [code, setCode] = useState(mockCode);
  
  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="editor" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="h-12">
            <TabsTrigger value="editor">Code Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="editor" className="flex-1 p-0 m-0">
          <ScrollArea className="h-full">
            <div className="h-full">
              <div className="bg-muted/40 p-2 text-xs border-b flex items-center">
                <span className="font-medium">App.jsx</span>
              </div>
              <div className="p-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  customStyle={{
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    margin: 0,
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="preview" className="flex-1 p-0 m-0 h-full">
          <div className="h-full border-0 flex items-center justify-center bg-[#f9fafb] dark:bg-[#1f2937] p-4">
            <div className="app bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Your AI-powered app is ready!</h1>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Edit this code or add new features with AI</p>
              <div className="card">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  count is 0
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
