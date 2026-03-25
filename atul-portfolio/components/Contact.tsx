"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact-section" className="w-full max-w-3xl mx-auto px-4 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white pixel-corners text-center flex flex-col items-center justify-center p-8 sm:p-12"
      >
        <h2 
          className="font-pixel text-3xl sm:text-4xl mb-4 tracking-tight uppercase text-[#f97316]"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          Let&apos;s talk
        </h2>
        <p className="text-sm sm:text-base font-bold text-gray-100 max-w-lg mb-8 leading-relaxed">
          Got a project in mind, need a resilient backend system, or just want to chat about tech? My inbox is always open.
        </p>
        <motion.a
          href="mailto:atuljha21542@gmail.com"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 0 }}
          className="inline-flex items-center justify-center bg-[#f97316] text-black font-pixel text-[10px] sm:text-[12px] px-8 py-4 uppercase tracking-widest border-2 border-[#f97316] hover:bg-black hover:text-[#f97316] transition-colors"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "4px 4px 0px rgba(249,115,22,0.5)",
          }}
        >
          Push to Inbox
        </motion.a>
      </motion.div>
    </section>
  );
}
