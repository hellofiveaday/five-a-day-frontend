import { Fragment } from "react";
import { founders } from "../data";
import ContactSection from "../components/ContactSection";

export default function QuienesSomos() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-primary-dark text-white py-14">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold">Quiénes somos</h1>
        </div>
      </section>

      {founders.map((founder, i) => {
        const isEven = i % 2 === 0;
        return (
          <article key={founder.id}>
            {/* Full-width two-panel header */}
            <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

              {/* Photo panel — mint green background */}
              <div className="md:w-1/2 bg-[#e8f5e0] relative min-h-105 md:min-h-125 overflow-hidden flex items-end justify-center">
                {/* Large purple circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-primary" />
                {/* Photo sitting on the circle, overflowing above */}
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="relative z-10 h-[95%] max-h-120 w-auto object-contain object-bottom"
                />
              </div>

              {/* Text panel — white */}
              <div className={`md:w-1/2 bg-white flex flex-col justify-center py-12 px-10 ${isEven ? "md:pl-20 md:pr-28" : "md:pr-20 md:pl-28"}`}>
                <p className="font-heading text-lg font-semibold text-gray-800 mb-0.5">
                  {founder.name}
                </p>
                <p className="font-heading text-base text-primary mb-8">
                  {founder.role}
                </p>
                <blockquote className="font-heading text-3xl md:text-4xl italic text-[#5d8060] leading-snug mb-6">
                  &ldquo;{founder.quoteEn}&rdquo;
                </blockquote>
                <blockquote className="font-heading text-lg italic text-[#5d8060]/75 text-center">
                  &ldquo;{founder.quoteEs}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Bio + Experience — full width */}
            <div className="bg-white py-12">
              <div className="max-w-245 mx-auto px-8 md:px-14 space-y-10">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">Sobre mí</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">{founder.about}</p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary-dark mb-4">
                    Experiencia profesional
                  </h3>
                  <div>
                    {founder.experience.map((exp, idx, arr) => (
                      <Fragment key={exp.date}>
                        {/* Entry row */}
                        <div className="flex items-start">
                          <div className="w-28 text-right pr-4 shrink-0 text-primary font-heading text-sm font-semibold leading-none pt-0.5">
                            {exp.date}
                          </div>
                          <div className="w-3 h-3 rounded-full bg-black shrink-0 relative z-10 -ml-1.5 mt-0.5" />
                          <div className="flex-1 pl-5 text-primary font-heading text-sm leading-snug">
                            {exp.text}
                          </div>
                        </div>
                        {/* Connector line between entries — not after last */}
                        {idx < arr.length - 1 && (
                          <div className="flex h-8">
                            <div className="w-28 shrink-0" />
                            <div className="w-px bg-black" />
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <ContactSection />
    </>
  );
}
