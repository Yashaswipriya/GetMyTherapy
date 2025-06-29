'use client';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function StatsCounter() {
  const stats = [
    { label: 'Years Experience', value: 8 },
    { label: 'Individual Client Sessions', value: 500 },
    { label: 'Therapists Onboarded', value: 120 },
    { label: 'Avg Rating', value: 4.9, suffix: '★' },
  ];

  return (
    <section className="bg-[#dfd7d0] py-2 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-extrabold text-white tracking-tight">
              <span className='text-[#c98e47] text-5xl font-bold text-[#064e3b]' style={{ fontFamily: '"Playfair Display", serif' }}>
                <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix || '+'}
              />
              </span>
            </h3>
            <p className="mt-2 text-sm font-medium text-[#daa55b] uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

