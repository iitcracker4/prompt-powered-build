
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Navigation, 
  LayoutDashboard, 
  FolderOpen, 
  Package, 
  Activity,
  Book,
  FileText,
  HelpCircle
} from 'lucide-react';
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
} from "@/components/ui/sidebar";

interface MenuItem {
  label: string;
  icon: React.ComponentType;
  to: string;
}

const menuItems: MenuItem[] = [
  { label: "New Project", icon: Plus, to: "/prompt" },
  { label: "Navigation", icon: Navigation, to: "/navigation" },
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "My Projects", icon: FolderOpen, to: "/projects" },
  { label: "Deployments", icon: Package, to: "/deployments" },
  { label: "Analytics", icon: Activity, to: "/analytics" },
  { label: "Resources", icon: Book, to: "/resources" },
  { label: "Documentation", icon: FileText, to: "/docs" },
  { label: "Help Center", icon: HelpCircle, to: "/help" },
];

export const WorkspaceSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4">
          <h2 className="text-xl font-bold text-primary">Technocrat's</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <Link to={item.to} className="w-full">
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
