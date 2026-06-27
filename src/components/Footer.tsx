"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Camera, Link, MessageCircle, Globe } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "isaypao@gmail.com", href: "mailto:isaypao@gmail.com" },
  { icon: Phone, text: "+57 3137144726", href: "tel:+573137144726" },
  { icon: MapPin, text: "Armenia, Quindío", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-500 to-violet-600 bg-clip-text text-transparent">
                Isa & Pao
              </span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-descriptor">
              Agencia creativa especializada en branding, marketing digital y diseño de experiencias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-6 font-descriptor">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Equipo", href: "#equipo" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Clientes", href: "#clientes" },
                { label: "Casos de Éxito", href: "#casos" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-6 font-descriptor">
              Contacto
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Isa & Pao. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}