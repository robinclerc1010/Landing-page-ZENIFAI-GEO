import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import WhyNow from "@/components/WhyNow";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import CaseStudy from "@/components/CaseStudy";
import ForWho from "@/components/ForWho";
import Differentiation from "@/components/Differentiation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <WhyNow />
      <Services />
      <Methodology />
      <CaseStudy />
      <ForWho />
      <Differentiation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
