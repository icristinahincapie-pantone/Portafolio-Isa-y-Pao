"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Investigación", desc: "Análisis profundo del mercado, competencia y audiencia objetivo para entender el contexto y las oportunidades." },
  { num: "02", title: "Estrategia", desc: "Definición de objetivos, KPIs y plan de acción personalizado alineado con las metas de tu negocio." },
  { num: "03", title: "UX/UI", desc: "Diseño de experiencias intuitivas centradas en el usuario que combinan funcionalidad y estética." },
  { num: "04", title: "Producción creativa", desc: "Desarrollo de contenido visual, piezas publicitarias y materiales de comunicación de alto impacto." },
  { num: "05", title: "Implementación", desc: "Ejecución técnica, desarrollo y lanzamiento de campañas y plataformas digitales." },
  { num: "06", title: "Optimización", desc: "Monitoreo continuo, análisis de datos y ajustes estratégicos para maximizar resultados." },
];

export default function Methodology() {
  return (
    <section className="relative py-32 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Nuestra Metodología
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Un proceso probado para garantizar resultados</p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-purple-light to-transparent -translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">{step.desc}</p>
                </div>

                <div className="shrink-0 w-14 h-14 rounded-full bg-dark-3 border border-gold/30 flex items-center justify-center text-sm font-bold text-gold z-10">
                  {step.num}
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-purple-light to-transparent" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-dark-3 border border-gold/30 flex items-center justify-center text-sm font-bold text-gold z-10">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
