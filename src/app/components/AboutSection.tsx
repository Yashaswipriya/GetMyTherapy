'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import StatsCounter from './StatsCounter';

export default function AboutPage({ section }: { section: 'therapist' | 'why-us' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const reasons = [
            {
                title: "Personalized Therapy",
                description: "Every session is tailored to your emotional needs and life goals, ensuring progress that truly matters.",
            },
            {
                title: "Licensed, Trusted Expertise",
                description: "Dr. Serena Blake brings 8+ years of experience and evidence-based care to every client interaction.",
            },
            {
                title: "Flexible & Confidential Sessions",
                description: "Attend therapy securely from anywhere, fitting easily into your schedule without compromising privacy.",
            }
        ];

  return (
    <>
    {section === "therapist" && (
    <section id = "therapist"
      ref={ref}
      className="bg-[#f9f5f0] min-h-screen flex flex-col justify-center items-center px-4 md:flex-row md:justify-between md:items-center max-w-7xl mx-auto py-16"
    >
      {/* Left:Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mb-8 md:mb-0"
      >
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px]">
            <Image
                src="/therapist.webp"
                alt="Dr. Serena Blake"
                fill
                className="object-contain object-center"
                priority
            />
        </div>

      </motion.div>

      {/* Right:Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 md:pl-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#072c27] mb-4">Meet Dr. Serena Blake</h2>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
          She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety,
          strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
          creating a safe, supportive space for you to thrive.
        </p>
      </motion.div>
    </section>
    )}

    {section === "why-us" && (
     <section className="bg-[#dfd7d0] py-10 px-6 pt-30" id = "why-us">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#072c27] mb-4"
      >
        Why Choose Us
      </motion.h2>

      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#daa55b] to-[#072c27] rounded-full mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center mb-14"
      >
        <StatsCounter />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          ><div className='flex space-x-2'>
            <CheckCircle className="text-[#daa55b] mb-4" size={28} />
            <h3 className="text-xl font-semibold text-[#072c27] mb-2">{reason.title}</h3>
            </div>
            <p className="text-gray-700 text-md">{reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    )}
    </>
  );
}