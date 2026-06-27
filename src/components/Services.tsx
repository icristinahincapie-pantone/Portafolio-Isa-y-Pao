"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Pauta publicitaria Meta Ads y Google Ads", desc: "Campañas optimizadas para maximizar tu ROI en las principales plataformas digitales.", icon: "📊" },
  { title: "Manejo de redes sociales", desc: "Gestión profesional de tu presencia en redes con contenido estratégico y de calidad.", icon: "📱" },
  { title: "Estrategias de marketing digital", desc: "Planes personalizados para alcanzar tus objetivos de negocio en el entorno digital.", icon: "🎯" },
  { title: "Branding e identidad corporativa", desc: "Construimos marcas memorables con identidad visual coherente y diferenciadora.", icon: "✨" },
  { title: "Diseño UX/UI", desc: "Interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios.", icon: "🎨" },
  { title: "Prototipado de aplicaciones", desc: "Convertimos tus ideas en prototipos funcionales listos para desarrollo.", icon: "⚡" },
  { title: "Desarrollo de páginas web", desc: "Sitios web modernos, rápidos y optimizados para conversión.", icon: "🌐" },
  { title: "Landing pages de conversión", desc: "Páginas diseñadas estratégicamente para convertir visitantes en clientes.", icon: "🚀" },
  { title: "Fotografía empresarial", desc: "Imágenes profesionales que transmiten la esencia de tu marca.", icon: "📸" },
  { title: "Video corporativo", desc: "Producción audiovisual de alto impacto para tu comunicación empresarial.", icon: "🎬" },
  { title: "Producción de contenido para redes", desc: "Contenido visual y escrito que engage con tu audiencia.", icon: "📝" },
  { title: "Consultoría digital", desc: "Asesoría experta para optimizar tu estrategia digital integral.", icon: "💡" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-dark-2 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.03)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales para tu marca
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative p-6 rounded-2xl border border-white/5 bg-dark-3/50 backdrop-blur-sm hover:bg-dark-3 hover:border-gold/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-purple-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
