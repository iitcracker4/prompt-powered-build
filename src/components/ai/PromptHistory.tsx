
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { History, RotateCcw } from "lucide-react";

interface PromptHistoryEntry {
  prompt: string;
  response: string;
  timestamp: Date;
}

interface PromptHistoryProps {
  history: PromptHistoryEntry[];
  onRollback: (entry: PromptHistoryEntry) => void;
}

export const PromptHistory = ({ history, onRollback }: PromptHistoryProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b flex items-center gap-2">
        <History className="w-4 h-4" />
        <h3 className="font-medium">Prompt History</h3>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-4">
          {history.map((entry, index) => (
            <div key={index} className="space-y-2 p-3 rounded-lg border bg-muted/50">
              <div className="flex justify-between items-start gap-2">
                <p className="text-sm font-medium">{entry.prompt}</p>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => onRollback(entry)}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {entry.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
