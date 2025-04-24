
import { Navbar } from "@/components/common/Navbar";
import { ProjectSidebar } from "@/components/workspace/ProjectSidebar";
import { CodeEditor } from "@/components/workspace/CodeEditor";
import { AISidebar } from "@/components/workspace/AISidebar";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";
import { 
  SidebarProvider, 
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";

const Workspace = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen w-full bg-background">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <WorkspaceSidebar />
          <SidebarRail />
          <div className="flex flex-1 min-w-0 overflow-hidden">
            <div className="flex items-center p-2 md:hidden">
              <SidebarTrigger />
            </div>
            <ProjectSidebar />
            <div className="flex-1 min-w-0 overflow-hidden">
              <CodeEditor />
            </div>
            <AISidebar />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Workspace;
