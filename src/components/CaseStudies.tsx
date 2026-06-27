"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Transformación Digital",
    problem: "Marca con presencia offline limitada y baja visibilidad digital.",
    solution: "Estrategia digital 360 integrando redes sociales, SEO, pauta y contenido.",
    result: "+250% alcance orgánico en 3 meses.",
    metrics: [
      { label: "Alcance", value: "2.5M" },
      { label: "Conversión", value: "18%" },
      { label: "Engagement", value: "4.5%" },
      { label: "Crecimiento", value: "200%" },
    ],
    color: "from-gold to-amber-500",
  },
  {
    title: "Rebranding Corporativo",
    problem: "Identidad visual desactualizada que no conectaba con audiencia moderna.",
    solution: "Rediseño completo de marca incluyendo logo, paleta, tipografía y manual.",
    result: "+180% reconocimiento de marca.",
    metrics: [
      { label: "Alcance", value: "1.8M" },
      { label: "Conversión", value: "12%" },
      { label: "Engagement", value: "6.2%" },
      { label: "Crecimiento", value: "150%" },
    ],
    color: "from-purple-light to-purple",
  },
  {
    title: "Lanzamiento Digital",
    problem: "Producto nuevo sin presencia online ni reconocimiento de marca.",
    solution: "Campaña lanzamiento multicanal con influencers, pauta y PR digital.",
    result: "+320% ventas en el primer mes.",
    metrics: [
      { label: "Alcance", value: "3.2M" },
      { label: "Conversión", value: "22%" },
      { label: "Engagement", value: "8.1%" },
      { label: "Crecimiento", value: "320%" },
    ],
    color: "from-gold to-purple-light",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-32 px-6 bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Casos de Éxito
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Resultados que hablan por sí solos</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/5 bg-dark-3/50 p-6 hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`h-1.5 rounded-full bg-gradient-to-r ${c.color} mb-6`} />

              <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Problema</span>
                  <p className="text-sm text-gray-300 mt-0.5">{c.problem}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Solución</span>
                  <p className="text-sm text-gray-300 mt-0.5">{c.solution}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Resultado</span>
                  <p className="text-sm font-medium text-gold-light mt-0.5">{c.result}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
