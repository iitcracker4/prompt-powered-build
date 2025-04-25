
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Users, Code, Rocket } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Projects", value: "12", icon: LayoutDashboard, color: "bg-blue-500" },
    { title: "Active Users", value: "843", icon: Users, color: "bg-green-500" },
    { title: "Lines of Code", value: "28,492", icon: Code, color: "bg-purple-500" },
    { title: "Deployments", value: "8", icon: Rocket, color: "bg-orange-500" },
  ];

  return (
    <PageLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full ${stat.color} text-white`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest project updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">Project {item} updated</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started fast</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border rounded-lg hover:bg-accent flex flex-col items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                <span className="text-sm">New Project</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-accent flex flex-col items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm">Documentation</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-accent flex flex-col items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Analytics</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-accent flex flex-col items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <span className="text-sm">Settings</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
