"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-purple-900 to-amber-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.05)_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          <span className="bg-gradient-to-r from-white via-gold-light to-purple-light bg-clip-text text-transparent">
            Transformemos tu marca en una experiencia memorable.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Diseñamos estrategias, experiencias digitales y contenido que generan resultados reales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-purple-light text-white font-medium hover:shadow-xl hover:shadow-purple/20 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Agendar reunión
          </a>
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
          >
            Ver portafolio completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-light/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}