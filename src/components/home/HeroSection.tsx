import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ customers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Advanced Pest Control Solutions Across{" "}
              <span className="text-accent">India</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              PestX India delivers professional, eco-friendly pest management for homes and businesses. 
              Our certified experts use government-approved methods to protect your space from all types of pests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book Free Inspection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/pricing">Get Quote</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-primary-foreground/80">
              {["Govt-Approved", "Eco-Friendly", "Warranty Backed"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-accent/20 rounded-full absolute -top-4 -left-4" />
              <div className="w-80 h-80 bg-primary-foreground/10 rounded-full relative flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold text-accent mb-2">99%</div>
                  <div className="text-primary-foreground/80 font-medium">Pest Elimination Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}