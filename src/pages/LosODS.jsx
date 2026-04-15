import { odsPage } from "../data";
import ContactSection from "../components/ContactSection";

export default function LosODS() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">{odsPage.title}</h1>
          <p className="text-xl text-white/90">{odsPage.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          {odsPage.intro.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* SDG Poster */}
      <section className="py-8 bg-accent-yellow/10">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <img
            src={odsPage.sdgImage}
            alt="Objetivos de Desarrollo Sostenible"
            className="mx-auto max-w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-500">
            {odsPage.sdgGuidelinesNote}{" "}
            <a
              href={odsPage.sdgManualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary-dark"
            >
              Descargar manual
            </a>
          </p>
        </div>
      </section>

      {/* Education for Sustainable Development */}
      <section className="py-12 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-primary-dark mb-6 text-center">
            {odsPage.educationTitle}
          </h2>
          {odsPage.educationText.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
