
import { Navbar } from "@/components/common/Navbar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useProjects } from "@/store/store";
import { useEffect, useState } from "react";

const Projects = () => {
  const { projects } = useProjects();
  const [mockProjects, setMockProjects] = useState<any[]>([]);
  
  // Create mock projects if no real projects exist
  useEffect(() => {
    if (projects.length === 0) {
      setMockProjects([
        {
          id: "1",
          name: "E-commerce Website",
          description: "An online store with product listings, cart, and checkout flow.",
          status: "deployed",
          updatedAt: new Date(2023, 3, 15),
        },
        {
          id: "2",
          name: "Task Management App",
          description: "Kanban-style task management with drag and drop interface.",
          status: "ready",
          updatedAt: new Date(2023, 3, 10),
        },
        {
          id: "3",
          name: "Social Media Dashboard",
          description: "Analytics dashboard for social media account management.",
          status: "draft",
          updatedAt: new Date(2023, 3, 5),
        },
      ]);
    }
  }, [projects]);
  
  const displayProjects = projects.length > 0 ? projects : mockProjects;
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">My Projects</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8"
              />
            </div>
            <Button asChild className="bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600 gap-1">
              <Link to="/prompt">
                <Plus size={16} /> New Project
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              status={project.status}
              updatedAt={project.updatedAt}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
