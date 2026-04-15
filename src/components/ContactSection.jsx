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
    <section id="contacto" className="py-16 bg-warm">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">
          {contactForm.title}
        </h2>
        <p className="text-center text-gray-600 mb-8">{contactForm.subtitle}</p>

        {submitted ? (
          <div className="bg-primary/10 text-primary-dark p-6 rounded-lg text-center">
            <p className="text-lg font-semibold">¡Gracias por tu mensaje!</p>
            <p>Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactForm.fields.map((field) => {
              const baseClass =
                "w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

              if (field.type === "textarea") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <select
                      name={field.name}
                      onChange={handleChange}
                      className={baseClass}
                    >
                      <option value="">Seleccionar...</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
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
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-10 rounded-full transition-colors"
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
