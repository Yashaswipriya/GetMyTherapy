'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jessica M.',
    text: "Dr. Blake truly changed my life. I felt heard, understood, and supported through every step of my healing journey.",
  },
  {
    name: 'Aaron L.',
    text: "The virtual sessions fit my schedule perfectly. Therapy felt personal, even online. Highly recommend.",
  },
  {
    name: 'Maya R.',
    text: "I’ve been to therapy before, but never felt this safe and empowered. The personalized care made all the difference.",
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-[#f9f5f0] py-10 px-6 md:px-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-[#072c27] mb-12">
        What Clients Say
      </h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-8 relative"
          >
            <p className="text-gray-800 text-lg md:text-xl italic mb-4">
              “{testimonial.text}”
            </p>
            <p className="text-[#daa55b] font-semibold text-right">— {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

