import { founders } from "../data";
import ContactSection from "../components/ContactSection";

export default function QuienesSomos() {
  return (
    <>
      <section className="py-16 bg-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-dark text-center mb-12">
            Quiénes somos
          </h1>

          {founders.map((founder, i) => (
            <div
              key={founder.id}
              className={`mb-16 flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-start`}
            >
              {/* Photo & quick info */}
              <div className="md:w-1/3 text-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-primary-dark">{founder.name}</h2>
                <p className="text-primary italic">{founder.role}</p>
                <blockquote className="mt-3 text-sm text-gray-500 italic px-4">
                  &ldquo;{founder.quoteEn}&rdquo;
                </blockquote>
                <blockquote className="mt-1 text-xs text-gray-400 italic px-4">
                  &ldquo;{founder.quoteEs}&rdquo;
                </blockquote>
              </div>

              {/* Bio & experience */}
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">Sobre mí</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{founder.about}</p>

                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  Experiencia profesional
                </h3>
                <div className="border-l-4 border-primary pl-4 space-y-4">
                  {founder.experience.map((exp) => (
                    <div key={exp.date}>
                      <p className="text-sm font-bold text-primary">{exp.date}</p>
                      <p className="text-gray-700">{exp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
