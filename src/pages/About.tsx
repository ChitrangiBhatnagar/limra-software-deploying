import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "AI Hunter was founded with a mission to make prospecting intelligent, not manual."
    },
    {
      year: "2021", 
      title: "AI Engine Launch",
      description: "Launched our proprietary AI engine for contact discovery and data enrichment."
    },
    {
      year: "2022",
      title: "1M+ Contacts",
      description: "Reached 1 million verified contacts in our database with 98% accuracy rate."
    },
    {
      year: "2023",
      title: "Enterprise Growth",
      description: "Expanded to serve Fortune 500 companies with custom enterprise solutions."
    },
    {
      year: "2024",
      title: "Global Expansion", 
      description: "Launched international operations and reached 1000+ active customers."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales and AI technology."
    },
    {
      name: "Mike Chen",
      title: "CTO & Co-Founder", 
      bio: "Ex-Google engineer specializing in machine learning and data processing systems."
    },
    {
      name: "Alex Rivera",
      title: "VP of Engineering",
      bio: "Lead architect of our AI engine with expertise in natural language processing."
    },
    {
      name: "Lisa Park",
      title: "VP of Sales",
      bio: "Sales leadership expert helping companies scale their revenue operations."
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "1000+",
      label: "Active Customers"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      number: "200M+",
      label: "Contact Database"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "98%",
      label: "Data Accuracy"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      number: "50+",
      label: "Countries Served"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              About AI Hunter
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making Prospecting{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Intelligent, Not Manual
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to transform how sales teams discover, enrich, and engage with prospects 
              using the power of artificial intelligence and verified data.
            </p>
            <Button size="xl" variant="hero" asChild>
              <a 
                href="https://salescentri.com/get-started/book-demo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Meet the Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every sales professional deserves access to intelligent tools that amplify their success. 
                We believe prospecting shouldn't be a manual, time-consuming process filled with guesswork.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                AI Hunter was built to give sales teams superhuman abilities - finding the right contacts, 
                enriching them with accurate data, and providing insights that turn prospects into pipeline.
              </p>
              <Button variant="cta" asChild>
                <a 
                  href="https://salescentri.com/company/about-us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More About Us
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-elegant">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              How AI Hunter evolved from an idea to a leading sales intelligence platform
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-elegant">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-gradient-primary text-white">{item.year}</Badge>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries behind AI Hunter's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a 
                href="https://salescentri.com/company/about-us/leadership-team" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Full Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <MapPin className="inline-block w-8 h-8 mr-2 text-primary" />
                Dallas, Texas
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our headquarters are located in the heart of Dallas, Texas - a thriving hub for 
                technology and innovation. We're proud to be part of the vibrant Dallas tech ecosystem.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground">Office Address</h3>
                  <p className="text-muted-foreground">123 Innovation Drive, Dallas, TX 75201</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                </div>
              </div>
              <Button variant="cta" asChild>
                <a 
                  href="https://salescentri.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Our Office
                </a>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl h-64 lg:h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map integration</p>
                <p className="text-sm text-muted-foreground">Dallas, Texas Office Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking to transform your sales process or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <a 
                href="https://salescentri.com/get-started/free-trial" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try AI Hunter
              </a>
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a 
                href="https://salescentri.com/company/careers" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;