"use client";

import { motion } from "framer-motion";
import { Search, Route, Monitor, Camera, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { step: 1, title: "Investigación", icon: Search, description: "Analizamos tu mercado, competencia y audiencia para entender el contexto." },
  { step: 2, title: "Estrategia", icon: Route, description: "Definimos objetivos, KPIs y el plan de acción personalizado." },
  { step: 3, title: "UX/UI", icon: Monitor, description: "Diseñamos interfaces centradas en la experiencia del usuario." },
  { step: 4, title: "Producción creativa", icon: Camera, description: "Desarrollamos contenido visual y audiovisual de alto impacto." },
  { step: 5, title: "Implementación", icon: Rocket, description: "Ejecutamos la estrategia con herramientas y tecnologías modernas." },
  { step: 6, title: "Optimización", icon: TrendingUp, description: "Medimos resultados y optimizamos continuamente para mejorar." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-purple-100/40 to-amber-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.08)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Metodología
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Nuestro <span className="gradient-text">proceso</span> de trabajo
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Seis pasos para transformar tu visión en resultados tangibles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-400 to-amber-300 -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 lg:space-y-0"
          >
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={s.step}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white card-hover inline-block max-w-md ${
                      isLeft ? "lg:ml-auto" : "lg:mr-auto"
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{s.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                      </div>
                      <p className={`text-sm text-gray-500 ${isLeft ? "lg:text-right" : ""}`}>
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-primary/20 shadow-sm z-10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}