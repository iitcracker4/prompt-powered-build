
import { Link } from 'react-router-dom';
import { 
  Plus, 
  LayoutDashboard, 
  FolderOpen,
  Rocket,
  BarChart2,
  FileText,
  HelpCircle,
  Settings,
  Menu,
  Code,
  Eye,
  Layers,
  DollarSign,
  Info,
  Book,
  Briefcase,
  User,
  Binary,
  Activity,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';

interface MenuItem {
  label: string;
  icon: LucideIcon;
  to: string;
}

const mainMenuItems: MenuItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "My Projects", icon: FolderOpen, to: "/projects" },
  { label: "Deployments", icon: Rocket, to: "/deployments" },
  { label: "Analytics", icon: BarChart2, to: "/analytics" },
  { label: "Development", icon: Code, to: "/development" },
];

const resourceItems: MenuItem[] = [
  { label: "Documentation", icon: FileText, to: "/docs" },
  { label: "Features", icon: Layers, to: "/features" },
  { label: "See How It Works", icon: Eye, to: "/how-it-works" },
  { label: "Help Center", icon: HelpCircle, to: "/help" },
];

const infoItems: MenuItem[] = [
  { label: "Pricing", icon: DollarSign, to: "/pricing" },
  { label: "About Us", icon: Info, to: "/about" },
  { label: "Blog", icon: Book, to: "/blog" },
  { label: "Careers", icon: Briefcase, to: "/careers" },
  { label: "Contact", icon: User, to: "/contact" },
];

const futureItems: MenuItem[] = [
  { label: "Machine Learning", icon: Binary, to: "/machine-learning" },
  { label: "AI Agents", icon: Activity, to: "/ai-agents" },
];

export const WorkspaceSidebar = () => {
  const { toggleSidebar } = useSidebar();
  
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Ultimate AI</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <Link to="/prompt">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Link>
          </Button>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <Link to={item.to}>
                      <div className="flex items-center gap-2 w-full">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <Link to={item.to}>
                      <div className="flex items-center gap-2 w-full">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Information</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {infoItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <Link to={item.to}>
                      <div className="flex items-center gap-2 w-full">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Future Scope</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {futureItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <Link to={item.to}>
                      <div className="flex items-center gap-2 w-full">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings" asChild>
              <Link to="/settings">
                <div className="flex items-center gap-2 w-full">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
