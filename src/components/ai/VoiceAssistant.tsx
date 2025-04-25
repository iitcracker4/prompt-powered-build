
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, Send, X, Maximize, Minimize } from "lucide-react";
import { Card } from "@/components/ui/card";

export const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'assistant', text: string}>>([
    {type: 'assistant', text: 'Hello! How can I help you today?'}
  ]);

  // Mock voice recognition
  const toggleListening = () => {
    setIsListening(prev => !prev);
    
    if (!isListening) {
      // Simulate speech recognition
      setTimeout(() => {
        setPrompt("Can you help me with this project?");
        setIsListening(false);
      }, 2000);
    }
  };

  const handleSubmit = () => {
    if (prompt.trim()) {
      // Add user message
      setMessages(prev => [...prev, {type: 'user', text: prompt}]);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          {type: 'assistant', text: "I'll help you with your project! What specific part are you working on?"}
        ]);
      }, 1000);
      
      setPrompt("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleAssistant = () => {
    setIsOpen(prev => !prev);
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  return (
    <>
      {/* Floating button when closed */}
      {!isOpen && (
        <Button 
          onClick={toggleAssistant}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary shadow-lg"
        >
          AI
        </Button>
      )}

      {/* AI Assistant panel */}
      {isOpen && (
        <Card className={`fixed right-6 shadow-lg transition-all duration-300 ${
          isMinimized 
            ? "bottom-6 w-64 h-14 flex items-center px-4" 
            : "bottom-6 w-80 h-96"
        }`}>
          {isMinimized ? (
            <div className="flex justify-between items-center w-full">
              <span className="font-medium">AI Assistant</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" onClick={() => setIsMinimized(false)}>
                  <Maximize className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex justify-between items-center p-3 border-b">
                <h3 className="font-medium">AI Assistant</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => setIsMinimized(true)}>
                    <Minimize className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat area */}
              <div className="flex flex-col h-[calc(100%-108px)] overflow-auto p-3">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-2 max-w-[85%] p-2 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground self-end' 
                        : 'bg-muted self-start'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              {/* Input area */}
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Ask AI Assistant..." 
                    className="resize-none"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant={isListening ? "destructive" : "outline"} 
                      size="icon" 
                      onClick={toggleListening}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                    <Button variant="default" size="icon" onClick={handleSubmit}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
};
