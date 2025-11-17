import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Clock, TrendingUp, Zap, CheckCircle, DollarSign, Users, Calendar, MessageSquare, MapPin } from "lucide-react";

// Custom SVG Icons
const ShoppingBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const Home = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Utensils = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2h7c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V2z"></path><path d="M14 2h3c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-3V2z"></path><path d="M7 12v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-7"></path>
  </svg>
);

const Dumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11v11h-11z"></path><path d="M9.5 9.5h5v5h-5z"></path><path d="M3 3h3v3"></path><path d="M18 18h3v3"></path><path d="M21 3h-3v3"></path><path d="M3 18h3v3"></path>
  </svg>
);

type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  clientBackground: string;
  problems: string[];
  goal: string;
  solutions: string[];
  results: string[];
  clientFeedback: string;
  techStack: string[];
  duration: string;
  cost: string;
  metrics: { value: string; label: string; }[];
};

export default function Results() {
  const caseStudies: CaseStudy[] = [
    {
      id: "gym",
      title: "Fitness Chain Transformation",
      industry: "Gyms & Fitness Centers",
      clientBackground: "A growing fitness chain with 3 locations in Mumbai, generating 300+ monthly leads through digital marketing but struggling with lead conversion and member retention.",
      problems: [
        "Losing 40% of new leads due to delayed follow-ups",
        "25% of members not showing up for trial sessions",
        "Staff spending 15+ hours weekly on manual scheduling",
        "No system to track member engagement patterns"
      ],
      goal: "Increase trial-to-membership conversion by 30% and reduce no-shows by 50% within 3 months.",
      solutions: [
        "Automated WhatsApp & SMS reminders for trial sessions and renewals",
        "Integrated lead capture from website/Google Ads to CRM",
        "Created engagement workflows for inactive members",
        "Set up performance dashboards for tracking"
      ],
      results: [
        "Trial session attendance increased by 65%",
        "Membership conversion rate improved by 35%",
        "Reduced staff workload by 20 hours/month",
        "Recovered ₹1.2 lakh monthly in potential lost revenue"
      ],
      clientFeedback: "\"The automated system transformed our lead management. We're converting more trials to memberships while spending less time on follow-ups.\"",
      techStack: ["Make.com", "Google Sheets", "WhatsApp Business API", "Google Analytics"],
      duration: "3 weeks",
      cost: "₹75,000",
      metrics: [
        { value: "65%", label: "Trial Attendance" },
        { value: "35%", label: "Conversions" },
        { value: "20h", label: "Time Saved/Month" }
      ]
    },
    {
      id: "medical",
      title: "Clinic Efficiency Boost",
      industry: "Healthcare",
      clientBackground: "A multi-specialty clinic in Bangalore handling 50+ daily appointments across 6 doctors, struggling with patient no-shows and appointment management.",
      problems: [
        "30% no-show rate for appointments",
        "Front desk staff overwhelmed with scheduling calls",
        "Manual reminder system with high failure rate",
        "Difficulty managing patient records and follow-ups"
      ],
      goal: "Reduce no-shows by 70% and automate appointment management.",
      solutions: [
        "WhatsApp-based appointment scheduling and confirmations",
        "3-tier reminder system (24h, 2h, and 30min before)",
        "Digital patient intake forms with EMR integration",
        "Automated follow-up messages for feedback"
      ],
      results: [
        "No-show rate reduced to 8% (from 30%)",
        "Front desk call volume decreased by 60%",
        "40% improvement in patient satisfaction",
        "Additional ₹1.8 lakh/month revenue from filled slots"
      ],
      clientFeedback: "\"Automating our appointment system saved us 30 staff hours weekly and significantly improved our patient experience.\"",
      techStack: ["Zoho CRM + Flow", "WhatsApp Business API", "Google Calendar", "EMR System"],
      duration: "4 weeks",
      cost: "₹1,20,000",
      metrics: [
        { value: "73%", label: "No-shows" },
        { value: "60%", label: "Call Volume" },
        { value: "40%", label: "Satisfaction" }
      ]
    },
    {
      id: "education",
      title: "Coaching Center Automation",
      industry: "Education",
      clientBackground: "A premier test prep institute with 5 centers across Delhi, managing 1000+ students annually for competitive exams.",
      problems: [
        "35% of fee payments were delayed",
        "Low parent engagement and class attendance",
        "Manual test result distribution",
        "Difficulty tracking student progress"
      ],
      goal: "Streamline operations and improve parent-student engagement.",
      solutions: [
        "Automated fee reminder and payment confirmation system",
        "WhatsApp-based test score distribution",
        "Parent portal for attendance tracking",
        "Automated class schedule updates"
      ],
      results: [
        "90% on-time fee payments (from 65%)",
        "50% reduction in administrative workload",
        "40% improvement in parent engagement",
        "25% increase in student attendance"
      ],
      clientFeedback: "\"The automation system transformed our operations and improved communication with parents significantly.\"",
      techStack: ["Make.com", "Razorpay", "WhatsApp Business API", "Google Workspace"],
      duration: "3 weeks",
      cost: "₹85,000",
      metrics: [
        { value: "90%", label: "On-time Payments" },
        { value: "50%", label: "Admin Work" },
        { value: "25%", label: "Attendance" }
      ]
    }
  ];

  const stats = [
    { icon: TrendingUp, title: "Efficiency", value: "85%", description: "Average increase in operational efficiency" },
    { icon: Clock, title: "Time Saved", value: "65%", description: "Reduction in manual processing time" },
    { icon: DollarSign, title: "ROI", value: "4.5x", description: "Average return on investment" },
    { icon: Users, title: "Satisfaction", value: "92%", description: "Client satisfaction rate" }
  ];

  const industries = [
    { name: "Healthcare", icon: CheckCircle },
    { name: "Education", icon: MessageSquare },
    { name: "Retail", icon: ShoppingBag },
    { name: "Real Estate", icon: Home },
    { name: "Hospitality", icon: Utensils },
    { name: "Fitness", icon: Dumbbell }
  ];

  const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
    <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Badge variant="outline" className="mb-3">{study.industry}</Badge>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
        </div>
        <div className="flex space-x-2">
          {study.metrics.map((metric, i) => (
            <div key={i} className="text-center bg-muted/30 px-3 py-1 rounded-md">
              <p className="font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1">Challenge</h4>
          <ul className="text-sm space-y-1 mb-4">
            {study.problems.slice(0, 2).map((problem, i) => (
              <li key={i} className="flex items-start">
                <Zap className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Solution</h4>
          <ul className="text-sm space-y-1">
            {study.solutions.slice(0, 2).map((solution, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Duration: <span className="font-medium">{study.duration}</span></span>
            <Button variant="ghost" size="sm" className="group-hover:underline" asChild>
              <Link to={`/case-studies/${study.id}`}>
                Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Icon components moved to the top of the file

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <Link to="/case-study/brightpath">
              <Button variant="outline" className="mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                Read Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary">
              <Zap className="h-4 w-4 mr-2" />
              Real Business Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From Challenges to <span className="text-primary">Remarkable Results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our automation solutions have transformed businesses across various industries, delivering measurable results and exceptional ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored automation solutions for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Healthcare",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>,
                description: "Streamline patient care with automated scheduling, reminders, and follow-ups.",
                stats: "40% reduction in no-shows"
              },
              {
                name: "Education",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>,
                description: "Enhance learning experiences with automated student engagement tools.",
                stats: "35% increase in student participation"
              },
              {
                name: "Retail",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>,
                description: "Boost sales with automated inventory and customer engagement systems.",
                stats: "50% faster order processing"
              },
              {
                name: "Real Estate",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>,
                description: "Close deals faster with automated lead nurturing and follow-ups.",
                stats: "60% more qualified leads"
              },
              {
                name: "Hospitality",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                description: "Deliver exceptional guest experiences with automated booking and support.",
                stats: "45% increase in repeat bookings"
              },
              {
                name: "Fitness",
                icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>,
                description: "Boost member retention with automated class reminders and progress tracking.",
                stats: "30% higher member retention"
              }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-muted-foreground mb-3">{industry.description}</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                  {industry.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="font-medium text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real businesses achieving remarkable results with our automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Healthcare Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Healthcare</Badge>
                <span className="text-xs text-muted-foreground">Austin, TX</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">MedPro Wellness Clinics</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Dr. Ethan Caldwell</p>
              <p className="text-muted-foreground mb-6">Reduced patient no-shows by 73% with automated appointment management.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">73%</p>
                  <p className="text-xs text-muted-foreground">No-shows</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">92%</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">40%</p>
                  <p className="text-xs text-muted-foreground">Efficiency</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/healthcare">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Education Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Education</Badge>
                <span className="text-xs text-muted-foreground">Seattle, WA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">BrightPath Learning</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Sophia Mitchell</p>
              <p className="text-muted-foreground mb-6">Increased student engagement by 65% with personalized learning automation.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">65%</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">90%</p>
                  <p className="text-xs text-muted-foreground">On-time Fees</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">4.9★</p>
                  <p className="text-xs text-muted-foreground">Parent Rating</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/education">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Retail Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Retail</Badge>
                <span className="text-xs text-muted-foreground">Chicago, IL</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">UrbanVein Retail Co.</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Jason Miller</p>
              <p className="text-muted-foreground mb-6">Boosted online sales by 120% with AI-powered product recommendations.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">120%</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">50%</p>
                  <p className="text-xs text-muted-foreground">Faster Fulfillment</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">4.9★</p>
                  <p className="text-xs text-muted-foreground">Customer Rating</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/retail">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Real Estate Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Real Estate</Badge>
                <span className="text-xs text-muted-foreground">FL, USA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">Skyline Realty Group</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Michael Davenport</p>
              <p className="text-muted-foreground mb-6">Increased qualified leads by 85% with automated lead nurturing.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">85%</p>
                  <p className="text-xs text-muted-foreground">Site Visits</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">3.5×</p>
                  <p className="text-xs text-muted-foreground">Lead Conversion</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">45m</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/real-estate">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Hospitality Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Hospitality</Badge>
                <span className="text-xs text-muted-foreground">USA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">HavenStay Boutique</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Caroline Brooks</p>
              <p className="text-muted-foreground mb-6">Achieved 92% occupancy with dynamic pricing and guest engagement.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">92%</p>
                  <p className="text-xs text-muted-foreground">Occupancy</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">45%</p>
                  <p className="text-xs text-muted-foreground">Repeat Stays</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">5m</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/hospitality">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Fitness Case Study */}
            <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Fitness</Badge>
                <span className="text-xs text-muted-foreground">West Coast, USA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">PeakForm Fitness</h3>
              <p className="text-sm text-muted-foreground mb-1">Founded by Alex Carter</p>
              <p className="text-muted-foreground mb-6">Reduced member churn by 40% with automated engagement flows.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">40%</p>
                  <p className="text-xs text-muted-foreground">Churn Rate</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">65%</p>
                  <p className="text-xs text-muted-foreground">Class Attendance</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xl font-bold text-primary">9.3</p>
                  <p className="text-xs text-muted-foreground">NPS Score</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary">
                <Link to="/case-studies/fitness">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies" className="group">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Hear from businesses that transformed their operations with our solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MedPro Wellness Clinics Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Ethan Caldwell</p>
                    <p className="text-xs text-muted-foreground">MedPro Wellness Clinics</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"We finally have breathing room at the front desk. Patients feel guided and we no longer chase confirmations manually. The automation has transformed our clinic's efficiency."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>Austin, TX</span>
              </div>
            </div>

            {/* BrightPath Learning Academy Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 01-.788 0l-7 3a1 1 0 010 1.84l5.5 2.35L9 11.476v6.5a1 1 0 001.447.894l4-2a1 1 0 00.553-.894v-6.5l2.053-1.206 5.5-2.35a1 1 0 000-1.84l-7-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Sophia Mitchell</p>
                    <p className="text-xs text-muted-foreground">BrightPath Learning</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.8
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"Parents now know exactly how their child is progressing. Fee collections are smoother and our counsellors feel organised. The system has been a game-changer for our academy."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>Seattle, WA</span>
              </div>
            </div>

            {/* UrbanVein Retail Co. Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Jason Miller</p>
                    <p className="text-xs text-muted-foreground">UrbanVein Retail Co.</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"Our customers now receive timely nudges that feel personal. We finally understand what products to promote and when. The system has transformed our retail operations."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>Chicago, IL</span>
              </div>
            </div>

            {/* Skyline Realty Group Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Michael Davenport</p>
                    <p className="text-xs text-muted-foreground">Skyline Realty Group</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.7
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"The team finally has clarity on every prospect. Site visits are up and leadership sees real-time numbers without chasing reports. It's revolutionized our sales process."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>Miami, FL</span>
              </div>
            </div>

            {/* HavenStay Boutique Hotels Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Caroline Brooks</p>
                    <p className="text-xs text-muted-foreground">HavenStay Boutique</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"Guests feel taken care of even before they arrive. Our staff now uses data to surprise and delight rather than firefight. The system has elevated our guest experience."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>New York, NY</span>
              </div>
            </div>

            {/* PeakForm Fitness Review */}
            <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.339-.45-.5-.902-.607-1.28z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Alex Carter</p>
                    <p className="text-xs text-muted-foreground">PeakForm Fitness</p>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.8
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"Members now feel nudged at the right moments. Sales can focus on personal conversations because the groundwork is automated. It's been a game-changer for our studios."</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>San Diego, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/50 backdrop-blur-sm">
            Ready to Transform Your Business?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Achieve Similar Results</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discuss how we can help your business grow with automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#success-stories">
                Explore More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
