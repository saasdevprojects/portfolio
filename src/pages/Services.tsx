import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Automation Solutions",
      description: "End-to-end automation solutions tailored to your business needs, from process analysis to implementation.",
      features: [
        "Process automation",
        "Workflow optimization",
        "Custom AI integration",
        "Performance monitoring"
      ]
    },
    {
      title: "Business Process Automation",
      description: "Streamline your operations with intelligent automation that reduces costs and increases efficiency.",
      features: [
        "Document processing",
        "Data extraction",
        "Task automation",
        "System integration"
      ]
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed to solve your unique business challenges and drive innovation.",
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We deliver cutting-edge automation solutions that drive efficiency, reduce costs, and unlock new opportunities for your business.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/#get-in-touch">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/results">See Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our automation solutions can transform your business operations and drive growth.
          </p>
          <Button size="lg" asChild>
            <Link to="/#get-in-touch">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
