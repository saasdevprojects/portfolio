import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  clientType: string;
  problem: string;
  solution: string;
  result: string;
  metric?: string;
}

export const TestimonialCard = ({
  clientType,
  problem,
  solution,
  result,
  metric,
}: TestimonialCardProps) => {
  return (
    <Card className="p-6 h-full transition-all duration-300 hover:shadow-glow bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="font-semibold">
            {clientType}
          </Badge>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Challenge
            </p>
            <p className="text-sm">{problem}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Solution
            </p>
            <p className="text-sm">{solution}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">{result}</span>
            {metric && <span className="text-sm text-muted-foreground">{metric}</span>}
          </div>
        </div>
      </div>
    </Card>
  );
};
