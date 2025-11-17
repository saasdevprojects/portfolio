import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock,
  IndianRupee,
  MessageSquare,
} from "lucide-react";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  businessName: string;
  founder: string;
  location: string;
  industry: string;
  summary: string;
  clientBackground: string;
  challenges: string[];
  goal: string;
  solutions: string[];
  results: string[];
  clientFeedback: string;
  techStack: string[];
  duration: string;
  cost: string;
  metrics: CaseStudyMetric[];
}

const caseStudies: Record<string, CaseStudy> = {
  healthcare: {
    title: "MedPro Wellness Clinics",
    businessName: "MedPro Wellness Clinics",
    founder: "Dr. Ethan Caldwell",
    location: "Austin, Texas, USA",
    industry: "Healthcare",
    summary:
      "Reduced patient no-shows by 73% and freed front-desk teams from repetitive reminders with a streamlined appointment journey.",
    clientBackground:
      "MedPro Wellness Clinics, founded by Dr. Ethan Caldwell in Austin, Texas, operates multiple healthcare facilities across the region, coordinating hundreds of daily appointments across various medical specialties.",
    challenges: [
      "35% appointment no-show rate causing inconsistent schedules",
      "15+ staff hours spent weekly on manual reminders and follow-ups",
      "No simple way to keep patient history and prescription updates aligned",
      "Fragmented communication created poor patient satisfaction scores",
    ],
    goal: "Create a predictable appointment schedule while giving patients timely reminders and updates without adding staff workload.",
    solutions: [
      "Built WhatsApp + SMS reminders with confirm/reschedule actions",
      "Connected website forms and call logs to a central CRM automatically",
      "Shared care instructions and follow-up tasks through templated messages",
      "Provided simple dashboards to track daily occupancy and pending follow-ups",
    ],
    results: [
      "73% fall in missed appointments within 6 weeks",
      "40% improvement in front-desk capacity for high-value tasks",
      "25% more follow-up bookings confirmed automatically",
      "Patient satisfaction score moved from 68% to 92% in quarterly survey",
      "Reduced manual follow-ups by 80% through automated reminders",
    ],
    clientFeedback:
      "We finally have breathing room at the front desk. Patients feel guided and we no longer chase confirmations manually.",
    techStack: ["WhatsApp Business API", "Make.com", "Google Sheets", "Custom CRM"],
    duration: "3 weeks",
    cost: "₹85,000",
    metrics: [
      { value: "73%", label: "Lower no-shows" },
      { value: "92%", label: "Patient satisfaction" },
      { value: "40%", label: "Team capacity gained" },
    ],
  },
  education: {
    title: "BrightPath Learning Academy",
    businessName: "BrightPath Learning Academy",
    founder: "Sophia Mitchell",
    location: "Seattle, Washington, USA",
    industry: "Education",
    summary:
      "Personalized learning paths and automated progress tracking helped BrightPath grow student engagement by 65% across hybrid learning environments.",
    clientBackground:
      "Founded by Sophia Mitchell in Seattle, BrightPath Learning Academy serves over 1,200 students through innovative online and in-person educational programs, focusing on personalized learning experiences.",
    challenges: [
      "Parent communication scattered across WhatsApp groups and email",
      "Low visibility into student assignment completion",
      "Manual fee follow-ups delaying cash flow every month",
      "Counsellors lacked context when nurturing new enquiries",
    ],
    goal: "Make every parent and student feel guided while bringing predictability to fee collection and enquiry follow-ups.",
    solutions: [
      "Automated weekly progress summaries shared with parents",
      "Smart reminders nudged students on pending assignments",
      "Integrated payment links with gentle escalations for overdue fees",
      "Tracked enquiry journeys with status updates for counsellors",
    ],
    results: [
      "65% rise in active student engagement across batches",
      "90% fees collected on or before due date",
      "25% faster conversion from demo to enrolment",
      "Parent satisfaction rating improved to 4.9/5",
    ],
    clientFeedback:
      "Parents now know exactly how their child is progressing. Fee collections are smoother and our counsellors feel organised.",
    techStack: ["ActiveCampaign", "Google Sheets", "Razorpay", "Calendly"],
    duration: "4 weeks",
    cost: "₹78,000",
    metrics: [
      { value: "65%", label: "Higher engagement" },
      { value: "90%", label: "On-time fees" },
      { value: "4.9★", label: "Parent rating" },
    ],
  },
  retail: {
    title: "UrbanVein Retail Co.",
    businessName: "UrbanVein Retail Co.",
    founder: "Jason Miller",
    location: "Chicago, Illinois, USA",
    industry: "Retail",
    summary:
      "Unified inventory and personalized product journeys unlocked 120% growth in repeat online purchases for this fashion-forward retailer.",
    clientBackground:
      "Headquartered in Chicago and founded by Jason Miller, UrbanVein Retail Co. has established itself as a leading D2C fashion brand with both digital storefronts and physical retail locations across the Midwest.",
    challenges: [
      "Manual inventory sync across channels creating stockouts",
      "No automated flows to reach first-time buyers after purchase",
      "Abandoned carts remained untouched for days",
      "Limited insights into best performing product bundles",
    ],
    goal: "Deliver a consistent shopping journey from browsing to post-purchase and increase revenue per customer.",
    solutions: [
      "Connected Shopify catalogue to marketing automation workflows",
      "Segmented customers by behaviour and pushed relevant collections",
      "Triggered abandoned-cart nudges with time-bound offers",
      "Shared automated reorder prompts for high turnover items",
    ],
    results: [
      "120% growth in online revenue in 90 days",
      "50% faster fulfilment thanks to synced inventory alerts",
      "4.9★ average customer review score sustained",
      "Email + WhatsApp flows recovered ₹3.6 lakh in abandoned carts",
    ],
    clientFeedback:
      "Our customers now receive timely nudges that feel personal. We finally understand what products to promote and when.",
    techStack: ["Shopify", "Klaviyo", "WhatsApp Business API", "Google Data Studio"],
    duration: "5 weeks",
    cost: "₹96,000",
    metrics: [
      { value: "120%", label: "Revenue lift" },
      { value: "3.6L", label: "Recovered carts" },
      { value: "4.9★", label: "Customer rating" },
    ],
  },
  "real-estate": {
    title: "Skyline Realty Group",
    businessName: "Skyline Realty Group",
    founder: "Michael Davenport",
    location: "Miami, Orlando, Tampa (Florida, USA)",
    industry: "Real Estate",
    summary:
      "Automation-first lead routing and nurture tracks produced 85% more qualified site visits for Skyline's sales team across Florida.",
    clientBackground:
      "Founded by Michael Davenport, Skyline Realty Group has established itself as a premier real estate developer with multiple high-profile residential and commercial projects across Florida's most desirable markets.",
    challenges: [
      "Lead enquiries scattered between portals, ads, and walk-ins",
      "Delayed follow-ups causing cold prospects within 48 hours",
      "Sales leadership lacked visibility on deal stages",
      "Brochure requests rarely converted into site visits",
    ],
    goal: "Reach prospects within minutes, keep them warm with relevant content, and make site-visit booking effortless.",
    solutions: [
      "Centralised every enquiry into a shared CRM with auto assignment",
      "Created drip journeys showcasing amenities and testimonials",
      "Automated reminders and map links for confirmed visits",
      "Published a live sales dashboard highlighting bottlenecks",
    ],
    results: [
      "85% more qualified site visits quarter-over-quarter",
      "3.5× increase in leads nurtured through to negotiation stage",
      "Sales team response time dropped from 12 hours to 45 minutes",
      "Projected revenue pipeline grew by ₹9.2 crore",
    ],
    clientFeedback:
      "The team finally has clarity on every prospect. Site visits are up and leadership sees real-time numbers without chasing reports.",
    techStack: ["HubSpot", "Google Data Studio", "Twilio", "Typeform"],
    duration: "6 weeks",
    cost: "₹1,25,000",
    metrics: [
      { value: "85%", label: "More site visits" },
      { value: "3.5×", label: "Lead-to-negotiation" },
      { value: "45 min", label: "Avg. response time" },
    ],
  },
  hospitality: {
    title: "HavenStay Boutique Hotels",
    businessName: "HavenStay Boutique Hotels",
    founder: "Caroline Brooks",
    location: "New York, Los Angeles, Denver (USA)",
    industry: "Hospitality",
    summary:
      "Dynamic pricing workflows and enhanced guest communication sequences increased occupancy to 92% across HavenStay's luxury properties.",
    clientBackground:
      "Founded by hospitality veteran Caroline Brooks, HavenStay Boutique Hotels has redefined luxury accommodations with its unique properties in major US cities, known for blending local culture with exceptional service.",
    challenges: [
      "Pricing changes were manual and reactive",
      "Guest enquiries on WhatsApp and email went unanswered during peak hours",
      "Repeat stays were low despite strong reviews",
      "Limited insight into which packages resonated with different traveller segments",
    ],
    goal: "Stabilise occupancy and delight guests with timely, contextual communication before, during, and after stays.",
    solutions: [
      "Synced PMS data with an automated rate adjustment engine",
      "Set up pre-arrival, in-stay, and post-stay message templates",
      "Offered loyalty perks through targeted campaigns",
      "Monitored satisfaction in real time through micro surveys",
    ],
    results: [
      "92% average occupancy during peak quarters",
      "45% uplift in repeat bookings from loyalty nudges",
      "Guest support response time brought under 5 minutes",
      "Upsell revenue grew by ₹2.1 lakh per month",
    ],
    clientFeedback:
      "Guests feel taken care of even before they arrive. Our staff now uses data to surprise and delight rather than firefight.",
    techStack: ["SiteMinder", "Mailchimp", "WhatsApp Business API", "Zoho CRM"],
    duration: "4 weeks",
    cost: "₹88,000",
    metrics: [
      { value: "92%", label: "Occupancy" },
      { value: "45%", label: "Repeat stays" },
      { value: "5 min", label: "Avg. response" },
    ],
  },
  fitness: {
    title: "PeakForm Fitness Studios",
    businessName: "PeakForm Fitness Studios",
    founder: "Alex Carter",
    location: "San Diego, San Francisco, Phoenix (USA)",
    industry: "Fitness",
    summary:
      "Automated lead nurture and member retention flows helped PeakForm cut churn by 40% while consistently filling group classes to capacity.",
    clientBackground:
      "Founded by fitness expert Alex Carter, PeakForm Fitness Studios has grown into a premier fitness destination across the western US, known for its innovative hybrid model that combines in-person training with virtual classes.",
    challenges: [
      "Trial class leads cooled off after a single follow-up",
      "No system to identify inactive members early",
      "Coaches manually tracked class attendance",
      "Marketing lacked clarity on which campaigns drove membership renewals",
    ],
    goal: "Convert more trial leads into paid members and keep existing members inspired to stay active.",
    solutions: [
      "Introduced automated WhatsApp + email drips for trial leads",
      "Tagged members by engagement and triggered comeback offers",
      "Synced class bookings with attendance dashboards",
      "Shared weekly progress snapshots to keep members motivated",
    ],
    results: [
      "40% reduction in monthly member churn",
      "65% rise in average class attendance",
      "₹1.2 lakh recovered from lapsed memberships",
      "Community NPS improved to 9.3",
    ],
    clientFeedback:
      "Members now feel nudged at the right moments. Sales can focus on personal conversations because the groundwork is automated.",
    techStack: ["Mindbody", "HubSpot", "WhatsApp Business API", "Google Looker Studio"],
    duration: "3 weeks",
    cost: "₹75,000",
    metrics: [
      { value: "40%", label: "Churn reduction" },
      { value: "65%", label: "Class attendance" },
      { value: "₹1.2L", label: "Revenue recovered" },
    ],
  },
};

const defaultStudyKey = "healthcare";

export default function CaseStudyPage() {
  const { industry } = useParams<{ industry: string }>();
  const normalizedKey = (industry ?? "").toLowerCase() as keyof typeof caseStudies;
  const study = caseStudies[normalizedKey] ?? caseStudies[defaultStudyKey];
  const primaryMetric = study.metrics[0] ?? { value: "", label: "Key outcome" };

  const summaryCards = [
    { label: "Project duration", value: study.duration, icon: Clock },
    { label: "Investment", value: study.cost, icon: IndianRupee },
    { label: primaryMetric.label, value: primaryMetric.value, icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link to="/results" className="inline-flex items-center gap-2 font-medium hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to success stories
            </Link>
            <span className="text-border">/</span>
            <span>{study.industry}</span>
          </div>

          <div className="space-y-4">
            <Badge variant="outline" className="text-xs uppercase tracking-wide">
              {study.industry} automation
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{study.title}</h1>
            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{study.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/results">View all case studies</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryCards.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex h-full flex-col justify-between rounded-xl border bg-card/90 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </div>
              <p className="mt-6 text-2xl font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </section>

        <Section title="Client background">
          <p className="leading-relaxed text-muted-foreground">{study.clientBackground}</p>
        </Section>

        <div className="grid gap-8 md:grid-cols-2">
          <Section title="Challenges">
            <ul className="space-y-3 text-muted-foreground">
              {study.challenges.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border bg-card/80 p-4"
                >
                  <CheckCircle className="mt-1 h-4 w-4 text-destructive" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Goals">
            <div className="rounded-lg border bg-card/80 p-5">
              <p className="leading-relaxed text-muted-foreground">{study.goal}</p>
            </div>
          </Section>
        </div>

        <Section title="Solution approach">
          <ul className="grid gap-3 md:grid-cols-2">
            {study.solutions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border bg-card/80 p-4 text-muted-foreground"
              >
                <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {study.industry.toLowerCase() === 'healthcare' && (
          <Section title="System Architecture">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The following mind map illustrates the comprehensive workflow and system architecture we implemented for {study.businessName}:
              </p>
              
              <div className="relative rounded-lg border border-border bg-card overflow-hidden shadow-sm">
                <div className="p-2 md:p-4">
                  <img 
                    src="/images/medpro-mindmap.png" 
                    alt={`${study.businessName} - System Architecture Mind Map`}
                    className="w-full h-auto rounded-md border border-border"
                  />
                </div>
                <div className="bg-muted/30 px-4 py-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                      <span className="text-xs font-medium text-muted-foreground">System Architecture</span>
                    </div>
                    <span className="text-xs text-muted-foreground/70">Click to enlarge</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
                The architecture integrates multiple systems to create a seamless patient experience and efficient clinic operations
              </p>
            </div>
          </Section>
        )}

        <Section title="Results we measured">
          <div className="space-y-8">
            <ul className="grid gap-3 md:grid-cols-2">
              {study.results.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border bg-card/80 p-4 text-muted-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            
            {study.industry.toLowerCase() === 'healthcare' && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">System in Action</h3>
                <p className="text-muted-foreground mb-4">
                  Here's a look at the automated appointment management dashboard we created for {study.businessName}:
                </p>
                <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                  <img 
                    src="/images/medpro-dashboard.png" 
                    alt={`${study.businessName} - Automated Appointment System`}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  The dashboard provides real-time insights into appointment status, patient communications, and staff productivity
                </p>
              </div>
            )}
          </div>
        </Section>

        <Section title="Client feedback">
          <blockquote className="space-y-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <p className="text-lg leading-relaxed text-muted-foreground">“{study.clientFeedback}”</p>
            <cite className="block text-sm text-muted-foreground">{study.title} · {study.industry}</cite>
          </blockquote>
        </Section>

        <Section title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tool) => (
              <Badge key={tool} variant="outline" className="bg-card text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-muted/20">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 text-center md:text-left">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to build your own success story?</h2>
              <p className="mt-2 text-muted-foreground">
                Share your growth goals and we’ll map the right automation roadmap for your team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/results">Browse more case studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">{children}</div>
    </section>
  );
}
