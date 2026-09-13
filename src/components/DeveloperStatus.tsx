"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const statusItems = [
  {
    label: "STATUS",
    value: "Available for opportunities",
    dot: true,
  },
  {
    label: "ROLE",
    value: "Software Developer",
  },
  {
    label: "CURRENT FOCUS",
    value: "Building scalable web applications",
  },
  {
    label: "INTERESTED IN",
    value: "Backend Development · Full Stack Development · Software Engineering",
  },
  {
    label: "LOCATION",
    value: "Bengaluru, India",
  },
];

export default function DeveloperStatus() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Developer Status" />

        <motion.div
          className="glass rounded-2xl p-8 md:p-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h3
              className="text-xl font-bold gradient-text tracking-wider"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              VIMAL.DEV
            </h3>
          </motion.div>

          <div className="space-y-6">
            {statusItems.map((item) => (
              <motion.div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6"
                variants={fadeInUp}
              >
                <span
                  className="text-xs text-muted tracking-widest uppercase shrink-0 sm:w-32"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {item.label}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  {item.dot && (
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  )}
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
