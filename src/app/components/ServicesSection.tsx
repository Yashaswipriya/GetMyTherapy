'use client';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import anxietyAnimation from '@/app/lotties/anxiety.json';
import relationshipAnimation from '@/app/lotties/relationship.json';
import traumaAnimation from '@/app/lotties/trauma.json';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      "We understand how overwhelming anxiety and chronic stress can feel, from racing thoughts to constant restlessness. Our therapy focuses on helping you identify triggers, challenge negative thought patterns, and adopt practical coping techniques. Using evidence-based methods like Cognitive Behavioral Therapy (CBT) and mindfulness practices, we guide you in regaining a sense of control and calm in your everyday life.",
    animation: anxietyAnimation,
  },
  {
    title: 'Relationship Counseling',
    description:
      "Healthy relationships are built on understanding, trust, and communication. Yet, even the strongest bonds can encounter periods of distance, miscommunication, or unresolved tension.Our counseling services support both couples and individuals in navigating these challenges with compassion and clarity. We help uncover underlying patterns, strengthen emotional connection, and develop healthier ways to express needs and handle conflict.",
    animation: relationshipAnimation,
  },
  {
    title: 'Trauma Recovery',
    description:
      "Recovering from trauma is not about “getting over it”; it’s about healing at your own pace in a space where you feel safe and supported. We use trauma-informed, evidence-based therapy to help you rebuild trust and regain your sense of safety and resilience.You're not alone, we're here to walk with you every step of the way,, offering compassion, understanding, and tools to help you feel whole again.",
    animation: traumaAnimation,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 px-6 bg-[#f9f6f1] scroll-mt-20">
      <h2 className="text-4xl font-bold text-center text-[#072c27] mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center px-4"
          >
            <h3 className="text-xl font-semibold text-[#072c27] mb-4">{service.title}</h3>
            <Lottie animationData={service.animation} loop autoplay className="w-52 h-52 mb-4" />
            <p className="text-gray-700 text-md">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

