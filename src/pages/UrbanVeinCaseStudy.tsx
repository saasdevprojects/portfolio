import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  IndianRupee,
  ShoppingBag,
  BarChart,
  TrendingUp,
  Package,
  Tag,
} from "lucide-react";

import mindMapImage from "@/assets/urbanvein-mindmap.png";
import resultImage1 from "@/assets/urbanvein-results-1.png";
import resultImage2 from "@/assets/urbanvein-results-2.png";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";

const UrbanVeinCaseStudy = () => {
  const caseStudy = {
    title: "UrbanVein Retail Co.",
    businessName: "UrbanVein Retail Co.",
    founder: "Jason Miller",
    location: "Chicago, IL",
    industry: "Retail & E-commerce",
    summary:
      "Boosted online sales by 120% with AI-powered product recommendations and personalized shopping experiences.",
    clientBackground:
      "Founded by Jason Miller in Chicago, UrbanVein Retail Co. is a forward-thinking e-commerce platform specializing in curated lifestyle products. Facing intense competition in the digital retail space, UrbanVein sought to enhance customer experience and boost sales through data-driven personalization.",
    challenges: [
      "Low conversion rates on product pages",
      "High cart abandonment rates",
      "Ineffective product discovery for customers",
      "Limited personalization in marketing campaigns"
    ],
    goal: "To implement an AI-driven recommendation engine that delivers personalized shopping experiences, increases average order value, and improves customer retention.",
    solutions: [
      "Deployed machine learning algorithms for personalized product recommendations",
      "Implemented real-time behavioral tracking to understand customer preferences",
      "Created dynamic product bundles based on shopping patterns",
      "Developed a recommendation engine that improves with each interaction"
    ],
    results: [
      "120% increase in online sales within 3 months",
      "45% higher average order value from recommended products",
      "35% reduction in cart abandonment rates",
      "28% increase in customer retention"
    ],
    clientFeedback:
      "The AI-powered recommendations have completely transformed our e-commerce performance. We're seeing customers engage more deeply with our products and make purchases we wouldn't have expected. The system continues to learn and improve, making it an invaluable asset to our business.",
    techStack: ["AI/ML Recommendation Engine", "Real-time Analytics", "E-commerce Platform Integration", "Customer Data Platform"],
    duration: "3 months",
    cost: "$65,000",
    metrics: [
      { value: "120%", label: "Online Sales" },
      { value: "45%", label: "AOV" },
      { value: "35%", label: "Cart Abandonment" },
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
                <ShoppingBag className="h-4 w-4 mr-1" />
                <span>{caseStudy.founder}</span>
              </div>
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-1" />
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

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Experience Flow Mind Map</h3>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <img
                  src={mindMapImage}
                  alt="UrbanVein Retail Co. - Experience Flow Mind Map"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
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
                before="$55"
                after="$80"
                label="Average Order Value"
                improvement="+45%"
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

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Results Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    src: resultImage1,
                    alt: "Personalized Recommendations Dashboard",
                    desc: "AI-driven product recommendations tailored to customer behavior",
                  },
                  {
                    src: resultImage2,
                    alt: "Conversion Funnel Analytics",
                    desc: "Real-time analytics dashboard highlighting sales performance",
                  },
                ].map((image, index) => (
                  <div key={index} className="group">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-shadow group-hover:shadow-md">
                      <img
                        src={image.src}
                        alt={`UrbanVein Retail Co. - ${image.alt}`}
                        className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
                      />
                      <p className="px-4 py-3 text-sm text-center text-gray-500">{image.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default UrbanVeinCaseStudy;
