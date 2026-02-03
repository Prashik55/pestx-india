import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Shield, Target, Heart, Users, Award, Leaf } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety of your family, pets, and employees in every treatment we provide.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Our targeted approach ensures maximum pest elimination with minimal environmental impact.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that work.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified professionals bring years of experience and ongoing training to every job.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We stand behind our work with warranties and follow-up services to ensure lasting results.",
  },
  {
    icon: Leaf,
    title: "Eco-Responsibility",
    description: "We use environmentally responsible methods that protect both people and planet.",
  },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - PestX India | Professional Pest Control Company</title>
        <meta name="description" content="Learn about PestX India's mission to create pest-free environments across India. Discover our values, expertise, and commitment to safe, effective pest control." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About PestX India
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Your trusted partner in creating pest-free environments for homes and businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Leading the Fight Against Pests Since 2010
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PestX India was founded with a simple mission: to provide safe, effective, and affordable pest control solutions to every home and business in India. What started as a small operation in Mumbai has grown into a nationwide network of pest management professionals.
                </p>
                <p>
                  Over the years, we have helped thousands of customers reclaim their spaces from unwanted pests. From residential apartments to large industrial facilities, our team has tackled every challenge with expertise and dedication.
                </p>
                <p>
                  Today, PestX India stands as one of India's most trusted pest control brands, known for our commitment to safety, innovation, and customer satisfaction. We continue to invest in the latest technologies and training to stay ahead of evolving pest challenges.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide comprehensive, environmentally responsible pest management solutions that protect the health and property of our customers. We strive to deliver exceptional service through innovative techniques, trained professionals, and a commitment to customer satisfaction.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a pest-free India where every home and business can thrive without the health risks and property damage caused by pests. We envision a future where sustainable pest management practices protect both people and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;