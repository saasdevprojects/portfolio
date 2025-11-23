
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TechStack } from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import "@/styles/embla.css";
import {
  Shield,
  FileCheck,
  Clock,
  Zap,
  Mail,
  Phone,
  MapPin,
  Users,
  Target,
  BarChart2,
  CheckCircle2,
  MessageSquare,
  Send,
  Building2,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

// Define image type for the gallery
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Gallery state
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Gallery images
  const galleryImages: GalleryImage[] = [
    { src: "/assets/case2.1.png", alt: "Case Study 2.1", category: "case-studies" },
    { src: "/assets/case2.2.png", alt: "Case Study 2.2", category: "case-studies" },
    { src: "/assets/case2.3.png", alt: "Case Study 2.3", category: "case-studies" },
    { src: "/assets/case2.4.png", alt: "Case Study 2.4", category: "case-studies" },
    { src: "/assets/screen.png", alt: "Dashboard View", category: "dashboards" },
    { src: "/assets/skyline-results-1.png", alt: "Skyline Results 1", category: "results" },
    { src: "/assets/skyline-results-2.png", alt: "Skyline Results 2", category: "results" },
    { src: "/assets/urbanvein-results-1.png", alt: "UrbanVein Results 1", category: "results" },
  ];

  // Get unique categories
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  // Filter images by active category
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  const services = [
    {
      title: "FOUNDATION SYSTEM",
      subtitle: "The AI Core",
      duration: "10-14 days",
      investment: "$2.5K-$3.5K",
      deliverables: [
        "Audit existing systems + process mapping",
        "Build core lead capture → CRM → Calendar workflow",
        "Integrate 3 tools (GoHighLevel / HubSpot / Zapier)",
        "Real-time KPI dashboard",
      ],
      outcome: "Proof-of-concept automation with documentation",
    },
    {
      title: "GROWTH SYSTEM",
      subtitle: "The Revenue Engine",
      duration: "3-5 weeks",
      investment: "$6K-$9.5K",
      deliverables: [
        "Multi-source lead capture (Meta, Google, Website, WhatsApp)",
        "LLM-based lead scoring & smart tagging",
        "AI Voice & Chat Agent with instant booking",
        "Automated nurturing via SMS + email",
        "CRM dashboards with live performance metrics",
      ],
      outcome: "Autonomous inbound engine that runs 24/7",
      featured: true,
    },
    {
      title: "SCALE SYSTEM",
      subtitle: "Intelligent Operations Suite",
      duration: "6-8 weeks",
      investment: "$15K-$25K",
      deliverables: [
        "End-to-end automation (CRM + Ads + Support + Analytics)",
        "24/7 AI receptionist (voice + chat)",
        "Multi-channel integration: email, phone, WhatsApp, social DMs",
        "AI trained on your business tone, FAQs, and SOPs",
        "Executive dashboards for Sales, Marketing, Support",
      ],
      outcome: "Self-running business backend with complete visibility",
    },
    {
      title: "ENTERPRISE SYSTEM",
      subtitle: "Autonomous Infrastructure",
      duration: "8-12 weeks",
      investment: "$30K-$75K",
      deliverables: [
        "Multi-agent orchestration with GPT / Claude / LangChain",
        "Voice, Vision, and Text intelligence",
        "RAG (Retrieval-Augmented Generation) knowledge base",
        "API-based infrastructure for proprietary data",
        "Automated weekly executive summaries",
      ],
      outcome: "Enterprise-grade AI ecosystem built for scale",
    },
  ];

  const testimonials = [
    {
      clientType: "Real Estate Agency",
      problem: "Missed leads after hours",
      solution: "AI receptionist + CRM sync",
      result: "+27%",
      metric: "booked calls",
    },
    {
      clientType: "Marketing Agency",
      problem: "Manual onboarding",
      solution: "Automated CRM + reporting",
      result: "40 hrs",
      metric: "saved per week",
    },
    {
      clientType: "SaaS Startup",
      problem: "Lead follow-up inconsistency",
      solution: "Multi-channel AI pipeline",
      result: "3.2x",
      metric: "conversion rate",
    },
    {
      clientType: "Enterprise",
      problem: "Fragmented systems",
      solution: "Custom agentic infrastructure",
      result: "65%",
      metric: "ops automated",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Trusted By Section */}
      <section className="py-10 border-y bg-muted/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            TRUSTED BY INNOVATIVE BRANDS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual client logos */}
            <div className="flex items-center gap-2 font-bold text-xl text-foreground/80">
              <Building2 className="h-6 w-6" />
              <span>MedPro</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-foreground/80">
              <Lightbulb className="h-6 w-6" />
              <span>BrightPath</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-foreground/80">
              <Target className="h-6 w-6" />
              <span>UrbanVein</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-foreground/80">
              <Building2 className="h-6 w-6" />
              <span>Skyline</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-foreground/80">
              <Handshake className="h-6 w-6" />
              <span>HavenStay</span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Work Showcase Section with Slider */}
        <section id="work" className="py-20 bg-muted/10">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Our Work
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                See Our Work in Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of successful projects and case studies
              </p>
            </div>

            {/* Enhanced Image Slider */}
            <div className="relative max-w-6xl mx-auto">
              <div className="embla overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
                <div className="embla__container flex">
                  {filteredImages.map((image, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                      <div className="relative group overflow-hidden rounded-2xl bg-background mx-4">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onClick={() => setSelectedImage(image)}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                          <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 space-y-3">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/90 text-primary-foreground mb-2 backdrop-blur-sm">
                              {image.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                            <h3 className="text-3xl font-bold text-white">{image.alt}</h3>
                            <p className="text-muted-foreground/90 flex items-center gap-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-100">
                              <span>View Project</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Navigation Buttons */}
                <button
                  onClick={scrollPrev}
                  className="embla__prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-xl hover:bg-background transition-all duration-300 hover:scale-110 hover:shadow-primary/20 hover:border-primary/20 border border-border/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={scrollNext}
                  className="embla__next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-xl hover:bg-background transition-all duration-300 hover:scale-110 hover:shadow-primary/20 hover:border-primary/20 border border-border/10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Enhanced Dots Navigation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center justify-center gap-3 p-2 bg-background/50 backdrop-blur-md rounded-full border border-border/20 shadow-lg">
                    {filteredImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                          ? 'bg-primary w-8 scale-110'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col">
              <button
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="flex-1 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                <p className="text-muted-foreground">
                  {selectedImage.category
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Client Success Section */}
        <section id="client-success" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge className="mb-4">Client Success</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Client Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section id="process" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge className="mb-4">Our Process</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Discovery to Deployment
              </h2>
              <p className="text-xl text-muted-foreground">
                A streamlined process designed for maximum efficiency
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ProcessTimeline />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4">Technology</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Tools We Master</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Best-in-class technologies for enterprise-grade automation
              </p>
              <TechStack />
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section id="quality" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4">Quality Guaranteed</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built With Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: FileCheck,
                  title: "Fully Documented",
                  description: "Visual flow maps + SOPs included",
                },
                {
                  icon: Shield,
                  title: "Data Secure",
                  description: "GDPR Compliant infrastructure",
                },
                {
                  icon: Clock,
                  title: "14-Day Warranty",
                  description: "Post-launch fixes included",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center border-accent/20 bg-gradient-card hover:shadow-accent transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center shadow-accent">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Schedule your free discovery call and get a custom automation strategy
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="group shadow-glow"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="get-in-touch" className="py-24 scroll-mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container relative z-10 px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                  Get In Touch
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-border/50">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <p className="text-muted-foreground mb-8">
                          We're here to help and answer any questions you might have.
                          Reach out and we'll respond as soon as possible.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Email Us</h4>
                            <div className="flex flex-col">
                              <a href="mailto:askupnxt@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                askupnxt@gmail.com
                              </a>
                              <a href="mailto:umangpandey077@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                umangpandey077@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Call Us</h4>
                            <div className="flex flex-col">
                              <a href="tel:7428435826" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 74284 35826
                              </a>
                              <a href="tel:9716125425" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 97161 25425
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Visit Us</h4>
                            <p className="text-muted-foreground">Noida, Uttar Pradesh</p>
                            <p className="text-muted-foreground">India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="lg:col-span-7">
                  <Card className="p-8 h-full border-border/50">
                    <h3 className="text-2xl font-semibold mb-8">Send us a message</h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium leading-none">
                            Name <span className="text-destructive">*</span>
                          </label>
                          <Input id="name" placeholder="Your name" required className="h-11" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium leading-none">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input id="email" type="email" placeholder="your@email.com" required className="h-11" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium leading-none">
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input id="subject" placeholder="How can we help you?" required className="h-11" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project..."
                          className="min-h-[140px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full h-12 text-base" size="lg">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
