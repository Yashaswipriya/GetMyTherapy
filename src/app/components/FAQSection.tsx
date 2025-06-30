'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
    question: 'What are your session fees?',
    answer: 'Individual sessions are $200. Couples sessions are $240.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes, all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className=" mx-auto px-4 py-10 bg-[#dfd7d0] w-full scroll-mt-20">
      <h2 className="text-3xl font-bold text-center text-[#072c27] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-600 pb-4">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left font-semibold text-[#072c27] text-lg"
            >
              {faq.question}
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === i && (
              <p className="mt-2 text-gray-700 text-lg transition-all duration-300 ">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

