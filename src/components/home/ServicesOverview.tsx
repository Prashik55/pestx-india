import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bug, 
  Home, 
  Rat, 
  CircleDot, 
  Bird, 
  SprayCan,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "General Pest Control",
    description: "Complete protection against cockroaches, ants, spiders, and common household pests.",
    href: "/services/general-pest-control",
  },
  {
    icon: Home,
    title: "Termite Control",
    description: "Advanced termite treatment to protect your property from structural damage.",
    href: "/services/termite-control",
  },
  {
    icon: CircleDot,
    title: "Bed Bug Control",
    description: "Effective bed bug elimination using heat treatment and safe chemicals.",
    href: "/services/bed-bug-control",
  },
  {
    icon: Bug,
    title: "Mosquito Control",
    description: "Comprehensive mosquito management for a disease-free environment.",
    href: "/services/mosquito-control",
  },
  {
    icon: Rat,
    title: "Rodent Control",
    description: "Professional rodent removal and prevention strategies.",
    href: "/services/rodent-control",
  },
  {
    icon: Bird,
    title: "Bird Netting",
    description: "Humane bird control solutions for buildings and warehouses.",
    href: "/services/bird-netting",
  },
  {
    icon: Bug,
    title: "Lizard Control",
    description: "Safe and effective lizard repellent treatments.",
    href: "/services/lizard-control",
  },
  {
    icon: SprayCan,
    title: "Sanitization",
    description: "Deep cleaning and disinfection for homes and commercial spaces.",
    href: "/services/sanitization",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential to commercial, we offer tailored pest management services 
            to keep your space safe and pest-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}