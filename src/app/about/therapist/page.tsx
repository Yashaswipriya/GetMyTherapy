'use client';
import AboutSection from '@/app/components/AboutSection';
import Link from 'next/link';

export default function TherapistPage() {
return (
<Link href="/about/therapist" className="block px-4 py-2 hover:bg-gray-100">
  <section id="therapist">
            <AboutSection section='therapist' />
          </section>
</Link>
    );
}
