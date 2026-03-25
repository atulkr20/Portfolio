"use client";

import { motion } from "framer-motion";

const avatarColors = ["#5b8def", "#e55b5b", "#48bb78"];
const avatarLetters = ["A", "S", "R"];

export default function Testimonial() {
  return (
    <section id="testimonial" className="w-full max-w-3xl mx-auto px-4 mt-6">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          rotate: 1,
          background: "#f97316",
          border: "1.5px solid #111",
          boxShadow: "5px 5px 0px #111",
        }}
        className="px-7 py-8"
      >
        <p className="text-sm font-semibold text-black mb-4 italic">
          &ldquo;Reliable, fast, and production-ready&rdquo;
        </p>
        <p className="text-lg sm:text-xl font-medium text-black leading-relaxed mb-6">
          Atul&apos;s backend systems are rock-solid in production. The webhook
          engine he built handled over 2 million events with zero downtime. The
          code quality, architecture, and attention to edge cases were truly
          exceptional — exactly what a fintech startup needs.
        </p>
        <p className="text-sm font-semibold text-black mb-4">
          — Dev Team Lead, FinStack Labs
        </p>
        {/* Avatar group */}
        <div className="flex items-center gap-1">
          {avatarLetters.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ x: -8, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
              style={{
                background: avatarColors[i],
                marginLeft: i > 0 ? "-10px" : "0",
              }}
            >
              {letter}
            </motion.div>
          ))}
          <span className="ml-3 text-xs font-medium text-black opacity-70">
            +2 others endorse this
          </span>
        </div>
      </motion.div>
    </section>
  );
}
