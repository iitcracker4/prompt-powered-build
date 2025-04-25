
import { Navbar } from "@/components/common/Navbar";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";
import { VoiceAssistant } from "@/components/ai/VoiceAssistant";
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
    <SidebarProvider defaultOpen={true}>
      <div className="flex flex-col h-screen w-full bg-background">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <WorkspaceSidebar />
          <SidebarRail />
          <div className="flex flex-1 min-w-0 overflow-hidden">
            <div className="flex flex-col w-full">
              <div className="flex items-center p-2 border-b">
                <SidebarTrigger />
                {title && <h1 className="text-xl font-semibold ml-4">{title}</h1>}
              </div>
              <div className="flex-1 min-w-0 overflow-auto p-6">
                {children}
              </div>
            </div>
          </div>
        </div>
        <VoiceAssistant />
      </div>
    </SidebarProvider>
  );
};
