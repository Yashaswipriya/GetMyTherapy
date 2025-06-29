'use client';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Header from '@/app/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <HeroSection />
        <section id="therapist">
          <AboutSection section='therapist'/>
        </section>
        <section id="why-us">
          <AboutSection section = 'why-us' />
        </section>
        <ServicesSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}

