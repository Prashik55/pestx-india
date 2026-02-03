import { 
  Shield, 
  Users, 
  Leaf, 
  Clock, 
  Award, 
  IndianRupee 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Govt-Approved Chemicals",
    description: "We use only government-approved, safe chemicals that are effective yet harmless to humans and pets.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our team consists of certified pest control experts with years of experience in the field.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Treatments",
    description: "We prioritize environmentally friendly solutions that protect both your family and nature.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Emergency pest problems? We offer same-day service in most cities across India.",
  },
  {
    icon: Award,
    title: "Warranty-Backed Services",
    description: "All our treatments come with a service warranty for your complete peace of mind.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Quality pest control doesn't have to break the bank. We offer competitive, transparent pricing.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The PestX India Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering the highest quality pest control services with 
            a focus on safety, effectiveness, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex gap-4 p-6 bg-background rounded-lg border-2 border-transparent hover:border-primary/20 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}