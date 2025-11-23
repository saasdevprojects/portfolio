import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "FOUNDATION SYSTEM",
      subtitle: "The AI Core",
      description: "Perfect for businesses just starting with automation. We build your core infrastructure to capture and organize leads automatically.",
      duration: "10-14 days",
      investment: "$2.5K - $3.5K",
      features: [
        "Audit existing systems + process mapping",
        "Build core lead capture → CRM → Calendar workflow",
        "Integrate 3 tools (GoHighLevel / HubSpot / Zapier)",
        "Real-time KPI dashboard",
        "Basic email automation setup"
      ],
      popular: false
    },
    {
      title: "GROWTH SYSTEM",
      subtitle: "The Revenue Engine",
      description: "Designed to accelerate revenue. We implement intelligent lead scoring and automated nurturing to convert more leads into sales.",
      duration: "3-5 weeks",
      investment: "$6K - $9.5K",
      features: [
        "Multi-source lead capture (Meta, Google, Website)",
        "LLM-based lead scoring & smart tagging",
        "AI Voice & Chat Agent with instant booking",
        "Automated nurturing via SMS + email",
        "CRM dashboards with live performance metrics"
      ],
      popular: true
    },
    {
      title: "SCALE SYSTEM",
      subtitle: "Intelligent Operations",
      description: "For established businesses ready to scale. We automate end-to-end operations from marketing to customer support.",
      duration: "6-8 weeks",
      investment: "$15K - $25K",
      features: [
        "End-to-end automation (CRM + Ads + Support)",
        "24/7 AI receptionist (voice + chat)",
        "Multi-channel integration (WhatsApp, Social DMs)",
        "AI trained on your business tone & SOPs",
        "Executive dashboards for Sales & Support"
      ],
      popular: false
    },
    {
      title: "ENTERPRISE SYSTEM",
      subtitle: "Autonomous Infrastructure",
      description: "Full-scale digital transformation. Custom AI agents and infrastructure built for complex, high-volume operations.",
      duration: "8-12 weeks",
      investment: "$30K - $75K",
      features: [
        "Multi-agent orchestration (GPT/Claude/LangChain)",
        "Voice, Vision, and Text intelligence",
        "RAG knowledge base implementation",
        "API-based infrastructure for proprietary data",
        "Automated weekly executive summaries"
      ],
      popular: false
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-card p-6 rounded-xl border transition-all duration-300 hover:shadow-xl flex flex-col ${service.popular ? 'border-primary shadow-md scale-105 z-10' : 'hover:border-primary/50'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{service.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>

                <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">{service.investment}</div>
                  <div className="text-xs text-muted-foreground">Estimated Investment</div>
                  <div className="mt-2 text-xs font-medium flex items-center text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" /> {service.duration}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${service.popular ? 'bg-primary' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`} asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
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
