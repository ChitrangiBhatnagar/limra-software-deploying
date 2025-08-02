import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search, Shield, Zap, CreditCard, Users } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="w-5 h-5" />,
      faqs: [
        {
          question: "How do I get started with AI Hunter?",
          answer: "Getting started is easy! Sign up for our free trial, which gives you 50 credits to test our platform. No credit card required. Once you're ready, you can upgrade to a paid plan that fits your team's needs."
        },
        {
          question: "What is a credit and how are they used?",
          answer: "Credits are used for contact discovery and enrichment actions. One credit = one contact lookup or enrichment. For example, finding an email address uses 1 credit, and enriching that contact with additional data uses another credit."
        },
        {
          question: "How long does the free trial last?",
          answer: "Our free trial gives you 50 credits to use within 14 days. This is usually enough to thoroughly test our platform and see the value for your sales process."
        }
      ]
    },
    {
      title: "Data & Accuracy",
      icon: <Search className="w-5 h-5" />,
      faqs: [
        {
          question: "How accurate is the contact data?",
          answer: "Our AI-powered verification system ensures 98% email accuracy and 95% phone number accuracy. We update our database in real-time and verify all contact information before providing it to you."
        },
        {
          question: "How often is the database updated?",
          answer: "Our database is updated continuously with real-time verification. We process millions of data points daily to ensure you always have the most current and accurate contact information."
        },
        {
          question: "What sources do you use for contact data?",
          answer: "We aggregate data from over 100 public and proprietary sources, including professional networks, company websites, public records, and social media platforms, all while maintaining strict compliance standards."
        }
      ]
    },
    {
      title: "Integrations & CRM",
      icon: <Users className="w-5 h-5" />,
      faqs: [
        {
          question: "Do you integrate with our CRM?",
          answer: "Yes! We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, Apollo, and many others. Our API also allows for custom integrations with any system your team uses."
        },
        {
          question: "How does the CRM sync work?",
          answer: "Our integration provides real-time, bi-directional sync. Contacts discovered in AI Hunter automatically sync to your CRM with all enriched data. You can also trigger searches directly from your CRM interface."
        },
        {
          question: "Can I export data to other tools?",
          answer: "Absolutely! You can export contact lists in CSV, Excel, or JSON formats. We also provide API access for direct integration with your existing sales tools and workflows."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: <Shield className="w-5 h-5" />,
      faqs: [
        {
          question: "What data privacy standards do you meet?",
          answer: "We are fully GDPR and CCPA compliant, SOC 2 certified, and follow industry-best security practices. All data is encrypted in transit and at rest, and we provide comprehensive opt-out management."
        },
        {
          question: "How do you handle opt-outs and privacy requests?",
          answer: "We maintain a comprehensive suppression list and honor all opt-out requests immediately. Contacts can be removed from our database upon request, and we provide tools to manage your own suppression lists."
        },
        {
          question: "Is my search history private?",
          answer: "Yes, your search history and contact lists are completely private to your account. We don't share or sell any customer data, and your searches are not visible to other users."
        }
      ]
    },
    {
      title: "Billing & Plans",
      icon: <CreditCard className="w-5 h-5" />,
      faqs: [
        {
          question: "Can I change plans anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. Unused credits roll over for up to 3 months."
        },
        {
          question: "What happens to unused credits?",
          answer: "Unused credits roll over for up to 3 months, giving you flexibility in how you use your allocation. After 3 months, unused credits expire to ensure data freshness."
        },
        {
          question: "Do you offer custom enterprise plans?",
          answer: "Yes! Our Enterprise plan includes unlimited credits, white-labeling, custom integrations, dedicated support, and SLA guarantees. Contact our sales team for custom pricing."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise accounts. Annual plans can be paid by invoice with NET-30 terms."
        }
      ]
    },
    {
      title: "Support & Training",
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: [
        {
          question: "What support options are available?",
          answer: "We offer email support for all plans, live chat for Professional plans, and dedicated phone support for Enterprise customers. Our team typically responds within 2 hours during business hours."
        },
        {
          question: "Do you provide training for new users?",
          answer: "Yes! We offer onboarding sessions for all new customers, video training library, and custom training for Enterprise teams. Our goal is to get you up and running quickly."
        },
        {
          question: "How can I maximize my ROI with AI Hunter?",
          answer: "Focus on high-quality searches, use our lead scoring features, integrate with your existing workflow, and leverage our automation capabilities. Our customer success team can provide personalized optimization recommendations."
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Start Free Trial",
      description: "Test AI Hunter with 50 free credits",
      action: "Try Now",
      link: "https://salescentri.com/get-started/free-trial",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Book a Demo",
      description: "See AI Hunter in action with our team",
      action: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Contact Support",
      description: "Get help from our expert team",
      action: "Get Help",
      link: "https://salescentri.com/contact/support-request",
      icon: <HelpCircle className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Answers to Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Hunter Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find quick answers to common questions about AI Hunter's features, pricing, 
              integrations, and more. Can't find what you're looking for? Contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild>
                <a 
                  href="https://salescentri.com/contact/support-request/live-chat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Chat Support
                </a>
              </Button>
              <Button size="xl" variant="demo" asChild>
                <a 
                  href="https://salescentri.com/docs/user-guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-primary" asChild>
                    <a href={action.link} target="_blank" rel="noopener noreferrer">
                      {action.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-b border-border last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help! Get in touch and we'll answer any questions 
              about AI Hunter's features, pricing, or how it can help your sales team.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button size="lg" variant="cta" asChild>
                <a 
                  href="https://salescentri.com/contact/support-request" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contact Support
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our knowledge base for detailed guides and tutorials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-primary" />
                  <span>User Guide</span>
                </CardTitle>
                <CardDescription>
                  Complete documentation for using AI Hunter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/docs/user-guide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>API Reference</span>
                </CardTitle>
                <CardDescription>
                  Technical documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/docs/api-reference" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View API Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <span>Video Tutorials</span>
                </CardTitle>
                <CardDescription>
                  Step-by-step video guides and webinars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/resources/tutorials-webinars" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Watch Videos
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Try AI Hunter?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your free trial today and see how AI Hunter can transform your sales prospecting process.
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

export default FAQ;