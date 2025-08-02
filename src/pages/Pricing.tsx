import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, X, Star } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual sales professionals",
      price: { monthly: 49, annual: 39 },
      credits: "100 credits/month",
      users: "1 user",
      features: [
        "AI Contact Discovery",
        "Basic Enrichment",
        "Email Export",
        "Standard Support",
        "CRM Integration",
      ],
      limitations: [
        "Advanced Scoring",
        "Custom Integrations",
        "White-labeling",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing sales teams",
      price: { monthly: 149, annual: 119 },
      credits: "1,000 credits/month",
      users: "5 users",
      features: [
        "Everything in Starter",
        "Advanced AI Scoring",
        "Lead Segmentation", 
        "Priority Support",
        "Advanced Analytics",
        "Team Collaboration",
        "Custom Fields",
      ],
      limitations: [
        "White-labeling",
        "API Access",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: { monthly: "Custom", annual: "Custom" },
      credits: "Unlimited credits",
      users: "Unlimited users",
      features: [
        "Everything in Professional",
        "White-labeled Solution",
        "API Access",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Custom Onboarding",
        "SLA Guarantees",
        "Advanced Security",
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry",
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Additional Credits",
      description: "Extra credits for higher volume usage",
      price: "$0.25 per credit",
    },
    {
      name: "Dedicated Support",
      description: "Priority support with dedicated representative",
      price: "$500/month",
    },
    {
      name: "Custom Integration",
      description: "One-time setup for custom tool integration",
      price: "$2,500",
    },
  ];

  const faqs = [
    {
      question: "How accurate is the contact data?",
      answer: "Our AI-powered verification system ensures 98% email accuracy and 95% phone number accuracy. We update our database in real-time to maintain the highest data quality standards.",
    },
    {
      question: "Do you integrate with our CRM?",
      answer: "Yes, we integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and more. Our API also allows for custom integrations with any system.",
    },
    {
      question: "How does the AI score leads?",
      answer: "Our AI analyzes over 200 data points including company size, industry, recent activities, and buying signals to provide predictive lead scoring that helps prioritize your outreach.",
    },
    {
      question: "What data privacy standards do you meet?",
      answer: "We are fully GDPR and CCPA compliant, SOC 2 certified, and follow industry-best security practices to protect your data and respect privacy rights.",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What happens to unused credits?",
      answer: "Unused credits roll over for up to 3 months, giving you flexibility in how you use your allocation throughout the quarter.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the Perfect Plan for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Sales Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start with our free trial, then scale as you grow. No hidden fees, no surprises.
            </p>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-elegant ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">
                      {typeof plan.price.monthly === 'number' ? (
                        <>
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                          <span className="text-base font-normal text-muted-foreground">/month</span>
                        </>
                      ) : (
                        <span className="text-3xl">Custom</span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {plan.credits} • {plan.users}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow-primary' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-ons & Extras</h2>
            <p className="text-xl text-muted-foreground">
              Customize your plan with additional features and services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{addon.price}</div>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href="https://salescentri.com/contact/sales-inquiry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Trusted & Compliant</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <Badge variant="outline" className="px-4 py-2">SOC 2 Certified</Badge>
              <Badge variant="outline" className="px-4 py-2">GDPR Compliant</Badge>
              <Badge variant="outline" className="px-4 py-2">ISO 27001</Badge>
              <Badge variant="outline" className="px-4 py-2">SSL Encrypted</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your free trial today. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <a 
                href="https://salescentri.com/get-started/free-trial" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
            <Button size="xl" variant="demo" asChild>
              <a 
                href="https://salescentri.com/contact/sales-inquiry" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;