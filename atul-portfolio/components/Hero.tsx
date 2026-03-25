"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full max-w-3xl mx-auto px-4 flex flex-col gap-3 mt-6"
    >
      {/* Hero portrait card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="retro-card overflow-hidden"
        style={{ boxShadow: "6px 6px 0px #111111" }}
      >
        {/* Halftone portrait — real photo */}
        <div
          className="halftone-photo w-full"
          style={{ minHeight: "500px", background: "#e4cca6" }}
        >
          <Image
            src="/atul-nobg.png"
            alt="Atul — Backend Engineer portrait"
            width={900}
            height={900}
            priority
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
        </div>

        {/* Caption */}
        <div className="px-5 py-3 border-t border-black bg-white">
          <p className="text-sm italic text-gray-500 text-center">
            &ldquo;I build systems that don&apos;t break.&rdquo;
          </p>
        </div>
      </motion.div>

      {/* Bio card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="retro-card px-6 py-5"
      >
        <p className="text-base text-gray-800 leading-relaxed mb-2 font-medium">
          I&apos;m Atul — a backend engineer who builds the stuff you don&apos;t see. APIs, queues, distributed systems, the infrastructure layer that keeps everything from falling apart.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Explore my{" "}
          <Link
            href="#works"
            id="hero-works-link"
            className="text-[#f97316] font-semibold underline underline-offset-2 hover:text-orange-700 transition-colors"
          >
            works
          </Link>{" "}
          to see what I&apos;ve built.
        </p>
      </motion.div>
    </section>
  );
}
