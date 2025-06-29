'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroPage() {
  return (
    <section id ="hero" className="h-screen w-full relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.avif"
          alt="Therapy background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-4"
        >
          Healing begins when you feel heard
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base font-light mb-8 max-w-xl"
        >
          Licensed therapy that centers your comfort, confidentiality, and personal growth — every step of the way.
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#072c27] px-6 py-3 rounded-full font-semibold shadow-md transition-transform"
        >
          Book an Appointment Now
        </motion.button>
      </div>
    </section>
  );
}