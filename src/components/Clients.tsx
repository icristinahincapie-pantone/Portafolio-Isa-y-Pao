"use client";

import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

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
          <div className="mb-8 text-center">
            <span className="block text-lg font-medium text-muted-foreground">
              Ya trabajamos con
            </span>
            <span className="font-bold text-2xl text-primary tracking-tight md:text-3xl">
              Grandes Marcas
            </span>
          </div>

          <div className="mx-auto mb-6 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <LogoCloud />

          <div className="mt-6 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </motion.div>
      </div>
    </section>
  );
}
