"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { scrollToSection, getWhatsAppUrl } from "@/lib/utils";

const techChips = [
  "React",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover bg-black"
        >
          <source src="/hero-robot.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays — left heavy for text readability, bottom fade (lightened to show video) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/55 to-[#050505]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        {/* Extra right-side vignette so robot peeks through subtly */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505]/30 lg:to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <motion.div
          className="space-y-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted">
              Available for Software Developer Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Vimal</span>.
            </h1>
            <div className="h-[1.2em]">
              <AnimatedText />
            </div>
          </div>

          {/* Description */}
          <p className="text-muted text-lg max-w-lg leading-relaxed">
            I design and develop modern web applications, APIs, real-time
            systems, business platforms, and scalable software experiences
            using modern technologies.
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2">
            {techChips.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.06] text-muted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 + i * 0.05, duration: 0.4 }}
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  color: "#fff",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 text-white bg-gradient-to-r from-blue-500 to-violet-500"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm cursor-pointer border border-white/[0.08] text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              Contact Me
            </MagneticButton>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm cursor-pointer border border-emerald-400/20 text-emerald-300 hover:bg-emerald-400/[0.06] hover:border-emerald-400/40 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/vimalraj1112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-emerald-400 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <span className="text-xs text-muted tracking-wider uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}