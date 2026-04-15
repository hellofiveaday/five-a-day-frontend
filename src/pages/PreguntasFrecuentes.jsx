import { useState } from "react";
import { faqPage } from "../data";
import ContactSection from "../components/ContactSection";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        type="button"
      >
        <span className="font-heading font-semibold text-primary-dark">{question}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-5 text-gray-700 leading-relaxed">
          {answer.split("\n\n").map((p, i) => (
            <p key={i} className="mb-2">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PreguntasFrecuentes() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={faqPage.image}
          alt="Preguntas frecuentes"
          className="w-full h-48 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/60 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{faqPage.title}</h1>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-12 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {faqPage.questions.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
