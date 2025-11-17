import { Badge } from "@/components/ui/badge";

const technologies = [
  "GoHighLevel",
  "Zapier",
  "Make",
  "n8n",
  "Twilio",
  "Vapi.ai",
  "OpenAI",
  "ElevenLabs",
  "HubSpot",
  "Google Workspace",
  "Looker Studio",
  "LangChain",
  "Python",
];

export const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="px-4 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow cursor-default border border-primary/20"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
};
