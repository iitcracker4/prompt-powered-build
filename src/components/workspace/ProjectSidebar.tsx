import { useState } from "react";
import { Folder, File, Code, Database, Settings, ChevronDown, ChevronRight, Pencil, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/store/store";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const ProjectSidebar = () => {
  const { currentProject } = useProjects();
  const [isEditingName, setIsEditingName] = useState(false);
  const [projectName, setProjectName] = useState(currentProject?.name || "Project");
  
  // State for each folder's expanded status
  const [expandedFolders, setExpandedFolders] = useState({
    pages: true,
    components: true,
    api: true,
    models: true,
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  // Mock project structure
  const projectStructure = {
    pages: [
      { name: "Home.jsx", type: "file" },
      { name: "About.jsx", type: "file" },
      { name: "Login.jsx", type: "file" },
    ],
    components: [
      { name: "Navbar.jsx", type: "file" },
      { name: "Footer.jsx", type: "file" },
      { name: "Button.jsx", type: "file" },
    ],
    api: [
      { name: "users.js", type: "file" },
      { name: "auth.js", type: "file" },
    ],
    models: [
      { name: "User.js", type: "file" },
      { name: "Product.js", type: "file" },
    ],
  };

  const handleRename = () => {
    // Here you would implement the actual rename logic
    setIsEditingName(false);
  };

  return (
    <div className="w-64 border-r flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {isEditingName ? (
            <div className="flex gap-2 items-center flex-1">
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="h-7"
                autoFocus
              />
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={handleRename}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <h2 className="font-semibold truncate">{projectName}</h2>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={() => setIsEditingName(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 truncate">
          {currentProject?.description || "No description"}
        </p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          <Collapsible open={expandedFolders.pages} onOpenChange={() => toggleFolder('pages')}>
            <CollapsibleTrigger className="flex items-center w-full px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md">
              {expandedFolders.pages ? <ChevronDown size={16} className="mr-2 text-muted-foreground" /> : <ChevronRight size={16} className="mr-2 text-muted-foreground" />}
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>pages</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-5">
                {projectStructure.pages.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center px-2 py-1.5 text-sm hover:bg-muted rounded-md cursor-pointer"
                  >
                    <File size={14} className="mr-2 text-muted-foreground" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={expandedFolders.components} onOpenChange={() => toggleFolder('components')}>
            <CollapsibleTrigger className="flex items-center w-full px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md">
              {expandedFolders.components ? <ChevronDown size={16} className="mr-2 text-muted-foreground" /> : <ChevronRight size={16} className="mr-2 text-muted-foreground" />}
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>components</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-5">
                {projectStructure.components.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center px-2 py-1.5 text-sm hover:bg-muted rounded-md cursor-pointer"
                  >
                    <File size={14} className="mr-2 text-muted-foreground" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={expandedFolders.api} onOpenChange={() => toggleFolder('api')}>
            <CollapsibleTrigger className="flex items-center w-full px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md">
              {expandedFolders.api ? <ChevronDown size={16} className="mr-2 text-muted-foreground" /> : <ChevronRight size={16} className="mr-2 text-muted-foreground" />}
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>api</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-5">
                {projectStructure.api.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center px-2 py-1.5 text-sm hover:bg-muted rounded-md cursor-pointer"
                  >
                    <Code size={14} className="mr-2 text-muted-foreground" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={expandedFolders.models} onOpenChange={() => toggleFolder('models')}>
            <CollapsibleTrigger className="flex items-center w-full px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md">
              {expandedFolders.models ? <ChevronDown size={16} className="mr-2 text-muted-foreground" /> : <ChevronRight size={16} className="mr-2 text-muted-foreground" />}
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>models</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-5">
                {projectStructure.models.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center px-2 py-1.5 text-sm hover:bg-muted rounded-md cursor-pointer"
                  >
                    <Database size={14} className="mr-2 text-muted-foreground" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex items-center px-2 py-1.5 text-sm font-medium">
            <Settings size={16} className="mr-2 text-codebase-600" />
            <span>config</span>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
