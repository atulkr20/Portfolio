"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "100%", label: "Caffeine Fueled" },
  { value: "2026", label: "Graduating" },
];

export default function Stats() {
  return (
    <section id="stats" className="w-full max-w-3xl mx-auto px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-around gap-8 py-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="text-center"
          >
            <p
              className="font-pixel text-3xl sm:text-4xl mb-2 tracking-tight"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
