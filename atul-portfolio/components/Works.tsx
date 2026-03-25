"use client";

import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* ── SVG visuals ── */
const HermesVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden">
    <svg viewBox="0 0 200 300" width="100%" height="100%" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="300" fill="#111" />
      {[0,1,2,3,4,5,6,7].map(i => <line key={`h${i}`} x1="0" y1={20+i*35} x2="200" y2={20+i*35} stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>)}
      {[0,1,2,3,4].map(i => <line key={`v${i}`} x1={20+i*40} y1="0" x2={20+i*40} y2="300" stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>)}
      {[[20,20],[60,55],[100,20],[140,90],[20,125],[60,160],[100,195],[140,230],[20,265]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="5" fill="#f97316" opacity="0.8"/>)}
      <path d="M10 150 L120 150 L120 100 L190 150 L120 200 L120 150" fill="#f97316" opacity="0.6"/>
    </svg>
  </div>
);

const NeuralProxyVisual = () => (
  <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none">
    <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {[[30,40],[30,100],[30,160],[110,20],[110,80],[110,140],[110,180],[200,60],[200,120],[270,90]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="8" fill="#f97316" opacity="0.9"/>
      ))}
      {[[30,40,110,20],[30,40,110,80],[30,100,110,80],[30,100,110,140],[30,160,110,140],[30,160,110,180],
        [110,20,200,60],[110,80,200,60],[110,80,200,120],[110,140,200,120],[110,180,200,120],
        [200,60,270,90],[200,120,270,90]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" opacity="0.35"/>
      ))}
    </svg>
  </div>
);

const BobVisual = () => (
  <div className="absolute bottom-0 right-0 left-0 h-20 overflow-hidden opacity-15 pointer-events-none">
    <svg viewBox="0 0 300 80" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="0,60 40,40 80,55 120,25 160,38 200,12 260,30 300,20" fill="none" stroke="#111" strokeWidth="3"/>
      {[15,55,95,135,175,215,265].map((x,i) => (
        <rect key={i} x={x-7} y={80-[22,38,30,52,34,60,42][i]} width="14" height={[22,38,30,52,34,60,42][i]} fill="#111" opacity="0.4"/>
      ))}
    </svg>
  </div>
);

const FaultForgeVisual = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <svg viewBox="0 0 160 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="60" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 4"/>
      <circle cx="80" cy="80" r="40" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"/>
      <circle cx="80" cy="80" r="20" fill="#f97316" opacity="0.3"/>
      {[0,60,120,180,240,300].map((deg,i) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={i} x1={80+20*Math.cos(rad)} y1={80+20*Math.sin(rad)} x2={80+60*Math.cos(rad)} y2={80+60*Math.sin(rad)} stroke="#f97316" strokeWidth="1.2" opacity="0.5"/>;
      })}
    </svg>
  </div>
);

export default function Works() {
  return (
    <section id="works" className="w-full max-w-4xl mx-auto px-4 mt-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-pixel text-center text-5xl sm:text-6xl mb-10 tracking-tight leading-tight"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        Works
      </motion.h2>

      {/* Row 1: Card 1 (small orange) + Card 2 (wide white) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {/* Card 1 — LedgerPay (orange, small) */}
        <motion.a
          href="https://ledgerpay.your-deployed-site.com"
          target="_blank"
          rel="noopener noreferrer"
          id="project-ledgerpay"
          custom={0}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer flex flex-col justify-between block"
          style={{ background: "#f97316", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <div className="p-5">
            <span className="text-[10px] font-bold px-2 py-1 bg-black text-white border border-black">
              Fintech
            </span>
            <h3 className="font-pixel text-black text-sm mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              LedgerPay
            </h3>
            <p className="text-[11px] font-medium mt-2 text-black opacity-80 leading-relaxed">
              Double-entry wallet system with PostgreSQL row-level locking, Redis, idempotency keys
            </p>
          </div>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-7xl opacity-10 font-bold select-none">₹</div>
        </motion.a>

        {/* Card 2 — Hermes (wide white, spans 2 cols) */}
        <motion.a
          href="https://github.com/atulkr20/Hermes"
          target="_blank"
          rel="noopener noreferrer"
          id="project-hermes"
          custom={1}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer md:col-span-2 flex flex-col justify-between block"
          style={{ background: "#ffffff", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <div className="p-5 relative z-10" style={{ paddingRight: "42%" }}>
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-black">
              Backend Infrastructure
            </span>
            <h3 className="font-pixel text-2xl mt-4 leading-snug text-black" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Hermes
            </h3>
            <p className="text-[11px] font-medium mt-2 text-gray-600 leading-relaxed">
              Stripe-style webhook delivery engine with BullMQ retry queues, exponential backoff, HMAC-SHA256 signing
            </p>
          </div>
          <HermesVisual />
        </motion.a>
      </div>

      {/* Row 2: Card 3 (wide black) + Card 4 (white medium) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {/* Card 3 — NeuralProxy (wide black, spans 2 cols) */}
        <motion.a
          href="https://neuralproxy.your-deployed-site.com"
          target="_blank"
          rel="noopener noreferrer"
          id="project-neuralproxy"
          custom={2}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer md:col-span-2 flex flex-col justify-between block"
          style={{ background: "#111111", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <NeuralProxyVisual />
          <div className="p-5 relative z-10">
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-[#f97316]">
              AI Infrastructure
            </span>
            <h3 className="font-pixel text-white text-xl mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              NeuralProxy
            </h3>
            <p className="text-[11px] font-medium mt-2 text-gray-400 leading-relaxed">
              LLM proxy with multi-provider routing, Redis sliding-window rate limiting, SHA-256 prompt caching
            </p>
          </div>
        </motion.a>

        {/* Card 4 — Bob-the-Builder (white medium) */}
        <motion.a
          href="https://github.com/atulkr20/Bob-the-Builder"
          target="_blank"
          rel="noopener noreferrer"
          id="project-bob"
          custom={3}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer flex flex-col justify-between block"
          style={{ background: "#ffffff", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <BobVisual />
          <div className="p-5 relative z-10">
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-black">
              AI / Automation
            </span>
            <h3 className="font-pixel text-black text-sm mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Bob-the-Builder
            </h3>
            <p className="text-[11px] font-medium mt-2 text-gray-600 leading-relaxed">
              AI-to-API generator using Gemini API and BullMQ job processing
            </p>
          </div>
        </motion.a>
      </div>

      {/* Row 3: Card 5 — FaultForge (black small, left-aligned) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <motion.a
          href="https://github.com/atulkr20/FaultForge"
          target="_blank"
          rel="noopener noreferrer"
          id="project-faultforge"
          custom={4}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer flex flex-col justify-between block"
          style={{ background: "#111111", boxShadow: "4px 4px 0px #111", minHeight: "180px" }}
        >
          <FaultForgeVisual />
          <div className="p-5 relative z-10">
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-[#f97316]">
              DevTools
            </span>
            <h3 className="font-pixel text-white text-sm mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              FaultForge
            </h3>
            <p className="text-[11px] font-medium mt-2 text-gray-400 leading-relaxed">
              Chaos engineering tool with distributed agents for testing system resilience
            </p>
          </div>
        </motion.a>

        {/* CTA sits to the right of FaultForge on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 flex flex-col items-center justify-center gap-4 py-6"
        >
          <p className="text-gray-600 font-medium text-sm">
            Want to see more on GitHub?
          </p>
          <motion.a
            id="view-all-works-btn"
            href="https://github.com/atulkr20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "4px 4px 0px #111" }}
            className="bg-black text-white text-xs font-semibold px-6 py-3 border border-black hover:bg-[#222] transition-all"
            style={{ boxShadow: "3px 3px 0px #555" }}
          >
            View all my work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
