"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    company: "TechSolutions SAS",
    role: "CEO",
    text: "Trabajar con Isa & Pao transformó completamente nuestra presencia digital. Su enfoque estratégico y creativo superó todas nuestras expectativas. Los resultados hablan por sí solos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Ana María Gómez",
    company: "Grupo Éxito",
    role: "Directora de Marketing",
    text: "Profesionalismo y creatividad excepcionales. Lograron capturar la esencia de nuestra marca y traducirla en una experiencia digital memorable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
  },
  {
    name: "Juan Pablo Restrepo",
    company: "Colombina",
    role: "Brand Manager",
    text: "La mejor inversión que hemos hecho en marketing digital. El equipo entiende realmente las necesidades del negocio y entrega resultados medibles.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Laura Jiménez",
    company: "Avianca",
    role: "Head of Digital",
    text: "Un enfoque fresco y moderno que revitalizó nuestra estrategia digital. Altamente recomendadas para proyectos de transformación digital.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary font-descriptor">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-50 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic mb-8 font-descriptor">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-primary/20">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                <p className="text-sm text-gray-400">
                  {testimonials[current].role} · {testimonials[current].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "w-8 bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
