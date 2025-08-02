import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Database, 
  BarChart3, 
  RefreshCw, 
  Shield, 
  Zap,
  Target,
  Users,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      id: "discovery",
      title: "AI Contact Discovery",
      icon: <Search className="w-8 h-8 text-primary" />,
      description: "Find verified contact information instantly using advanced AI algorithms",
      benefits: [
        "Search across 200+ million professional profiles",
        "Real-time email verification",
        "Advanced search filters and Boolean logic",
        "Direct dial phone numbers",
        "Social media profiles and company data"
      ]
    },
    {
      id: "enrichment",
      title: "Enrichment Engine",
      icon: <Database className="w-8 h-8 text-primary" />,
      description: "Automatically enrich your leads with comprehensive professional data",
      benefits: [
        "Company information and technographics",
        "Job history and career progression",
        "Contact preferences and best times to reach",
        "Revenue and employee count data",
        "Industry classification and keywords"
      ]
    },
    {
      id: "scoring",
      title: "Lead Scoring & Segmentation",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      description: "AI-powered lead scoring to prioritize your most valuable prospects",
      benefits: [
        "Predictive lead scoring algorithms",
        "Custom scoring criteria",
        "Automated list segmentation",
        "Buying intent signals",
        "Engagement probability ratings"
      ]
    },
    {
      id: "sync",
      title: "Auto-Sync with CRM",
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      description: "Seamlessly integrate with your existing sales tools and workflows",
      benefits: [
        "Real-time CRM synchronization",
        "Bi-directional data flow",
        "Custom field mapping",
        "Automated workflow triggers",
        "API access for custom integrations"
      ]
    },
    {
      id: "compliance",
      title: "GDPR-Compliant Export",
      icon: <Shield className="w-8 h-8 text-primary" />,
      description: "Export data safely with full compliance to privacy regulations",
      benefits: [
        "GDPR and CCPA compliant processes",
        "Opt-out management",
        "Data retention controls",
        "Audit trails and logging",
        "Privacy-first data handling"
      ]
    }
  ];

  const comparisonData = [
    {
      feature: "Contact Database Size",
      aiHunter: "200M+ Profiles",
      competitor1: "150M Profiles",
      competitor2: "100M Profiles"
    },
    {
      feature: "Email Accuracy",
      aiHunter: "98%",
      competitor1: "85%",
      competitor2: "80%"
    },
    {
      feature: "AI-Powered Scoring",
      aiHunter: "✓",
      competitor1: "✗",
      competitor2: "✗"
    },
    {
      feature: "Real-time Enrichment",
      aiHunter: "✓",
      competitor1: "✗",
      competitor2: "Limited"
    },
    {
      feature: "GDPR Compliance",
      aiHunter: "✓",
      competitor1: "✓",
      competitor2: "✗"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Powerful Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Supercharge Sales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the comprehensive suite of AI-powered tools designed to transform 
              your prospecting and lead generation workflow.
            </p>
            <Button size="xl" variant="hero" asChild>
              <a 
                href="https://salescentri.com/solutions/use-case-navigator/demo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try Interactive Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="discovery" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Features</h2>
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-5 h-auto p-1">
                {features.map((feature) => (
                  <TabsTrigger 
                    key={feature.id} 
                    value={feature.id}
                    className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white flex flex-col p-4 h-auto"
                  >
                    <div className="mb-2">{feature.icon}</div>
                    <span className="text-xs font-medium">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      {feature.description}
                    </p>
                    <div className="space-y-4">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button variant="cta" asChild>
                        <a 
                          href="https://salescentri.com/get-started/free-trial" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Try This Feature
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <Card className="p-8 bg-gradient-secondary border-0 shadow-elegant">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-4">See It In Action</h4>
                        <p className="text-muted-foreground mb-6">
                          Experience how {feature.title.toLowerCase()} works in our interactive demo.
                        </p>
                        <Button variant="demo" asChild>
                          <a 
                            href="https://salescentri.com/solutions/use-case-navigator/demo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Interactive Demo
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How AI Hunter Compares
            </h2>
            <p className="text-xl text-muted-foreground">
              See why leading sales teams choose AI Hunter over the competition
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-secondary">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">AI Hunter</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor A</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="text-center p-4 text-primary font-semibold">{row.aiHunter}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.competitor1}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.competitor2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your free trial today and see how AI Hunter can transform your sales process.
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
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
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
      </section>
    </div>
  );
};

export default Features;