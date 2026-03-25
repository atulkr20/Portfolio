"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden pointer-events-none">
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

/* ── Modal Project Data ── */
type ProjectId = "ledgerpay" | "hermes" | "neuralproxy" | "bob";

const PROJECT_DETAILS = {
  ledgerpay: {
    title: "LedgerPay",
    tag: "Fintech",
    tech: ["Node.js", "PostgreSQL", "Redis", "TypeScript"],
    desc: [
      "A highly robust double-entry accounting wallet system engineered to handle concurrent transactions entirely without race conditions.",
      "Implemented PostgreSQL row-level locking (FOR UPDATE) to guarantee atomic balance updates across large concurrent requests.",
      "Utilized Redis for idempotency keys to completely eliminate duplicate double-spending risks, strictly maintaining ACID compliance."
    ],
    github: "https://github.com/atulkr20",
    live: "https://ledgerpay.your-deployed-site.com",
    theme: "#f97316"
  },
  hermes: {
    title: "Hermes",
    tag: "Backend Infrastructure",
    tech: ["BullMQ", "Node.js", "HMAC-SHA256", "Redis", "TypeScript"],
    desc: [
      "A Stripe-style webhook delivery engine built to guarantee message delivery payloads across distributed systems without data-loss.",
      "Engineered on top of BullMQ for heavily distributed job processing. Features built-in exponential backoff, automatic retries for failed endpoints, and dead-letter queues.",
      "Secures all outgoing JSON payloads with HMAC-SHA256 cryptographic signatures to ensure authenticity on the receiver's end."
    ],
    github: "https://github.com/atulkr20/Hermes",
    live: null,
    theme: "#111"
  },
  neuralproxy: {
    title: "NeuralProxy",
    tag: "AI Infrastructure",
    tech: ["Node.js", "Redis", "OpenAI API", "TypeScript", "Docker"],
    desc: [
      "An intelligent LLM proxy gateway designed to seamlessly sit between internal systems and external AI providers (OpenAI, Anthropic).",
      "Implements a Redis-backed sliding-window rate limiter to strictly control organizational API costs and throttle abuse.",
      "Features a clever distributed caching layer using SHA-256 hashes of text prompts, instantly serving repeated AI queries for free without pinging external providers."
    ],
    github: "https://github.com/atulkr20",
    live: "https://neuralproxy.your-deployed-site.com",
    theme: "#111"
  },
  bob: {
    title: "Bob-the-Builder",
    tag: "AI / Automation",
    tech: ["Gemini API", "BullMQ", "Node.js", "TypeScript"],
    desc: [
      "An automated AI-to-API application scaffolding tool designed to rapidly accelerate initial backend boilerplate.",
      "You describe the HTTP routes you want in plain text, and it generates fully functional Node.js/Express API codebases along with tests.",
      "Uses the Gemini API to intelligently parse requirements, relying on BullMQ to handle the heavy background generation jobs without blocking the main event loops."
    ],
    github: "https://github.com/atulkr20/Bob-the-Builder",
    live: null,
    theme: "#e4cca6"
  }
};

export default function Works() {
  const [selected, setSelected] = useState<ProjectId | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selected]);

  const activeData = selected ? PROJECT_DETAILS[selected] : null;

  return (
    <section id="works" className="w-full max-w-4xl mx-auto px-4 mt-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-pixel text-center text-5xl sm:text-6xl mb-10 tracking-tight leading-tight select-none"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {/* Card 1 */}
        <motion.div
          onClick={() => setSelected("ledgerpay")}
          custom={0}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer flex flex-col justify-between block"
          style={{ background: "#f97316", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <div className="p-5 flex flex-col justify-between h-full pointer-events-none">
            <div>
              <span className="text-[10px] font-bold px-2 py-1 bg-black text-white border border-black">Fintech</span>
              <h3 className="font-pixel text-black text-sm mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>LedgerPay</h3>
              <p className="text-[11px] font-medium mt-2 text-black opacity-80 leading-relaxed">
                Double-entry wallet system with PostgreSQL row-level locking, Redis, idempotency keys
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {PROJECT_DETAILS.ledgerpay.tech.map(tag => (
                <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-black text-[#f97316] border border-black" style={{ fontFamily: "monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-7xl opacity-10 font-bold select-none pointer-events-none">₹</div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          onClick={() => setSelected("hermes")}
          custom={1}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "7px 7px 0px #111" }}
          className="relative overflow-hidden border-2 border-black cursor-pointer md:col-span-2 flex flex-col justify-between block"
          style={{ background: "#ffffff", boxShadow: "4px 4px 0px #111", minHeight: "200px" }}
        >
          <div className="p-5 relative z-10 pointer-events-none" style={{ paddingRight: "42%" }}>
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-black">Backend Infrastructure</span>
            <h3 className="font-pixel text-2xl mt-4 leading-snug text-black" style={{ fontFamily: "'Press Start 2P', monospace" }}>Hermes</h3>
            <p className="text-[11px] font-medium mt-2 text-gray-600 leading-relaxed">
              Stripe-style webhook delivery engine with BullMQ retry queues, exponential backoff, HMAC-SHA256 signing
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {PROJECT_DETAILS.hermes.tech.map(tag => (
                <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-black text-white border border-black" style={{ fontFamily: "monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
          <HermesVisual />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {/* Card 3 */}
        <motion.div
          onClick={() => setSelected("neuralproxy")}
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
          <div className="p-5 relative z-10 pointer-events-none">
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-[#f97316]">AI Infrastructure</span>
            <h3 className="font-pixel text-white text-xl mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>NeuralProxy</h3>
            <p className="text-[11px] font-medium mt-2 text-gray-400 leading-relaxed">
              LLM proxy with multi-provider routing, Redis sliding-window rate limiting, SHA-256 prompt caching
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {PROJECT_DETAILS.neuralproxy.tech.map(tag => (
                <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-[#f97316] text-black border border-[#f97316]" style={{ fontFamily: "monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          onClick={() => setSelected("bob")}
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
          <div className="p-5 relative z-10 pointer-events-none">
            <span className="text-[10px] font-bold px-2 py-1 bg-[#f97316] text-white border border-black">AI / Automation</span>
            <h3 className="font-pixel text-black text-sm mt-4 leading-snug" style={{ fontFamily: "'Press Start 2P', monospace" }}>Bob-the-Builder</h3>
            <p className="text-[11px] font-medium mt-2 text-gray-600 leading-relaxed">
              AI-to-API generator using Gemini API and BullMQ job processing
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {PROJECT_DETAILS.bob.tech.map(tag => (
                <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-black text-white border border-black" style={{ fontFamily: "monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <p className="text-gray-600 font-medium text-sm select-none">Want to see more on GitHub?</p>
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

      {/* ── Modal Overlay ── */}
      <AnimatePresence>
        {selected && activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#d6d9c1] border-2 border-black flex flex-col relative"
              style={{ boxShadow: "8px 8px 0px #111", maxHeight: "90vh" }}
            >
              {/* Modal Header */}
              <div 
                className="flex items-center justify-between px-5 py-4 border-b-2 border-black"
                style={{ background: activeData.theme }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-xl tracking-tight" style={{ fontFamily: "'Press Start 2P', monospace", color: activeData.theme === "#111" ? "#fff" : "#000" }}>
                    {activeData.title}
                  </span>
                </div>
                <button 
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white hover:bg-[#f97316] transition-colors"
                  style={{ boxShadow: "2px 2px 0px #111" }}
                >
                  <span className="font-bold pb-0.5">×</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto" style={{ background: "white" }}>
                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-black text-white border border-black mb-6 inline-block tracking-widest leading-none">
                  {activeData.tag}
                </span>

                <div className="space-y-4 mb-8">
                  {activeData.desc.map((p, i) => (
                    <p key={i} className="text-gray-800 text-sm md:text-base leading-relaxed tracking-wide font-medium">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#f97316] mb-3 border-b-2 border-gray-100 pb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeData.tech.map(tag => (
                      <span key={`modal-tag-${tag}`} className="text-[10px] font-bold px-2 py-1 bg-gray-100 text-black border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer / Actions */}
              <div className="p-5 border-t-2 border-black bg-gray-50 flex gap-4">
                {activeData.github && (
                  <a
                    href={activeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-bold text-xs uppercase tracking-widest py-3 border-2 border-black bg-black text-white hover:bg-[#f97316] hover:text-black transition-colors"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "9px" }}
                  >
                    View Code
                  </a>
                )}
                {activeData.live && (
                  <a
                    href={activeData.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-bold text-xs uppercase tracking-widest py-3 border-2 border-black bg-white text-black hover:bg-green-400 transition-colors"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "9px", boxShadow: "3px 3px 0px #111" }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
