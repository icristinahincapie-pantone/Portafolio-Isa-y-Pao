"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "LinkedIn", href: "#", icon: "LI" },
  { name: "Behance", href: "#", icon: "Be" },
  { name: "WhatsApp", href: "#", icon: "WA" },
  { name: "Email", href: "mailto:hola@isaypao.com", icon: "@" },
];

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#proyectos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Branding", "Marketing Digital", "Diseño UX/UI", "Desarrollo Web",
  "Fotografía", "Video Corporativo", "Redes Sociales", "Consultoría",
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-dark-3 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Isa & Pao
            </span>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Agencia creativa especializada en branding, marketing digital, diseño UX/UI y producción audiovisual.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hola@isaypao.com" className="text-sm text-gray-400 hover:text-gold transition-colors">
                  hola@isaypao.com
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                  WhatsApp: +57 300 000 0000
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-400">Medellín, Colombia</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Isa & Pao. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
