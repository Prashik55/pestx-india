import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bug, Home, Rat, CircleDot, Bird, SprayCan } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

export const services = [
  {
    icon: Bug,
    title: "General Pest Control",
    slug: "general-pest-control",
    description: "Complete protection against cockroaches, ants, spiders, and common household pests using safe, effective treatments.",
  },
  {
    icon: Home,
    title: "Termite Control",
    slug: "termite-control",
    description: "Advanced pre and post-construction termite treatment to protect your property from structural damage.",
  },
  {
    icon: CircleDot,
    title: "Bed Bug Control",
    slug: "bed-bug-control",
    description: "Effective bed bug elimination using heat treatment and targeted chemical applications.",
  },
  {
    icon: Bug,
    title: "Mosquito Control",
    slug: "mosquito-control",
    description: "Comprehensive mosquito management including larviciding, fogging, and source reduction.",
  },
  {
    icon: Rat,
    title: "Rodent Control",
    slug: "rodent-control",
    description: "Professional rat and mice removal using baiting, trapping, and exclusion techniques.",
  },
  {
    icon: Bug,
    title: "Lizard Control",
    slug: "lizard-control",
    description: "Safe and humane lizard repellent treatments for homes and commercial spaces.",
  },
  {
    icon: Bird,
    title: "Bird Netting & Proofing",
    slug: "bird-netting",
    description: "Humane bird control solutions including netting, spikes, and deterrent systems.",
  },
  {
    icon: SprayCan,
    title: "Sanitization & Disinfection",
    slug: "sanitization",
    description: "Professional deep cleaning and disinfection services for complete hygiene protection.",
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pest Control Services - PestX India | Complete Pest Management</title>
        <meta name="description" content="Explore PestX India's comprehensive pest control services including termite, bed bug, mosquito, rodent control and more. Professional solutions for homes and businesses." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Pest Control Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Professional pest management solutions tailored for residential and commercial properties across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg">
              At PestX India, we offer a complete range of pest control services using government-approved chemicals and eco-friendly methods. Our trained professionals ensure thorough pest elimination while prioritizing the safety of your family, pets, and employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;