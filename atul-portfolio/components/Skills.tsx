"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto px-4 mt-12 mb-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black border-4 border-black"
        style={{ boxShadow: "6px 6px 0px #f97316" }}
      >
        {/* Terminal Header */}
        <div className="bg-[#111] border-b-2 border-black px-4 py-3 flex items-center gap-2">
          {/* Fake Mac Buttons */}
          <div className="w-3 h-3 bg-[#ff5f56] rounded-full border border-black shadow-[1px_1px_0_#000]" />
          <div className="w-3 h-3 bg-[#ffbd2e] rounded-full border border-black shadow-[1px_1px_0_#000]" />
          <div className="w-3 h-3 bg-[#27c93f] rounded-full border border-black shadow-[1px_1px_0_#000]" />
          
          <span className="font-pixel text-[8px] sm:text-[10px] text-gray-400 ml-4 tracking-widest uppercase">
            atul@server:~
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-6 font-pixel text-[9px] sm:text-[11px] leading-loose sm:leading-loose text-[#f97316]">
          <p className="mb-4">
            <span className="text-white mr-2">atul@server:~$</span> 
            ./print_tech_stack.sh
          </p>
          
          <p className="text-green-500 mb-2">Loading core dependencies...</p>

          <ul className="list-none pl-4 mb-6 space-y-2 text-gray-300">
            <li><span className="text-[#f97316] mr-2">▶</span> Node.js / TypeScript / JavaScript</li>
            <li><span className="text-[#f97316] mr-2">▶</span> Express.js / REST APIs</li>
            <li><span className="text-[#f97316] mr-2">▶</span> PostgreSQL / MongoDB / Prisma</li>
            <li><span className="text-[#f97316] mr-2">▶</span> Redis / BullMQ</li>
            <li><span className="text-[#f97316] mr-2">▶</span> Docker / DigitalOcean</li>
          </ul>

          <p className="mb-5">
            <span className="text-white mr-2">atul@server:~$</span> 
            cat commands.txt
          </p>
          
          <div className="pl-4">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f97316] text-black font-bold border-2 border-[#f97316] px-4 py-2 hover:bg-black hover:text-[#f97316] transition-colors"
            >
              [ Download Resume PDF ]
            </a>
          </div>

          <p className="mt-6 flex items-center">
            <span className="text-white mr-2">atul@server:~$</span> 
            <span className="inline-block w-2.5 h-4 bg-[#f97316] animate-pulse"></span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
