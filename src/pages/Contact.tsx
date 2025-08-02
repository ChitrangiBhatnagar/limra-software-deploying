import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Sales Inquiry",
      description: "Speak with our sales team about AI Hunter",
      action: "Call Sales",
      link: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Live Chat",
      description: "Get instant support from our team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Support Request",
      description: "Submit a ticket for technical support",
      action: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Headquarters",
      details: ["123 Innovation Drive", "Dallas, TX 75201", "United States"]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM", "Central Time (CST)"]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Support",
      details: ["+1 (555) 123-4567", "Sales: Extension 1", "Support: Extension 2"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sales Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your prospecting process? Our team is here to help you get started 
              with AI Hunter and answer any questions you might have.
            </p>
            <Button size="xl" variant="hero" asChild>
              <a 
                href="https://salescentri.com/get-started/book-demo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule a Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get the help and information you need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-base">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-primary" asChild>
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please use our live chat or phone support.
              </p>
              
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle>Quick Contact Form</CardTitle>
                  <CardDescription>
                    This form will redirect you to our main contact system for secure processing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input placeholder="Your company name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your needs and how we can help..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-primary" asChild>
                    <a 
                      href="https://salescentri.com/get-started/contact" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Send Message
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Office Information</h3>
              {officeInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
              
              {/* Calendly Integration */}
              <Card className="border-0 shadow-elegant bg-gradient-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Schedule a Meeting</span>
                  </CardTitle>
                  <CardDescription>
                    Book a time that works for you directly on our calendar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://salescentri.com/get-started/calendly" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book Calendar Appointment
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Dallas Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Dallas's innovation district
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant overflow-hidden">
              <div className="bg-muted h-64 lg:h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI Hunter Headquarters</h3>
                  <p className="text-muted-foreground">123 Innovation Drive, Dallas, TX 75201</p>
                  <Button className="mt-4 bg-gradient-primary" asChild>
                    <a 
                      href="https://maps.google.com/?q=Dallas,TX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Inquiries */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              Interested in partnering with AI Hunter? We'd love to explore opportunities together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Technology Partners</CardTitle>
                <CardDescription>
                  Integration partnerships and technology alliances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join our partner ecosystem and help customers get more value from AI Hunter 
                  through seamless integrations.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/contact/partnerships/integration-requests" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Explore Tech Partnership
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Channel Partners</CardTitle>
                <CardDescription>
                  Reseller and referral partnership programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Earn revenue by recommending AI Hunter to your clients and network. 
                  Competitive commissions and full support included.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/contact/partnerships/partner-inquiry" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Partner Program
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - transform your sales process today with AI Hunter's intelligent prospecting platform.
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

export default Contact;