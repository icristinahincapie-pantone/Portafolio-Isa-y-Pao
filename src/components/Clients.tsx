"use client";

import { motion } from "framer-motion";

const nationalBrands = [
  "Colombina", "Bavaria", "Éxito", "Grupo Nutresa", "Avianca", "Bancolombia",
];

const internationalBrands = [
  "Nike", "Adidas", "Coca-Cola", "Samsung", "Sony", "L'Oréal",
];

function BrandMarquee({ brands, speed }: { brands: string[]; speed: number }) {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-16"
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex-shrink-0 px-8 py-4 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-sm transition-all duration-300"
          >
            <span className="text-lg font-bold tracking-tight text-gray-300 whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clientes" className="py-20 sm:py-28 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Clientes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Marcas que han confiado en <span className="gradient-text">nuestro trabajo</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6 text-center">
            Clientes Nacionales
          </h3>
          <BrandMarquee brands={nationalBrands} speed={25} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6 text-center">
            Clientes Internacionales
          </h3>
          <BrandMarquee brands={internationalBrands} speed={30} />
        </motion.div>
      </div>
    </section>
  );
}
