import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Target, Shield, BarChart3, Users } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Instant Contact Discovery",
      description: "Find verified contact information in seconds with our AI-powered search engine.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Auto-Enrichment",
      description: "Automatically enrich your leads with comprehensive professional data.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "GDPR Compliant",
      description: "100% compliant with data privacy regulations and industry standards.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Lead Scoring",
      description: "AI-powered lead scoring to prioritize your most valuable prospects.",
    },
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Apollo", "Outreach", "LinkedIn Sales Navigator"
  ];

  const testimonials = [
    {
      quote: "AI Hunter helped us increase our lead conversion rate by 250% in just 30 days.",
      author: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
    },
    {
      quote: "The data accuracy is incredible. We've never had such reliable contact information.",
      author: "Mike Chen",
      title: "Sales Director, GrowthCo",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                AI-Powered Sales Intelligence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find and Enrich Leads{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Instantly with AI Hunter
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Discover verified contacts, auto-enrich them, and supercharge your sales outreach. 
                Turn prospects into pipeline with our AI-powered intelligence platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="xl" variant="hero" asChild>
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
                    href="https://salescentri.com/get-started/book-demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-3xl opacity-30"></div>
              <img 
                src={heroImage} 
                alt="AI Hunter Dashboard Interface" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Sales Teams Choose AI Hunter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your prospecting workflow with intelligent automation and verified data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Calculate Your ROI with AI Hunter
            </h2>
            <Card className="p-8 bg-gradient-secondary border-0">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">250%</div>
                  <div className="text-muted-foreground">Average Lead Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15hrs</div>
                  <div className="text-muted-foreground">Weekly Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Data Accuracy Rate</div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="cta" asChild>
                  <a 
                    href="https://salescentri.com/pricing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    See Detailed ROI Calculator
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by 1000+ Sales Teams
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-elegant">
                <CardContent className="pt-0">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-2">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with your existing sales stack in minutes
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-base border-primary/20">
                {integration}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a 
                href="https://salescentri.com/solutions/psa-suite/integrations" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of sales professionals who've supercharged their prospecting with AI Hunter.
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
                href="https://salescentri.com/get-started/book-demo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;