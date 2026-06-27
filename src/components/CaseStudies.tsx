"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const cases = [
  {
    problem: "Bajo reconocimiento de marca en el sector salud",
    solution: "Estrategia de branding integral y campaña digital multicanal",
    metrics: [
      { label: "Alcance", value: "2.5M+", icon: Users },
      { label: "Conversión", value: "35%", icon: Target },
      { label: "Engagement", value: "4.8x", icon: TrendingUp },
      { label: "Crecimiento", value: "180%", icon: BarChart3 },
    ],
  },
  {
    problem: "Alta tasa de abandono en e-commerce",
    solution: "Rediseño UX/UI y optimización del funnel de conversión",
    metrics: [
      { label: "Alcance", value: "1.8M+", icon: Users },
      { label: "Conversión", value: "42%", icon: Target },
      { label: "Engagement", value: "3.2x", icon: TrendingUp },
      { label: "Crecimiento", value: "220%", icon: BarChart3 },
    ],
  },
  {
    problem: "Presencia digital inexistente para startup tecnológica",
    solution: "Desarrollo web + estrategia de contenido + pauta digital",
    metrics: [
      { label: "Alcance", value: "3.1M+", icon: Users },
      { label: "Conversión", value: "28%", icon: Target },
      { label: "Engagement", value: "5.1x", icon: TrendingUp },
      { label: "Crecimiento", value: "310%", icon: BarChart3 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <section id="casos" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Casos de Éxito
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Resultados que <span className="gradient-text">hablan</span> por sí solos
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="card-hover p-8 rounded-2xl border border-gray-100 bg-white"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problema
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{c.problem}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Solución
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{c.solution}</p>
              </div>

              <div className="border-t border-gray-50 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {c.metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className="text-center">
                        <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{metric.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
