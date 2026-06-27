"use client";

import { motion } from "framer-motion";

const national = [
  "Colsubsidio", "Grupo Éxito", "Bancolombia", "Avianca",
  "Nutresa", "Sura", "Postobón", "Corona",
];

const international = [
  "Coca-Cola", "Nestlé", "Samsung", "Apple",
  "Nike", "Adidas", "Spotify", "Airbnb",
];

function LogoMarquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((name, i) => (
          <div
            key={i}
            className="shrink-0 px-8 py-4 rounded-xl border border-white/5 bg-dark-3/50 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative py-32 px-6 bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-light bg-clip-text text-transparent">
              Marcas que han confiado en nuestro trabajo
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Clientes Nacionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {national.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-20 rounded-xl border border-white/5 bg-dark-3/30 flex items-center justify-center hover:border-gold/20 transition-all duration-300"
              >
                <span className="text-sm text-gray-500 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Clientes Internacionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {international.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-20 rounded-xl border border-white/5 bg-dark-3/30 flex items-center justify-center hover:border-purple/20 transition-all duration-300"
              >
                <span className="text-sm text-gray-500 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <LogoMarquee items={national} />
          <LogoMarquee items={international} reverse />
        </div>
      </div>
    </section>
  );
}
