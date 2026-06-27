"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type TargetAndTransition } from "framer-motion";

function FloatingShape({
  className,
  animate,
}: {
  className: string;
  animate: TargetAndTransition;
}) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={animate}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,160,23,0.08)_0%,_transparent_40%),radial-gradient(ellipse_at_bottom_left,_rgba(106,13,173,0.08)_0%,_transparent_40%)]" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <FloatingShape
        className="w-64 h-64 bg-gold -top-20 -right-20"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
      />
      <FloatingShape
        className="w-48 h-48 bg-purple-light top-1/3 -left-24"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
      />
      <FloatingShape
        className="w-32 h-32 bg-gold-light bottom-1/4 right-1/4"
        animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-widest uppercase border border-white/10 rounded-full text-gray-300 bg-white/5 backdrop-blur-sm">
            Agencia Creativa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-gold-light to-purple-light bg-clip-text text-transparent">
            Creamos experiencias digitales
          </span>
          <br />
          <span className="text-white/90">
            que conectan marcas, personas y resultados.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Agencia especializada en branding, marketing digital, diseño UX/UI,
          desarrollo web, fotografía y producción audiovisual para empresas que
          buscan crecer y diferenciarse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#proyectos"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold to-purple-light text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple/20"
          >
            <span className="relative z-10">Ver portafolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[2px] h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
