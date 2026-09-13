"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const commands = [
  { cmd: "whoami", output: "Software Developer" },
  { cmd: "location", output: "Bengaluru, India" },
  { cmd: "focus", output: "Building scalable real-world applications" },
  { cmd: "status", output: "Available for opportunities" },
  { cmd: "contact", output: "Let's build something great." },
];

export default function DeveloperTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= commands.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          title="Developer Terminal"
          subtitle="Quick snapshot in terminal format."
        />

        <motion.div
          ref={ref}
          className="rounded-2xl border border-white/[0.06] bg-[#0A0C10] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-muted font-mono">
              vimal@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6 font-mono text-sm space-y-4 min-h-[280px]">
            {commands.map((item, i) => (
              <div
                key={item.cmd}
                className={`transition-opacity duration-300 ${
                  i < visibleLines ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">vimal@portfolio</span>
                  <span className="text-muted">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-muted">$</span>
                  <span className="text-white">{item.cmd}</span>
                </div>
                <div className="ml-2 mt-1 text-emerald-400">
                  &gt; {item.output}
                </div>
              </div>
            ))}

            {visibleLines >= commands.length && (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-violet-400">vimal@portfolio</span>
                <span className="text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-muted">$</span>
                <span className="inline-block w-2 h-4 bg-white/80 animate-pulse" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
