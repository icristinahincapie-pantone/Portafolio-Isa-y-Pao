import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/CaseStudies";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <CaseStudies />
      <Team />
      <Methodology />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
