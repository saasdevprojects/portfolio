import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  duration: string;
  investment: string;
  deliverables: string[];
  outcome: string;
  featured?: boolean;
}

export const ServiceCard = ({
  title,
  subtitle,
  duration,
  investment,
  deliverables,
  outcome,
  featured = false,
}: ServiceCardProps) => {
  return (
    <Card
      className={`relative p-8 transition-all duration-300 bg-gradient-card backdrop-blur-sm ${
        featured ? "border-primary shadow-glow hover:shadow-glow scale-105" : "border-border hover:border-primary/50"
      }`}
    >
      {featured && (
        <Badge className="absolute -top-3 left-8 bg-gradient-primary border-0 shadow-glow">
          Most Popular
        </Badge>
      )}
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground italic">{subtitle}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {investment}
          </span>
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">Timeline:</span> {duration}
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-sm uppercase tracking-wide">Deliverables:</p>
          <ul className="space-y-2">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm">
            <span className="font-semibold">Outcome: </span>
            <span className="text-muted-foreground">{outcome}</span>
          </p>
        </div>

        <Button className="w-full group" variant={featured ? "default" : "outline"}>
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};
