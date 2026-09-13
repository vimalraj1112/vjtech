"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Understand",
    description:
      "Understand the problem, business requirements and users.",
    icon: Search,
  },
  {
    num: "02",
    title: "Design",
    description:
      "Plan architecture, database structure, APIs and user experience.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Build",
    description:
      "Develop clean frontend and backend functionality.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Improve",
    description:
      "Test, debug, optimize and continuously refine the product.",
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="How I Build"
          subtitle="A systematic approach to software development."
        />

        <motion.div
          className="grid md:grid-cols-4 gap-6 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-cyan-500/40" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeInUp}
              className="relative text-center"
            >
              {/* Icon circle */}
              <div className="relative mx-auto w-12 h-12 rounded-xl bg-card border border-white/[0.06] flex items-center justify-center mb-5 z-10">
                <step.icon className="w-5 h-5 text-violet-400" />
              </div>

              <span
                className="text-xs text-violet-400 font-mono tracking-wider"
              >
                {step.num}
              </span>
              <h3
                className="text-lg font-bold mt-1 mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
