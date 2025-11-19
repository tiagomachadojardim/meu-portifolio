import HeroSection from '@/components/partials/HeroSection';
import AboutSection from '@/components/partials/AboutSection';
import LiveProjectsSection from '@/components/partials/LiveProjectsSection';
import TechStackSection from '@/components/partials/TechStackSection';
import StatsSection from '@/components/partials/StatsSection';
import ServicesSection from '@/components/partials/ServicesSection';
import ContactSection from '@/components/partials/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container pt-20 pb-10" id="about">
        <AboutSection />
      </section>
      <LiveProjectsSection />
      <TechStackSection />
      <StatsSection />
      <section className="container py-16">
        <ServicesSection />
      </section>
      <section className="container py-16" id="contact">
        <ContactSection />
      </section>
    </>
  );
}
