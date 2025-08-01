import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for beginners",
    price: "$29",
    period: "/month",
    icon: Zap,
    features: [
      "Access to 3 beginner courses",
      "Basic video tutorials",
      "Community forum access",
      "Mobile app access",
      "Certificate of completion"
    ],
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    description: "For serious creators",
    price: "$79",
    period: "/month",
    icon: Star,
    features: [
      "Access to ALL courses",
      "Premium tutorials & workshops",
      "1-on-1 mentorship sessions",
      "Advanced project files",
      "Priority community support",
      "Lifetime certificate",
      "Commercial license"
    ],
    popular: true,
    buttonVariant: "hero" as const
  },
  {
    name: "Enterprise",
    description: "For teams and studios",
    price: "$199",
    period: "/month",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "Custom workflow training",
      "Dedicated account manager",
      "Advanced analytics",
      "API access",
      "Custom integrations"
    ],
    popular: false,
    buttonVariant: "outline" as const
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your video editing journey with the perfect plan for your needs
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative group transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-primary shadow-glow bg-gradient-card' 
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                      <IconComponent className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full group-hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};