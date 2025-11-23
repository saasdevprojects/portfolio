import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
    before: string | number;
    after: string | number;
    label: string;
    improvement: string;
    unit?: string;
    className?: string;
}

export function BeforeAfterComparison({
    before,
    after,
    label,
    improvement,
    unit = "",
    className,
}: BeforeAfterProps) {
    // Parse numbers for bar width calculation if possible
    const beforeNum = typeof before === "string" ? parseFloat(before.replace(/[^0-9.]/g, "")) : before;
    const afterNum = typeof after === "string" ? parseFloat(after.replace(/[^0-9.]/g, "")) : after;

    // Calculate relative widths (max is 100%)
    const max = Math.max(beforeNum || 0, afterNum || 0);
    const beforeWidth = max ? ((beforeNum || 0) / max) * 100 : 50;
    const afterWidth = 100; // After is always the "full" bar in this context as it's the improvement

    return (
        <div className={cn("bg-card border rounded-xl p-6 shadow-sm", className)}>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-semibold text-lg">{label}</h3>
                    <p className="text-muted-foreground text-sm">Impact Analysis</p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {improvement}
                </div>
            </div>

            <div className="space-y-6">
                {/* Before Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-medium">Before</span>
                        <span className="font-mono font-medium text-muted-foreground">{before}{unit}</span>
                    </div>
                    <div className="h-4 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${beforeWidth}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-muted-foreground/30 rounded-full"
                        />
                    </div>
                </div>

                {/* After Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-bold text-primary">After</span>
                        <span className="font-mono font-bold text-primary">{after}{unit}</span>
                    </div>
                    <div className="h-4 bg-muted/50 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${afterWidth}%` }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-primary rounded-full relative"
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="w-4 h-4 mr-2 text-green-500" />
                <span>Significant improvement observed post-implementation</span>
            </div>
        </div>
    );
}
