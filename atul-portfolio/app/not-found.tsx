"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const glitchChars = "!@#$%^&*<>?/|\\[]{}~`";

function GlitchText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterations) return text[i];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );
      iterations += 0.5;
      if (iterations >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}

const terminalLines = [
  { text: "> navigating to requested page...", delay: 0.2, color: "text-gray-400" },
  { text: "> ERROR: address 0x404 not found in memory", delay: 0.7, color: "text-red-400" },
  { text: "> kernel panic: page table corruption", delay: 1.2, color: "text-red-400" },
  { text: "> suggestion: return to base address /", delay: 1.8, color: "text-green-400" },
];

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "#111111" }}
    >
      {/* Big 404 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1
          className="text-[80px] sm:text-[120px] font-black leading-none"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: "#f97316",
            textShadow: "6px 6px 0px #7c3210",
          }}
        >
          404
        </h1>
        <p
          className="text-white text-sm sm:text-base mt-4 tracking-widest uppercase"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          <GlitchText text="PAGE NOT FOUND" />
        </p>
      </motion.div>

      {/* Terminal block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-xl border-2 border-gray-700 mb-10"
        style={{ background: "#0a0a0a" }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#111]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black" />
          <span
            className="text-gray-500 text-[9px] ml-4 tracking-widest uppercase"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            atul@server: ~
          </span>
        </div>

        {/* Terminal lines */}
        <div
          className="p-5 font-mono text-[11px] sm:text-xs leading-loose"
          style={{ fontFamily: "monospace" }}
        >
          {terminalLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.3 }}
              className={line.color}
            >
              {line.text}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.3 }}
            className="mt-2 flex items-center gap-1 text-gray-400"
          >
            <span>atul@server:~$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-2 h-4 bg-[#f97316]"
            />
          </motion.p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Link href="/">
          <motion.span
            whileHover={{ y: -3, boxShadow: "5px 5px 0px #7c3210" }}
            className="inline-block bg-[#f97316] text-black font-bold text-[10px] px-8 py-4 border-2 border-[#f97316] cursor-pointer transition-all"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              boxShadow: "3px 3px 0px #7c3210",
            }}
          >
            ← Go Home
          </motion.span>
        </Link>
        <Link href="/#works">
          <motion.span
            whileHover={{ y: -3, boxShadow: "5px 5px 0px #333" }}
            className="inline-block bg-transparent text-gray-400 font-bold text-[10px] px-8 py-4 border-2 border-gray-700 cursor-pointer hover:text-white hover:border-gray-500 transition-all"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              boxShadow: "3px 3px 0px #333",
            }}
          >
            View Works
          </motion.span>
        </Link>
      </motion.div>
    </main>
  );
}
