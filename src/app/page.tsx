import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Services />
      <Portfolio />
      <FinalCTA />
      <Contact />
    </>
  );
}
