
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "Alex founded Ultimate AI with a vision to make software development accessible to everyone."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Sarah leads our engineering team with over 15 years of experience in AI and machine learning."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      image: "/placeholder.svg",
      bio: "Michael shapes our product strategy with a deep understanding of user needs and market trends."
    },
    {
      name: "Emma Wilson",
      role: "Design Lead",
      image: "/placeholder.svg",
      bio: "Emma brings our user interfaces to life with beautiful, intuitive designs."
    }
  ];

  return (
    <PageLayout title="About Us">
      <div className="space-y-16">
        {/* Mission section */}
        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At Ultimate AI, we're on a mission to democratize software development by making it accessible to everyone, regardless of technical expertise.
            </p>
            <p className="text-muted-foreground">
              We believe that the ability to create software should not be limited to those with years of coding experience. By leveraging the power of artificial intelligence, we're breaking down barriers and empowering individuals and teams to bring their ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  We envision a world where anyone can build powerful software applications without spending years learning to code, where ideas can be turned into reality in days instead of months.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation: Constantly pushing the boundaries of what's possible</li>
                  <li>• Accessibility: Making technology accessible to all</li>
                  <li>• Quality: Delivering exceptional user experiences</li>
                  <li>• Community: Supporting and empowering our users</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Team section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden bg-muted mb-4 mx-auto max-w-[200px]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Company history timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="space-y-10">
            <div className="grid grid-cols-[1fr_3px_1fr] md:grid-cols-[1fr_3px_3fr] gap-4 md:gap-6 items-start">
              <div className="text-right">
                <h3 className="font-bold text-lg">2020</h3>
                <p className="text-primary">Foundation</p>
              </div>
              <div className="bg-primary w-full h-full relative">
                <div className="absolute w-3 h-3 rounded-full bg-primary left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Ultimate AI was founded with the vision of making software development accessible to everyone through AI-powered tools.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-[1fr_3px_1fr] md:grid-cols-[1fr_3px_3fr] gap-4 md:gap-6 items-start">
              <div className="text-right">
                <h3 className="font-bold text-lg">2021</h3>
                <p className="text-primary">First Product</p>
              </div>
              <div className="bg-primary w-full h-full relative">
                <div className="absolute w-3 h-3 rounded-full bg-primary left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Launched our first AI-powered code generation tool, helping developers automate repetitive tasks.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-[1fr_3px_1fr] md:grid-cols-[1fr_3px_3fr] gap-4 md:gap-6 items-start">
              <div className="text-right">
                <h3 className="font-bold text-lg">2022</h3>
                <p className="text-primary">Expansion</p>
              </div>
              <div className="bg-primary w-full h-full relative">
                <div className="absolute w-3 h-3 rounded-full bg-primary left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Grew our team to 50+ employees and expanded our product offering to include a visual development platform.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-[1fr_3px_1fr] md:grid-cols-[1fr_3px_3fr] gap-4 md:gap-6 items-start">
              <div className="text-right">
                <h3 className="font-bold text-lg">2023</h3>
                <p className="text-primary">Series A</p>
              </div>
              <div className="bg-primary w-full h-full relative">
                <div className="absolute w-3 h-3 rounded-full bg-primary left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Secured $20M in Series A funding to accelerate product development and market expansion.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-[1fr_3px_1fr] md:grid-cols-[1fr_3px_3fr] gap-4 md:gap-6 items-start">
              <div className="text-right">
                <h3 className="font-bold text-lg">2024</h3>
                <p className="text-primary">Today</p>
              </div>
              <div className="bg-primary w-full h-full relative">
                <div className="absolute w-3 h-3 rounded-full bg-primary left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Now serving over 100,000 developers and businesses worldwide with our comprehensive platform.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
