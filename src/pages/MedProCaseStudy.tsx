import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  IndianRupee,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Calendar,
  Heart,
  ChevronRight
} from "lucide-react";

// Import images
import medproHero from "@/assets/medpro-hero.jpg";
import medproDashboard from "@/assets/medpro-dashboard.png";
import medproAppointment from "@/assets/medpro-appointment.png";
import medproAnalytics from "@/assets/medpro-analytics.png";
import medproMobile from "@/assets/medpro-mobile.png";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";

const MedProCaseStudy = () => {
  const caseStudy = {
    title: "MedPro Wellness Clinics",
    businessName: "MedPro Wellness Clinics",
    founder: "Dr. Sarah Johnson",
    location: "Austin, Texas, USA",
    industry: "Healthcare",
    summary:
      "Transformed patient care with a 50% reduction in wait times and 70% improvement in appointment scheduling efficiency.",
    clientBackground:
      "Founded by Dr. Sarah Johnson, MedPro Wellness Clinics is a network of healthcare facilities dedicated to providing comprehensive wellness services. With multiple locations across Texas, they needed a digital transformation to enhance patient experience and operational efficiency.",
    challenges: [
      "Long patient wait times and scheduling inefficiencies",
      "Fragmented patient records across multiple locations",
      "Limited digital engagement with patients",
      "Ineffective resource allocation and staff scheduling"
    ],
    goal: "To implement a comprehensive digital healthcare platform that streamlines operations, enhances patient engagement, and improves overall healthcare delivery while maintaining the highest standards of patient care and data security.",
    solutions: [
      "End-to-end patient management system with online appointment scheduling",
      "Unified electronic health records (EHR) system across all locations",
      "Mobile app for patients to access records and communicate with providers",
      "AI-powered resource allocation and staff scheduling system"
    ],
    results: [
      "50% reduction in patient wait times",
      "70% improvement in appointment scheduling efficiency",
      "90% patient satisfaction rate with the new digital platform",
      "40% reduction in administrative workload"
    ],
    clientFeedback:
      "The digital transformation has revolutionized how we deliver care. Our patients love the convenience of online scheduling and digital access to their health records, while our staff can focus more on patient care rather than paperwork. The system has exceeded our expectations in every way.",
    techStack: ["EHR System", "Patient Portal", "Mobile App", "AI Scheduling"],
    duration: "6 months",
    cost: "$120,000",
    metrics: [
      { value: "50%", label: "Reduction in Wait Times" },
      { value: "90%", label: "Patient Satisfaction" },
      { value: "70%", label: "Scheduling Efficiency" },
    ],
  };

  const resultsShowcase = [
    {
      image: medproDashboard,
      title: "Centralized Dashboard",
      description: "Unified view of patient data and clinic operations"
    },
    {
      image: medproAppointment,
      title: "Appointment Management",
      description: "Streamlined scheduling and calendar management"
    },
    {
      image: medproAnalytics,
      title: "Performance Analytics",
      description: "Real-time insights into clinic operations and patient flow"
    },
    {
      image: medproMobile,
      title: "Mobile Access",
      description: "Patients can book appointments and access records on the go"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 backdrop-blur-sm text-white border-transparent">
              {caseStudy.industry} Case Study
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {caseStudy.summary}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-blue-100">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Stethoscope className="h-5 w-5 mr-2" />
                <span>{caseStudy.founder}</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Activity className="h-5 w-5 mr-2" />
                <span>{caseStudy.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Client Background */}
          <Section title="Client Background">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.clientBackground}
              </p>
            </div>
          </Section>

          {/* Challenges */}
          <Section title="Challenges">
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mr-3 mt-0.5">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Goal */}
          <Section title="Our Goal">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex">
                <Target className="h-6 w-6 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                <p className="text-gray-700">{caseStudy.goal}</p>
              </div>
            </div>
          </Section>

          {/* Solution */}
          <Section title="Our Solution">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.solutions.map((solution, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700">{solution}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution Architecture</h3>
                <div className="bg-white p-2 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <img
                    src={medproHero}
                    alt="MedPro Wellness Clinics - Solution Architecture"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* Results */}
          <Section title="The Results">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-center">
                    <p className="text-4xl font-bold text-blue-600">{metric.value}</p>
                    <p className="mt-2 text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 mr-3 mt-0.5">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700">{result}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto">
                <BeforeAfterComparison
                  before="70%"
                  after="92%"
                  label="Appointment Adherence"
                  improvement="+31%"
                  className="bg-blue-50/50 border-blue-100"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Platform Showcase</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultsShowcase.map((item, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={item.image}
                          alt={`MedPro Wellness - ${item.title}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Client Feedback */}
          <Section title="Client Feedback">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <blockquote className="relative">
                <div className="text-5xl absolute -top-4 left-0 text-blue-100 font-serif">"</div>
                <p className="relative z-10 text-gray-700 text-lg italic pl-8">
                  {caseStudy.clientFeedback}
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{caseStudy.founder}</p>
                    <p className="text-sm text-gray-500">Founder, {caseStudy.businessName}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </Section>

          {/* Tech Stack */}
          <Section title="Technology Stack">
            <div className="flex flex-wrap gap-3">
              {caseStudy.techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm bg-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>

          {/* Project Details */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Duration:</span>
                </div>
                <p className="mt-2 text-gray-700">{caseStudy.duration}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium">Investment:</span>
                </div>
                <p className="mt-2 text-gray-700">{caseStudy.cost}</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="font-medium">Industry:</span>
                </div>
                <p className="mt-2 text-gray-700">{caseStudy.industry}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Healthcare Practice?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our digital healthcare solutions can enhance patient care and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    {children}
  </div>
);

export default MedProCaseStudy;
