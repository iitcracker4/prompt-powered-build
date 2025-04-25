
import { Navbar } from "@/components/common/Navbar";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";
import { 
  SidebarProvider, 
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
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
            <div className="flex-1 min-w-0 overflow-auto p-6">
              {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
              {children}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
