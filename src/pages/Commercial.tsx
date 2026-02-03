import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, UtensilsCrossed, Hotel, Factory, Warehouse, FileText, Shield, Clock } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const industries = [
  {
    icon: Building2,
    title: "Offices & Corporate Buildings",
    description: "Maintain a professional, pest-free workplace for employees and visitors.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Food Services",
    description: "Protect your reputation with stringent pest control that meets health regulations.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Ensure guest satisfaction with discreet, effective pest management.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Factories",
    description: "Prevent pest-related contamination and maintain production quality.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    description: "Protect stored goods from rodents, insects, and other pests.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Annual Maintenance Contracts (AMC)",
    description: "Cost-effective, scheduled pest control with regular visits and priority service for any issues.",
  },
  {
    icon: Shield,
    title: "Compliance & Documentation",
    description: "Full documentation for health and safety audits, including treatment certificates and inspection reports.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Service scheduled around your business hours to minimize disruption to operations.",
  },
];

const Commercial = () => {
  return (
    <Layout>
      <Helmet>
        <title>Commercial Pest Control Services - PestX India | Business Solutions</title>
        <meta name="description" content="Professional commercial pest control for offices, restaurants, hotels, factories, and warehouses. AMC contracts, compliance documentation, and industry-specific solutions." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Commercial Pest Control Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Protect your business, employees, and customers with professional pest management tailored to your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Tailored Solutions for Every Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand that every industry has unique pest control requirements. Our commercial team develops customized solutions based on your specific needs, regulations, and operational constraints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card key={industry.title} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Business Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Businesses Choose PestX India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-background p-8 rounded-lg border-2">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">AMC Packages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Annual Maintenance Contracts
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Annual Maintenance Contracts provide comprehensive pest protection with predictable costs and priority service. AMC customers benefit from:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Regular scheduled visits (monthly, bi-monthly, or quarterly)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Free emergency call-outs between scheduled visits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Discounted rates on additional services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Detailed service reports and documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Dedicated account manager
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact">
                  Request AMC Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Compliance & Safety Standards</h3>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">FSSAI Compliance</h4>
                  <p className="text-sm text-muted-foreground">Our treatments meet all Food Safety and Standards Authority of India requirements for food handling establishments.</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">ISO Standards</h4>
                  <p className="text-sm text-muted-foreground">Pest management protocols aligned with ISO 22000 and HACCP requirements.</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Audit Support</h4>
                  <p className="text-sm text-muted-foreground">Documentation and support for third-party audits and inspections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Commercial;