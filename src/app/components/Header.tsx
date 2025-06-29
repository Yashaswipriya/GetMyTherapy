'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[#f9f5f0] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-[#3e3028]">
      <Link href="#hero">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src="/logo.png" alt="Logo" width={48} height={48} />
        <h1 className="text-xl font-bold text-[#8b5e3c]">
          Dr. Serena Blake<br />
          Psychological Services
        </h1>
      </div>
    </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12 font-medium text-lg text-bold">
          <li className="relative group">
              <div className="cursor-pointer hover:underline text-[#8b5e3c] underline-offset-4 transition font-garamond">
                About ▾
              </div>

              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <ul className="py-1">
                  <li>
                    <Link href="#therapist" className="block px-4 py-2 hover:bg-gray-100 text-[#8b5e3c]">
                      Therapist
                    </Link>
                  </li>
                  <li>
                    <Link href="#why-us" className="block px-4 py-2 hover:bg-gray-100 text-[#8b5e3c]">
                      Why Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          <li><Link href="#services" className="hover:underline text-[#8b5e3c]">Services</Link></li>
          <li><Link href="#faq" className="hover:underline text-[#8b5e3c]">FAQ</Link></li>
          <li><Link href="#testimonials" className="hover:underline text-[#8b5e3c]">Testimonials</Link></li>
          <li><Link href="#contact" className="hover:underline text-[#8b5e3c]">Contact</Link></li>
        </ul>
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 text-[#072c27] bg-white shadow-md">
          <ul className="space-y-2 font-medium text-sm">
            <li className="relative">
              <details className="group">
                <summary className="cursor-pointer hover:underline underline-offset-4">About </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link href="#therapist" className="block hover:underline">Therapist</Link>
                  </li>
                  <li>
                    <Link href="#why-us" className="block hover:underline">Why Us</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link href="#services" className="block hover:underline">Services</Link></li>
            <li><Link href="#faq" className="block hover:underline">FAQ</Link></li>
            <li><Link href="#testimonials" className="block hover:underline">Testimonials</Link></li>
            <li><Link href="#contact" className="block hover:underline">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
