import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import ValueShift from "@/components/landing/ValueShift";
import HowItWorks from "@/components/landing/HowItWorks";
import DailyUpdateCard from "@/components/landing/DailyUpdateCard";
import WhoItsFor from "@/components/landing/WhoItsFor";
import EarlyAccessCTA from "@/components/landing/EarlyAccessCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ValueShift />
      <HowItWorks />
      <DailyUpdateCard />
      <WhoItsFor />
      <EarlyAccessCTA />
      <Footer />
    </main>
  );
};

export default Index;
