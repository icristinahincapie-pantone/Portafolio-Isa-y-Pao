"use client";

import { motion } from "framer-motion";

interface ProfileProps {
  name: string;
  role: string;
  years: string;
  university: string;
  specialty: string;
  skills: string[];
  colors: { primary: string; secondary: string; light: string; text: string };
  gradient: string;
  initials: string;
  side: "left" | "right";
}

function ProfileCard({ name, role, years, university, specialty, skills, colors, gradient, initials, side }: ProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group"
    >
      <div
        className="relative rounded-3xl p-8 md:p-10 overflow-hidden border"
        style={{ borderColor: `${colors.primary}20`, background: `linear-gradient(135deg, ${colors.primary}08, ${colors.secondary}05)` }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: gradient }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: gradient }} />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-xl"
              style={{ background: gradient }}
            >
              {initials}
            </div>
          </div>

          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ background: `${colors.primary}20`, color: colors.primary }}
            >
              {years}
            </motion.span>

            <h3 className="text-3xl font-bold text-white mb-1">{name}</h3>
            <p className="text-xl font-medium mb-4" style={{ color: colors.primary }}>
              {role}
            </p>
            <p className="text-sm text-gray-400 mb-1">{university}</p>
            <p className="text-sm font-medium mb-6" style={{ color: colors.secondary }}>
              {specialty}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: `${colors.primary}15`, color: colors.text }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="equipo" className="relative py-32 px-6 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.02)_0%,_rgba(106,13,173,0.02)_50%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Nuestro Equipo
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dos profesionales apasionadas por crear experiencias digitales extraordinarias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProfileCard
            side="left"
            name="Isabella Hincapié"
            role="Diseñadora Visual"
            years="5 años de experiencia"
            university="Institución Universitaria EAM"
            specialty="Especialista en UX/UI"
            skills={["Diseño visual", "Interfaces digitales", "Experiencias de usuario", "Diseño de marca", "Fotografía", "Producción audiovisual"]}
            colors={{ primary: "#d4a017", secondary: "#f0d060", light: "#f0d06020", text: "#f0d060" }}
            gradient="linear-gradient(135deg, #d4a017, #f0d060)"
            initials="IH"
          />
          <ProfileCard
            side="right"
            name="Paola Hincapié"
            role="Publicista"
            years="20 años de experiencia"
            university="Universidad Católica de Manizales"
            specialty="Especialista en UX/UI"
            skills={["Estrategias publicitarias", "Posicionamiento de marca", "Planeación de campañas", "Marketing digital", "Pauta publicitaria", "Comunicación corporativa"]}
            colors={{ primary: "#9b30ff", secondary: "#e6d5f5", light: "#9b30ff20", text: "#d4b0f5" }}
            gradient="linear-gradient(135deg, #6a0dad, #9b30ff)"
            initials="PH"
          />
        </div>
      </div>
    </section>
  );
}
