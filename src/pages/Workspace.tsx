
import { Navbar } from "@/components/common/Navbar";
import { ProjectSidebar } from "@/components/workspace/ProjectSidebar";
import { CodeEditor } from "@/components/workspace/CodeEditor";
import { AISidebar } from "@/components/workspace/AISidebar";

const Workspace = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <ProjectSidebar />
        <div className="flex-1 overflow-hidden">
          <CodeEditor />
        </div>
        <AISidebar />
      </div>
    </div>
  );
};

export default Workspace;
