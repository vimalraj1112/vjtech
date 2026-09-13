"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Layers, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const infoCards = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
  },
  {
    icon: Code2,
    label: "Role",
    value: "Software Developer",
  },
  {
    icon: Layers,
    label: "Focus",
    value: "Full Stack & Backend Development",
  },
  {
    icon: Rocket,
    label: "Current Focus",
    value: "Building real-world software products",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Building software beyond the tutorial."
        />

        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted text-lg leading-relaxed text-center">
            I&apos;m Vimal, a Software Developer based in Bengaluru. I enjoy building
            practical applications that combine clean user experiences with
            reliable backend systems. My interests include backend development,
            APIs, scalable architectures, real-time applications, databases,
            and modern frontend development.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {infoCards.map((card) => (
            <motion.div key={card.label} variants={fadeInUp}>
              <SpotlightCard className="p-6 h-full">
                <card.icon className="w-5 h-5 text-violet-400 mb-3" />
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className="text-sm font-medium">{card.value}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
