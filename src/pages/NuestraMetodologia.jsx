import { metodologiaPage } from "../data";
import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";

export default function NuestraMetodologia() {
  return (
    <>
      {/* Intro text */}
      <section className="py-12 bg-white">
        <div className="max-w-245 mx-auto px-4 space-y-4">
          <Reveal>
            <h1 className="font-title text-4xl font-bold text-primary-dark mb-2 text-center">{metodologiaPage.title}</h1>
            <p className="text-gray-700 leading-relaxed text-justify">{metodologiaPage.intro}</p>
            <p className="text-gray-700 leading-relaxed text-justify">{metodologiaPage.groups}</p>
            <p className="text-gray-700 leading-relaxed text-justify">{metodologiaPage.adults}</p>
          </Reveal>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-8 bg-warm">
        <div className="max-w-245 mx-auto px-4">
          <Reveal>
            <div className="bg-primary-dark/10 border-2 border-dashed border-primary/30 rounded-2xl flex flex-col items-center justify-center py-16 gap-4 text-primary-dark/60">
              <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-heading text-lg font-semibold text-primary/50">{metodologiaPage.videoPlaceholder}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 Routines — 3-column grid with overlay description */}
      <section className="py-16 bg-white">
        <div className="max-w-245 mx-auto px-4">
          <Reveal>
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-14">
              {metodologiaPage.routinesIntro}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {metodologiaPage.routines.map((routine, idx) => (
              <Reveal key={routine.title} delay={idx * 80} className="relative group">
                {/* Image with hover zoom */}
                <div className="overflow-hidden rounded-xl shadow-md w-full h-56">
                  <img
                    src={routine.image}
                    alt={routine.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Description overlay: starts mid-image, shifted right */}
                <div className="absolute top-[50%] left-[12%] -right-8 bg-white rounded-xl p-4 shadow-xl z-10 transition-shadow duration-300 group-hover:shadow-2xl">
                  <h3 className="font-heading text-base font-bold text-primary-dark mb-1">
                    {routine.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{routine.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fridays — text left, image right */}
      <section className="py-14 bg-accent-yellow/20">
        <div className="max-w-245 mx-auto px-4">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="font-title text-3xl font-bold text-primary-dark mb-4">
                  {metodologiaPage.funFridays.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {metodologiaPage.funFridays.description}
                </p>
              </div>
              <div className="flex-1 overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={metodologiaPage.funFridays.image}
                  alt="Fun Fridays"
                  className="w-full object-cover max-h-72 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
