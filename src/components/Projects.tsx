"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Identidad Corporativa", category: "Branding", desc: "Rebranding completo para empresa del sector salud con enfoque moderno y humano.", results: "+180% reconocimiento de marca", color: "from-gold to-amber-500" },
  { title: "E-commerce Platform", category: "Desarrollo Web", desc: "Tienda online con experiencia de compra optimizada y tasa de conversión superior.", results: "+250% ventas online", color: "from-purple-light to-purple" },
  { title: "App Financiera", category: "UX/UI", desc: "Rediseño de interfaz para app bancaria mejorando usabilidad y accesibilidad.", results: "NPS +45 puntos", color: "from-gold to-purple-light" },
  { title: "Catálogo Profesional", category: "Fotografía", desc: "Producción fotográfica completa para marca de moda con estilo editorial.", results: "+120% engagement redes", color: "from-amber-500 to-gold" },
  { title: "Video Institucional", category: "Audiovisual", desc: "Spot corporativo que captura la esencia y valores de una empresa tecnológica.", results: "2M reproducciones", color: "from-purple to-purple-light" },
  { title: "Campaña 360", category: "Estrategia Digital", desc: "Estrategia multicanal para lanzamiento de producto con resultados récord.", results: "+320% leads generados", color: "from-gold to-purple" },
];

const categories = ["Todos", "Branding", "Desarrollo Web", "UX/UI", "Fotografía", "Audiovisual", "Estrategia Digital"];

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="proyectos" className="relative py-32 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Transformando ideas en resultados</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-gold to-purple-light text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-dark-3/50"
              >
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="text-5xl opacity-30 font-bold">{p.category[0]}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{p.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-gold-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                    {p.results}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                  <span className="text-white font-medium">Ver proyecto →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
