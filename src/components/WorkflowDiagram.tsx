import { ArrowRight } from "lucide-react";

export const WorkflowDiagram = ({ steps }: { steps: { step: string; icon: any }[] }) => (
    <div className="my-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {steps.map((item, i) => (
                <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 min-w-[100px] hover:bg-white/10 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <item.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium text-center text-foreground/90">{item.step}</span>
                    </div>
                    {i < steps.length - 1 && (
                        <ArrowRight className="h-5 w-5 text-muted-foreground/50 mx-2" />
                    )}
                </div>
            ))}
        </div>
    </div>
);
