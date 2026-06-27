"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rebranding Corporativo",
    category: "Branding",
    description: "Renovación completa de identidad visual para empresa del sector salud.",
    results: "Aumento del 40% en reconocimiento de marca",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e5e419245685623.Y3JvcCwyNTgzLDIwMjAsMCw2.jpg",
    link: "https://www.behance.net/search/projects/branding%20brand%20identity?tracking_source=typeahead_search_suggestion",
  },
  {
    title: "E-commerce Platform",
    category: "Desarrollo web",
    description: "Tienda online con experiencia de usuario optimizada para conversión.",
    results: "35% de incremento en ventas online",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9d9a1e136461391.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
    link: "https://www.behance.net/search/projects/ecommerce%20web%20design?tracking_source=typeahead_search_suggestion",
  },
  {
    title: "App Financiera",
    category: "UX/UI",
    description: "Interfaz de usuario para aplicación de gestión financiera personal.",
    results: "Calificación 4.8/5 en pruebas de usabilidad",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/38b2d7251133859.Y3JvcCwxMzIzLDEwMzUsNTg5LDIwMw.png",
    link: "https://www.behance.net/galleries/ui-ux",
  },
  {
    title: "Catalogo Empresarial",
    category: "Fotografía corporativa",
    description: "Producción fotográfica completa para catálogo de productos.",
    results: "50+ imágenes profesionales entregadas",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/47ba16250552591.Y3JvcCwxMjc0LDk5Niw2MywzODQ.jpg",
    link: "https://www.behance.net/galleries/photography",
  },
  {
    title: "Spot Publicitario",
    category: "Producción audiovisual",
    description: "Video corporativo para campaña de lanzamiento de producto.",
    results: "2M de reproducciones en primera semana",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/5b5f4f173358407.Y3JvcCwxNDAwLDEwOTUsMCwzMjU.jpg",
    link: "https://www.behance.net/galleries/premiere-pro",
  },
  {
    title: "Campaña Integral",
    category: "Estrategias digitales",
    description: "Estrategia 360° para posicionamiento de marca en mercado competitivo.",
    results: "150% ROI en campaña de 3 meses",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/2a5f4d250628359.Y3JvcCwxMjEyLDk0OCwwLDA.jpg",
    link: "https://www.behance.net/galleries/advertising",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Proyectos Destacados
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Nuestro <span className="gradient-text">portafolio</span> habla por sí solo
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
              const Card = (
                <motion.div
                  variants={itemVariants}
                  className="group relative card-hover rounded-2xl overflow-hidden border border-gray-100 bg-white"
                >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Ver más <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resultados</span>
                    <p className="text-sm font-medium text-gray-700 mt-0.5">
                      {project.results}
                    </p>
                  </div>
                </div>
              </motion.div>
              );
              return project.link ? (
                <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
                  {Card}
                </a>
              ) : (
                <div key={project.title}>{Card}</div>
              );
          })}
        </motion.div>
      </div>
    </section>
  );
}
