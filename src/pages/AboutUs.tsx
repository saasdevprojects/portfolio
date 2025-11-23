import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Rocket, Zap, Cpu, BarChart, Code, Lightbulb, CheckCircle, Users, Target, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      description: "Empower businesses with intelligent automation solutions that drive efficiency, reduce costs, and unlock new opportunities for growth."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Our Vision",
      description: "To be the leading force in AI-driven automation, transforming how businesses operate in the digital age."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Our Team",
      description: "A passionate group of AI experts, developers, and strategists dedicated to delivering exceptional results for our clients."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Our Values",
      description: "Innovation, integrity, and client success are at the core of everything we do."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About UpNxt
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Building the Future of Business Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate AI and automation experts dedicated to helping businesses
              thrive in the digital age through innovative technology solutions.
            </p>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, UpNxt began as a vision to revolutionize how businesses leverage technology.
                What started as a one-person operation has grown into a team of dedicated professionals
                committed to delivering cutting-edge AI and automation solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey has been fueled by a passion for innovation and a deep understanding of
                the challenges modern businesses face in an increasingly digital world.
              </p>
              <p className="text-lg text-muted-foreground">
                Led by Umang Pandey, our team combines technical expertise with business acumen to
                deliver solutions that drive real results for our clients.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/contact" className="group">
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl border">
                <img 
                  src="/assets/5_20250909_000425_0002.png" 
                  alt="Umang Pandey - Founder & CEO"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">Umang Pandey</h3>
                <p className="text-primary">AI & Automation Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and ensure we deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group p-6 bg-card rounded-xl border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI automation solutions can help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 rounded-full px-8">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/services" className="group">
                Explore Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
