import { ClipboardCheck, FileText, Zap, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Inspection",
    description: "Our experts conduct a thorough inspection of your property to identify pest types, infestation levels, and entry points.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Treatment Plan",
    description: "Based on the inspection, we create a customized treatment plan tailored to your specific pest problem and property type.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Execution",
    description: "Our trained technicians execute the treatment plan using the most effective and safe methods available.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Follow-up Support",
    description: "We provide ongoing support and follow-up visits to ensure complete pest elimination and prevention.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures thorough pest elimination and long-term protection for your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-accent font-bold text-sm mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}