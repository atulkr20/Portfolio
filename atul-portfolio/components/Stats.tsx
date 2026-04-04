"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Each stat: numeric target + optional suffix, and a label
const stats = [
  { target: 404, suffix: "", label: "Sleep Not Found" },
  { target: 100, suffix: "%", label: "Caffeine Fueled" },
  { target: 1, suffix: "", label: "At A Time" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const rounded = useTransform(count, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.8,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, count, target]);

  return (
    <motion.p
      ref={ref}
      className="font-pixel text-3xl sm:text-4xl mb-2 tracking-tight"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {rounded}
    </motion.p>
  );
}

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
            <AnimatedNumber target={stat.target} suffix={stat.suffix} />
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
