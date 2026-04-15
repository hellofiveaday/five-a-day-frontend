import { metodologiaPage } from "../data";
import ContactSection from "../components/ContactSection";

export default function NuestraMetodologia() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-6">{metodologiaPage.title}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">{metodologiaPage.intro}</p>
          <p className="mt-4 text-white/80">{metodologiaPage.groups}</p>
          <p className="mt-4 text-white/80">{metodologiaPage.adults}</p>
        </div>
      </section>

      {/* 5 Routines */}
      <section className="py-16 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {metodologiaPage.routinesIntro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {metodologiaPage.routines.map((routine) => (
              <div
                key={routine.title}
                className="bg-warm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={routine.image}
                  alt={routine.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
                    {routine.title}
                  </h3>
                  <p className="text-sm text-gray-700">{routine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fridays */}
      <section className="py-12 bg-accent-yellow/20">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark mb-4">
            {metodologiaPage.funFridays.title}
          </h2>
          <p className="text-gray-700">{metodologiaPage.funFridays.description}</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
