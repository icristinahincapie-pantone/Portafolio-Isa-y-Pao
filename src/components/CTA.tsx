"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-amber-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Transformemos tu marca en una experiencia memorable.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Diseñamos estrategias, experiencias digitales y contenido que generan resultados reales.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              Agendar reunión
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ver portafolio completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
