import { Link } from "react-router-dom";
import { heroContent, metodologiaHome } from "../data";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              {heroContent.title}{" "}
              <span className="text-accent">{heroContent.highlight}</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 opacity-90">
              {heroContent.description}
            </p>
            <p className="text-base mb-4 opacity-80">{heroContent.descriptionExtended}</p>
            <p className="text-base mb-6 opacity-80">{heroContent.extras}</p>
            <p className="text-sm italic mb-6 opacity-75">{heroContent.ctaSubtext}</p>
            <a
              href="#contacto"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              {heroContent.cta}
            </a>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src="/images/hero-students.jpg"
              alt="Students at Five a Day"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Metodología preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-4">
            {metodologiaHome.sectionTitle}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {metodologiaHome.intro}
          </p>

          <div className="space-y-16">
            {metodologiaHome.blocks.map((block, i) => (
              <div
                key={block.title}
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="flex-1">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="rounded-xl shadow-lg w-full max-h-80 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {block.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{block.text}</p>
                  {block.link && (
                    <Link
                      to={block.link.path}
                      className="inline-block mt-4 text-primary hover:text-primary-dark font-semibold underline"
                    >
                      {block.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
