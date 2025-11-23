import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  IndianRupee,
  Home,
  BarChart,
  TrendingUp,
  Hotel,
  Calendar,
  Star,
} from "lucide-react";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";

const HavenStayCaseStudy = () => {
  const caseStudy = {
    title: "HavenStay Boutique",
    businessName: "HavenStay Boutique",
    founder: "Caroline Brooks",
    location: "New York, NY",
    industry: "Hospitality",
    summary:
      "Achieved 92% occupancy with dynamic pricing and guest engagement strategies in the competitive boutique hotel market.",
    clientBackground:
      "Founded by Caroline Brooks, HavenStay Boutique is a collection of luxury boutique hotels known for their unique design and personalized service. Operating in major cities across the United States, HavenStay needed to optimize their pricing strategy and guest experience to stand out in a crowded market.",
    challenges: [
      "Inconsistent occupancy rates across properties",
      "Ineffective pricing strategies leading to revenue loss",
      "Lack of personalized guest experiences",
      "Difficulty in managing direct bookings versus OTAs"
    ],
    goal: "To implement a dynamic pricing and guest engagement system that maximizes occupancy, increases direct bookings, and enhances guest satisfaction.",
    solutions: [
      "Deployed AI-powered dynamic pricing engine that adjusts rates in real-time",
      "Created personalized guest journey with automated pre-arrival and post-stay communication",
      "Developed a direct booking incentive program",
      "Implemented guest experience automation for personalized stays"
    ],
    results: [
      "92% average occupancy rate (industry average: 66%)",
      "35% increase in direct bookings",
      "40% improvement in guest satisfaction scores",
      "28% increase in revenue per available room (RevPAR)"
    ],
    clientFeedback:
      "The transformation has been nothing short of remarkable. Our occupancy rates are now consistently above 90%, and our guests are more satisfied than ever. The dynamic pricing system has paid for itself many times over, and our team can focus on delivering exceptional experiences rather than manual rate management.",
    techStack: ["Dynamic Pricing Engine", "Guest Experience Platform", "Revenue Management System", "CRM Integration"],
    duration: "5 months",
    cost: "$72,000",
    metrics: [
      { value: "92%", label: "Occupancy Rate" },
      { value: "35%", label: "Direct Bookings" },
      { value: "28%", label: "RevPAR" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
              {caseStudy.industry} Case Study
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {caseStudy.summary}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Hotel className="h-4 w-4 mr-1" />
                <span>{caseStudy.founder}</span>
              </div>
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                <span>{caseStudy.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Background</h2>
            <p className="text-gray-700 leading-relaxed">
              {caseStudy.clientBackground}
            </p>
          </div>

          <Section title="Challenges">
            <ul className="space-y-4">
              {caseStudy.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="The Goal">
            <p className="text-gray-700 leading-relaxed">
              {caseStudy.goal}
            </p>
          </Section>

          <Section title="Our Solution">
            <ul className="space-y-4">
              {caseStudy.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <span className="ml-3 text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="The Results">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-3xl font-bold text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mb-10">
              <BeforeAfterComparison
                before="66%"
                after="92%"
                label="Occupancy Rate"
                improvement="+39%"
                className="bg-blue-50/50 border-blue-100"
              />
            </div>

            <ul className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="ml-3 text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Client Feedback">
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 italic">"{caseStudy.clientFeedback}"</p>
              <footer className="mt-4 font-medium text-gray-900">
                — {caseStudy.founder}, Founder of {caseStudy.businessName}
              </footer>
            </blockquote>
          </Section>

          <Section title="Project Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500">Industry</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{caseStudy.industry}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                <div className="mt-1 flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-lg font-medium text-gray-900">{caseStudy.duration}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500">Investment</h3>
                <div className="mt-1 flex items-center">
                  <IndianRupee className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-lg font-medium text-gray-900">{caseStudy.cost}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Technologies Used">
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/case-studies" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

export default HavenStayCaseStudy;
