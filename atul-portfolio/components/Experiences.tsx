"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "exp-ledgerpay",
    date: "2024",
    companyLetter: "L",
    company: "LedgerPay",
    role: "Fintech Wallet System",
    offset: false,
  },
  {
    id: "exp-hermes",
    date: "2024–2025",
    companyLetter: "H",
    company: "Hermes",
    role: "Webhook Infrastructure",
    offset: true,
  },
  {
    id: "exp-neuralproxy",
    date: "2025–present",
    companyLetter: "N",
    company: "NeuralProxy",
    role: "AI Gateway",
    offset: false,
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="w-full max-w-4xl mx-auto px-4 mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-pixel text-center text-4xl sm:text-5xl mb-16 tracking-tight leading-tight"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        Experiences
      </motion.h2>

      {/* Staggered cards */}
      <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            id={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: exp.offset ? 30 : 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative w-full sm:w-56 flex-shrink-0"
          >
            {/* Down arrow indicator */}
            <div className="flex justify-center mb-2">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1 L10 12 L19 1"
                  stroke="#111"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>

            {/* Card */}
            <div
              className="retro-card p-5 flex flex-col items-center text-center"
              style={{ boxShadow: "4px 4px 0px #111" }}
            >
              <p className="text-xs text-gray-400 font-medium mb-3">
                {exp.date}
              </p>
              {/* Orange icon */}
              <div
                className="w-12 h-12 flex items-center justify-center border-2 border-black mb-4 font-bold text-white text-lg"
                style={{
                  background: "#f97316",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                {exp.companyLetter}
              </div>
              <h3 className="font-semibold text-sm text-black mb-1 leading-tight">
                {exp.company}
              </h3>
              <p className="text-xs text-gray-500 font-medium">{exp.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
