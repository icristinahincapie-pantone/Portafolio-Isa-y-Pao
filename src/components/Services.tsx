"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Share2,
  BarChart3,
  Palette,
  Monitor,
  Smartphone,
  Globe,
  Layout,
  Camera,
  Video,
  PenTool,
  Headphones,
} from "lucide-react";

const services = [
  { icon: Megaphone, title: "Pauta publicitaria", description: "Meta Ads y Google Ads" },
  { icon: Share2, title: "Manejo de redes sociales", description: "Community management" },
  { icon: BarChart3, title: "Estrategias de marketing digital", description: "Planificación y ejecución" },
  { icon: Palette, title: "Branding e identidad corporativa", description: "Diseño de marca" },
  { icon: Monitor, title: "Diseño UX/UI", description: "Experiencia de usuario" },
  { icon: Smartphone, title: "Prototipado de aplicaciones", description: "Apps nativas y web" },
  { icon: Globe, title: "Desarrollo de páginas web", description: "Sitios corporativos" },
  { icon: Layout, title: "Landing pages de conversión", description: "Páginas optimizadas" },
  { icon: Camera, title: "Fotografía empresarial", description: "Imagen corporativa" },
  { icon: Video, title: "Video corporativo", description: "Producción audiovisual" },
  { icon: PenTool, title: "Producción de contenido", description: "Para redes sociales" },
  { icon: Headphones, title: "Consultoría digital", description: "Asesoría estratégica" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Soluciones <span className="gradient-text">integrales</span> para tu marca
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            De la estrategia a la ejecución, cubrimos cada aspecto de tu presencia digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group card-hover p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:bg-gradient-to-br hover:from-rose-50 hover:to-white"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
