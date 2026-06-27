"use client";

import { motion } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Trabajar con Isa & Pao transformó completamente nuestra presencia digital. Su enfoque estratégico y creativo superó todas nuestras expectativas. Los resultados hablan por sí solos.",
    name: "Carlos Mendoza",
    designation: "CEO · TechSolutions SAS",
    src:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    quote:
      "Profesionalismo y creatividad excepcionales. Lograron capturar la esencia de nuestra marca y traducirla en una experiencia digital memorable.",
    name: "Ana María Gómez",
    designation: "Directora de Marketing · Grupo Éxito",
    src:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  },
  {
    quote:
      "La mejor inversión que hemos hecho en marketing digital. El equipo entiende realmente las necesidades del negocio y entrega resultados medibles.",
    name: "Juan Pablo Restrepo",
    designation: "Brand Manager · Colombina",
    src:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    quote:
      "Un enfoque fresco y moderno que revitalizó nuestra estrategia digital. Altamente recomendadas para proyectos de transformación digital.",
    name: "Laura Jiménez",
    designation: "Head of Digital · Avianca",
    src:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-rose-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#0a0a0a",
              designation: "#454545",
              testimony: "#171717",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#00A6FB",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}