"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";
import { fadeInUp, slideInLeft } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-16 md:pl-20 pb-16 last:pb-0"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-violet-500 bg-[#050505]"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* Content */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-violet-400 text-sm font-medium mt-1">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-muted font-mono">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
