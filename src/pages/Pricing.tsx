import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const pricingPlans = [
  {
    title: "Residential Basic",
    subtitle: "For apartments & small homes",
    startingPrice: "₹1,499",
    features: [
      "General pest control (cockroaches, ants)",
      "Single treatment",
      "Up to 1,500 sq ft coverage",
      "30-day warranty",
      "Safe for families & pets",
    ],
  },
  {
    title: "Residential Premium",
    subtitle: "For larger homes & villas",
    startingPrice: "₹2,999",
    popular: true,
    features: [
      "Comprehensive pest treatment",
      "Includes mosquito control",
      "Up to 3,000 sq ft coverage",
      "60-day warranty",
      "Free follow-up visit",
    ],
  },
  {
    title: "Termite Treatment",
    subtitle: "Post-construction treatment",
    startingPrice: "₹4,999",
    features: [
      "Complete termite elimination",
      "Soil & wood treatment",
      "Advanced termiticides",
      "3-year warranty",
      "Annual inspection included",
    ],
  },
];

const additionalServices = [
  { service: "Bed Bug Control", price: "Starting ₹2,499" },
  { service: "Rodent Control", price: "Starting ₹1,999" },
  { service: "Bird Netting", price: "₹45-65 per sq ft" },
  { service: "Sanitization", price: "Starting ₹1,999" },
  { service: "Commercial AMC", price: "Custom quote" },
];

const Pricing = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pricing & Plans - PestX India | Affordable Pest Control</title>
        <meta name="description" content="Transparent pest control pricing from PestX India. View our residential and commercial packages. Free inspection available. Get a custom quote today." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pricing & Plans
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Transparent, competitive pricing for all your pest control needs. Every treatment includes a free inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Residential Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Starting Prices
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prices vary based on property size, infestation level, and location. Contact us for a detailed quote after free inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.title} 
                className={`relative border-2 ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.startingPrice}</span>
                    <span className="text-muted-foreground ml-1">onwards</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.popular ? "cta" : "outline"}>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">More Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Additional Services
              </h2>
            </div>

            <div className="bg-background rounded-lg border-2 overflow-hidden">
              {additionalServices.map((item, index) => (
                <div 
                  key={item.service}
                  className={`flex justify-between items-center p-4 ${index !== additionalServices.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="text-muted-foreground">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/5 border-2 border-primary/20 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Need a Custom Quote?</h3>
              <p className="text-muted-foreground mb-4">
                For large properties, commercial spaces, or specific pest problems, we provide customized pricing after a free on-site inspection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta">
                  <Link to="/contact">
                    Request Free Inspection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+917820821488">
                    <Phone className="w-4 h-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Pricing;