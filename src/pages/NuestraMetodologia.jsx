import { metodologiaPage } from "../data";
import ContactSection from "../components/ContactSection";

export default function NuestraMetodologia() {
  return (
    <>
      {/* Header */}
      <section className="bg-linear-to-r from-primary-dark to-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">{metodologiaPage.title}</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">{metodologiaPage.intro}</p>
          <p className="mt-4 opacity-80">{metodologiaPage.groups}</p>
          <p className="mt-4 opacity-80">{metodologiaPage.adults}</p>
        </div>
      </section>

      {/* 5 Routines */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
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
                  <h3 className="text-lg font-bold text-primary-dark mb-2">
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
      <section className="py-12 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent-dark mb-4">
            {metodologiaPage.funFridays.title}
          </h2>
          <p className="text-gray-700">{metodologiaPage.funFridays.description}</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
