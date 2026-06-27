"use client";

import { motion } from "framer-motion";
import { Palette, Target, Star, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Paola Forero",
    role: "Diseñadora Visual",
    experience: "5 años de experiencia",
    education: "Institución Universitaria EAM",
    specialty: "Especialista en UX/UI",
    skills: [
      "Diseño visual",
      "Interfaces digitales",
      "Experiencias de usuario",
      "Diseño de marca",
      "Fotografía",
      "Producción audiovisual",
    ],
    palette: {
      bg: "from-amber-50 via-yellow-50 to-white",
      accent: "bg-gradient-to-br from-yellow-400 to-amber-500",
      text: "text-yellow-600",
      border: "border-yellow-200/50",
      card: "bg-white/80 border-yellow-100/50",
      icon: "text-amber-500",
    },
    icon: Palette,
    photo: "/images/pao.JPG",
  },
  {
    name: "Isabel Cristina Hincapié",
    role: "Publicista",
    experience: "20 años de experiencia",
    education: "Universidad Católica de Manizales",
    specialty: "Especialista en UX/UI",
    skills: [
      "Estrategias publicitarias",
      "Posicionamiento de marca",
      "Planeación de campañas",
      "Marketing digital",
      "Pauta publicitaria",
      "Comunicación corporativa",
    ],
    palette: {
      bg: "from-violet-50 via-purple-50 to-white",
      accent: "bg-gradient-to-br from-violet-600 to-purple-700",
      text: "text-violet-600",
      border: "border-violet-200/50",
      card: "bg-white/80 border-violet-100/50",
      icon: "text-violet-600",
    },
    icon: Target,
    photo: "/images/ISa.PNG",
  },
];

function TeamMemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const Icon = member.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${member.palette.bg} border ${member.palette.border}`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold ${member.palette.text} mb-4 font-descriptor`}>
            <Award className="w-4 h-4" />
            {member.experience}
          </span>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {member.name}
          </h3>

          <p className={`text-lg font-medium ${member.palette.text} mb-1`}>
            {member.role}
          </p>

          <p className="text-sm text-gray-500 mb-4 font-descriptor">
            {member.education} · {member.specialty}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${member.palette.card} ${member.palette.text}`}>
              <Star className="w-3 h-3" />
              {member.specialty}
            </span>
          </div>

          <h4 className="text-sm font-semibold text-gray-700 mb-3 font-descriptor">Experiencia en:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {member.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm text-gray-600">
                <span className={`w-1.5 h-1.5 rounded-full ${member.palette.accent}`} />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-50 order-1 md:order-2 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className={`w-40 h-40 sm:w-52 sm:h-52 rounded-full ${member.palette.accent} flex items-center justify-center shadow-2xl overflow-hidden`}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                )}
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -inset-4 rounded-full border-2 ${member.palette.border} border-dashed`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="equipo" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary font-descriptor">
            Nuestro Equipo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Conoce a las <span className="gradient-text">profesionales</span> detrás de la agencia
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
