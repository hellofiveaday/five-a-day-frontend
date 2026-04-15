import { sobreAcademiaPage } from "../data";
import ContactSection from "../components/ContactSection";

export default function SobreLaAcademia() {
  return (
    <>
      {/* Hero image */}
      <section className="relative">
        <img
          src={sobreAcademiaPage.image}
          alt="Sobre la academia"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {sobreAcademiaPage.title}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {sobreAcademiaPage.intro.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 text-center">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Differences */}
      <section className="py-12 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
            {sobreAcademiaPage.differencesTitle}
          </h2>
          {sobreAcademiaPage.differencesIntro.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          <div className="mt-8 space-y-6">
            {sobreAcademiaPage.differences.map((diff) => (
              <div key={diff.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary-dark mb-2">{diff.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {diff.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{sobreAcademiaPage.ctaTitle}</h2>
          <ul className="space-y-2 text-lg mb-8">
            {sobreAcademiaPage.ctaItems.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            ¡Contáctanos!
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-8">
            ¿Qué opinan las familias?
          </h2>
          {sobreAcademiaPage.testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-warm-dark rounded-xl p-6 shadow-sm border-l-4 border-primary"
            >
              <p className="text-gray-700 italic leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="text-primary-dark font-semibold">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-12 bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">Ubicación</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Five a Day English Academy - Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-1.8567!3d38.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU5JzM5LjEiTiAxwrA1MScyNC4xIlc!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              className="w-full h-64 md:h-96"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
