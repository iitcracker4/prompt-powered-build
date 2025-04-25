
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, LineChart, PieChart, TrendingUp, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart, PieChart as RechartsChart } from "recharts";

const Analytics = () => {
  const visitData = [
    { name: "Jan", visits: 400 },
    { name: "Feb", visits: 300 },
    { name: "Mar", visits: 600 },
    { name: "Apr", visits: 800 },
    { name: "May", visits: 500 },
    { name: "Jun", visits: 900 },
  ];
  
  const userTypeData = [
    { name: "New", value: 400 },
    { name: "Returning", value: 300 },
    { name: "Inactive", value: 200 },
  ];

  return (
    <PageLayout title="Analytics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +3 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Deployments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +8.3% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">240ms</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              16% faster than last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="h-5 w-5 mr-2 text-primary" /> Traffic Overview
                </CardTitle>
                <CardDescription>Monthly visitor statistics</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <AreaChart
                  width={500}
                  height={300}
                  data={visitData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  {/* Chart components would go here */}
                </AreaChart>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-primary" /> User Breakdown
                </CardTitle>
                <CardDescription>User types and engagement</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <RechartsChart
                  width={400}
                  height={300}
                  data={userTypeData}
                >
                  {/* Chart components would go here */}
                </RechartsChart>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" /> User Analytics
              </CardTitle>
              <CardDescription>Detailed user statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">User Acquisition</h3>
                  <div className="h-64">
                    {/* Chart would go here */}
                    <p className="text-muted-foreground">User acquisition chart visualization</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">User Retention</h3>
                  <div className="h-64">
                    {/* Chart would go here */}
                    <p className="text-muted-foreground">User retention chart visualization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-primary" /> Performance Metrics
              </CardTitle>
              <CardDescription>System performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">Server Response Time</h3>
                  <div className="h-64">
                    <BarChart
                      width={500}
                      height={250}
                      data={[
                        { name: 'Page A', value: 120 },
                        { name: 'Page B', value: 80 },
                        { name: 'Page C', value: 210 },
                        { name: 'Page D', value: 90 },
                      ]}
                    >
                      {/* Chart components would go here */}
                    </BarChart>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Error Rate</h3>
                  <div className="h-64">
                    {/* Chart would go here */}
                    <p className="text-muted-foreground">Error rate visualization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Analytics;
