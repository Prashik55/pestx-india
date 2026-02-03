import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>PestX India - Advanced Pest Control Solutions Across India</title>
        <meta name="description" content="PestX India offers professional, eco-friendly pest control services for homes and businesses. Expert termite, bed bug, mosquito, and rodent control with warranty-backed treatments." />
        <meta name="keywords" content="pest control India, termite control, bed bug treatment, mosquito control, rodent control, professional pest management" />
      </Helmet>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;