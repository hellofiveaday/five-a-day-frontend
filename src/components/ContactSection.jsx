import { useState } from "react";
import { contactForm } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend API
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 bg-primary-dark">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-white text-center mb-4">
          {contactForm.title}
        </h2>
        <p className="text-center text-white/70 mb-8">{contactForm.subtitle}</p>

        {submitted ? (
          <div className="bg-accent-green/20 text-white p-6 rounded-lg text-center">
            <p className="text-lg font-heading font-semibold">¡Gracias por tu mensaje!</p>
            <p className="text-white/80">Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactForm.fields.map((field) => {
              const baseClass =
                "w-full border border-accent-pink/50 bg-white/10 text-white placeholder-white/50 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent";

              if (field.type === "textarea") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      {field.label} {field.required && <span className="text-accent-yellow">*</span>}
                    </label>
                    <textarea
                      name={field.name}
                      required={field.required}
                      rows={4}
                      onChange={handleChange}
                      className={baseClass}
                    />
                  </div>
                );
              }

              if (field.type === "select") {
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      {field.label}
                    </label>
                    <select
                      name={field.name}
                      onChange={handleChange}
                      className={baseClass}
                    >
                      <option value="">Seleccionar...</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt} className="text-gray-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    {field.label} {field.required && <span className="text-accent-yellow">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    onChange={handleChange}
                    className={baseClass}
                  />
                </div>
              );
            })}

            <div className="md:col-span-2 text-center pt-2">
              <button
                type="submit"
                className="bg-accent-green hover:bg-accent-green-dark text-primary-darker font-heading font-bold py-3 px-10 rounded-md transition-colors"
              >
                {contactForm.submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
