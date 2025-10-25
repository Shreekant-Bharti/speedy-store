import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap, Search, Smartphone, ShoppingBag } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Shopify Liquid", level: "Expert" },
    { name: "HTML5 & CSS3", level: "Expert" },
    { name: "JavaScript/jQuery", level: "Advanced" },
    { name: "Shopify APIs", level: "Advanced" },
    { name: "Theme Development", level: "Expert" },
    { name: "App Integration", level: "Advanced" },
  ];

  const services = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Build custom Shopify stores from scratch with tailored functionality"
    },
    {
      icon: Palette,
      title: "Theme Customization",
      description: "Customize and optimize existing Shopify themes using Liquid, HTML, CSS, and JavaScript"
    },
    {
      icon: ShoppingBag,
      title: "App Integration",
      description: "Seamlessly integrate and configure Shopify apps to enhance store functionality"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize website speed, performance, and mobile responsiveness"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Create mobile-first, cross-browser compatible shopping experiences"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Implement SEO best practices and improve page speed for better rankings"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge className="mx-auto bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            Available for Projects
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Shopify Developer
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Building E-commerce Excellence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in custom Shopify stores, theme development, and performance optimization. 
            Transforming ideas into powerful online retail experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {skill.level}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Full-stack Shopify development services to help your business thrive online
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Core Competencies
          </h2>
          
          <Card className="p-8 bg-card border-border space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Design & Development
              </h3>
              <p className="text-muted-foreground">
                Expert in designing, developing, and maintaining both custom and theme-based Shopify stores. 
                Proficient in customizing existing themes using Liquid, HTML, CSS, and JavaScript.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Integration & Optimization
              </h3>
              <p className="text-muted-foreground">
                Skilled in integrating Shopify apps, working with APIs, and third-party tools. 
                Strong focus on optimizing website performance, speed, and mobile responsiveness.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                UX/UI & SEO
              </h3>
              <p className="text-muted-foreground">
                Deep understanding of responsive design, UX/UI principles, and cross-browser compatibility. 
                Expertise in SEO optimization and implementing page speed improvements.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's create a powerful Shopify store that drives results for your business
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
