
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Code, Users, Presentation, Megaphone, LineChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our React-based frontend applications with a focus on performance and accessibility."
    },
    {
      title: "Machine Learning Engineer",
      department: "AI",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Develop and improve our AI-powered code generation models and features."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead product development initiatives and work with engineering to deliver exceptional user experiences."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and beautiful user interfaces for our web applications."
    },
    {
      title: "Technical Writer",
      department: "Documentation",
      location: "Remote",
      type: "Contract",
      description: "Create clear, concise, and comprehensive documentation for our platform and APIs."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines."
    }
  ];

  const departments = [
    { name: "Engineering", icon: Code, count: 8 },
    { name: "Design", icon: Presentation, count: 3 },
    { name: "Product", icon: Users, count: 2 },
    { name: "Marketing", icon: Megaphone, count: 2 },
    { name: "Sales", icon: LineChart, count: 3 }
  ];
  
  const benefits = [
    "Competitive salary and equity",
    "Remote-first culture",
    "Flexible work hours",
    "Health, dental, and vision insurance",
    "Unlimited PTO",
    "Home office stipend",
    "Professional development budget",
    "Team retreats twice a year"
  ];

  return (
    <PageLayout title="Careers">
      <div className="space-y-12">
        {/* Hero section */}
        <section className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're on a mission to democratize software development with AI. Join us in building the future of development tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              View Open Positions
            </Button>
            <Button variant="outline">
              Our Culture
            </Button>
          </div>
        </section>
        
        {/* Departments */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {departments.map((department) => (
              <Card key={department.name} className="bg-muted border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <department.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">{department.name}</h3>
                  <p className="text-sm text-muted-foreground">{department.count} openings</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Job Openings */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Open Positions</h2>
            <div className="relative w-full md:w-64 mt-4 md:mt-0">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search positions..." className="pl-10" />
            </div>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <Card key={job.title}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>
                            {job.department} • {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="engineering">
              <div className="space-y-4">
                {jobOpenings
                  .filter(job => job.department === "Engineering")
                  .map((job) => (
                    <Card key={job.title}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.department} • {job.location} • {job.type}
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="product">
              <div className="space-y-4">
                {jobOpenings
                  .filter(job => job.department === "Product")
                  .map((job) => (
                    <Card key={job.title}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.department} • {job.location} • {job.type}
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design">
              <div className="space-y-4">
                {jobOpenings
                  .filter(job => job.department === "Design")
                  .map((job) => (
                    <Card key={job.title}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.department} • {job.location} • {job.type}
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other">
              <div className="space-y-4">
                {jobOpenings
                  .filter(job => !["Engineering", "Product", "Design"].includes(job.department))
                  .map((job) => (
                    <Card key={job.title}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.department} • {job.location} • {job.type}
                            </CardDescription>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Benefits */}
        <section>
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Benefits & Perks</CardTitle>
              <CardDescription>We take care of our team with competitive benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="bg-background p-4 rounded-lg shadow-sm">
                    <p className="font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* CTA */}
        <section className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Don't See a Role That Fits?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <Button>Submit Your Resume</Button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Careers;
