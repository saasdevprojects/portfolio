import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
      
      {/* Animated glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/30 shadow-glow backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Global AI Automation Specialists</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We design systems that replace{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              5 departments
            </span>
            <br />
            without replacing people
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Build AI-driven automation ecosystems that eliminate repetitive work and
            transform operations into autonomous, scalable business engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group shadow-glow" onClick={() => navigate('/contact')}>
              Start Your Automation Journey
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/results">View Case Studies</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">65%</div>
              <div className="text-sm text-muted-foreground">Ops Automated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">3.2x</div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Hours/Week Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
