import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock, Award } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

interface ServiceData {
  title: string;
  metaDescription: string;
  problem: string;
  solution: string;
  process: string[];
  safetyMeasures: string[];
  warranty: string;
}

const serviceData: Record<string, ServiceData> = {
  "general-pest-control": {
    title: "General Pest Control",
    metaDescription: "Professional general pest control services in India. Effective treatment for cockroaches, ants, spiders, and common household pests.",
    problem: "Common household pests like cockroaches, ants, spiders, and silverfish can infest your home, spreading diseases, contaminating food, and causing property damage. These pests multiply rapidly and can be difficult to eliminate without professional help.",
    solution: "PestX India offers comprehensive general pest control using a combination of gel baiting, spray treatment, and preventive measures. Our integrated pest management approach targets pests at all life stages while being safe for your family and pets.",
    process: [
      "Thorough inspection of your property to identify pest types and infestation levels",
      "Identification of entry points and harborage areas",
      "Application of targeted gel baits in kitchen and bathroom areas",
      "Residual spray treatment along baseboards, cracks, and crevices",
      "Dusting treatment in wall voids and electrical outlets",
      "Follow-up visit to assess effectiveness and reapply if needed"
    ],
    safetyMeasures: [
      "Use of government-approved, low-toxicity chemicals",
      "Gel baits are placed in hidden areas away from children and pets",
      "No evacuation required during treatment",
      "All products are odorless and leave no stains"
    ],
    warranty: "Our general pest control treatment comes with a 60-day warranty. If you notice any pest activity within this period, we'll provide a free re-treatment."
  },
  "termite-control": {
    title: "Termite Control",
    metaDescription: "Expert termite control and treatment in India. Pre and post-construction anti-termite solutions to protect your property from structural damage.",
    problem: "Termites are silent destroyers that can cause extensive structural damage to buildings before being detected. They feed on wood, paper, and cellulose materials, potentially compromising the integrity of your property and leading to costly repairs.",
    solution: "PestX India provides comprehensive termite control solutions including pre-construction anti-termite treatment for new buildings and post-construction treatment for existing structures. We use advanced termiticides that create a protective barrier around your property.",
    process: [
      "Detailed termite inspection using moisture meters and visual assessment",
      "Identification of termite species and colony locations",
      "Drilling holes along the foundation perimeter (for post-construction)",
      "Injection of premium termiticide into the soil",
      "Treatment of wooden fixtures and furniture if infested",
      "Sealing of drill holes and cleanup",
      "Annual inspection and maintenance recommendations"
    ],
    safetyMeasures: [
      "Use of CIBRC-approved termiticides",
      "Professional application by trained technicians",
      "Treatment creates an invisible, odorless barrier",
      "Safe for occupants and pets after drying"
    ],
    warranty: "Our termite control comes with an industry-leading 5-year warranty for pre-construction treatment and a 3-year warranty for post-construction treatment, with annual inspections included."
  },
  "bed-bug-control": {
    title: "Bed Bug Control",
    metaDescription: "Effective bed bug treatment and elimination in India. Professional heat and chemical treatment to remove bed bugs from homes and hotels.",
    problem: "Bed bugs are nocturnal pests that feed on human blood, causing itchy bites, allergic reactions, and sleep disturbances. They hide in mattress seams, furniture cracks, and wall joints, making them difficult to eliminate without professional intervention.",
    solution: "PestX India employs a multi-pronged approach to bed bug control, combining heat treatment, residual sprays, and mattress encasements. Our thorough treatment ensures elimination of bed bugs at all life stages, from eggs to adults.",
    process: [
      "Comprehensive inspection of sleeping areas, furniture, and hiding spots",
      "Identification of infestation severity and spread",
      "Steam treatment of mattresses, sofas, and upholstery",
      "Application of residual insecticide to cracks and crevices",
      "Treatment of bed frames and headboards",
      "Installation of mattress encasements (optional)",
      "Follow-up treatment after 15 days"
    ],
    safetyMeasures: [
      "Non-toxic heat treatment option available",
      "Chemicals applied to non-contact surfaces only",
      "Thorough ventilation before room reoccupation",
      "Clear pre and post-treatment instructions provided"
    ],
    warranty: "Our bed bug treatment comes with a 90-day warranty. The service includes a mandatory follow-up treatment to ensure complete elimination."
  },
  "mosquito-control": {
    title: "Mosquito Control",
    metaDescription: "Professional mosquito control services in India. Protect your family from dengue, malaria, and other mosquito-borne diseases.",
    problem: "Mosquitoes are not just a nuisance—they're carriers of deadly diseases like dengue, malaria, chikungunya, and Zika virus. Standing water, poor drainage, and warm climates create ideal breeding conditions for these disease vectors.",
    solution: "PestX India provides comprehensive mosquito control combining larviciding, adulticiding, and source reduction. Our integrated approach targets mosquitoes at all life stages while providing long-lasting protection for your property.",
    process: [
      "Survey of property to identify breeding sites",
      "Larvicide treatment of stagnant water sources",
      "Fogging or misting treatment for adult mosquitoes",
      "Residual spray on walls and vegetation",
      "Installation of mosquito traps (for commercial properties)",
      "Recommendations for source reduction and prevention"
    ],
    safetyMeasures: [
      "Use of WHO-recommended insecticides",
      "Fogging conducted during low-wind conditions",
      "Advance notice to residents for outdoor treatments",
      "Safe for plants and non-target insects when applied correctly"
    ],
    warranty: "Our mosquito control service provides protection for 30-45 days per treatment. We offer monthly maintenance packages for continuous protection during monsoon season."
  },
  "rodent-control": {
    title: "Rodent Control",
    metaDescription: "Expert rodent and rat control services in India. Professional trapping, baiting, and exclusion to eliminate rats and mice.",
    problem: "Rats and mice contaminate food, spread diseases like leptospirosis and hantavirus, and cause significant property damage by gnawing on wires, pipes, and structures. They reproduce rapidly, and a small problem can quickly become a major infestation.",
    solution: "PestX India offers integrated rodent management combining baiting, trapping, and exclusion techniques. We focus on both elimination and prevention to ensure long-term rodent-free conditions.",
    process: [
      "Inspection to identify rodent species, entry points, and activity areas",
      "Placement of tamper-resistant bait stations in strategic locations",
      "Installation of snap traps or glue boards where appropriate",
      "Sealing of entry points with rodent-proof materials",
      "Removal of dead rodents and sanitization",
      "Regular monitoring and bait replenishment"
    ],
    safetyMeasures: [
      "Tamper-resistant bait stations prevent access by children and pets",
      "Bait stations placed in concealed areas",
      "Dead rodent disposal handled hygienically",
      "Recommendations for food storage and sanitation"
    ],
    warranty: "Our rodent control service includes a 90-day warranty with regular monitoring visits. Extended annual maintenance contracts are available for commercial properties."
  },
  "lizard-control": {
    title: "Lizard Control",
    metaDescription: "Humane lizard control and repellent services in India. Safe treatments to keep lizards away from your home.",
    problem: "While lizards help control insects, their droppings can contaminate surfaces, and their presence can be unsettling for many homeowners. Lizards often enter homes through gaps and are attracted by insects and warmth.",
    solution: "PestX India provides humane lizard control solutions that repel lizards without harming them. Our approach combines repellent treatments with recommendations for reducing lizard attractants in your home.",
    process: [
      "Inspection to identify entry points and areas of activity",
      "Application of natural lizard repellents around windows and doors",
      "Treatment of wall surfaces with deterrent solutions",
      "Sealing of gaps and crevices where lizards enter",
      "Reduction of insect populations (lizard food source)",
      "Follow-up visit to assess effectiveness"
    ],
    safetyMeasures: [
      "Use of natural, non-toxic repellent formulations",
      "No harm to lizards—they are simply deterred",
      "Safe for use in kitchens and food preparation areas",
      "No residual odor or staining"
    ],
    warranty: "Our lizard control treatment provides protection for 45-60 days. Results may vary based on the property's surroundings and insect population."
  },
  "bird-netting": {
    title: "Bird Netting & Proofing",
    metaDescription: "Professional bird netting and proofing solutions in India. Humane bird control for buildings, warehouses, and balconies.",
    problem: "Birds like pigeons and crows can create significant problems for buildings, including unsightly droppings, health hazards, noise pollution, and damage to structures. Their nests can block drains and create fire hazards.",
    solution: "PestX India provides humane bird control solutions including high-quality netting, spikes, and deterrent systems. Our bird-proofing installations are durable, aesthetically pleasing, and effective in preventing bird roosting and nesting.",
    process: [
      "Site assessment to understand bird species and problem areas",
      "Custom measurement and planning for netting installation",
      "Installation of UV-resistant, durable nylon or polyethylene nets",
      "Fitting of bird spikes on ledges and surfaces where appropriate",
      "Installation of bird deterrent gels or visual deterrents if needed",
      "Cleanup of existing bird droppings and nest removal"
    ],
    safetyMeasures: [
      "Nets and spikes are designed to deter, not harm birds",
      "Professional installation ensures safety at heights",
      "Materials are weather-resistant and long-lasting",
      "Aesthetically designed to blend with building architecture"
    ],
    warranty: "Our bird netting comes with a 2-year warranty on materials and 1-year warranty on installation. Annual maintenance contracts are available."
  },
  "sanitization": {
    title: "Sanitization & Disinfection",
    metaDescription: "Professional sanitization and disinfection services in India. Deep cleaning for homes, offices, and commercial spaces.",
    problem: "Harmful pathogens, bacteria, and viruses can survive on surfaces for extended periods, posing health risks to occupants. Regular cleaning may not eliminate these invisible threats, especially in high-traffic areas.",
    solution: "PestX India offers professional sanitization and disinfection services using hospital-grade disinfectants. Our comprehensive treatment eliminates 99.9% of pathogens, creating a safe and hygienic environment for your family or employees.",
    process: [
      "Pre-treatment cleaning of visible dirt and debris",
      "Preparation of EPA-approved disinfectant solutions",
      "ULV fogging or electrostatic spray application",
      "Targeted wipe-down of high-touch surfaces",
      "Treatment of air vents and HVAC systems",
      "Post-treatment ventilation and drying",
      "Provision of sanitization certificate"
    ],
    safetyMeasures: [
      "Use of WHO and EPA-approved disinfectants",
      "Non-toxic formulations safe for occupied spaces",
      "Technicians wear full PPE during application",
      "Brief evacuation recommended during treatment only"
    ],
    warranty: "Our sanitization service provides immediate protection. For ongoing hygiene, we offer weekly and monthly maintenance packages for commercial properties."
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{service.title} - PestX India</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/services" className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-4 transition-colors">
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Problem */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground text-lg">{service.problem}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg">{service.solution}</p>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Treatment Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety */}
            <div className="mb-12 bg-muted p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Safety Measures</h2>
              </div>
              <ul className="space-y-3">
                {service.safetyMeasures.map((measure, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warranty */}
            <div className="mb-12 bg-primary/5 border-2 border-primary/20 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Warranty</h2>
              </div>
              <p className="text-muted-foreground">{service.warranty}</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="xl" variant="cta">
                <Link to="/contact">
                  Schedule Inspection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceDetail;