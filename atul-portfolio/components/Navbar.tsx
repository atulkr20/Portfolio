"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, FileText } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full max-w-3xl mx-auto px-4 mt-6">
      {/* Top: White Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="retro-card flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 mb-3"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-black overflow-hidden flex-shrink-0 bg-[#e4cca6]">
            <Image
              src="/atul-nobg.png"
              alt="Atul avatar"
              width={48}
              height={48}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-pixel text-[13px] sm:text-[16px] text-black tracking-tight" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Atul
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Backend Engineer
            </p>
          </div>
        </div>
        
        {/* Mini Let's Talk Button */}
        <a 
          href="#contact-section"
          className="inline-flex items-center justify-center bg-black text-white font-pixel text-[8px] sm:text-[10px] px-3 py-2 sm:px-4 sm:py-2 uppercase tracking-widest border-2 border-black hover:bg-[#f97316] hover:text-black transition-colors shadow-[2px_2px_0px_#f97316] hover:shadow-none translate-y-[-2px] hover:translate-y-0"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          Let&apos;s Talk
        </a>
      </motion.div>

      {/* Bottom: Black Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black flex items-center justify-between px-5 py-3 pixel-corners"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-green-500 animate-pulse border border-black shadow-[1px_1px_0_#fff]" />
          <span className="text-white text-[11px] sm:text-xs font-bold tracking-wide">
            Available for work
          </span>
        </div>
        
        {/* Social icons - Now circular & orange like the reference */}
        <div className="flex items-center gap-2">
          <a
            id="nav-github"
            href="https://github.com/atulkr20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-7 h-7 rounded-full bg-[#f97316] text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Github size={14} fill="currentColor" />
          </a>
          <a
            id="nav-linkedin"
            href="https://www.linkedin.com/in/atul-jha-303051229/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full bg-[#f97316] text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Linkedin size={14} fill="currentColor" />
          </a>
          <a
            id="nav-twitter"
            href="https://x.com/AtulkrJha21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="w-7 h-7 rounded-full bg-[#f97316] text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Twitter size={14} fill="currentColor" />
          </a>
          <a
            id="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="w-7 h-7 rounded-full bg-[#f97316] text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FileText size={14} fill="currentColor" />
          </a>
        </div>
      </motion.div>
    </header>
  );
}
