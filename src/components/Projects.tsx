"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Globe, Monitor, Camera, Video, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Rebranding Corporativo",
    category: "Branding",
    description: "Renovación completa de identidad visual para empresa del sector salud.",
    results: "Aumento del 40% en reconocimiento de marca",
    icon: Palette,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "E-commerce Platform",
    category: "Desarrollo web",
    description: "Tienda online con experiencia de usuario optimizada para conversión.",
    results: "35% de incremento en ventas online",
    icon: Globe,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "App Financiera",
    category: "UX/UI",
    description: "Interfaz de usuario para aplicación de gestión financiera personal.",
    results: "Calificación 4.8/5 en pruebas de usabilidad",
    icon: Monitor,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    title: "Catalogo Empresarial",
    category: "Fotografía corporativa",
    description: "Producción fotográfica completa para catálogo de productos.",
    results: "50+ imágenes profesionales entregadas",
    icon: Camera,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Spot Publicitario",
    category: "Producción audiovisual",
    description: "Video corporativo para campaña de lanzamiento de producto.",
    results: "2M de reproducciones en primera semana",
    icon: Video,
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    title: "Campaña Integral",
    category: "Estrategias digitales",
    description: "Estrategia 360° para posicionamiento de marca en mercado competitivo.",
    results: "150% ROI en campaña de 3 meses",
    icon: BarChart3,
    gradient: "from-red-400 to-rose-500",
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
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative card-hover rounded-2xl overflow-hidden border border-gray-100 bg-white"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Icon className="w-16 h-16 text-white/30" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
          })}
        </motion.div>
      </div>
    </section>
  );
}
