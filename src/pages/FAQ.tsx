import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";

const faqs = [
  {
    question: "Is pest control safe for my family and pets?",
    answer: "Yes, all our treatments use government-approved chemicals that are safe for humans and pets when applied correctly. Our technicians are trained to apply treatments in a way that minimizes exposure. For certain treatments, we may recommend temporary evacuation (usually 2-4 hours) as a precaution, and we always provide clear safety instructions. We also offer eco-friendly and organic treatment options for those who prefer them."
  },
  {
    question: "How long does a pest control treatment last?",
    answer: "The duration of effectiveness depends on the type of pest and treatment. General pest control typically provides protection for 30-60 days. Termite treatments can last 3-5 years with proper application. Bed bug treatments require follow-up visits but can provide long-term relief once the infestation is eliminated. We provide specific timelines for each service and offer maintenance packages for ongoing protection."
  },
  {
    question: "Do you provide warranty on pest control services?",
    answer: "Yes, we provide warranty on all our pest control services. The warranty period varies by service: General Pest Control (30-60 days), Termite Control (3-5 years), Bed Bug Control (90 days with follow-up), Rodent Control (90 days). If you notice any pest activity during the warranty period, we'll provide free re-treatment. Terms and conditions apply, and our team will explain the warranty details for your specific service."
  },
  {
    question: "Are the chemicals used harmful to the environment?",
    answer: "We are committed to environmental responsibility. Our chemicals are selected based on their effectiveness and minimal environmental impact. We use targeted application methods to reduce the amount of chemical used. For clients who prefer greener options, we offer eco-friendly and organic pest control solutions that use natural repellents and biological controls. Our integrated pest management approach also focuses on prevention and physical controls alongside chemical treatments."
  },
  {
    question: "How soon can you schedule a service?",
    answer: "We offer same-day and next-day service in most major cities across India. For emergency pest problems like bed bugs or rodent infestations, we prioritize quick response. Regular appointments can typically be scheduled within 24-48 hours. To schedule a service, call us at (+91) 7820821488 or fill out our contact form online, and our team will get back to you promptly."
  },
  {
    question: "What should I do before a pest control treatment?",
    answer: "We'll provide specific preparation instructions based on the type of treatment. Generally, we recommend: clearing kitchen counters and covering food items, pulling furniture slightly away from walls for spray treatments, covering fish tanks and removing pets during treatment, storing children's toys, and ensuring good ventilation after treatment. Our team will guide you through the preparation process when you schedule your appointment."
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer: "For most treatments like gel baiting and targeted sprays, you don't need to leave. For certain treatments like fogging or extensive chemical sprays, we recommend leaving for 2-4 hours. We always inform you in advance if evacuation is recommended and provide clear instructions on when it's safe to return. Your safety is our top priority."
  },
  {
    question: "How do you determine the price for pest control?",
    answer: "Our pricing is based on several factors: the type of pest, size of the property (sq ft), severity of infestation, type of treatment required, and location. We provide transparent pricing after a free inspection of your property. There are no hidden charges, and you'll receive a detailed quote before we begin any treatment. We also offer discounted rates for annual maintenance contracts."
  },
  {
    question: "Do you offer services for commercial properties?",
    answer: "Yes, we have a dedicated commercial pest control division that serves offices, restaurants, hotels, hospitals, warehouses, factories, and food processing facilities. We offer Annual Maintenance Contracts (AMC) with regular scheduled visits, emergency response, and complete documentation for regulatory compliance. Our commercial team understands industry-specific requirements and provides tailored solutions."
  },
  {
    question: "What cities do you serve?",
    answer: "PestX India provides services across all major cities in India including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, and many more tier-2 and tier-3 cities. We're constantly expanding our coverage. Contact us to check if we serve your area."
  }
];

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ - PestX India | Pest Control Questions Answered</title>
        <meta name="description" content="Get answers to common pest control questions. Learn about treatment safety, warranties, pricing, and more from PestX India's FAQ page." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Find answers to common questions about our pest control services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-muted border-2 border-transparent hover:border-primary/20 rounded-lg px-6 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <a 
                href="tel:+917820821488" 
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                Call us at (+91) 7820821488
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default FAQ;