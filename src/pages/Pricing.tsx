
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: { monthly: "0", yearly: "0" },
      description: "For individuals getting started with basic needs",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1 GB storage",
        "Standard deployments"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: "19", yearly: "190" },
      description: "For professionals who need more power and flexibility",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority email support",
        "10 GB storage",
        "Fast deployments",
        "Custom domains",
        "API access"
      ],
      cta: "Subscribe",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: "49", yearly: "490" },
      description: "For teams and businesses with advanced needs",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "24/7 phone support",
        "Advanced security",
        "Custom integrations",
        "Team collaboration",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <PageLayout title="Pricing">
      <div className="space-y-10">
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include core features.
          </p>
        </section>
        
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price.monthly}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="yearly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price.yearly}</span>
                      <span className="text-muted-foreground">/year</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Need a custom plan?</CardTitle>
              <CardDescription>
                We offer tailored solutions for larger teams and specialized requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Contact our sales team to discuss your specific needs and get a custom quote.
              </p>
              <Button>Contact Sales</Button>
            </CardContent>
          </Card>
        </section>
        
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be effective immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee on all paid plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer educational discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we offer special discounts for educational institutions. Contact our sales team for details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Pricing;
