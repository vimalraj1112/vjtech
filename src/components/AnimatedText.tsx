"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Product Builder",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute left-0 gradient-text font-bold"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.3 },
          }}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
