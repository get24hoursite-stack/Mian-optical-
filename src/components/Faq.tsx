import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Can I get my eyesight checked at the shop?",
      answer:
        "Yes, we perform on-site eyesight testing at Mian Optical to assess your distance, reading, and routine vision requirements. Our staff will help verify your vision numbers before you select lenses or frames.",
    },
    {
      question: "Can you prepare glasses according to my prescription?",
      answer:
        "Yes, we prepare prescription glasses tailored to your eyesight test results and external doctor prescriptions. Lenses are shaped, finished, and securely mounted to fit your selected frame accurately.",
    },
    {
      question: "Do you have different frame styles?",
      answer:
        "Yes, we offer a comprehensive range of frame styles including rectangular, rounded, cat-eye, geometric, full-rim, semi-rimless, and rimless designs made from durable metals and lightweight acetates.",
    },
    {
      question: "Are fancy glasses and sunglasses available?",
      answer:
        "Yes, we offer fancy and fashionable frames for formal wear and social events, as well as sunglasses designed to reduce bright sunlight and glare outdoors.",
    },
    {
      question: "Can you adjust the fit of my glasses?",
      answer:
        "Yes, we provide glasses fitting and adjustment services. We adjust temple arms, tighten loose hinges, realign frames that sit tilted, and adjust or replace nose pads for balanced comfort.",
    },
    {
      question: "Where is Mian Optical located?",
      answer:
        "Mian Optical is located at Main Bazar, Noorpur, Millat Road, Faisalabad, Pakistan. You can use our directions button to view the location on Google Maps.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Find answers to commonly asked questions about eyesight checks, glasses preparation, frame variety, and shop visits.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden transition-all duration-150 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 text-stone-900 hover:text-amber-900 transition-colors focus:outline-hidden focus-visible:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-stone-900 text-balance">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1 rounded-md bg-stone-100 text-stone-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-100 text-amber-800" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <span>Need more details about a specific frame or prescription?</span>
          <a
            href="#visit-us"
            className="font-semibold text-stone-900 hover:text-amber-800 underline underline-offset-4"
          >
            Visit us in Noorpur, Faisalabad →
          </a>
        </div>
      </div>
    </section>
  );
};
