import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "15-minute assessment of your current systems & opportunities",
    duration: "15 min",
  },
  {
    number: "02",
    title: "System Mapping",
    description: "Free audit to identify top automation targets",
    duration: "Free",
  },
  {
    number: "03",
    title: "Proposal Delivery",
    description: "Detailed scope, timeline, and cost breakdown",
    duration: "48 hrs",
  },
  {
    number: "04",
    title: "Implementation",
    description: "Build, deploy, optimize, and handover",
    duration: "Project Timeline",
  },
];

export const ProcessTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-accent shadow-glow" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6 items-start">
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-card border-2 border-primary shadow-glow shrink-0">
              <span className="text-lg font-bold text-primary">{step.number}</span>
            </div>

            <div className="flex-1 pt-2">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {step.duration}
                </span>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
