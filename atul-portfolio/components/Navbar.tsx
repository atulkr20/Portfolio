"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full max-w-4xl mx-auto px-4 mt-6 mb-2">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black border-2 border-black flex items-center justify-between px-4 sm:px-6 py-4"
        style={{ boxShadow: "6px 6px 0px #f97316" }}
      >
        {/* Left Side: Branding */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 bg-[#f97316] animate-pulse" />
            <span 
              className="font-pixel text-[12px] sm:text-[14px] text-white tracking-widest uppercase group-hover:text-[#f97316] transition-colors" 
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              ATUL
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#skills" className="hover:text-[#f97316] transition-colors">Skills</a>
          <a href="#works" className="hover:text-[#f97316] transition-colors">Works</a>
          <a href="#github" className="hover:text-[#f97316] transition-colors">Activity</a>
        </div>

        {/* Right Side: GitHub, Resume & Ping Me CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/atulkr20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-[#f97316] hover:border-[#f97316] transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href="/Atul resume v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-resume-btn"
            aria-label="View Resume"
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-[#f97316] hover:border-[#f97316] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </a>
          <a 
            href="#contact-section"
            className="inline-flex items-center justify-center bg-[#f97316] text-black font-pixel text-[8px] sm:text-[9px] px-3 py-2.5 sm:px-5 sm:py-3 uppercase tracking-widest border border-[#f97316] hover:bg-white transition-colors"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            Ping Me
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
