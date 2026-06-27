"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Mendoza",
    company: "TechCorp",
    role: "CEO",
    text: "Trabajar con Isa & Pao transformó nuestra marca. Su enfoque estratégico y creativo superó todas nuestras expectativas.",
    initials: "CM",
  },
  {
    name: "María González",
    company: "Grupo Nova",
    role: "Directora de Marketing",
    text: "El equipo de Isa & Pao entendió nuestra visión desde el primer día. Los resultados hablan por sí solos.",
    initials: "MG",
  },
  {
    name: "Andrés Ramírez",
    company: "StartUpLab",
    role: "Founder",
    text: "Profesionalismo, creatividad y resultados. Así definimos nuestra experiencia con Isa & Pao.",
    initials: "AR",
  },
  {
    name: "Laura Botero",
    company: "Colsubsidio",
    role: "Gerente de Marca",
    text: "Su capacidad para conectar estrategia con diseño es impresionante. Altamente recomendados.",
    initials: "LB",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative py-32 px-6 bg-dark-2 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
            Lo que dicen nuestros clientes
          </span>
        </motion.h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-6xl text-gold/20 font-serif mb-6 leading-none">"</div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-8 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-purple-light flex items-center justify-center text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-8" : "bg-gray-600"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
