import HeroSection from '@/components/partials/HeroSection';
import AboutSection from '@/components/partials/AboutSection';
import WorksSection from '@/components/partials/WorksSection';
import ServicesSection from '@/components/partials/ServicesSection';
import ContactSection from '@/components/partials/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      <section className="container py-16">
        <WorksSection />
      </section>
      <section className="container py-16">
        <ServicesSection />
      </section>
      <section className="container py-16">
        <ContactSection />
      </section>
    </>
  );
}
