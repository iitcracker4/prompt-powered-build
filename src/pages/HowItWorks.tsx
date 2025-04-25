
import { PageLayout } from "@/components/layout/PageLayout";
import { Eye, Code, Rocket, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Describe Your Project",
      description: "Start by describing what you want to build using natural language. Our AI understands your requirements and helps translate them into code."
    },
    {
      icon: Code,
      title: "Generate Code",
      description: "Ultimate AI generates high-quality code based on your description. You can preview the results in real-time and make adjustments as needed."
    },
    {
      icon: Eye,
      title: "Preview & Edit",
      description: "Preview your application instantly and make edits through our intuitive interface or by directly editing the code."
    },
    {
      icon: Rocket,
      title: "Deploy Instantly",
      description: "Deploy your application with a single click to our global infrastructure. Share your creation with the world in seconds."
    }
  ];

  return (
    <PageLayout title="How It Works">
      <div className="space-y-12">
        {/* Hero section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Turn Ideas into Reality with Ultimate AI</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our platform simplifies the development process, allowing you to build powerful applications without getting caught in complex details.
          </p>
          <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Video demonstration placeholder</p>
          </div>
        </section>
        
        {/* Steps section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">The Process</h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[39px] top-10 w-0.5 h-[calc(100%-80px)] bg-border z-0 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="md:grid md:grid-cols-[80px_1fr] flex flex-col items-center md:items-start text-center md:text-left gap-4">
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
                    <p className="text-muted-foreground max-w-3xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="bg-muted rounded-lg p-8">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl italic mb-4">
              "Ultimate AI transformed our development process. What used to take weeks now takes days, and the quality is outstanding."
            </p>
            <footer className="font-medium">
              — Jane Smith, CTO at TechCorp
            </footer>
          </blockquote>
        </section>
        
        {/* FAQ section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Do I need coding experience?</h3>
              <p className="text-muted-foreground">
                No, our platform is designed for users of all skill levels. You can create apps without any coding knowledge, but developers can also dive into the code for customizations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How long does it take to build an app?</h3>
              <p className="text-muted-foreground">
                Simple applications can be built in minutes, while more complex projects might take a few hours or days, depending on requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I export my code?</h3>
              <p className="text-muted-foreground">
                Yes, you can export your code and deploy it anywhere, or continue development in your preferred environment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What kind of projects can I build?</h3>
              <p className="text-muted-foreground">
                You can build web applications, dashboards, e-commerce sites, blogs, and much more. Our platform supports a wide range of project types.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
