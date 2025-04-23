
import { Folder, File, Code, Database, Settings } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useProjects } from "@/store/store";

export const ProjectSidebar = () => {
  const { currentProject } = useProjects();

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

  return (
    <div className="w-64 border-r flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <h2 className="font-semibold truncate">{currentProject?.name || "Project"}</h2>
        <p className="text-xs text-muted-foreground mt-1 truncate">
          {currentProject?.description || "No description"}
        </p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          <div className="mb-4">
            <div className="flex items-center px-2 py-1.5 text-sm font-medium">
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>pages</span>
            </div>
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
          </div>
          
          <div className="mb-4">
            <div className="flex items-center px-2 py-1.5 text-sm font-medium">
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>components</span>
            </div>
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
          </div>
          
          <div className="mb-4">
            <div className="flex items-center px-2 py-1.5 text-sm font-medium">
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>api</span>
            </div>
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
          </div>
          
          <div className="mb-4">
            <div className="flex items-center px-2 py-1.5 text-sm font-medium">
              <Folder size={16} className="mr-2 text-codebase-600" />
              <span>models</span>
            </div>
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
          </div>
          
          <div>
            <div className="flex items-center px-2 py-1.5 text-sm font-medium">
              <Settings size={16} className="mr-2 text-codebase-600" />
              <span>config</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
