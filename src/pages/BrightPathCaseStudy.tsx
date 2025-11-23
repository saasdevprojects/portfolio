import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  IndianRupee,
  Users,
  BookOpen,
  BarChart,
  TrendingUp,
  Lightbulb,
  Target,
  Award,
  Heart,
  ChevronRight
} from "lucide-react";

// Import images
import mindMapImage from "@/assets/case2.png";
import resultImage1 from "@/assets/case2.1.png";
import resultImage2 from "@/assets/case2.2.png";
import resultImage3 from "@/assets/case2.3.png";
import resultImage4 from "@/assets/case2.4.png";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";

const BrightPathCaseStudy = () => {
  const caseStudy = {
    title: "BrightPath Learning Academy",
    businessName: "BrightPath Learning Academy",
    founder: "Sophia Mitchell",
    location: "Seattle, Washington, USA",
    industry: "Education",
    summary:
      "Increased student engagement by 65% with personalized learning automation, transforming the educational experience.",
    clientBackground:
      "Founded by Sophia Mitchell in Seattle, BrightPath Learning Academy is an innovative educational institution that has been at the forefront of personalized learning. With a focus on creating tailored educational experiences, BrightPath serves a diverse student body through both in-person and online learning platforms.",
    challenges: [
      "Low student engagement in remote learning environments",
      "Difficulty in tracking individual student progress effectively",
      "Inefficient communication between educators, students, and parents",
      "Lack of personalized learning paths for different learning styles"
    ],
    goal: "To create a more engaging and personalized learning experience that adapts to each student's needs while providing educators with better tools for monitoring progress and communicating with families.",
    solutions: [
      "AI-driven learning platform that adapts to individual student progress",
      "Automated progress tracking and reporting systems",
      "Personalized learning paths based on performance and learning style",
      "Centralized communication hub for all stakeholders"
    ],
    results: [
      "65% increase in student engagement",
      "40% improvement in assignment completion",
      "90% parent satisfaction rate",
      "35% reduction in administrative workload"
    ],
    clientFeedback:
      "The transformation in our students' engagement has been remarkable. The personalized learning approach has not only improved academic performance but also reignited their love for learning. Our educators now have more time to focus on teaching rather than administrative tasks.",
    techStack: ["AI Learning Platform", "Learning Management System", "Data Analytics Dashboard", "Communication Portal"],
    duration: "4 months",
    cost: "$75,000",
    metrics: [
      { value: "65%", label: "Student Engagement" },
      { value: "90%", label: "Parent Satisfaction" },
      { value: "35%", label: "Time Saved" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm text-white border-transparent">
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
                <Users className="h-5 w-5 mr-2" />
                <span>{caseStudy.founder}</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <BookOpen className="h-5 w-5 mr-2" />
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
                    src={mindMapImage}
                    alt="BrightPath Learning Academy - Solution Architecture"
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
                    <p className="text-4xl font-bold text-primary">{metric.value}</p>
                    <p className="mt-2 text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mr-3 mt-0.5">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700">{result}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto">
                <BeforeAfterComparison
                  before="65%"
                  after="90%"
                  label="On-Time Fee Payments"
                  improvement="+38%"
                  className="bg-blue-50/50 border-blue-100"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Results Showcase</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { src: resultImage1, alt: "Dashboard Overview", desc: "Dashboard showing student engagement metrics" },
                    { src: resultImage2, alt: "Learning Analytics", desc: "Detailed learning analytics and progress tracking" },
                    { src: resultImage3, alt: "Engagement Metrics", desc: "Engagement metrics and participation rates" },
                    { src: resultImage4, alt: "Performance Analysis", desc: "Performance analysis and improvement areas" }
                  ].map((img, index) => (
                    <div key={index} className="group">
                      <div className="bg-white p-3 rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={img.src}
                          alt={`BrightPath Results - ${img.alt}`}
                          className="w-full h-auto rounded-lg border border-gray-100 group-hover:opacity-90 transition-opacity"
                        />
                        <p className="mt-3 text-sm text-center text-gray-500">{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Client Feedback */}
          <Section title="Client Feedback">
            <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-8 rounded-2xl border border-primary/10">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl italic text-gray-700 mb-6">"{caseStudy.clientFeedback}"</p>
                  <footer className="font-medium text-gray-900">
                    — {caseStudy.founder}, Founder of {caseStudy.businessName}
                  </footer>
                </blockquote>
              </div>
            </div>
          </Section>

          {/* Project Details */}
          <Section title="Project Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-gray-500">Industry</h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">{caseStudy.industry}</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                <div className="mt-2 flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-lg font-semibold text-gray-900">{caseStudy.duration}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-gray-500">Investment</h3>
                <div className="mt-2 flex items-center">
                  <IndianRupee className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-lg font-semibold text-gray-900">{caseStudy.cost}</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Technologies */}
          <Section title="Technologies Used">
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-8 rounded-full">
                <Link to="/contact" className="flex items-center">
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 rounded-full">
                <Link to="/case-studies" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View All Case Studies
                </Link>
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
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

export default BrightPathCaseStudy;
